/**
 * app.js  —  Outfit Reference Viewer
 *
 * UX behaviour:
 *   Hover section card      → highlights its ref image cards (red border)
 *   Hover image card        → highlights sections that reference it (red border)
 *   Hover ref-tag in text   → highlights the matching image card (gold border, distinct from red)
 *                             + the ref-tag itself lights up blue so the artist knows it's active
 *
 *   Click section card      → section-filter mode: only that section's images enlarged,
 *                             "Used in" tags below each enlarged image
 *   Click image (1st)       → preview mode: image large, left dims unrelated sections,
 *                             auto-scrolls left panel to first related section,
 *                             "Used in" clickable tags below image,
 *                             Fullscreen + New tab buttons
 *   Click image (2nd)       → fullscreen lightbox modal
 *   Click "Used in" tag     → enters section-filter for that section
 *   ESC                     → closes modal, otherwise full reset
 *   Click "Show All"        → full reset
 *   Click modal backdrop    → closes modal
 *
 *   Default view: each image card shows #N badge + "Used in X sections" count
 */

// ══════════════════════════════════════════════════════════════
//  BASE CLASS
// ══════════════════════════════════════════════════════════════

class OutfitComponent {
  constructor(id, label) {
    if (new.target === OutfitComponent) throw new Error("OutfitComponent is abstract.");
    this.id      = id;
    this.label   = label;
    this.element = null;
  }
  render()      { throw new Error(`${this.constructor.name} must implement render()`); }
  highlight()   { this.element?.classList.add("highlighted"); }
  unhighlight() { this.element?.classList.remove("highlighted"); }
  hide()        { this.element?.classList.add("hidden"); }
  show()        { this.element?.classList.remove("hidden"); }
}


// ══════════════════════════════════════════════════════════════
//  IMAGE CARD
// ══════════════════════════════════════════════════════════════

class ImageCard extends OutfitComponent {
  constructor(id, label, src, num, sectionIds) {
    super(id, label);
    this.src        = src;
    this.num        = num;           // numeric value, e.g. 4
    this.sectionIds = sectionIds;
    this._usedInEl  = null;
  }

  render() {
    const card        = document.createElement("div");
    card.className    = "image-card";
    card.dataset.id   = this.id;
    card.dataset.num  = this.num;
    card.style.cursor = "zoom-in";

    // #N badge — top left corner
    const badge       = document.createElement("div");
    badge.className   = "num-badge";
    badge.textContent = `#${this.num}`;

    const img         = document.createElement("img");
    img.src           = this.src;
    img.alt           = this.label;

    const caption     = document.createElement("div");
    caption.className = "image-label";
    caption.textContent = this.label;

    const count       = document.createElement("div");
    count.className   = "section-badge";
    const n           = this.sectionIds.length;
    count.textContent = n === 0 ? "" : `Used in ${n} section${n !== 1 ? "s" : ""}`;
    count.style.display = n === 0 ? "none" : "";

    const usedIn      = document.createElement("div");
    usedIn.className  = "used-in-footer";
    usedIn.style.display = "none";
    this._usedInEl    = usedIn;

    card.appendChild(badge);
    card.appendChild(img);
    card.appendChild(caption);
    card.appendChild(count);
    card.appendChild(usedIn);

    this.element = card;
    return card;
  }

  setVisible(v)  { if (this.element) this.element.style.display = v ? "" : "none"; }
  setEnlarged(v) { this.element?.classList.toggle("enlarged", v); }
  setPreview(v)  { this.element?.classList.toggle("preview", v); }
  setDimmed(v)   { this.element?.classList.toggle("dimmed", v); }

  /** Gold highlight — triggered by hovering a matching ref-tag in the text */
  setRefHighlighted(v) { this.element?.classList.toggle("ref-highlighted", v); }

  showUsedIn(sections, onSectionClick) {
    if (!this._usedInEl) return;
    this._usedInEl.innerHTML = "";
    if (sections.length === 0) { this._usedInEl.style.display = "none"; return; }

    const lbl       = document.createElement("span");
    lbl.className   = "used-in-label";
    lbl.textContent = "Used in:";
    this._usedInEl.appendChild(lbl);

    sections.forEach(sec => {
      const tag       = document.createElement("button");
      tag.className   = "used-in-tag";
      tag.textContent = sec.title;
      tag.title       = `Filter by: ${sec.title}`;
      tag.addEventListener("click", e => { e.stopPropagation(); onSectionClick(sec.id); });
      this._usedInEl.appendChild(tag);
    });

    this._usedInEl.style.display = "flex";
  }

  hideUsedIn() {
    if (!this._usedInEl) return;
    this._usedInEl.style.display = "none";
    this._usedInEl.innerHTML     = "";
  }
}


// ══════════════════════════════════════════════════════════════
//  OUTFIT SECTION
// ══════════════════════════════════════════════════════════════

class OutfitSection extends OutfitComponent {
  constructor(id, title, content, imageIds, style = "", fullWidth = false) {
    super(id, title);
    this.content   = content;
    this.imageIds  = imageIds;
    this.style     = style;
    this.fullWidth = fullWidth;
  }

  render() {
    const div          = document.createElement("div");
    div.className      = "section" + (this.fullWidth ? " full-width" : "");
    if (this.style)    div.setAttribute("style", this.style);
    div.dataset.images = this.imageIds.join(",");

    const h2           = document.createElement("h2");
    h2.textContent     = this.label;

    const body         = document.createElement("div");
    body.innerHTML     = this.content;

    div.appendChild(h2);
    div.appendChild(body);
    this.element = div;
    return div;
  }

  setDimmed(v) { this.element?.classList.toggle("dimmed", v); }

  scrollIntoView(container) {
    if (!this.element || !container) return;
    const containerTop = container.getBoundingClientRect().top;
    const elTop        = this.element.getBoundingClientRect().top;
    const offset       = elTop - containerTop + container.scrollTop - 16;
    container.scrollTo({ top: offset, behavior: "smooth" });
  }
}


// ══════════════════════════════════════════════════════════════
//  OUTFIT VIEWER
// ══════════════════════════════════════════════════════════════

class OutfitViewer {
  #sections       = [];
  #images         = [];
  #state          = { mode: "default", activeSection: null, previewCard: null };
  #dom            = {};
  #previewOverlay = null;

  constructor(viewModel) { this.#buildFromViewModel(viewModel); }

  init(domRefs) {
    this.#dom = domRefs;
    this.#dom.titleEl.textContent    = domRefs.viewModel.title;
    this.#dom.subtitleEl.textContent = domRefs.viewModel.subtitle;

    this.#sections.forEach(sec => this.#dom.sectionsContainer.appendChild(sec.render()));
    this.#images.forEach(img   => this.#dom.imagesGrid.appendChild(img.render()));

    this.#attachSectionEvents();
    this.#attachImageEvents();
    this.#attachRefTagEvents();     // ref-tag hover → gold highlight on matching image
    this.#attachCloseButton();
    this.#attachModal();
    this.#attachKeyboard();
  }


  // ── Build from ViewModel ──────────────────────────────────

  #buildFromViewModel(vm) {
    const imgSecMap = {};
    vm.images.forEach(img => { imgSecMap[img.id] = []; });
    vm.sections.forEach(sec => {
      sec.images.forEach(id => { if (imgSecMap[id] !== undefined) imgSecMap[id].push(sec.id); });
    });

    this.#images = vm.images.map(img =>
      new ImageCard(img.id, img.label, img.src, img.num ?? "?", imgSecMap[img.id] ?? []));

    this.#sections = vm.sections.map(sec =>
      new OutfitSection(sec.id, sec.title, sec.content,
        sec.images ?? [], sec.style ?? "", sec.fullWidth ?? false));
  }


  // ── Ref-tag hover ─────────────────────────────────────────

  /**
   * After sections are rendered, find every .ref-tag in the left panel.
   * Parse its leading "#N" exactly (so #1 never matches #10, #11 etc).
   * On mouseenter: gold-highlight the matching image card + blue-highlight the tag itself.
   * On mouseleave: clear both.
   */
  #attachRefTagEvents() {
    // Run after a tick so all section HTML is in the DOM
    setTimeout(() => {
      this.#dom.sectionsContainer.querySelectorAll(".ref-tag").forEach(tagEl => {
        const match = /^#(\d+)/.exec(tagEl.textContent.trim());
        if (!match) return;

        const num  = parseInt(match[1], 10);
        const card = this.#images.find(img => img.num === num);
        if (!card) return;

        tagEl.style.cursor = "pointer";

        tagEl.addEventListener("mouseenter", () => {
          card.setRefHighlighted(true);
          tagEl.classList.add("ref-tag-self-lit");
          // Scroll the image into view in the right panel gently
          card.element?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });

        tagEl.addEventListener("mouseleave", () => {
          card.setRefHighlighted(false);
          tagEl.classList.remove("ref-tag-self-lit");
        });
      });
    }, 0);
  }


  // ── Section events ────────────────────────────────────────

  #attachSectionEvents() {
    this.#sections.forEach(sec => {

      sec.element.addEventListener("mouseenter", () => {
        if (this.#state.mode !== "default") return;
        this.#images.forEach(img => { if (sec.imageIds.includes(img.id)) img.highlight(); });
        sec.highlight();
      });

      sec.element.addEventListener("mouseleave", () => {
        if (this.#state.mode !== "default") return;
        this.#images.forEach(img => img.unhighlight());
        sec.unhighlight();
      });

      sec.element.addEventListener("click", () => {
        if (sec.imageIds.length === 0) return;
        this.#enterSectionMode(sec);
      });
    });
  }


  // ── Image card events ─────────────────────────────────────

  #attachImageEvents() {
    this.#images.forEach(card => {

      card.element.addEventListener("mouseenter", () => {
        if (this.#state.mode !== "default") return;
        this.#sections.forEach(sec => { if (card.sectionIds.includes(sec.id)) sec.highlight(); });
        card.highlight();
      });

      card.element.addEventListener("mouseleave", () => {
        if (this.#state.mode !== "default") return;
        this.#sections.forEach(sec => sec.unhighlight());
        card.unhighlight();
      });

      card.element.addEventListener("click", () => {
        if (this.#state.mode === "preview" && this.#state.previewCard === card) {
          this.#openModal(card.src);
          return;
        }
        this.#exitCurrentMode();
        this.#enterPreview(card);
      });
    });
  }


  // ── Section-filter mode ───────────────────────────────────

  #enterSectionMode(sec) {
    this.#exitCurrentMode();
    this.#state.mode          = "section";
    this.#state.activeSection = sec;

    sec.highlight();
    this.#dom.closeBtn.classList.add("visible");

    this.#images.forEach(img => {
      const inSec = sec.imageIds.includes(img.id);
      img.setVisible(inSec);
      img.setEnlarged(inSec);
      img.unhighlight();
      if (inSec) {
        img.showUsedIn(this.#getSectionsForImage(img),
          id => this.#enterSectionMode(this.#sectionById(id)));
      } else {
        img.hideUsedIn();
      }
    });

    const grid = this.#dom.imagesGrid;
    grid.classList.remove("filtered", "filtered-two", "filtered-one", "filtered-preview");
    const n = sec.imageIds.length;
    if      (n === 1) grid.classList.add("filtered-one");
    else if (n === 2) grid.classList.add("filtered-two");
    else              grid.classList.add("filtered");
  }


  // ── Preview mode ──────────────────────────────────────────

  #enterPreview(card) {
    this.#state.mode        = "preview";
    this.#state.previewCard = card;
    this.#dom.closeBtn.classList.add("visible");

    this.#images.forEach(img => {
      img.setVisible(img.id === card.id);
      img.setEnlarged(false);
      img.unhighlight();
      img.hideUsedIn();
    });

    card.setPreview(true);
    card.setVisible(true);

    const relatedSecs = this.#getSectionsForImage(card);
    card.showUsedIn(relatedSecs, id => this.#enterSectionMode(this.#sectionById(id)));

    const grid = this.#dom.imagesGrid;
    grid.classList.remove("filtered", "filtered-two", "filtered-one");
    grid.classList.add("filtered-preview");

    this.#addPreviewOverlay(card);

    // Left panel: dim unrelated, highlight related
    this.#sections.forEach(sec => {
      const related = card.sectionIds.includes(sec.id);
      sec.setDimmed(!related);
      if (related) sec.highlight(); else sec.unhighlight();
    });

    // Auto-scroll left panel to first related section
    if (card.sectionIds.length > 0) {
      const first = this.#sections.find(sec => card.sectionIds.includes(sec.id));
      first?.scrollIntoView(this.#dom.specsSide);
    }
  }

  #addPreviewOverlay(card) {
    this.#removePreviewOverlay();

    const overlay     = document.createElement("div");
    overlay.className = "preview-overlay";

    const fsBtn       = document.createElement("button");
    fsBtn.className   = "preview-btn";
    fsBtn.textContent = "⛶  Fullscreen";
    fsBtn.addEventListener("click", e => { e.stopPropagation(); this.#openModal(card.src); });

    const tabBtn      = document.createElement("button");
    tabBtn.className  = "preview-btn";
    tabBtn.textContent = "↗  New tab";
    tabBtn.addEventListener("click", e => { e.stopPropagation(); window.open(card.src, "_blank"); });

    overlay.appendChild(fsBtn);
    overlay.appendChild(tabBtn);
    card.element.appendChild(overlay);
    this.#previewOverlay = overlay;
  }

  #removePreviewOverlay() {
    if (this.#previewOverlay?.parentNode)
      this.#previewOverlay.parentNode.removeChild(this.#previewOverlay);
    this.#previewOverlay = null;
  }


  // ── Exit / Reset ──────────────────────────────────────────

  #exitCurrentMode() {
    if (this.#state.mode === "preview") {
      this.#state.previewCard?.setPreview(false);
      this.#removePreviewOverlay();
      this.#state.previewCard = null;
    }
    if (this.#state.activeSection) {
      this.#state.activeSection.unhighlight();
      this.#state.activeSection = null;
    }
    this.#state.mode = "default";
  }

  #fullReset() {
    this.#exitCurrentMode();
    this.#dom.closeBtn.classList.remove("visible");

    const grid = this.#dom.imagesGrid;
    grid.classList.remove("filtered", "filtered-two", "filtered-one", "filtered-preview");

    this.#images.forEach(img => {
      img.setVisible(true);
      img.setEnlarged(false);
      img.setPreview(false);
      img.setDimmed(false);
      img.unhighlight();
      img.setRefHighlighted(false);
      img.hideUsedIn();
    });

    this.#sections.forEach(sec => {
      sec.setDimmed(false);
      sec.unhighlight();
      sec.show();
    });

    this.#removePreviewOverlay();
  }


  // ── Controls ──────────────────────────────────────────────

  #attachCloseButton() {
    this.#dom.closeBtn.addEventListener("click", () => this.#fullReset());
  }

  #attachKeyboard() {
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        if (this.#dom.modal.classList.contains("active")) {
          this.#dom.modal.classList.remove("active");
        } else {
          this.#fullReset();
        }
      }
    });
  }

  #attachModal() {
    const { modal, modalClose } = this.#dom;
    modalClose.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("active"); });
  }

  #openModal(src) {
    this.#dom.modalImg.src = src;
    this.#dom.modal.classList.add("active");
  }


  // ── Helpers ───────────────────────────────────────────────

  #getSectionsForImage(card) {
    return this.#sections
      .filter(sec => card.sectionIds.includes(sec.id))
      .map(sec => ({ id: sec.id, title: sec.label }));
  }

  #sectionById(id) { return this.#sections.find(sec => sec.id === id); }
}
