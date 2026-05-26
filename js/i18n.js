(() => {
  const translations = {
    en: {
      nav_features: "Features",
      nav_how: "How It Works",
      nav_privacy: "Privacy",
      nav_download: "Download",

      hero_title: 'Stop Wasting Food.<br>Start <span>Cooking Smart.</span>',
      hero_sub: "MealsMind uses AI to scan your fridge, track expiration dates, and create personalized recipes — so nothing goes to waste.",

      features_label: "Features",
      features_title: "Everything you need in your kitchen",
      features_sub: "Powered by AI, designed to reduce food waste and make cooking effortless.",

      feat1_title: "AI Recipe Generation",
      feat1_desc: "Tell MealsMind what's in your pantry and it creates personalized recipes — prioritizing ingredients about to expire.",
      feat2_title: "Fridge Scanner",
      feat2_desc: "Snap a photo of your fridge or pantry shelf. AI instantly detects every ingredient and adds them to your digital pantry.",
      feat3_title: "Voice Input",
      feat3_desc: 'Just say "milk, eggs, tomatoes" and MealsMind adds them all. The fastest way to update your pantry.',
      feat4_title: "Expiry Alerts",
      feat4_desc: "Get notified before food expires. MealsMind reminds you to use ingredients before they go to waste.",
      feat5_title: "Nutrition Tracking",
      feat5_desc: "Every AI-generated recipe comes with full calorie and macro breakdowns — protein, carbs, and fats.",
      feat6_title: "Community Recipes",
      feat6_desc: "Browse and share recipes with the MealsMind community. Like, save, and cook what others are making.",

      how_label: "How It Works",
      how_title: "From fridge to table in 3 steps",
      how_sub: "No meal planning stress. No food waste. Just smart cooking.",

      step1_title: "Scan or Add",
      step1_desc: "Take a photo of your fridge, use voice input, or manually add ingredients to your digital pantry.",
      step2_title: "Generate Recipe",
      step2_desc: "AI creates a recipe using your ingredients — prioritizing what's about to expire. Customized to your diet and equipment.",
      step3_title: "Cook & Enjoy",
      step3_desc: "Follow step-by-step instructions, track nutrition, and share your creations with the community.",

      cta_title: "Ready to cook smarter?",
      cta_sub: "Download MealsMind for free and turn your pantry into amazing meals — powered by AI.",

      footer_rights: "All rights reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms of Service",
      footer_delete: "Delete Account",
    },

    tr: {
      nav_features: "Özellikler",
      nav_how: "Nasıl Çalışır",
      nav_privacy: "Gizlilik",
      nav_download: "İndir",

      hero_title: 'Gıda İsrafını Durdurun.<br><span>Akıllı Pişirin.</span>',
      hero_sub: "MealsMind, buzdolabınızı tarar, son kullanma tarihlerini takip eder ve kişiselleştirilmiş tarifler oluşturur — hiçbir şey israf olmasın.",

      features_label: "Özellikler",
      features_title: "Mutfağınız için ihtiyacınız olan her şey",
      features_sub: "Yapay zeka destekli, gıda israfını azaltmak ve yemek yapmayı kolaylaştırmak için tasarlandı.",

      feat1_title: "AI Tarif Oluşturma",
      feat1_desc: "MealsMind'a dolabınızdakileri söyleyin, son kullanma tarihi yaklaşan malzemeleri önceliklendirerek kişisel tarifler oluştursun.",
      feat2_title: "Buzdolabı Tarayıcı",
      feat2_desc: "Buzdolabınızın veya dolabınızın fotoğrafını çekin. AI anında tüm malzemeleri tespit edip dijital kilerinize eklesin.",
      feat3_title: "Sesli Giriş",
      feat3_desc: '"Süt, yumurta, domates" deyin ve MealsMind hepsini eklesin. Kilerinizi güncellemenin en hızlı yolu.',
      feat4_title: "SKT Uyarıları",
      feat4_desc: "Gıdaların süresi dolmadan bildirim alın. MealsMind, malzemeleri israf olmadan kullanmanızı hatırlatır.",
      feat5_title: "Besin Takibi",
      feat5_desc: "Her AI tarifi tam kalori ve makro dökümüyle gelir — protein, karbonhidrat ve yağ.",
      feat6_title: "Topluluk Tarifleri",
      feat6_desc: "MealsMind topluluğuyla tarif paylaşın ve keşfedin. Beğenin, kaydedin ve başkalarının yaptıklarını pişirin.",

      how_label: "Nasıl Çalışır",
      how_title: "Buzdolabından sofraya 3 adımda",
      how_sub: "Yemek planı stresi yok. Gıda israfı yok. Sadece akıllı yemek yapma.",

      step1_title: "Tara veya Ekle",
      step1_desc: "Buzdolabınızın fotoğrafını çekin, sesli giriş kullanın veya malzemeleri manuel olarak dijital kilerinize ekleyin.",
      step2_title: "Tarif Oluştur",
      step2_desc: "AI, malzemelerinizi kullanarak tarif oluşturur — süresi dolmak üzere olanları önceliklendirir. Diyetinize ve ekipmanlarınıza göre özelleştirilir.",
      step3_title: "Pişir ve Tadını Çıkar",
      step3_desc: "Adım adım talimatları takip edin, besin değerlerini izleyin ve yaratımlarınızı toplulukla paylaşın.",

      cta_title: "Daha akıllı pişirmeye hazır mısınız?",
      cta_sub: "MealsMind'ı ücretsiz indirin ve kilerinizi harika yemeklere dönüştürün — yapay zeka destekli.",

      footer_rights: "Tüm hakları saklıdır.",
      footer_privacy: "Gizlilik Politikası",
      footer_terms: "Kullanım Şartları",
      footer_delete: "Hesabı Sil",
    },
  };

  const STORAGE_KEY = "mealsmind_lang";

  function getPreferredLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && translations[stored]) return stored;
    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    return translations[browserLang] ? browserLang : "en";
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    updateToggleUI(lang);
  }

  function updateToggleUI(lang) {
    const flag = lang === "tr" ? "🇹🇷" : "🇬🇧";
    const code = lang === "tr" ? "TR" : "EN";

    document.querySelectorAll("#langFlag, #langFlagMobile").forEach(
      (el) => (el.textContent = flag)
    );
    const codeEl = document.getElementById("langCode");
    if (codeEl) codeEl.textContent = code;
  }

  function toggleLang() {
    const current = localStorage.getItem(STORAGE_KEY) || getPreferredLang();
    const next = current === "tr" ? "en" : "tr";
    applyLang(next);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getPreferredLang());

    document.querySelectorAll("#langToggle, #langToggleMobile").forEach(
      (btn) => btn.addEventListener("click", toggleLang)
    );
  });

  window.siteI18n = { applyLang, getPreferredLang, toggleLang };
})();
