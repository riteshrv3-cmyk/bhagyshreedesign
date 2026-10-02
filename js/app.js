(function () {
  var S = window.SITE;
  var T = {
    en: {
      nav_work: "Work", nav_services: "Services", nav_about: "About", nav_visit: "Visit",
      hero_kicker: "Ladies tailor and designer, Wagholi, Pune",
      hero_title: "Made to fit. <em>Made by hand.</em>",
      hero_sub: "Blouses, suits, kurtis, lehengas and gowns, cut and stitched to your measurements. Over 20 years of trusted work.",
      btn_wa: "WhatsApp us", btn_call: "Call now", btn_map: "Open in Maps",
      f1: "20+ years", f2: "Perfect fitting", f3: "On-time delivery", f4: "Fair prices",
      work_title: "Recent work", work_note: "A few pieces from our studio. Tap a photo to see it larger.",
      g1: "Silk lehenga with brocade jacket", g2: "Brocade blouse, gold lace open back", g3: "Green brocade blouse with silk saree",
      g4: "Satin blouse with tie-up back", g5: "Embroidered blouse with net sleeves", g6: "Brocade panel blouse with potli buttons",
      g7: "Net puff sleeve with sequin detail", g8: "Keyhole back blouse in zari stripes",
      services_title: "What we stitch", services_note: "Bring your fabric and an idea, or a photo of a design you like.",
      s1_t: "Blouses", s1_d: "Saree blouses, designer backs, bridal and festive blouses.",
      s2_t: "Salwar suits and kurtis", s2_d: "Punjabi suits, kurtis and dress material, stitched in your style.",
      s3_t: "Lehengas and gowns", s3_d: "Bridal, party and festive wear made to your measurements.",
      s4_t: "Alterations and fittings", s4_d: "Resizing, repairs and finishing for clothes you already own.",
      s5_t: "Ready designs", s5_d: "Pieces made in our own designs. Ask on WhatsApp what is available.",
      about_title: "Twenty years of fitting", about_quote: "“A good blouse is not about the fabric. It is about the fit.”",
      about_text: "Bhagyshree Design is a home studio in Wagholi, Pune. For more than 20 years we have stitched for the women of our area, from everyday suits to wedding lehengas. Every piece is measured, cut and finished by hand, and delivered when we promise.",
      w1_t: "Perfect fitting", w1_d: "Measured with care and adjusted until it sits right.",
      w2_t: "Our own designs", w2_d: "New necklines, backs and sleeves, or we stitch the design you bring.",
      w3_t: "On time, every time", w3_d: "Your outfit is ready before the function, as promised.",
      w4_t: "Affordable and friendly", w4_d: "Fair prices and a personal touch. Message us for a quote.",
      steps_title: "How to order",
      st1_t: "Send a message", st1_d: "WhatsApp us a photo of the design you want, or just tell us the occasion.",
      st2_t: "Come for measurement", st2_d: "Visit our studio with your fabric. We take measurements and confirm the price and date.",
      st3_t: "Collect your outfit", st3_d: "Try it on, we fine-tune the fitting, and it is ready on the date we promised.",
      visit_title: "Visit our studio", visit_sub: "Open every day. Find us in Sai Park Society, opposite Raisoni College, Wagholi.",
      visit_addr: "Address", visit_hours: "Hours", visit_phone: "Phone and WhatsApp",
      hours: "Every day, 10 am to 8 pm",
      wa_msg: "Hello Bhagyshree Design, I would like to get something stitched.",
      btn_ask: "I want this design",
      ask_msg: "Hello Bhagyshree Design, I like this design on your website: {v}. Can you stitch it for me?",
      bar_call: "Call", bar_wa: "WhatsApp",
      form_title: "Ask on WhatsApp", form_note: "Fill this in and tap the button. WhatsApp opens with your message ready, you only press send.",
      form_name: "Your name", form_name_ph: "e.g. Priya", form_item: "What to stitch", opt_choose: "Choose one", opt_other: "Something else",
      form_date: "Needed by", form_send: "Send on WhatsApp",
      form_small: "Nothing is saved on this website. Your message goes straight to our WhatsApp.",
      msg_hi: "Hello Bhagyshree Design.", msg_name: "My name is {v}.", msg_item: "I want to get this stitched: {v}.",
      msg_none: "I would like to get something stitched.", msg_date: "I need it by {v}.",
      footer: "Ladies tailor and designer, Wagholi, Pune"
    },
    mr: {
      nav_work: "काम", nav_services: "सेवा", nav_about: "आमच्याविषयी", nav_visit: "भेट द्या",
      hero_kicker: "लेडीज टेलर आणि डिझायनर, वाघोली, पुणे",
      hero_title: "अचूक फिटिंग. <em>हाताने शिवलेले.</em>",
      hero_sub: "ब्लाउज, सूट, कुर्ती, लेहेंगा आणि गाऊन, तुमच्या मापाप्रमाणे कापून शिवलेले. २० वर्षांहून अधिक विश्वासाचे काम.",
      btn_wa: "WhatsApp करा", btn_call: "कॉल करा", btn_map: "नकाशा उघडा",
      f1: "२०+ वर्षे", f2: "अचूक फिटिंग", f3: "वेळेवर डिलिव्हरी", f4: "योग्य दर",
      work_title: "आमचे काम", work_note: "आमच्या स्टुडिओतील काही कपडे. मोठा फोटो पाहण्यासाठी फोटोवर टॅप करा.",
      g1: "ब्रोकेड जॅकेटसह सिल्क लेहेंगा", g2: "गोल्ड लेस ओपन बॅक ब्रोकेड ब्लाउज", g3: "सिल्क साडीसाठी हिरवा ब्रोकेड ब्लाउज",
      g4: "टाय-अप बॅक सॅटिन ब्लाउज", g5: "नेट स्लीव्हसह एम्ब्रॉयडरी ब्लाउज", g6: "पोटली बटण ब्रोकेड पॅनल ब्लाउज",
      g7: "सिक्विन डिटेलसह नेट पफ स्लीव्ह", g8: "जरी पट्ट्यांचा कीहोल बॅक ब्लाउज",
      services_title: "आम्ही काय शिवतो", services_note: "तुमचे कापड आणि कल्पना घेऊन या, किंवा आवडलेल्या डिझाइनचा फोटो दाखवा.",
      s1_t: "ब्लाउज", s1_d: "साडी ब्लाउज, डिझायनर बॅक, ब्रायडल आणि सणासुदीचे ब्लाउज.",
      s2_t: "सलवार सूट आणि कुर्ती", s2_d: "पंजाबी सूट, कुर्ती आणि ड्रेस मटेरियल तुमच्या आवडीप्रमाणे.",
      s3_t: "लेहेंगा आणि गाऊन", s3_d: "ब्रायडल, पार्टी आणि सणासुदीचे कपडे तुमच्या मापाप्रमाणे.",
      s4_t: "अल्टरेशन आणि फिटिंग", s4_d: "तुमच्या कपड्यांचे माप बदलणे, दुरुस्ती आणि फिनिशिंग.",
      s5_t: "रेडी डिझाइन", s5_d: "आमच्या स्वतःच्या डिझाइनचे कपडे. काय उपलब्ध आहे ते WhatsApp वर विचारा.",
      about_title: "वीस वर्षांचे फिटिंग", about_quote: "“चांगला ब्लाउज कापडामुळे नाही, फिटिंगमुळे सुंदर दिसतो.”",
      about_text: "भाग्यश्री डिझाइन हा वाघोली, पुणे येथील होम स्टुडिओ आहे. २० वर्षांहून अधिक काळ आम्ही परिसरातील महिलांसाठी रोजच्या सूटपासून लग्नाच्या लेहेंग्यापर्यंत कपडे शिवत आहोत. प्रत्येक कपडा मोजून, कापून आणि हाताने फिनिश करून ठरलेल्या वेळेत दिला जातो.",
      w1_t: "अचूक फिटिंग", w1_d: "काळजीपूर्वक माप, आणि योग्य बसेपर्यंत बदल.",
      w2_t: "स्वतःचे डिझाइन", w2_d: "नवीन नेकलाइन, बॅक आणि स्लीव्ह, किंवा तुम्ही आणलेले डिझाइन.",
      w3_t: "नेहमी वेळेवर", w3_d: "कार्यक्रमाच्या आधी, ठरल्याप्रमाणे तुमचा ड्रेस तयार.",
      w4_t: "परवडणारे दर, आपुलकीची सेवा", w4_d: "योग्य दर आणि आपुलकीने सेवा. दरासाठी मेसेज करा.",
      steps_title: "ऑर्डर कशी द्यावी",
      st1_t: "मेसेज करा", st1_d: "हवे असलेल्या डिझाइनचा फोटो WhatsApp करा, किंवा फक्त कार्यक्रम सांगा.",
      st2_t: "मापासाठी या", st2_d: "कापड घेऊन स्टुडिओत या. आम्ही माप घेऊन दर आणि तारीख ठरवू.",
      st3_t: "ड्रेस घेऊन जा", st3_d: "घालून बघा, फिटिंग नीट करू, आणि ठरलेल्या तारखेला ड्रेस तयार.",
      visit_title: "स्टुडिओला भेट द्या", visit_sub: "रोज सुरू. आम्ही साई पार्क सोसायटी, रायसोनी कॉलेजसमोर, वाघोली येथे आहोत.",
      visit_addr: "पत्ता", visit_hours: "वेळ", visit_phone: "फोन आणि WhatsApp",
      hours: "रोज सकाळी १० ते रात्री ८",
      wa_msg: "नमस्कार भाग्यश्री डिझाइन, मला कपडे शिवून घ्यायचे आहेत.",
      btn_ask: "हे डिझाइन हवे आहे",
      ask_msg: "नमस्कार भाग्यश्री डिझाइन, मला तुमच्या वेबसाइटवरील हे डिझाइन आवडले: {v}. हे मला शिवून मिळेल का?",
      bar_call: "कॉल", bar_wa: "WhatsApp",
      form_title: "WhatsApp वर विचारा", form_note: "हे भरा आणि बटण दाबा. तुमचा मेसेज तयार होऊन WhatsApp उघडेल, फक्त सेंड दाबा.",
      form_name: "तुमचे नाव", form_name_ph: "उदा. प्रिया", form_item: "काय शिवायचे आहे", opt_choose: "निवडा", opt_other: "इतर काही",
      form_date: "कधीपर्यंत हवे", form_send: "WhatsApp वर पाठवा",
      form_small: "या वेबसाइटवर काहीही साठवले जात नाही. तुमचा मेसेज थेट आमच्या WhatsApp वर जातो.",
      msg_hi: "नमस्कार भाग्यश्री डिझाइन.", msg_name: "माझे नाव {v}.", msg_item: "मला हे शिवून घ्यायचे आहे: {v}.",
      msg_none: "मला कपडे शिवून घ्यायचे आहेत.", msg_date: "मला हे {v} पर्यंत हवे आहे.",
      footer: "लेडीज टेलर आणि डिझायनर, वाघोली, पुणे"
    }
  };

  var lang = "en";
  try { if (localStorage.getItem("lang") === "mr") lang = "mr"; } catch (e) {}

  function waLink(text) { return "https://wa.me/" + S.phone + "?text=" + encodeURIComponent(text); }
  function fill(tpl, v) { return tpl.replace("{v}", v); }

  // gallery: every photo gets its own "I want this design" WhatsApp button
  var g = document.getElementById("gallery");
  S.gallery.forEach(function (p) {
    var f = document.createElement("figure");
    f.innerHTML = '<div class="frame"><img loading="lazy" decoding="async" src="images/' + p.file + '" width="' + p.w + '" height="' + p.h + '" alt=""></div>' +
      '<figcaption data-i18n="' + p.caption + '"></figcaption>' +
      '<a class="ask" data-ask target="_blank" rel="noopener" data-i18n="btn_ask"></a>';
    g.appendChild(f);
  });

  // photo viewer
  var dlg = document.getElementById("viewer");
  g.addEventListener("click", function (e) {
    var fig = e.target.closest("figure");
    if (!fig || e.target.closest("a") || !dlg.showModal) return;
    var img = fig.querySelector("img");
    dlg.querySelector("img").src = img.src;
    dlg.querySelector("img").alt = img.alt;
    dlg.querySelector("p").textContent = fig.querySelector("figcaption").textContent;
    dlg.querySelector(".ask").href = fig.querySelector("[data-ask]").href;
    dlg.showModal();
  });
  dlg.addEventListener("click", function (e) { if (e.target === dlg || e.target.className === "close") dlg.close(); });

  // enquiry form: builds a WhatsApp message, nothing is sent to any server
  var form = document.getElementById("enquiryForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var t = T[lang], parts = [t.msg_hi];
    var el = form.elements, name = el.namedItem("custname").value.trim(), item = el.namedItem("garment").value, date = el.namedItem("needby").value;
    if (name) parts.push(fill(t.msg_name, name));
    parts.push(item ? fill(t.msg_item, item) : t.msg_none);
    if (date) parts.push(fill(t.msg_date, new Date(date + "T00:00").toLocaleDateString(lang === "mr" ? "mr-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" })));
    window.open(waLink(parts.join(" ")), "_blank", "noopener");
  });

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t[el.dataset.i18n] || "";
      if (v.indexOf("<em>") > -1) el.innerHTML = v; else el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.placeholder = t[el.dataset.i18nPh] || ""; });
    document.querySelectorAll(".gallery figure").forEach(function (f) {
      var caption = f.querySelector("figcaption").textContent;
      f.querySelector("img").alt = caption;
      f.querySelector("[data-ask]").href = waLink(fill(t.ask_msg, caption));
    });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.getElementById("addr").textContent = S.address[lang];
    document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = waLink(t.wa_msg); a.target = "_blank"; a.rel = "noopener"; });
  }

  document.querySelectorAll("[data-call]").forEach(function (a) { a.href = "tel:+" + S.phone; });
  document.getElementById("phoneText").textContent = S.phoneDisplay;
  document.getElementById("mapBtn").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.mapsQuery);
  document.getElementById("mapFrame").src = "https://www.google.com/maps?q=" + encodeURIComponent(S.mapsQuery) + "&output=embed";
  if (S.instagram) { var ig = document.getElementById("igLink"); ig.href = S.instagram; ig.hidden = false; }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
  });
  render();
})();
