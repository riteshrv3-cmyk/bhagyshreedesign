(function () {
  var S = window.SITE;
  var T = {
    en: {
      hero_title: "Perfect fit. Beautiful design.",
      hero_sub: "Custom blouses, suits, kurtis, lehengas and gowns, stitched with care in Wagholi, Pune. 20+ years of trusted experience.",
      btn_wa: "Chat on WhatsApp", btn_call: "Call now", btn_map: "Open map",
      services_eyebrow: "What we make", services_title: "Stitched just for you",
      s1_t: "Blouses", s1_d: "Saree blouses, designer and bridal blouses with a clean, exact fit.",
      s2_t: "Salwar suits and kurtis", s2_d: "Punjabi suits, kurtis and dress material stitching in your style.",
      s3_t: "Lehengas and gowns", s3_d: "Bridal, party and festive wear made to your measurements.",
      s4_t: "Alterations and ready-made", s4_d: "Fitting, repairs and ready-made designs at friendly prices.",
      why_eyebrow: "Why Bhagyshree Design", why_title: "What our customers value",
      w1_t: "Perfect fitting", w1_d: "Every piece is measured and finished to sit just right.",
      w2_t: "Our own designs", w2_d: "Original patterns and ideas, or we stitch your design.",
      w3_t: "On-time delivery", w3_d: "Your outfit is ready when we promised, for the function.",
      w4_t: "Affordable and friendly", w4_d: "Fair prices and a warm, personal touch. Message us for a quote.",
      about_badge: "20+ years of experience", about_title: "A tailor you can trust",
      about_text: "Bhagyshree Design is a home studio in Wagholi, Pune. For over 20 years we have been stitching outfits for the women of the area, from everyday suits to bridal lehengas. Come with your fabric and an idea, and we will make it fit you perfectly.",
      work_eyebrow: "Our work", work_title: "Recent designs",
      photo_soon: "Photo coming soon",
      visit_eyebrow: "Visit us", visit_title: "Come to our studio",
      visit_addr: "Address", visit_hours: "Hours",
      addr_default: "Wagholi, Pune. Message us for the exact address.",
      footer: "Bhagyshree Design, Wagholi, Pune."
    },
    mr: {
      hero_title: "अचूक फिटिंग. सुंदर डिझाइन.",
      hero_sub: "वाघोली, पुणे येथे ब्लाउज, सूट, कुर्ती, लेहेंगा आणि गाऊन, काळजीपूर्वक शिवलेले. २० वर्षांहून अधिक विश्वासाचा अनुभव.",
      btn_wa: "WhatsApp वर बोला", btn_call: "आत्ताच कॉल करा", btn_map: "नकाशा उघडा",
      services_eyebrow: "आम्ही काय शिवतो", services_title: "फक्त तुमच्यासाठी शिवलेले",
      s1_t: "ब्लाउज", s1_d: "साडी ब्लाउज, डिझायनर आणि ब्रायडल ब्लाउज, अचूक फिटिंगसह.",
      s2_t: "सलवार सूट आणि कुर्ती", s2_d: "पंजाबी सूट, कुर्ती आणि ड्रेस मटेरियल तुमच्या आवडीप्रमाणे.",
      s3_t: "लेहेंगा आणि गाऊन", s3_d: "ब्रायडल, पार्टी आणि सणासुदीचे कपडे तुमच्या मापाप्रमाणे.",
      s4_t: "अल्टरेशन आणि रेडीमेड", s4_d: "फिटिंग, दुरुस्ती आणि रेडीमेड डिझाइन परवडणाऱ्या दरात.",
      why_eyebrow: "भाग्यश्री डिझाइन का?", why_title: "ग्राहकांना काय आवडते",
      w1_t: "अचूक फिटिंग", w1_d: "प्रत्येक कपडा मोजून आणि नीट फिनिशिंग करून शिवला जातो.",
      w2_t: "स्वतःचे डिझाइन", w2_d: "नवीन पॅटर्न आणि कल्पना, किंवा तुमचे डिझाइन आम्ही शिवतो.",
      w3_t: "वेळेवर डिलिव्हरी", w3_d: "कार्यक्रमासाठी ठरलेल्या वेळेतच तुमचा ड्रेस तयार.",
      w4_t: "परवडणारे दर, आपुलकीची सेवा", w4_d: "योग्य दर आणि आपुलकीने सेवा. दरासाठी मेसेज करा.",
      about_badge: "२०+ वर्षांचा अनुभव", about_title: "विश्वासाची टेलर",
      about_text: "भाग्यश्री डिझाइन हा वाघोली, पुणे येथील होम स्टुडिओ आहे. २० वर्षांहून अधिक काळ आम्ही परिसरातील महिलांसाठी रोजच्या सूटपासून ब्रायडल लेहेंग्यापर्यंत कपडे शिवत आहोत. तुमचे कापड आणि कल्पना घेऊन या, फिटिंग अगदी अचूक होईल.",
      work_eyebrow: "आमचे काम", work_title: "नुकतीच केलेली डिझाइन",
      photo_soon: "फोटो लवकरच",
      visit_eyebrow: "भेट द्या", visit_title: "आमच्या स्टुडिओला या",
      visit_addr: "पत्ता", visit_hours: "वेळ",
      addr_default: "वाघोली, पुणे. अचूक पत्त्यासाठी मेसेज करा.",
      footer: "भाग्यश्री डिझाइन, वाघोली, पुणे."
    }
  };

  var lang = "en";
  try { lang = localStorage.getItem("lang") === "mr" ? "mr" : "en"; } catch (e) {}

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t[el.dataset.i18n] || ""; });
    document.querySelectorAll(".lang button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.lang === lang)); });
    document.getElementById("addr").textContent = S.addressLine || t.addr_default;
    document.getElementById("hours").textContent = S.hours[lang];
    document.querySelectorAll(".ph").forEach(function (p) { p.textContent = t.photo_soon; });
  }

  // contact links
  var msg = encodeURIComponent("Hello Bhagyshree Design, I would like to know more about stitching.");
  document.querySelectorAll("[data-wa]").forEach(function (a) { if (S.phone) { a.href = "https://wa.me/" + S.phone + "?text=" + msg; a.target = "_blank"; a.rel = "noopener"; } });
  document.querySelectorAll("[data-call]").forEach(function (a) { if (S.phone) a.href = "tel:+" + S.phone; });
  document.getElementById("mapBtn").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(S.addressLine || S.mapsQuery);
  if (S.instagram) { var ig = document.getElementById("igLink"); ig.href = S.instagram; ig.hidden = false; }

  // gallery
  var g = document.getElementById("gallery");
  if (S.gallery.length) {
    S.gallery.forEach(function (f) { var i = document.createElement("img"); i.src = "photos/" + f; i.alt = "Bhagyshree Design work"; i.loading = "lazy"; g.appendChild(i); });
  } else {
    for (var n = 0; n < 6; n++) { var d = document.createElement("div"); d.className = "ph"; g.appendChild(d); }
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { lang = b.dataset.lang; try { localStorage.setItem("lang", lang); } catch (e) {} render(); });
  });
  render();
})();
