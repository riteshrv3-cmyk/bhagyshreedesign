(function () {
  var S = window.SITE;
  var I = window.I18N;
  var doc = document;
  doc.documentElement.classList.add("js");

  var lang = "en";
  try { if (localStorage.getItem("lang") === "mr") lang = "mr"; } catch (e) {}

  function $(id) { return doc.getElementById(id); }
  function all(sel, root) { return Array.prototype.slice.call((root || doc).querySelectorAll(sel)); }
  function t() { return I[lang]; }
  function reduced() { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); }
  function waLink(text) { return "https://wa.me/" + S.phone + "?text=" + encodeURIComponent(text); }
  function fill(tpl, v) { return tpl.replace("{v}", v); }
  function fmt(n) { return lang === "mr" ? Number(n).toLocaleString("mr-IN", { useGrouping: false }) : String(n); }
  function el(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  // ---------- data: gallery and catalog become one list of designs ----------
  var items = [];
  S.gallery.forEach(function (p) {
    items.push({ src: "images/" + p.file, w: p.w, h: p.h, group: p.group || "blouse", cap: p.caption });
  });
  S.catalog.forEach(function (c) {
    items.push({ src: "images/catalog/" + c.file, group: c.group, en: c.en, mr: c.mr });
  });
  function nameOf(it) { return it.cap ? (I[lang][it.cap] || "") : (it[lang] || ""); }

  var TABS = [
    { k: "all", l: "cat_all", test: function () { return true; } },
    { k: "blouse", l: "cat_blouses", test: function (g) { return g === "blouse"; } },
    { k: "lehenga", l: "cat_lehenga", test: function (g) { return g === "lehenga" || g === "dress"; } },
    { k: "bag", l: "cat_bags", test: function (g) { return g === "bag"; } }
  ];
  var tab = TABS[0];

  // ---------- hero carousel ----------
  var slides = S.heroSlides || [];
  var slideBox = $("slides"), dotBox = $("dots"), heroEl = $("hero");
  var slideEls = [], dotEls = [], cur = 0, timer = null;
  var hold = { hover: false, focus: false, touch: false, away: false };

  slides.forEach(function (s, i) {
    var d = el("div", "slide");
    var img = doc.createElement("img");
    img.src = s.src;
    img.alt = "";
    img.decoding = "async";
    if (i === 0) img.setAttribute("fetchpriority", "high"); else img.loading = "lazy";
    d.appendChild(img);
    slideBox.appendChild(d);
    slideEls.push(d);
    var b = el("button", "dot");
    b.type = "button";
    b.setAttribute("aria-label", (i + 1) + " / " + slides.length);
    b.addEventListener("click", function () { goSlide(i); restart(); });
    dotBox.appendChild(b);
    dotEls.push(b);
  });

  function slideName(s) { return s.caption ? (I[lang][s.caption] || "") : (s[lang] || ""); }
  function goSlide(n) {
    if (!slides.length) return;
    cur = (n + slides.length) % slides.length;
    slideEls.forEach(function (d, i) {
      d.classList.toggle("on", i === cur);
      d.setAttribute("aria-hidden", String(i !== cur));
    });
    dotEls.forEach(function (b, i) { b.setAttribute("aria-current", String(i === cur)); });
    $("heroCap").textContent = slideName(slides[cur]);
  }
  function paused() { return hold.hover || hold.focus || hold.touch || hold.away || doc.hidden; }
  function restart() {
    if (timer) clearInterval(timer);
    timer = null;
    if (reduced() || slides.length < 2) return;
    timer = setInterval(function () { if (!paused()) goSlide(cur + 1); }, 5000);
  }
  $("slidePrev").addEventListener("click", function () { goSlide(cur - 1); restart(); });
  $("slideNext").addEventListener("click", function () { goSlide(cur + 1); restart(); });
  heroEl.addEventListener("mouseenter", function () { hold.hover = true; });
  heroEl.addEventListener("mouseleave", function () { hold.hover = false; });
  heroEl.addEventListener("focusin", function () { hold.focus = true; });
  heroEl.addEventListener("focusout", function () { hold.focus = false; });
  heroEl.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { goSlide(cur - 1); restart(); }
    else if (e.key === "ArrowRight") { goSlide(cur + 1); restart(); }
  });
  var hx = 0, hy = 0, touchTimer = null;
  heroEl.addEventListener("touchstart", function (e) {
    hold.touch = true;
    hx = e.touches[0].clientX; hy = e.touches[0].clientY;
  }, { passive: true });
  heroEl.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - hx, dy = e.changedTouches[0].clientY - hy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { goSlide(cur + (dx < 0 ? 1 : -1)); restart(); }
    clearTimeout(touchTimer);
    touchTimer = setTimeout(function () { hold.touch = false; }, 3000);
  }, { passive: true });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { hold.away = !en[0].isIntersecting; }, { threshold: 0.2 }).observe(heroEl);
  }
  goSlide(0);
  restart();

  // ---------- catalog ----------
  var tabBox = $("tabs"), grid = $("grid"), figs = [];
  TABS.forEach(function (tb) {
    var n = items.filter(function (it) { return tb.test(it.group); }).length;
    if (!n) return;
    var b = el("button", "tab");
    b.type = "button";
    b.dataset.tab = tb.k;
    var sp = el("span");
    sp.setAttribute("data-i18n", tb.l);
    b.appendChild(sp);
    b.appendChild(el("b", "ct", String(n)));
    b.addEventListener("click", function () { tab = tb; applyFilter(true); });
    tabBox.appendChild(b);
  });
  items.forEach(function (it, i) {
    var f = el("figure", "item r" + (i % 4));
    var btn = el("button", "thumb");
    btn.type = "button";
    var img = doc.createElement("img");
    img.loading = "lazy"; img.decoding = "async"; img.src = it.src; img.alt = "";
    if (it.w && it.h) { img.width = it.w; img.height = it.h; }
    btn.appendChild(img);
    btn.addEventListener("click", function () { openViewer(visibleItems(), visibleItems().indexOf(it), btn); });
    var cap = el("figcaption");
    cap.appendChild(el("span", "nm"));
    var a = el("a", "ask");
    a.target = "_blank"; a.rel = "noopener";
    a.setAttribute("data-i18n", "btn_ask");
    cap.appendChild(a);
    f.appendChild(btn); f.appendChild(cap);
    grid.appendChild(f);
    figs.push({ fig: f, item: it, img: img, btn: btn, nm: cap.firstChild, ask: a });
  });
  function visibleItems() { return items.filter(function (it) { return tab.test(it.group); }); }
  function applyFilter(animate) {
    var n = 0;
    figs.forEach(function (c) {
      var show = tab.test(c.item.group);
      c.fig.hidden = !show;
      c.fig.classList.remove("pop");
      if (show) {
        if (animate && !reduced()) {
          void c.fig.offsetWidth;
          c.fig.style.animationDelay = Math.min(n, 14) * 35 + "ms";
          c.fig.classList.add("pop");
        }
        n++;
      }
    });
    all(".tab", tabBox).forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.tab === tab.k)); });
  }

  // ---------- viewer (native dialog: focus trap, Esc, backdrop) ----------
  var dlg = $("viewer"), vImg = $("vImg"), vList = [], vIdx = 0;
  function showViewer() {
    var it = vList[vIdx];
    if (!it) return;
    var name = nameOf(it);
    vImg.classList.remove("swap");
    void vImg.offsetWidth;
    vImg.classList.add("swap");
    vImg.src = it.src;
    vImg.alt = name;
    $("vName").textContent = name;
    $("vCount").textContent = fmt(vIdx + 1) + " / " + fmt(vList.length);
    $("vAsk").href = waLink(fill(t().ask_msg, name));
    var many = vList.length > 1;
    $("vPrev").hidden = !many; $("vNext").hidden = !many;
    if (many) {
      var nx = new Image(); nx.src = vList[(vIdx + 1) % vList.length].src;
      var pv = new Image(); pv.src = vList[(vIdx - 1 + vList.length) % vList.length].src;
    }
  }
  function openViewer(list, idx) {
    if (idx < 0) idx = 0;
    vList = list; vIdx = idx;
    showViewer();
    if (!dlg.open) {
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    }
  }
  function stepViewer(d) {
    if (vList.length < 2) return;
    vIdx = (vIdx + d + vList.length) % vList.length;
    showViewer();
  }
  function closeViewer() {
    if (dlg.close) dlg.close(); else dlg.removeAttribute("open");
  }
  $("vClose").addEventListener("click", closeViewer);
  $("vPrev").addEventListener("click", function () { stepViewer(-1); });
  $("vNext").addEventListener("click", function () { stepViewer(1); });
  dlg.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { stepViewer(-1); e.preventDefault(); }
    else if (e.key === "ArrowRight") { stepViewer(1); e.preventDefault(); }
    else if (e.key === "Escape" && !dlg.showModal) closeViewer();
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg || e.target.classList.contains("v-stage")) closeViewer();
  });
  var vx = 0, vy = 0;
  dlg.addEventListener("touchstart", function (e) { vx = e.touches[0].clientX; vy = e.touches[0].clientY; }, { passive: true });
  dlg.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - vx, dy = e.changedTouches[0].clientY - vy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) stepViewer(dx < 0 ? 1 : -1);
  }, { passive: true });

  // ---------- bridal ----------
  var bridalItems = items.filter(function (it) { return it.group === "lehenga" || it.group === "dress"; });
  var bridalBox = $("bridalRow"), bridalFigs = [];
  var bImg = $("bridalImg");
  if (bridalItems.length) bImg.src = bridalItems[bridalItems.length - 1].src;
  bridalItems.forEach(function (it, i) {
    var b = el("button", "b-card rv");
    b.type = "button";
    b.style.setProperty("--d", i * 90 + "ms");
    var img = doc.createElement("img");
    img.loading = "lazy"; img.decoding = "async"; img.src = it.src; img.alt = "";
    var sp = el("span");
    b.appendChild(img); b.appendChild(sp);
    b.addEventListener("click", function () { openViewer(bridalItems, i); });
    bridalBox.appendChild(b);
    bridalFigs.push({ img: img, sp: sp, item: it });
  });

  // ---------- prices ----------
  var PRICE_ROWS = [["blouse", "p_blouse"], ["designer", "p_designer"], ["suit", "p_suit"], ["lehenga", "p_lehenga"], ["alter", "p_alter"]];
  function renderPrices() {
    var ul = $("priceList"), tt = t();
    ul.textContent = "";
    PRICE_ROWS.forEach(function (r) {
      var li = el("li");
      var name = tt[r[1]];
      li.appendChild(el("span", "pn", name));
      li.appendChild(el("span", "pl"));
      var raw = String((S.prices && S.prices[r[0]]) || "").trim();
      if (raw) {
        var label = /^\d/.test(raw) ? "₹" + raw : raw;
        li.appendChild(el("span", "pv", lang === "mr" ? label + " " + tt.price_from : tt.price_from + " " + label));
      } else {
        var a = el("a", "pv ask-price", tt.price_ask);
        a.href = waLink(fill(tt.price_wa_msg, name));
        a.target = "_blank"; a.rel = "noopener";
        li.appendChild(a);
      }
      ul.appendChild(li);
    });
  }

  // ---------- reviews ----------
  // Reviews come from the database (S.reviewsApi); S.reviews holds any typed in by hand.
  var API = S.reviewsApi && S.reviewsApi.url && S.reviewsApi.key ? S.reviewsApi : null;
  var ITEM_KEY = { blouse: "p_blouse", designer: "p_designer", suit: "p_suit", lehenga: "p_lehenga", alter: "p_alter", other: "opt_other" };
  var dbReviews = [], reviewsLoaded = !API;
  function apiHeaders(json) {
    var h = { apikey: API.key };
    if (json) { h["Content-Type"] = "application/json"; h.Prefer = "return=minimal"; }
    return h;
  }
  function loadReviews() {
    if (!API || !window.fetch) return;
    fetch(API.url + "/rest/v1/reviews?select=name,rating,item,message,created_at&order=created_at.desc&limit=60", { headers: apiHeaders(false) })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (rows) { dbReviews = Array.isArray(rows) ? rows : []; })
      .catch(function () { dbReviews = []; })
      .then(function () { reviewsLoaded = true; renderReviews(); });
  }
  function starText(n) { return new Array(n + 1).join("★"); }
  function renderReviews() {
    var tt = t(), box = $("reviewCards");
    var list = dbReviews.map(function (r) { return { name: r.name, text: r.message, stars: r.rating, item: r.item }; })
      .concat((S.reviews || []).map(function (r) { return { name: r.name, text: r.text, stars: r.stars, item: r.item }; }));
    box.textContent = "";
    box.hidden = !list.length;
    var sum = 0, rated = 0;
    list.forEach(function (r) {
      var n = Math.max(0, Math.min(5, Math.round(Number(r.stars) || 0)));
      if (n) { sum += n; rated++; }
      var c = el("figure", "rcard");
      if (n) {
        var st = el("div", "stars", starText(n));
        st.setAttribute("role", "img");
        st.setAttribute("aria-label", fill(tt.rv_star, fmt(n)));
        c.appendChild(st);
      }
      c.appendChild(el("blockquote", "", r.text || ""));
      var cap = el("figcaption", "", r.name || "");
      if (r.item && ITEM_KEY[r.item]) cap.appendChild(el("span", "ritem", tt[ITEM_KEY[r.item]]));
      c.appendChild(cap);
      box.appendChild(c);
    });
    var sm = $("rvSummary");
    if (rated) {
      var avg = Math.round((sum / rated) * 10) / 10, avgTxt = lang === "mr" ? avg.toLocaleString("mr-IN", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : avg.toFixed(1);
      $("rvAvg").textContent = avgTxt;
      $("rvAvg").setAttribute("aria-label", fill(tt.rv_avg, avgTxt));
      $("rvAvgStars").textContent = starText(Math.round(avg));
      $("rvCount").textContent = list.length === 1 ? tt.rv_count_one : fill(tt.rv_count, fmt(list.length));
      sm.hidden = false;
    } else sm.hidden = true;
    $("rvNone").hidden = !(reviewsLoaded && API && !list.length);
    $("rvOpen").hidden = !API;
    var g = $("googleBtn");
    if (S.googleReviewsUrl) { g.href = S.googleReviewsUrl; g.hidden = false; } else { g.hidden = true; }
    $("feedbackBtn").href = waLink(tt.reviews_wa_msg);
    all("#starRow input").forEach(function (inp) { inp.setAttribute("aria-label", fill(tt.rv_star, fmt(Number(inp.value)))); });
    $("rvMsg").textContent = rvMsgKey ? tt[rvMsgKey] : "";
  }

  // ---------- review form: saves a review that shows on the site straight away ----------
  var rvForm = $("reviewForm"), rvOpen = $("rvOpen"), rvMsgKey = "", rvBusy = false;
  var starLabels = all("#starRow label");
  function rating() { var c = rvForm.querySelector("input[name=rating]:checked"); return c ? Number(c.value) : 0; }
  function lightStars(n) { starLabels.forEach(function (l, i) { l.classList.toggle("lit", i < n); }); }
  function setRvMsg(key, ok) { rvMsgKey = key; var m = $("rvMsg"); m.textContent = key ? t()[key] : ""; m.classList.toggle("ok", !!ok); }
  function showRvForm(open) {
    rvForm.hidden = !open;
    rvOpen.setAttribute("aria-expanded", String(open));
    if (open) { $("rvThanks").hidden = true; $("st1").focus({ preventScroll: true }); rvForm.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "nearest" }); }
  }
  rvOpen.addEventListener("click", function () { showRvForm(rvForm.hidden); });
  $("rvCancel").addEventListener("click", function () { setRvMsg(""); showRvForm(false); rvOpen.focus(); });
  all("#starRow input").forEach(function (inp) {
    inp.addEventListener("change", function () { lightStars(rating()); if (rvMsgKey === "rv_need_rating") setRvMsg(""); });
  });
  starLabels.forEach(function (l, i) {
    l.addEventListener("mouseenter", function () { lightStars(i + 1); });
    l.addEventListener("mouseleave", function () { lightStars(rating()); });
  });
  rvForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (rvBusy || !API) return;
    var els = rvForm.elements, stars = rating();
    var name = els.namedItem("rvname").value.trim(), text = els.namedItem("rvtext").value.trim(), item = els.namedItem("rvitem").value;
    if (!stars) { setRvMsg("rv_need_rating"); $("st1").focus(); return; }
    if (!name) { setRvMsg("rv_need_name"); els.namedItem("rvname").focus(); return; }
    if (text.length < 3) { setRvMsg("rv_need_text"); els.namedItem("rvtext").focus(); return; }
    function done() {
      rvForm.reset(); lightStars(0); setRvMsg("");
      showRvForm(false);
      var th = $("rvThanks"); th.hidden = false; th.focus({ preventScroll: true });
      loadReviews();
    }
    if (els.namedItem("website").value) { done(); return; } // bots fill the hidden field
    rvBusy = true;
    var btn = $("rvSubmit"); btn.disabled = true; btn.textContent = t().rv_sending; setRvMsg("");
    fetch(API.url + "/rest/v1/reviews", {
      method: "POST",
      headers: apiHeaders(true),
      body: JSON.stringify({ name: name.slice(0, 40), rating: stars, item: item || null, message: text.slice(0, 600) })
    }).then(function (r) {
      if (!r.ok) throw new Error(String(r.status));
      done();
    }).catch(function () {
      setRvMsg("rv_error");
    }).then(function () {
      rvBusy = false; btn.disabled = false; btn.textContent = t().rv_submit;
    });
  });

  // ---------- counters ----------
  $("statDesigns").dataset.count = String(items.length);
  var counters = all("[data-count]");
  counters.forEach(function (c) { c._v = Number(c.dataset.count); c._done = true; });
  function drawCounter(c) { c.textContent = fmt(Math.round(c._v)) + (c.dataset.suffix || ""); }
  function runCounters() {
    counters.forEach(function (c) {
      var end = Number(c.dataset.count), t0 = null, dur = 1500;
      function tick(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        c._v = end * (1 - Math.pow(1 - p, 3));
        drawCounter(c);
        if (p < 1) requestAnimationFrame(tick); else c._done = true;
      }
      requestAnimationFrame(tick);
    });
  }
  if (!reduced() && "IntersectionObserver" in window) {
    counters.forEach(function (c) { c._v = 0; c._done = false; });
    var so = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { so.disconnect(); runCounters(); }
    }, { threshold: 0.4 });
    so.observe(doc.querySelector(".stats"));
  }

  // ---------- scroll reveals ----------
  all(".rvg").forEach(function (g) {
    all(":scope > *", g).forEach(function (c, i) {
      c.classList.add("rv");
      c.style.setProperty("--d", Math.min(i, 6) * 80 + "ms");
    });
  });
  var rvEls = all(".rv");
  if ("IntersectionObserver" in window) {
    var ro = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); ro.unobserve(x.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    rvEls.forEach(function (n) { ro.observe(n); });
  } else {
    rvEls.forEach(function (n) { n.classList.add("in"); });
  }

  // ---------- header, menu, parallax ----------
  var header = $("siteTop"), menuBtn = $("menuBtn"), bridal = $("bridal"), ticking = false;
  function onScroll() {
    ticking = false;
    header.classList.toggle("solid", window.scrollY > 40);
    if (!reduced()) {
      var r = bridal.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        var p = r.top + r.height / 2 - window.innerHeight / 2;
        bImg.style.transform = "translate3d(0," + (p * -0.08).toFixed(1) + "px,0) scale(1.2)";
      }
    }
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  window.addEventListener("resize", onScroll);
  function menuLabel() {
    menuBtn.setAttribute("aria-label", t()[header.classList.contains("open") ? "menu_close" : "menu_open"]);
  }
  function setMenu(open) {
    header.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuLabel();
  }
  menuBtn.addEventListener("click", function () { setMenu(!header.classList.contains("open")); });
  all("#nav a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && header.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
  });

  // ---------- enquiry form: builds a WhatsApp message, nothing is sent to any server ----------
  var form = $("enquiryForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var tt = t(), parts = [tt.msg_hi];
    var els = form.elements, name = els.namedItem("custname").value.trim(), item = els.namedItem("garment").value, date = els.namedItem("needby").value;
    if (name) parts.push(fill(tt.msg_name, name));
    parts.push(item ? fill(tt.msg_item, item) : tt.msg_none);
    if (date) parts.push(fill(tt.msg_date, new Date(date + "T00:00").toLocaleDateString(lang === "mr" ? "mr-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" })));
    window.open(waLink(parts.join(" ")), "_blank", "noopener");
  });

  // ---------- render: every language-dependent bit ----------
  function render() {
    var tt = t();
    doc.documentElement.lang = lang;
    all("[data-i18n]").forEach(function (n) {
      var v = tt[n.dataset.i18n] || "";
      if (v.indexOf("<em>") > -1) n.innerHTML = v; else n.textContent = v;
    });
    all("[data-i18n-ph]").forEach(function (n) { n.placeholder = tt[n.dataset.i18nPh] || ""; });
    all("[data-i18n-aria]").forEach(function (n) { n.setAttribute("aria-label", tt[n.dataset.i18nAria] || ""); });
    menuLabel();
    figs.forEach(function (c) {
      var name = nameOf(c.item);
      c.nm.textContent = name;
      c.img.alt = name;
      c.btn.setAttribute("aria-label", name);
      c.ask.href = waLink(fill(tt.ask_msg, name));
      c.ask.setAttribute("aria-label", tt.btn_ask + ": " + name);
    });
    bridalFigs.forEach(function (c) {
      var name = nameOf(c.item);
      c.sp.textContent = name; c.img.alt = name;
    });
    slides.forEach(function (s, i) { slideEls[i].firstChild.alt = slideName(s); });
    $("heroCap").textContent = slides.length ? slideName(slides[cur]) : "";
    all(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    $("addr").textContent = S.address[lang];
    all("[data-wa]").forEach(function (a) { a.href = waLink(tt.wa_msg); a.target = "_blank"; a.rel = "noopener"; });
    $("bridalCta").href = waLink(tt.bridal_wa_msg);
    counters.forEach(function (c) { if (c._done) c._v = Number(c.dataset.count); drawCounter(c); });
    renderPrices();
    renderReviews();
    if (dlg.open) showViewer();
  }

  all("[data-call]").forEach(function (a) { a.href = "tel:+" + S.phone; });
  $("phoneText").textContent = S.phoneDisplay;
  $("footPhone").textContent = S.phoneDisplay;
  $("mapBtn").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.mapsQuery);
  $("mapFrame").src = "https://www.google.com/maps?q=" + encodeURIComponent(S.mapsQuery) + "&output=embed";
  if (S.instagram) { var ig = $("igLink"); ig.href = S.instagram; ig.hidden = false; }

  all(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) {}
      render();
    });
  });

  applyFilter(false);
  loadReviews();
  render();
  onScroll();
})();
