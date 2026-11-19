# Bhagyshree Design: redesign plan (v2)

Decided with the owner on 2026-11-19 through multiple-choice questions.

| Choice | Decision |
|---|---|
| Look | Festive luxury: deep maroon, antique gold, warm cream |
| Main goal | Browse the catalog; WhatsApp enquiry is the next step |
| Catalog | Filter tabs (All, Blouses, Lehenga and dress, Bags) + full-screen pop-up with prev/next and "I want this design" |
| Hero | Full-width photo carousel with headline and buttons over it |
| Motion | Rich: carousel, scroll reveals, animated counters, gentle parallax. All motion off under `prefers-reduced-motion` |
| New sections | Bridal special, Price guide, Reviews, FAQ |
| Reviews | No invented reviews. Section with a "Read and write reviews on Google" button, hidden until `googleReviewsUrl` is set in `js/config.js`. Real review cards render from `reviews: []` when the owner sends some |
| Prices | Owner will send numbers. Until then each row shows "Ask for price" |
| Language | English first, Marathi switch (saved in the browser) |
| Hosting | Static files served by Lovable at https://bhagyshreedesign.site (never link the lovable.app address) |

## Hard rules

- Plain HTML, CSS and vanilla JS. No frameworks, no build step, no CDN scripts. Google Fonts stylesheet is allowed.
- Paths stay relative: `css/style.css`, `js/config.js`, `js/i18n.js`, `js/app.js`, `images/...`, `images/catalog/...`. Bump the cache query to `?v=7`.
- Every visible string comes from `js/i18n.js` (`window.I18N = { en: {...}, mr: {...} }`) and is set through `data-i18n` / `data-i18n-ph`. Both languages have every key.
- No new facts: no prices, review text, delivery times, awards or customer counts that the owner has not given. Counters use only real numbers: 20+ years, 7 days a week, and the live count of catalog designs.
- Keep everything that works today: WhatsApp links with pre-filled text, per-design "I want this design" message, enquiry form that builds a WhatsApp message (nothing stored), call links, map embed, sticky mobile call bar, language switch, SEO meta and JSON-LD.
- Mobile first. Works at 360px wide with no horizontal scroll. Tap targets at least 44px.
- Fast on cheap phones: lazy-load all images below the hero, `width`/`height` set where known, animations use transform/opacity only.

## Page order

1. **Header**: logo wordmark, nav (Catalog, Bridal, Prices, Reviews, FAQ, Visit), EN / मराठी switch. Transparent over the hero, turns solid maroon on scroll. On mobile, nav collapses into a menu button with a slide-down panel.
2. **Hero carousel**: 5 slides from `heroSlides` in config, full-bleed photo with dark maroon gradient, slow zoom (Ken Burns) on the active slide, auto-advance every 5s, pause on hover/focus/touch, swipe on touch, dots and arrows, keyboard arrows. Overlay: kicker, headline (`hero_title`, keeps the `<em>` styling), sub line, buttons "View the catalog" (scrolls to catalog) and "WhatsApp us". Caption of the current design in the corner.
3. **Stats band**: three animated counters on gold-on-maroon: 20+ years of stitching, N designs in the catalog (counted from config), 7 days a week open.
4. **Catalog (the star)**: tabs All / Blouses / Lehenga and dress / Bags with counts; animated filter (fade/scale). Masonry-style grid of cards: photo, name, small "I want this design" WhatsApp link. Tap a card to open the pop-up: big photo, name, prev/next arrows, swipe, Esc to close, "I want this design" button, counter "3 / 18". The old "Recent work" gallery items join the catalog (each gets a `group`).
5. **Bridal special**: wide banner with parallax photo, kicker, title, text and "Plan my bridal outfit" WhatsApp button, plus a row of the lehenga designs from the catalog.
6. **Services**: the five services as cards with simple inline SVG icons (needle, blouse, lehenga, scissors, star).
7. **Why us + story**: quote, story text, four reasons.
8. **How to order**: three steps on a gold timeline.
9. **Price guide**: five rows (Blouse, Designer or bridal blouse, Salwar suit or kurti, Lehenga or gown, Alterations). Shows "From ₹X" when `prices.<key>` is set, otherwise "Ask for price" as a WhatsApp link. Note that every outfit is made to measure.
10. **Reviews**: title, note, Google button (only when `googleReviewsUrl` is set), "Share your feedback on WhatsApp" button, and cards from `reviews` when present.
11. **FAQ**: six questions as an accessible accordion (`<details>` or buttons with `aria-expanded`).
12. **Enquiry form**: unchanged behaviour, restyled as a gold-bordered card.
13. **Visit**: address, hours, phone, WhatsApp and Maps buttons, map embed.
14. **Footer**: wordmark, short line, nav links, phone, Instagram link when set.
15. **Mobile call bar**: Call + WhatsApp, as today.

## Visual system

- Colours: maroon `#5c0f1d`, deep maroon `#3d0812`, rose accent `#9b2335`, gold `#c9a14a`, light gold `#e8d29b`, cream `#fbf4e6`, ivory `#fffaf1`, ink `#2a1a14`, muted `#6e5547`. Define as CSS variables on `:root`.
- Type: headings "Cormorant Garamond" (600, italic for accents), body "Mukta", Marathi "Tiro Devanagari Marathi" for headings and "Mukta" for body. Load from Google Fonts with `display=swap`.
- Ornament: thin gold hairlines, a small original inline-SVG paisley/mandala divider between sections, subtle repeating motif on maroon bands (CSS background with inline SVG data URI, low opacity).
- Cards: ivory, 1px gold border, soft shadow, 4px radius, lift on hover.
- Buttons: solid maroon with gold text; outline gold on dark; WhatsApp green only in the call bar.

## Files and owners

| File | Owner | Work |
|---|---|---|
| `js/i18n.js` | Haiku | New file. All existing strings copied exactly from the `T` object in `js/app.js`, plus every new key below, in English and Marathi |
| `index.html` | Sonnet | New page structure, meta kept, loads `js/config.js`, `js/i18n.js`, `js/app.js` |
| `css/style.css` | Sonnet | Full restyle |
| `js/app.js` | Sonnet | Remove the `T` object, read `window.I18N`; carousel, catalog tabs, pop-up, counters, reveals, parallax, FAQ, menu, prices, reviews |
| `js/config.js` | Sonnet | Add `group` to gallery items, `heroSlides`, `prices`, `googleReviewsUrl`, `reviews` |

## New text keys (English source)

Haiku writes natural Marathi for each one. Keys:

- `nav_catalog` Catalog · `nav_bridal` Bridal · `nav_prices` Prices · `nav_reviews` Reviews · `nav_faq` FAQ · `menu_open` Menu · `menu_close` Close menu
- `hero_cta_catalog` View the catalog · `slide_prev` Previous photo · `slide_next` Next photo
- `stat_years` Years of stitching · `stat_designs` Designs in our catalog · `stat_days` Days a week open
- `catalog_note` Tap any design to see it up close, then ask for it on WhatsApp. · `cat_all` All · `lb_prev` Previous design · `lb_next` Next design · `lb_close` Close
- `bridal_kicker` Bridal and festive · `bridal_title` Your wedding look, made to fit · `bridal_text` Bridal blouses and lehengas cut to your measurements, with the neckline, back and embroidery you choose. Visit us early so there is time for fittings before the big day. · `bridal_cta` Plan my bridal outfit · `bridal_wa_msg` Hello Bhagyshree Design, I would like to plan my bridal outfit.
- `prices_title` Price guide · `prices_note` Every outfit is made to measure, so the final price depends on the fabric, design and work. Ask on WhatsApp for an exact quote. · `price_from` From · `price_ask` Ask for price · `price_wa_msg` Hello Bhagyshree Design, what is the price for: {v}? · `p_blouse` Blouse · `p_designer` Designer or bridal blouse · `p_suit` Salwar suit or kurti · `p_lehenga` Lehenga or gown · `p_alter` Alterations
- `reviews_title` Reviews · `reviews_note` Wore one of our outfits? We would love to hear how it felt. · `reviews_google` Read and write reviews on Google · `reviews_wa` Share your feedback on WhatsApp · `reviews_wa_msg` Hello Bhagyshree Design, here is my feedback:
- `faq_title` Frequently asked questions
  - `faq1_q` Do I need to bring my own fabric? · `faq1_a` Yes, bring your fabric for stitching. If you are not sure how much to buy, message us on WhatsApp first.
  - `faq2_q` Can I show you a design from a photo? · `faq2_a` Yes. Send us any photo on WhatsApp, from our catalog or anywhere else, and we will stitch it to your measurements.
  - `faq3_q` How long does stitching take? · `faq3_a` It depends on the design and how busy the season is. We confirm your delivery date when we take your measurements, and we keep to it.
  - `faq4_q` Do you do alterations? · `faq4_a` Yes. We resize, repair and finish clothes you already own.
  - `faq5_q` Where is the studio and when is it open? · `faq5_a` Sai Park Society, opposite Raisoni College, Wagholi, Pune. Open every day, 10 am to 8 pm.
  - `faq6_q` Do you stitch bridal outfits? · `faq6_a` Yes, bridal blouses and lehengas made to your measurements. Visit early so there is time for fittings.
- `footer_nav` Explore · `footer_contact` Contact

## Done means

- Every `data-i18n` key in `index.html` and every key `app.js` reads exists in both `en` and `mr`.
- No console errors. No broken images. No horizontal scroll at 360px.
- Carousel, tabs, pop-up (click, arrows, swipe, Esc), counters, FAQ, menu, language switch, enquiry form and all WhatsApp links work.
- Reduced-motion users get a static page with the same content.
