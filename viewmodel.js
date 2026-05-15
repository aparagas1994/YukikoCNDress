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

  title:    "Yukiko Qipao",
  subtitle: "China Expansion",

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
    //  QUICK SUMMARY  (collapsed by default)
    // ══════════════════════════════════════════════════════
    {
      id:        "quicksummary",
      title:     "⚡ Quick Summary — Everything at a Glance",
      images:    [],
      fullWidth: true,
      style:     "background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border: 3px solid #0f3460; color: white; cursor: default;",
      content:   `
        <details style="cursor:pointer;">
          <summary style="color:#a0b4d0; font-size:0.93em; padding:4px 0 12px; list-style:none;
                          display:flex; align-items:center; gap:8px; user-select:none;">
            <span style="background:rgba(255,255,255,0.12); border-radius:20px; padding:3px 14px;
                         font-size:0.88em; font-weight:600; letter-spacing:0.03em;">
              ▶ Click to expand full summary
            </span>
            <span style="font-size:0.82em; opacity:0.6;">Numbered sections below have the refs and details</span>
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
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🎀 COLLAR & TRIM</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>High mandarin collar — stiff and standing</li>
                <li>3–5 Chinese frog knot closures below collar to keyhole</li>
                <li>Top collar detail: Chinese knot or cord — not a Western bow</li>
                <li>1–2 tassels hanging at hip</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">💇 HAIR</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Likely ponytail — consistent with her usual look</li>
                <li>Hair ornament/bowtie to match the Chinese outfit theme</li>
                <li>Limited refs — your creative space, see section 10</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">🔙 BACK</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px;">
                <li>Must be exposed — full open, cross-strap, or keyhole</li>
                <li>Optional: split fabric tail panels from the waist</li>
                <li>Back flaps your call — may fight the qipao read</li>
              </ul>
            </div>

            <div style="background:rgba(255,255,255,0.07); border-radius:8px; padding:12px; grid-column:1 / -1;">
              <p style="color:#e0c97f; font-weight:700; margin-bottom:8px; font-size:0.9em;">📌 KEY REMINDERS</p>
              <ul style="color:#d0dde8; font-size:0.88em; line-height:1.9; margin-left:14px; columns:2; column-gap:24px;">
                <li>ZZZ ref (#1) — silhouette + keyhole shape only, don't copy the character</li>
                <li>Main battle outfit should be more revealing than this dress</li>
                <li>Embroidery: accents only, not full coverage</li>
                <li>Sleeve and legging design must match each other</li>
              </ul>
            </div>

          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">
            <div style="background:rgba(155,89,182,0.2); border-left:4px solid #9b59b6; border-radius:6px; padding:12px;">
              <p style="color:#d7bde2; font-weight:700; margin-bottom:6px; font-size:0.85em;">📝 LEWDNESS NOTE</p>
              <p style="color:#d7bde2; font-size:0.85em; line-height:1.7; margin:0;">
                The main/default battle outfit should remain <strong style="color:white;">more revealing</strong> than this China dress.
                Keep that hierarchy in mind — this outfit is elegant and capable, not her most exposed look.
              </p>
            </div>
            <div style="background:rgba(255,193,7,0.15); border-left:4px solid #ffc107; border-radius:6px; padding:12px;">
              <p style="color:#f0d060; font-weight:700; margin-bottom:6px; font-size:0.85em;">⚠️ ZZZ CHARACTER NOTE</p>
              <p style="color:#e8d5a0; font-size:0.85em; line-height:1.7; margin:0;">
                <strong style="color:white;">Ye Shunguang from ZZZ</strong> is ref #1 — silhouette and keyhole shape only.
                She's from a popular IP. Don't copy her colorway, star panel, flame embroidery, or obi band.
                Dress shape is borrowed. Identity must be original.
              </p>
            </div>
          </div>

        </details>
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
        <p>Tight pencil column — fabric clings from collar to hem, no flare or volume anywhere.
           The slits and keyhole do all the revealing; the silhouette itself is a controlled vertical line.</p>

        <div class="options">
          <h3>Option A — Full Length (preferred)</h3>
          <p>Ankle-grazing. Bottom hem can have an ornate geometric border panel.
             <span class="ref-tag">#1 ZZZ Silhouette</span> <span class="ref-tag">#8 AI Long Hem</span></p>
        </div>
        <div class="options">
          <h3>Option B — Shorter</h3>
          <p>Mid-calf to knee. More battle-functional. Your call.
             <span class="ref-tag">#4 Dragon Qipao</span> <span class="ref-tag">#9 Ornate Leggings</span></p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#1 ZZZ Silhouette</span> — Primary blueprint. Column tightness, length, slit depth. Silhouette and keyhole only — see ZZZ note in Quick Summary.</li>
          <li><span class="ref-tag">#3 Column Back</span> — Non-ZZZ back view cross-check.</li>
          <li><span class="ref-tag">#8 AI Long Hem</span> — Ornate geometric bottom-hem panel at full length.</li>
          <li><span class="ref-tag">#4 Dragon Qipao</span> — Shorter hem option. Dragon motif is also a good embroidery direction ref.</li>
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
        <p>Diamond or pointed-arch shaped opening, center chest. Hard clean edges — not a soft plunge.
           Exposes mid-chest and top of underboob. All edges trim-bordered. Should look designed, not absent.</p>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#1 ZZZ Silhouette</span> — Best single ref for the diamond keyhole shape. Primary guide. Ignore all other details.</li>
          <li><span class="ref-tag">#6 AI Red</span> — Diamond keyhole at full body scale.</li>
          <li><span class="ref-tag">#5 Angular Cutout</span> — Hard edge definition and bodice framing.</li>
          <li><span class="ref-tag">#2 ZZZ Chest</span> — Closeup of how trim borders the opening. Don't replicate the star shape or dark framing.</li>
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
        <p>Two high slits from hem to hip — the only leg reveal. Slit edges finished with trim piping.</p>
        <p>Plus decorative rope/cord straps running vertically along the bodice sides between fabric panels.
           Cord color at your inspiration — should complement the trim. Deliberate and decorative, not functional lacing.</p>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#7 AI Purple</span> — Best ref for the side cord strap detail.</li>
          <li><span class="ref-tag">#1 ZZZ Silhouette</span> — Slit depth and placement on a long narrow dress.</li>
          <li><span class="ref-tag">#3 Column Back</span> — How slits read at full body scale from behind.</li>
        </ul>
      `
    },

    // ══════════════════════════════════════════════════════
    //  4. LEGGINGS
    // ══════════════════════════════════════════════════════
    {
      id:      "leggings",
      title:   "4 — Leggings (Optional)",
      images:  ["silver_tassels", "ornate_sleeves", "honoka"],
      content: `
        <div class="options">
          <h3>Option A — With Leggings</h3>
          <p>Ornate leggings stopping just above the knee, no lace top.
             Design must match the arm sleeves. Bare thigh gap between legging top and slit is intentional.
             <span class="ref-tag">#9 Ornate Leggings</span> <span class="ref-tag">#10 Ornate Sleeves</span></p>
        </div>
        <div class="options">
          <h3>Option B — No Leggings</h3>
          <p>Bare legs through the slits — lighter, more open read.
             <span class="ref-tag">#15 Honoka</span></p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#9 Ornate Leggings</span> — Full body: ornate leggings through a slit. Also shows shorter hem option.</li>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — Legging pattern should mirror this sleeve style.</li>
          <li><span class="ref-tag">#15 Honoka</span> — No-leggings version across multiple views.</li>
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
        <p>Tight-fitting ornate detached sleeves, upper arm to wrist. Hug the arm closely.</p>
        <p><strong>Key detail:</strong> a deliberate geometric/diamond-shaped hole near the top of each sleeve
           at the upper arm — bordered and clean, consistent with the diamond language of the outfit.</p>

        <div class="warning-box">
          <p style="color:#856404; margin:0;">
            <strong>Vibe note:</strong> <span class="ref-tag">#10 Ornate Sleeves</span> captures the overall
            design energy to aim for — ornate detail that feels earned, elegant and capable at once.
            The dragon motif on the sleeve is a strong embroidery direction option.
          </p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — Overall sleeve language, embroidery style, design vibe.</li>
          <li><span class="ref-tag">#6 AI Red</span> — Best ref for the geometric hole at the top of the sleeve.</li>
          <li><span class="ref-tag">#7 AI Purple</span> — Sleeve hole in a 3/4 view.</li>
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
        <p>Satin or silk finish base. Embroidery in cloud, dragon, or Chinese botanical motifs —
           accent placement on hem panels and one side panel only. Not full coverage.
           The silhouette carries the design; embroidery is the accent.</p>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#10 Ornate Sleeves</span> — Embroidery-to-fabric ratio. Dragon motif on sleeve is a strong direction.</li>
          <li><span class="ref-tag">#4 Dragon Qipao</span> — Dragon motif on a full dress at body scale.</li>
          <li><span class="ref-tag">#11 Fabric Pattern</span> — Design idea only, not required. Shows motif density on tight satin.</li>
          <li><span class="ref-tag">#3 Column Back</span> — How light pattern placement reads at full body scale.</li>
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
        <p>High mandarin collar — stiff and standing, not folded.
           3–5 Chinese frog knot closures running from collar down to just above the keyhole.</p>

        <div class="options">
          <h3>Collar Top Detail — Your Inspiration</h3>
          <p>The decorative element at the very top of the collar is open to your interpretation.
             Lean Chinese rather than Western — a Chinese knot (盘扣), tassel tie, or cord knot
             rather than a fabric bow. Keep it culturally consistent.</p>
        </div>

        <h3>Key Refs:</h3>
        <ul>
          <li><span class="ref-tag">#11 Fabric Pattern</span> — Closure scale, spacing, and placement closeup.</li>
          <li><span class="ref-tag">#6 AI Red</span> — Frog closures at full body scale.</li>
          <li><span class="ref-tag">#4 Dragon Qipao</span> — Collar and closure placement at viewing distance.</li>
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
        <p>Decorative piping on every fabric edge — slits, hem, collar, cutout border — consistent throughout.
           One or two tassels at hip level. Keep it minimal; the dress does the heavy lifting.</p>

        <h3>Key Ref:</h3>
        <ul>
          <li><span class="ref-tag">#9 Ornate Leggings</span> — Tassel placement and hang. Adapt to your chosen trim direction.</li>
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
        <p>The back must be exposed. Pick whichever option works with your composition.</p>

        <div class="options">
          <h3>Option A — Full Open Back</h3>
          <p>Entire back bare, halter-style front, no back panel.
             <span class="ref-tag">#14 Open Back</span></p>
        </div>
        <div class="options">
          <h3>Option B — Cross-Strap / Lace-Up</h3>
          <p>Mostly open, held with decorative cross-straps or lace-up cording.
             <span class="ref-tag">#13 Cross-Strap Back</span></p>
        </div>
        <div class="options">
          <h3>Option C — Keyhole Back</h3>
          <p>Single geometric cutout mirroring the front keyhole, smaller, mid-back or shoulder blade level.</p>
        </div>
        <div class="options">
          <h3>Optional — Split Back Flap Panels</h3>
          <p>Two long decorative fabric panels hanging from the back waist, split down the middle.
             Like Genshin Impact trailing fabric tails — adds drama but may fight the qipao read.
             Trust your eye. <span class="ref-tag">#15 Honoka</span></p>
        </div>

        <h3>Key Ref:</h3>
        <ul>
          <li><span class="ref-tag">#12 Back Silhouette</span> — Full body back view for proportion reference.</li>
        </ul>
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
        <p>She likely keeps her ponytail. Add a Chinese-themed hair ornament or bowtie — something
           that complements rather than competes with the outfit.</p>

        <div class="options">
          <h3>Loose Direction</h3>
          <p><span class="ref-tag">#7 AI Purple</span> has a structured ribbon/bow at the ponytail base.
             <span class="ref-tag">#10 Ornate Sleeves</span> shows a more elaborate Chinese ornament with hanging elements.
             A mix of both — structured bow with hanging detail — could be a strong direction.</p>
        </div>

        <div class="warning-box">
          <p style="color:#856404; margin:0;">
            References here are limited — this is your creative space.
            Only ask: keep it feeling Chinese, not generic Western.
          </p>
        </div>
      `
    },

  ]

};
