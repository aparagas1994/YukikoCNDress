/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║              VIEWMODEL  —  EDIT THIS FILE                ║
 * ║  All images live in the  img/  subfolder.                ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * ── RENAME REQUIRED ──────────────────────────────────────────
 *  1778434665854_xiao-guang-wakes-you-up-by-匕首-v0-wwto0uoi7qbg1.png
 *  → rename to:  zzz_chest_detail.png
 *
 * ── IMAGE NUMBERS ─────────────────────────────────────────────
 *  Each image has a num field. That number appears as a badge
 *  on the card in the right panel. Refs in the text below use
 *  #N format so the artist can immediately find the right image.
 *
 *   #1  ZZZ Silhouette       #8  AI Long Hem
 *   #2  ZZZ Chest            #9  Ornate Leggings
 *   #3  Column Back          #10 Ornate Sleeves
 *   #4  Dragon Qipao         #11 Fabric Pattern
 *   #5  Angular Cutout       #12 Back Silhouette
 *   #6  AI Red               #13 Cross-Strap Back
 *   #7  AI Purple            #14 Open Back
 *                            #15 Honoka — Back Flaps + No Leggings
 */

const ViewModel = {

  title:    "Chinese Qipao — Artist Reference Brief",
  subtitle: "Hover section → highlights images · Hover image → highlights sections · Click image → preview + info · Click again → fullscreen · ESC → reset",

  images: [

    // ── ZZZ refs ──
    { num: 1,  id: "zzz_silhouette",  src: "img/ye-shunguang-tamano-v0-mjzsrcjrzzgg1.jpeg",  label: "ZZZ — Primary Silhouette + Keyhole Ref" },
    { num: 2,  id: "zzz_chest",       src: "img/zzz_chest_detail.png",                        label: "ZZZ — Chest Panel Framing" },

    // ── Silhouette ──
    { num: 3,  id: "column_back",     src: "img/115767518_p0_master1200.jpg",                 label: "Column Silhouette — Back View" },
    { num: 4,  id: "black_archive",   src: "img/G8XYF13a4AIsilI.jpg",                         label: "Dragon Qipao — Shorter Hem Option" },

    // ── Keyhole ──
    { num: 5,  id: "angular_cutout",  src: "img/113339925_p0_master1200.jpg",                 label: "Angular Cutout — Hard Edge" },

    // ── AI Gen Refs ──
    { num: 6,  id: "ai_gen_red",      src: "img/ai_gen_red.png",                              label: "AI Red — Diamond Keyhole + Sleeve Hole" },
    { num: 7,  id: "ai_gen_purple",   src: "img/ai_gen_purple.png",                           label: "AI Purple — Side Cord Straps + Sleeve Hole" },
    { num: 8,  id: "ai_gen_long",     src: "img/ai_gen_long.png",                             label: "AI Long Hem — Ornate Hem Design" },

    // ── Leggings ──
    { num: 9,  id: "silver_tassels",  src: "img/112357949_p0_master1200.jpg",                 label: "Ornate Leggings + Tassels" },

    // ── Sleeves ──
    { num: 10, id: "ornate_sleeves",  src: "img/GHEg9yFaAAAQIFR.jpg",                         label: "Ornate Sleeves — Dragon Motif + Vibe Ref" },

    // ── Embroidery ──
    { num: 11, id: "snowflake_close", src: "img/108954345_p7_master1200.jpg",                 label: "Fabric Pattern — Design Idea Only" },

    // ── Back Design ──
    { num: 12, id: "back_column",     src: "img/115848694_p0_master1200.jpg",                 label: "Back Silhouette — Full Distance" },
    { num: 13, id: "crossstrap_back", src: "img/G8XW8wUbQAAAZjy.jpg",                         label: "Cross-Strap Open Back" },
    { num: 14, id: "open_back",       src: "img/GEF9icLaEAAjz_f.jpg",                         label: "Full Open Back" },

    // ── Back flap + no-leggings option ──
    { num: 15, id: "honoka",          src: "img/honoka.jpg",                                   label: "Honoka — Back Flaps + No Leggings Option" },

  ],

  sections: [

    // ══════════════════════════════════════════════════════
    //  QUICK SUMMARY  (full width — read this first)
    // ══════════════════════════════════════════════════════
    {
      id:        "quicksummary",
      title:     "⚡ Quick Summary — Everything at a Glance",
      images:    ["zzz_silhouette", "ai_gen_red", "ai_gen_purple", "ornate_sleeves", "honoka"],
      fullWidth: true,
      style:     "background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border: 3px solid #0f3460; color: white;",
      content:   `
        <details style="cursor:pointer;">
          <summary style="
            color: #a0b4d0;
            font-size: 0.93em;
            padding: 4px 0 12px;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 8px;
            user-select: none;
          ">
            <span style="
              background: rgba(255,255,255,0.12);
              border-radius: 20px;
              padding: 3px 14px;
              font-size: 0.88em;
              font-weight: 600;
              letter-spacing: 0.03em;
            ">▶ Click to expand full summary</span>
            <span style="font-size:0.82em; opacity:0.6;">Full details in numbered sections below</span>
          </summary>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:4px;">

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🧥 THE DRESS</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Tight pencil column — ankle-length preferred, shorter fine</li>
                <li>Fabric clings head to toe, zero volume, zero flare</li>
                <li>Satin or silk finish, embroidered accents (cloud/dragon)</li>
                <li>All fabric edges have decorative piping trim</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">💎 CHEST KEYHOLE</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Diamond or pointed-arch shaped opening, center chest</li>
                <li>Exposes mid-chest and top of underboob</li>
                <li>Hard clean edges, trim-bordered all around</li>
                <li>Looks designed — not like missing fabric</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">📐 SLITS & SIDES</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Two high slits — both sides, up to hip level</li>
                <li>Only leg reveal — the dress stays long everywhere else</li>
                <li>Decorative rope/cord straps running down the bodice sides</li>
                <li>Slit edges finished with trim piping</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🦾 SLEEVES</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Detached — tight fit, upper arm to wrist</li>
                <li>Ornate embroidered surface matching the leggings</li>
                <li>Geometric/diamond hole at the very top near the shoulder</li>
                <li>Bordered and intentional, not a raw gap</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🦵 LEGGINGS</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Optional — see section 4 for both paths</li>
                <li>If used: ornate, above-knee, matches sleeve design</li>
                <li>If skipped: bare legs through slits, cleaner look</li>
                <li>Bare thigh gap through slit is intentional either way</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🎀 COLLAR & TRIM</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>High mandarin collar — stiff and standing</li>
                <li>3–5 Chinese frog knot closures below collar to keyhole</li>
                <li>Top collar detail: Chinese knot, tassel, or cord — not a Western bow</li>
                <li>1–2 tassels hanging at hip</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">💇 HAIR</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Likely ponytail — consistent with her usual look</li>
                <li>Hair ornament/bowtie to match the Chinese outfit theme</li>
                <li>No strong refs — artist's creative call here</li>
                <li>See section 10 for loose direction</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🔙 BACK</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Must be exposed — full open, cross-strap, or keyhole cutout</li>
                <li>Optional: split decorative fabric tail panels from the waist</li>
                <li>Back flaps are your call — may fight the qipao read</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px; grid-column: 1 / -1;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">📌 KEY REMINDERS</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px; columns:2; column-gap:24px;">
                <li>ZZZ ref (#1) is silhouette + keyhole shape only — don't copy the character</li>
                <li>Main battle outfit should be more revealing than this dress</li>
                <li>Embroidery: accents only, not full coverage — the silhouette does the work</li>
                <li>Sleeve and legging design must match each other</li>
              </ul>
            </div>

          </div>
        </details>
      `
    },

    // ══════════════════════════════════════════════════════
    //  OVERVIEW
    // ══════════════════════════════════════════════════════
    {
      id:        "overview",
      title:     "Design Brief — Read First",
      images:    ["zzz_silhouette", "ai_gen_red"],
      fullWidth: true,
      style:     "background: linear-gradient(135deg, #fff5f5 0%, #fffaf0 100%); border: 3px solid #c0392b;",
      content:   `
        <p><strong>Concept:</strong> Long tight battle qipao. Elegant but designed to fight in.
           Column silhouette, geometric diamond chest keyhole, high side slits with matching ornate leggings,
           tight ornate detached arm sleeves with a geometric diamond hole at the top of each sleeve,
           and decorative embroidery throughout.</p>

        <div class="warning-box" style="margin-top:14px; border-left-color: #9b59b6; background: #f9f0ff;">
          <p style="color:#6c3483; margin:0 0 8px 0;"><strong>📝 On topic of lewdness - Main Outfit vs China Outfit</strong></p>
          <p style="color:#6c3483; margin:0;">
          <strong>tl;dr</strong> Make sure the main battle kimono is more lewd then this.<br>
            The intention is that the <strong>main/default outfit
            should remain more revealing than this China outfit</strong>. Keep that hierarchy in mind
            when making decisions about exposure level — the China dress should feel elegant and
            battle-ready, but not her most revealing look overall.
          </p>
        </div>

        <div class="warning-box" style="margin-top:14px;">
          <p style="color:#856404; margin:0 0 8px 0;"><strong>⚠️ ZZZ Character Note</strong></p>
          <p style="color:#856404; margin:0;">
            <strong>Ye Shunguang from Zenless Zone Zero</strong> is included because she's the closest
            existing example to the target silhouette and diamond keyhole shape. She's from a very popular IP —
            the dress shape is the reference, the identity must be entirely original.
            <br><br>
            <strong>Take from her:</strong> silhouette shape, slit construction, diamond keyhole shape.<br>
            <strong>Avoid replicating:</strong> her colorway · star-shaped panel framing ·
            flame thigh embroidery · obi waist band · her accessory language.
          </p>
        </div>

        <p style="margin-top:14px; background:white; padding:10px; border-radius:8px; line-height:2.1;">
          <strong>Design Checklist:</strong><br>
          ☐ Long pencil column silhouette, ankle-grazing (or shorter — see section 1)<br>
          ☐ Diamond/angular keyhole — mid-chest + underboob, hard edges, trim-bordered<br>
          ☐ Decorative cord/rope side straps along the bodice sides<br>
          ☐ Two high side slits to hip, trim-edged<br>
          ☐ Ornate leggings stopping above the knee — optional, see section 4<br>
          ☐ Tight ornate detached arm sleeves — geometric/diamond hole at the top of each sleeve<br>
          ☐ Embroidery (cloud/dragon motif) — accent placement only, not full coverage<br>
          ☐ High mandarin collar + frog closures (see section 7)<br>
          ☐ Tassels at hip, decorative piping along all edges<br>
          ☐ Back exposed — full open, cross-strap, or keyhole (your call)<br>
          ☐ Back split flap panels — optional, see section 9<br>
          ☐ Hair — likely ponytail, Chinese-themed ornament/bowtie, see section 10
        </p>
      `
    },

    // ══════════════════════════════════════════════════════
    //  1. SILHOUETTE & HEM
    // ══════════════════════════════════════════════════════
    {
      id:      "silhouette",
      title:   "1 — Silhouette & Dress Length",
      images:  ["zzz_silhouette", "column_back", "black_archive", "ai_gen_long"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Pencil-column tight dress, ankle-length preferred. No flare, no volume.
          The slits and keyhole do all the revealing — the silhouette itself is a controlled vertical line.
          Shorter hem is fine if full length feels too formal.
        </div>

        <p><strong>Target:</strong> Pencil column — extremely narrow and tight from chest to ankle.
           The side slits and keyhole do all the revealing; the silhouette itself stays completely controlled.</p>
        <ul>
          <li>No flare, no A-line, no puff anywhere</li>
          <li>Fabric clings to the body from collar to hem</li>
          <li>Reads as a single clean vertical line from a distance</li>
        </ul>

        <div class="options">
          <h3>Hem Option A — Full Length (preferred)</h3>
          <p>Ankle-grazing or floor-length. Bottom hem can feature an ornate geometric border panel.
             <span class="ref-tag">#1 ZZZ Silhouette</span> <span class="ref-tag">#8 AI Long Hem</span></p>
        </div>
        <div class="options">
          <h3>Hem Option B — Shorter</h3>
          <p>Mid-calf to knee. More clearly battle-functional. Your call if full length feels too formal.
             <span class="ref-tag">#4 Dragon Qipao</span> <span class="ref-tag">#9 Ornate Leggings</span></p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#1 ZZZ Silhouette</span> — Primary blueprint. Column tightness, length, slit depth. Ignore all other details — see overview note.</li>
          <li><span class="ref-tag">#3 Column Back</span> — Non-ZZZ back view cross-check.</li>
          <li><span class="ref-tag">#8 AI Long Hem</span> — Ornate geometric bottom-hem panel option at full length.</li>
          <li><span class="ref-tag">#4 Dragon Qipao</span> — Shorter hem alternative. Note the dragon motif — strong embroidery direction ref.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  2. CHEST KEYHOLE
    // ══════════════════════════════════════════════════════
    {
      id:      "keyhole",
      title:   "2 — Chest Keyhole Cutout",
      images:  ["zzz_silhouette", "angular_cutout", "ai_gen_red", "zzz_chest"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Hard-edged diamond or pointed-arch opening center-chest.
          Exposes mid-chest and underboob. Clean trim border on all edges. Looks designed, not absent.
        </div>

        <p><strong>Shape:</strong> Geometric diamond or pointed-arch opening. Hard clean edges — not a soft plunge.
           Exposes mid-chest and the top of the underboob.</p>
        <ul>
          <li>All edges cleanly bordered with trim — intentional and structural</li>
          <li>Surrounding bodice frames it from both sides</li>
          <li>Sits center-chest, connected upward to the mandarin collar via fabric</li>
          <li>Should look designed — like a cut shape, not absent fabric</li>
        </ul>
        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#1 ZZZ Silhouette</span> — <strong>Best single ref for the diamond keyhole shape.</strong>
              The diamond opening construction is the primary guide. Ignore all other details.</li>
          <li><span class="ref-tag">#6 AI Red</span> — Diamond keyhole clearly rendered at full body scale.</li>
          <li><span class="ref-tag">#5 Angular Cutout</span> — Hard edge definition and how the bodice holds the shape.</li>
          <li><span class="ref-tag">#2 ZZZ Chest</span> — Closeup: how fabric panels frame the opening and how trim borders it.
              Do not replicate the star shape or dark framing style.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  3. SIDE SLITS & CORD STRAPS
    // ══════════════════════════════════════════════════════
    {
      id:      "slits",
      title:   "3 — Side Slits & Side Cord Straps",
      images:  ["ai_gen_purple", "zzz_silhouette", "column_back"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Two high slits running to hip level — the only leg reveal.
          Leggings visible through them. Plus decorative rope/cord straps running vertically
          along the bodice sides for visual detail. Cord color is your inspiration.
        </div>

        <p><strong>Slits:</strong> Two high slits from hem up to hip level. The dress stays long and narrow —
           slits are the only leg reveal. Leggings visible through both slits.</p>
        <ul>
          <li>Slit edges finished with decorative trim piping</li>
          <li>Depth: hip level — shows the full legging-to-bare-thigh gap</li>
          <li>Both sides symmetrical</li>
        </ul>

        <p><strong>Side Cord Straps:</strong> Decorative rope or cord detail running vertically along
           the bodice sides, between the main fabric panels. Visible from the front.</p>
        <ul>
          <li>Cord color at your inspiration — should complement the rest of the trim</li>
          <li>Should feel deliberate and decorative — not functional lacing</li>
          <li>Adds visual interest to the sides of the bodice</li>
        </ul>
        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#7 AI Purple</span> — <strong>Best ref for the side cord strap detail.</strong>
              Rope running along the bodice sides — adapt cord treatment to your inspiration.</li>
          <li><span class="ref-tag">#1 ZZZ Silhouette</span> — Slit depth and placement on a long narrow dress.</li>
          <li><span class="ref-tag">#3 Column Back</span> — How slits read on the back/side at full body scale.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  4. LEGGINGS
    // ══════════════════════════════════════════════════════
    {
      id:      "leggings",
      title:   "4 — Leggings",
      images:  ["silver_tassels", "ornate_sleeves", "honoka"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Leggings are optional. If used, they stop just above the knee and
          match the sleeve design. If skipped, the bare legs through the slits are the reveal.
          Either works — pick whichever reads better with the overall outfit direction.
        </div>

        <div class="options">
          <h3>Option A — With Leggings (original direction)</h3>
          <p>Ornate leggings stopping just above the knee — clean straight cut, no lace top.
             Design must match the arm sleeves: ornate and embroidered.
             Bare thigh gap between legging top and slit is intentional.
             <span class="ref-tag">#9 Ornate Leggings</span> <span class="ref-tag">#10 Ornate Sleeves</span></p>
        </div>
        <div class="options">
          <h3>Option B — No Leggings</h3>
          <p>Bare legs through the slits. Makes the outfit read differently — lighter, more open.
             The slits then do all the leg work on their own.
             <span class="ref-tag">#15 Honoka</span></p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#9 Ornate Leggings</span> — Full body view with ornate leggings through a slit. Also shows a shorter hem option.</li>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — If using leggings, their pattern language should mirror this sleeve style.</li>
          <li><span class="ref-tag">#15 Honoka</span> — Shows the no-leggings version clearly across multiple views.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  5. DETACHED SLEEVES
    // ══════════════════════════════════════════════════════
    {
      id:      "sleeves",
      title:   "5 — Detached Arm Sleeves",
      images:  ["ornate_sleeves", "ai_gen_red", "ai_gen_purple"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Tight ornate detached sleeves, long to the wrist.
          Key feature: a deliberate geometric/diamond-shaped hole at the very top of each sleeve
          near the shoulder — bordered and intentional, not a gap. Design matches the leggings.
        </div>

        <p><strong>Style:</strong> Tight-fitting ornate detached sleeves — long, running from upper arm to wrist.
           They hug the arm closely. Attach at the upper arm with a band or loop.</p>

        <p><strong>Key Detail — Geometric Hole at the Top:</strong>
           Each sleeve has a deliberate geometric or diamond-shaped open cutout near the attachment point
           at the upper arm. It frames a small peek of skin at the shoulder junction.
           The hole is bordered and clean — intentional, not a bad fit or raw gap.</p>

        <ul>
          <li>Tight fit throughout — no loose or billowing fabric</li>
          <li>Ornate embroidered or patterned surface — visually matches the leggings</li>
          <li>The hole at the top is edged and deliberate — consistent with the diamond language of the outfit</li>
          <li>Long to the wrist</li>
        </ul>

        <div class="warning-box" style="margin-top: 12px;">
          <p style="color:#856404; margin:0;">
            <strong>Overall vibe note:</strong> <span class="ref-tag">#10 Ornate Sleeves</span>
            captures a design energy that's hard to put into words — the way the ornate detail feels
            earned rather than decorative, and how the outfit reads as both elegant and capable at once.
            The dragon motif on the sleeve fabric is a strong embroidery direction option.
            The sleeve construction here is also a strong direction ref beyond just the pattern.
          </p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — Overall sleeve language, embroidery style, and general design vibe.</li>
          <li><span class="ref-tag">#6 AI Red</span> — <strong>Best ref for the geometric hole at the top of the sleeve.</strong></li>
          <li><span class="ref-tag">#7 AI Purple</span> — Second angle of the sleeve hole detail in a 3/4 view.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  6. EMBROIDERY & FABRIC
    // ══════════════════════════════════════════════════════
    {
      id:      "embroidery",
      title:   "6 — Embroidery & Fabric",
      images:  ["ornate_sleeves", "black_archive", "snowflake_close", "column_back"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Satin/silk base fabric. Intricate thread embroidery in a cloud or dragon motif,
          placed as accents on hem panels and one side — not covering the whole dress.
          Less is more. The silhouette carries the design.
        </div>

        <p><strong>Base fabric:</strong> Satin or silk finish. Lustrous, smooth, light-catching.</p>
        <p><strong>Embroidery:</strong> Intricate thread work. Cloud motifs, dragon elements, or abstract Chinese botanical.
           Accent placement — lower hem panels and one side panel. Not full coverage.</p>
        <ul>
          <li>Each element should breathe — readable from a distance</li>
          <li>Fabric tightness should show through the motifs</li>
          <li>Less is more — the silhouette carries the design</li>
        </ul>
        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — Embroidery-to-fabric ratio and clean placement. The dragon motif on the sleeve is a strong direction option.</li>
          <li><span class="ref-tag">#4 Dragon Qipao</span> — The dragon motif on this dress is another good embroidery direction ref.</li>
          <li><span class="ref-tag">#11 Fabric Pattern</span> — <em>Design idea only, not a requirement.</em>
              Shows how a motif sits on tight satin at chest level. Replace snowflakes with cloud/dragon if using.</li>
          <li><span class="ref-tag">#3 Column Back</span> — Light pattern on a long column at full body scale.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  7. COLLAR & CLOSURES
    // ══════════════════════════════════════════════════════
    {
      id:      "collar",
      title:   "7 — Collar & Closures",
      images:  ["snowflake_close", "ai_gen_red", "black_archive"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> High standing mandarin collar. 3–5 Chinese frog knot closures below it,
          running down to the keyhole. The collar knot/bowtie detail at the very top is your artistic inspiration —
          just keep it Chinese-feeling rather than Western.
        </div>

        <p><strong>Collar:</strong> High mandarin collar — stiff and standing, not folded.
           Anchors the top of the outfit and leads into the keyhole below.</p>

        <p><strong>Closures:</strong> 3–5 decorative knot-style closures (frog buttons) running vertically
           from collar down to just above the keyhole.</p>
        <ul>
          <li>Each closure is a Chinese frog knot — not a plain button</li>
          <li>Legible but not oversized — a detail, not a feature</li>
          <li>Even spacing, intentional placement</li>
        </ul>

        <div class="options">
          <h3>Note on Collar Knot / Bowtie Detail</h3>
          <p>The decorative element at the very top of the collar is open to your artistic inspiration.
             If using a bow or tie, lean Chinese rather than Western —
             think a Chinese knot (盘扣), tassel tie, or cord knot rather than a fabric bow.
             Keep it culturally consistent — the rest is entirely your call.</p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#11 Fabric Pattern</span> — Closure scale, spacing, and placement closeup.</li>
          <li><span class="ref-tag">#6 AI Red</span> — Frog closures visible at full body scale in a rendered outfit.</li>
          <li><span class="ref-tag">#4 Dragon Qipao</span> — Full body: collar and closure placement at viewing distance.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  8. TASSELS & TRIM
    // ══════════════════════════════════════════════════════
    {
      id:      "tassels",
      title:   "8 — Tassels & Trim",
      images:  ["silver_tassels"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Decorative piping on every fabric edge — slits, hem, collar, cutout border.
          One or two tassels hanging at the hip. Consistent trim throughout ties the whole outfit together.
          Keep it minimal — the dress does the heavy lifting.
        </div>

        <p><strong>Trim:</strong> Decorative piping along all fabric edges —
           slit edges, hem, collar edge, cutout border. Consistent throughout.</p>
        <p><strong>Tassels:</strong> One or two tassels hanging at hip level from a clasp or side loop.</p>
        <ul>
          <li>Trim is the visual thread that ties all elements together</li>
          <li>Tassels add movement when she moves</li>
          <li>Keep density low — the dress does the heavy lifting</li>
        </ul>
        <h3>Key Ref:</h3>
        <ul>
          <li><span class="ref-tag">#9 Ornate Leggings</span> — Tassel placement and hang on a qipao. Adapt to your chosen trim direction.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  9. BACK DESIGN
    // ══════════════════════════════════════════════════════
    {
      id:      "back",
      title:   "9 — Back Design (Your Call)",
      images:  ["open_back", "crossstrap_back", "back_column", "honoka"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> Back must be exposed — your pick of full open, cross-strap, or keyhole.
          Optionally, add split decorative fabric tail panels hanging from the back waist for visual drama.
          They look great but may clash with the Chinese aesthetic — entirely your judgement call.
        </div>

        <p><strong>Direction:</strong> The back must be <strong>exposed</strong>.
           How it's exposed is entirely your call — all three options below are valid.</p>

        <div class="options">
          <h3>Optional — Split Back Flap Panels</h3>
          <p>Two long decorative fabric panels hanging from the back waist, split down the middle,
             flowing behind her. Think the trailing fabric tails common on Genshin Impact character designs.
             They add movement and visual drama from behind, and would be embroidered to match the dress fabric.</p>
          <p>This is genuinely optional — they can look stunning but may pull the design away from
             a clean Chinese qipao read. If it works with your composition, great. If it doesn't, skip it.
             Trust your eye on this one.
             <span class="ref-tag">#15 Honoka</span></p>
        </div>

        <div class="options">
          <h3>Option A — Full Open Back</h3>
          <p>Entire back bare from shoulder blades to small of the back.
             Halter-style front with no back panel. Maximum skin, cleanest silhouette from behind.
             <span class="ref-tag">#14 Open Back</span></p>
        </div>
        <div class="options">
          <h3>Option B — Cross-Strap / Lace-Up</h3>
          <p>Mostly open back held with decorative cross-straps or lace-up cording.
             Architectural — exposure feels deliberate and constructed.
             <span class="ref-tag">#13 Cross-Strap Back</span></p>
        </div>
        <div class="options">
          <h3>Option C — Keyhole Back</h3>
          <p>Single geometric cutout mirroring the front keyhole — smaller,
             placed mid-back or at shoulder blade level. Creates front/back symmetry.
             Work from the front keyhole shape as your guide.</p>
        </div>
        <p style="margin-top:10px;"><span class="ref-tag">#12 Back Silhouette</span> — Full body back view for silhouette proportion, regardless of which option you choose.</p>
      `
    },

    // ══════════════════════════════════════════════════════
    //  10. HAIR & PONYTAIL BOWTIE
    // ══════════════════════════════════════════════════════
    {
      id:      "hair",
      title:   "10 — Hair & Ponytail Bowtie",
      images:  ["ai_gen_purple", "ornate_sleeves"],
      content: `
        <div class="tldr-box">
          <strong>TL;DR:</strong> She likely keeps her ponytail for this outfit. The hair ornament/bowtie
          should feel Chinese rather than plain — but references here are limited so this is
          largely your creative space. Go with what feels right for the outfit.
        </div>

        <p><strong>Hair:</strong> The assumption is she keeps her ponytail for this look —
           it's consistent with her character and works well with a qipao silhouette.
           If you feel a different updo suits the design better, that's fine too.</p>

        <p><strong>Hair Ornament / Bowtie:</strong> There should be some form of decorative hair
           piece that ties into the Chinese outfit theme — a hair ornament, ribbon, knot, or bowtie
           style piece near the ponytail base or on the side.</p>

        <div class="options">
          <h3>Loose Direction — Mix and Match</h3>
          <p>Looking at <span class="ref-tag">#7 AI Purple</span>, the hair accessory there has a nice
             structured feel with the ribbon/bow at the ponytail — something in that territory could work.
             <span class="ref-tag">#10 Ornate Sleeves</span> shows the character with a hair ornament
             that has a more elaborate, Chinese-accessory feel with hanging elements.
             A combination of both — a structured bow shape with some hanging ornament detail — could
             be a strong direction.</p>
        </div>

        <div class="warning-box">
          <p style="color:#856404; margin:0;">
            <strong>Note:</strong> References for this specific element are limited — this brief doesn't
            have strong dedicated hair refs to point to. This is genuinely your creative space.
            The only loose asks are: keep it feeling Chinese rather than generic, and make sure it
            complements rather than competes with the outfit. Otherwise, go with your instinct.
          </p>
        </div>

        <h3>Loose Refs (direction only, not prescriptive):</h3>
        <ul>
          <li><span class="ref-tag">#7 AI Purple</span> — Hair bow/ribbon structure at the ponytail base as a starting point.</li>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — More elaborate hair ornament with Chinese accessory language and hanging elements.</li>
        </ul>
      `
    },

  ]

};
