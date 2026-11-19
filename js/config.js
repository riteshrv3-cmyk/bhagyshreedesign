// Edit this file to update contact details and photos. Nothing else needs to change.
window.SITE = {
  phone: "917823006185",   // country code + number, digits only (used for call and WhatsApp)
  phoneDisplay: "+91 78230 06185",
  address: {
    en: "Sai Park Society, Opposite Raisoni College, Wagholi, Pune 412207",
    mr: "साई पार्क सोसायटी, रायसोनी कॉलेजसमोर, वाघोली, पुणे ४१२२०७"
  },
  // Google cannot find "Sai Park Society" by name yet, so the map points at Raisoni College (the studio is opposite).
  // After the Google Business Profile is verified, put the business name here, e.g. "Bhagyshree Design, Wagholi".
  mapsQuery: "Raisoni College Wagholi Pune",
  instagram: "",           // full profile link once the account exists, e.g. https://instagram.com/bhagyshreedesign
  // Photos in the images folder. caption = key in js/i18n.js (the design name). group = blouse | lehenga | dress | bag. w/h = pixel size.
  gallery: [
    { file: "green-blouse-gold-back.jpg", caption: "g2", group: "blouse", w: 907, h: 1400 },
    { file: "pink-saree-green-blouse.jpg", caption: "g3", group: "blouse", w: 652, h: 1400 },
    { file: "purple-brocade-panel-blouse.jpg", caption: "g6", group: "blouse", w: 1400, h: 1027 },
    { file: "gold-stripe-blouse-back.jpg", caption: "g8", group: "blouse", w: 1400, h: 1400 },
    { file: "lavender-sweetheart-puff-sleeve-blouse-branded.webp", caption: "g10", group: "blouse", w: 735, h: 1105 }
  ],
  // Catalog photos in images/catalog/. group = blouse | lehenga | dress | bag. en/mr = item name in each language.
  catalog: [
    { file: "catalog-01-maroon-anarkali-set.jpg", group: "dress", en: "Maroon printed anarkali with dupatta", mr: "मरून प्रिंटेड अनारकली आणि दुपट्टा" },
    { file: "catalog-02-plum-green-zari-blouse.jpg", group: "blouse", en: "Plum blouse with green zari border", mr: "प्लम ब्लाउज, हिरवी जरी बॉर्डर" },
    { file: "catalog-03-lavender-bird-lehenga.jpg", group: "lehenga", en: "Lavender lehenga with bird embroidery", mr: "लॅव्हेंडर लेहेंगा, पक्षी एम्ब्रॉयडरी" },
    { file: "catalog-04-lilac-pearl-lehenga.jpg", group: "lehenga", en: "Lilac lehenga with pearl embroidery", mr: "लिलाक लेहेंगा, मोत्यांची एम्ब्रॉयडरी" },
    { file: "catalog-05-green-potli-bag.jpg", group: "bag", en: "Green silk potli bag", mr: "हिरवी सिल्क पोटली बॅग" },
    { file: "catalog-06-jute-embroidered-bag.jpg", group: "bag", en: "Hand-embroidered jute bag", mr: "हाताने एम्ब्रॉयडरी केलेली ज्यूट बॅग" },
    { file: "catalog-07-bottle-green-puff-blouse.jpg", group: "blouse", en: "Bottle green puff-sleeve blouse", mr: "बॉटल ग्रीन पफ-स्लीव्ह ब्लाउज" },
    { file: "catalog-08-purple-checked-blouse.jpg", group: "blouse", en: "Purple checked blouse with teal zari", mr: "जांभळा चेक ब्लाउज, टील जरी" },
    { file: "catalog-10-maroon-brocade-sheer-back.jpg", group: "blouse", en: "Maroon brocade blouse with sheer back", mr: "मरून ब्रोकेड ब्लाउज, सिअर बॅक" },
    { file: "catalog-11-pink-bandhani-tassel-blouse.jpg", group: "blouse", en: "Pink bandhani blouse with tassel back", mr: "पिंक बांधणी ब्लाउज, टॅसल बॅक" },
    { file: "catalog-12-magenta-embroidered-blouse.jpg", group: "blouse", en: "Magenta blouse with gold embroidered sleeves", mr: "मॅजेंटा ब्लाउज, सोनेरी एम्ब्रॉयडरी स्लीव्ह" },
    { file: "catalog-14-green-zari-back-blouse.jpg", group: "blouse", en: "Green blouse with zari back border", mr: "हिरवा ब्लाउज, जरी बॅक बॉर्डर" },
    { file: "catalog-15-mustard-keyhole-tie-blouse.jpg", group: "blouse", en: "Mustard brocade blouse with tie-up back", mr: "मस्टर्ड ब्रोकेड ब्लाउज, टाय-अप बॅक" },
    { file: "catalog-16-green-heart-keyhole-blouse.jpg", group: "blouse", en: "Green blouse with heart keyhole back", mr: "हिरवा ब्लाउज, हार्ट कीहोल बॅक" },
    { file: "catalog-17-orange-zigzag-back-blouse.jpg", group: "blouse", en: "Orange blouse with zigzag-edged back", mr: "ऑरेंज ब्लाउज, झिगझॅग बॅक" },
    { file: "catalog-18-purple-embroidered-blouse.jpg", group: "blouse", en: "Purple embroidered blouse with cross-tie back", mr: "जांभळा एम्ब्रॉयडरी ब्लाउज, क्रॉस-टाय बॅक" },
    { file: "catalog-19-olive-pearl-brocade-blouse.jpg", group: "blouse", en: "Olive brocade blouse with pearl neckline", mr: "ऑलिव्ह ब्रोकेड ब्लाउज, मोत्यांची नेकलाइन" },
    { file: "catalog-20-maroon-scalloped-tie-blouse.jpg", group: "blouse", en: "Maroon blouse with scalloped back tie", mr: "मरून ब्लाउज, स्कॅलप्ड बॅक टाय" }
  ],
  // Full-width photos at the top of the page. src = path from the site root. Use either caption (key in js/i18n.js) or en/mr.
  heroSlides: [
    { src: "images/catalog/catalog-12-magenta-embroidered-blouse.jpg", en: "Magenta blouse with gold embroidered sleeves", mr: "मॅजेंटा ब्लाउज, सोनेरी एम्ब्रॉयडरी स्लीव्ह" },
    { src: "images/catalog/catalog-03-lavender-bird-lehenga.jpg", en: "Lavender lehenga with bird embroidery", mr: "लॅव्हेंडर लेहेंगा, पक्षी एम्ब्रॉयडरी" },
    { src: "images/green-blouse-gold-back.jpg", caption: "g2" },
    { src: "images/catalog/catalog-10-maroon-brocade-sheer-back.jpg", en: "Maroon brocade blouse with sheer back", mr: "मरून ब्रोकेड ब्लाउज, सिअर बॅक" },
    { src: "images/catalog/catalog-01-maroon-anarkali-set.jpg", en: "Maroon printed anarkali with dupatta", mr: "मरून प्रिंटेड अनारकली आणि दुपट्टा" }
  ],
  // Price guide. Put a number or text such as "500" to show "From ₹500". Empty shows "Ask for price".
  prices: { blouse: "", designer: "", suit: "", lehenga: "", alter: "" },
  // Link to the Google reviews page. Empty hides the Google button.
  googleReviewsUrl: "",
  // Real customer reviews only, e.g. { name: "Priya", text: "Perfect fitting.", stars: 5 }. Empty hides the cards.
  reviews: [],
  // Reviews customers write on the site. They are saved in the Lovable database and shown straight away.
  // The key below is the public browser key: it can only add reviews and read them, never change or delete them.
  reviewsApi: {
    url: "https://qezncptmpyktdubyyugq.supabase.co",
    key: "sb_publishable_RdF8Ut1rcFSSH9vwdXQnYA_TGI8XF6j"
  }
};
