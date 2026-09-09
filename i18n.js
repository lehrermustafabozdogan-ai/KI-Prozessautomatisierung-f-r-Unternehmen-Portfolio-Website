// Client-side translations for the one-pager. Keys map to data-i18n
// attributes in index.html. German is the source language.
const translations = {
  de: {
    "common.ctaPrimary": "Kostenloses Erstgespräch",
    "common.statusActive": "Aktiv",

    "nav.services": "Leistungen",
    "nav.about": "Über mich",
    "nav.references": "Beispiele",
    "nav.contact": "Kontakt",
    "nav.toggleLabel": "Menü öffnen",

    "hero.eyebrow": "KI & Automatisierung für Unternehmen",
    "hero.tagline": "KI & Prozessautomatisierung für Unternehmen",
    "hero.text": "Ich helfe Unternehmen, wiederkehrende Aufgaben zu automatisieren und KI sinnvoll in bestehende Abläufe zu integrieren — weniger manuelle Arbeit, weniger Fehler, mehr Zeit für das Wesentliche.",
    "hero.ctaSecondary": "Leistungen ansehen",

    "ticker.label": "Werkzeuge, mit denen ich arbeite",
    "ticker.restApis": "REST-Schnittstellen",

    "services.heading": "Leistungen",
    "services.intro": "Vier Bereiche, in denen Automatisierung den größten Unterschied macht.",
    "services.tabAutomation": "Prozessautomatisierung",
    "services.tabAi": "KI & Chatbots",
    "services.tabData": "Daten & Reports",
    "services.tabCustom": "Individuelle Integrationen",

    "services.automation.desc": "Wiederkehrende Abläufe mit n8n oder Zapier verbinden und automatisieren.",
    "services.automation.check1": "Wiederkehrende Aufgaben ohne manuellen Aufwand erledigen",
    "services.automation.check2": "Systeme wie E-Mail, CRM und Tabellen automatisch verbinden",
    "services.automation.check3": "Fehler durch manuelle Dateneingabe vermeiden",
    "services.automation.check4": "Benachrichtigungen und Freigaben automatisch auslösen",
    "services.automation.workflowTitle": "Rechnungs-Workflow",
    "services.automation.workflowMeta": "Ausgelöst durch: neue E-Mail",
    "services.automation.step1": "Trigger erkannt",
    "services.automation.step2": "Daten werden verarbeitet",
    "services.automation.step3": "Aktion wird ausgeführt",
    "services.automation.step4": "Team wird benachrichtigt",

    "services.ai.desc": "KI-gestützte Assistenten für Kundenservice oder interne Nutzung.",
    "services.ai.check1": "Kundenanfragen automatisch und rund um die Uhr beantworten",
    "services.ai.check2": "Häufige Fragen sofort lösen, komplexe Fälle weiterleiten",
    "services.ai.check3": "KI an Ihre eigenen Daten und Tools anbinden",
    "services.ai.check4": "Nahtlose Übergabe an Ihr Team, wenn nötig",
    "services.ai.workflowTitle": "Support-Assistent",
    "services.ai.workflowMeta": "Kanal: Website-Chat",
    "services.ai.step1": "Anfrage eingegangen",
    "services.ai.step2": "KI analysiert Anliegen",
    "services.ai.step3": "Antwort wird generiert",
    "services.ai.step4": "Bei Bedarf an Team übergeben",

    "services.data.desc": "Automatisch aktualisierte Reports und Dashboards statt manueller Excel-Arbeit.",
    "services.data.check1": "Kennzahlen aus mehreren Quellen automatisch zusammenführen",
    "services.data.check2": "Reports pünktlich und ohne manuelle Excel-Arbeit erstellen",
    "services.data.check3": "Dashboards immer aktuell halten",
    "services.data.check4": "Zeit für Analyse statt Datensammlung gewinnen",
    "services.data.workflowTitle": "Wochenreport",
    "services.data.workflowMeta": "Quellen: 3 Systeme",
    "services.data.step1": "Daten werden abgerufen",
    "services.data.step2": "Werte werden zusammengeführt",
    "services.data.step3": "Report wird erstellt",
    "services.data.step4": "Report wird versendet",

    "services.custom.desc": "Maßgeschneiderte Schnittstellen, wenn Standardlösungen nicht ausreichen.",
    "services.custom.check1": "Maßgeschneiderte Schnittstellen zwischen Ihren Systemen",
    "services.custom.check2": "Anbindung über APIs an bestehende Software",
    "services.custom.check3": "Lösungen, die zu Ihren bestehenden Abläufen passen",
    "services.custom.check4": "Skalierbar für wachsende Anforderungen",
    "services.custom.workflowTitle": "Individuelle Integration",
    "services.custom.workflowMeta": "Verbindung: 2 Systeme",
    "services.custom.step1": "Anforderung analysiert",
    "services.custom.step2": "Schnittstelle entwickelt",
    "services.custom.step3": "Systeme verbunden",
    "services.custom.step4": "Getestet & live",

    "about.heading": "Über mich",
    "about.text": "Ich bin Mustafa Bozdogan und unterstütze Unternehmen dabei, Prozesse zu automatisieren und KI dort einzusetzen, wo sie echten Mehrwert schafft. Mein Fokus liegt auf pragmatischen Lösungen, die sich in bestehende Systeme einfügen — kein Ersatz gewachsener Strukturen, sondern gezielte Automatisierung an den Stellen, an denen sie sich am meisten lohnt.",

    "references.heading": "Beispielprojekte",
    "references.intro": "Anonymisierte Beispiele typischer Projekte — zur Veranschaulichung, nicht als Referenz konkreter Kunden.",
    "references.tag": "Beispiel",
    "references.card1.title": "Automatisierte Rechnungsverarbeitung",
    "references.card1.desc": "Eingehende Rechnungen werden automatisch erfasst, geprüft und ins Buchhaltungssystem übertragen.",
    "references.card2.title": "KI-Support-Assistent",
    "references.card2.desc": "Ein Chatbot beantwortet häufige Kundenanfragen automatisch und leitet komplexe Fälle gezielt weiter.",
    "references.card3.title": "Automatisiertes Wochenreporting",
    "references.card3.desc": "Kennzahlen aus mehreren Quellen werden automatisch zusammengeführt und als Report versendet.",

    "contact.heading": "Kontakt",
    "contact.intro": "Lassen Sie uns über Ihr Automatisierungspotenzial sprechen.",
    "contact.labelName": "Name",
    "contact.labelEmail": "E-Mail",
    "contact.labelMessage": "Nachricht",
    "contact.submit": "Nachricht senden",
    "contact.note": "Ihre Nachricht wird direkt über dieses Formular verschickt.",

    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",

    "meta.title": "Mustafa Bozdogan — KI & Prozessautomatisierung für Unternehmen",
    "meta.description": "Mustafa Bozdogan unterstützt Unternehmen bei der Automatisierung von Prozessen mit KI, n8n/Zapier-Workflows, Daten-Reporting und individuellen Software-Integrationen.",
  },

  en: {
    "common.ctaPrimary": "Free Initial Consultation",
    "common.statusActive": "Active",

    "nav.services": "Services",
    "nav.about": "About Me",
    "nav.references": "Examples",
    "nav.contact": "Contact",
    "nav.toggleLabel": "Open menu",

    "hero.eyebrow": "AI & Automation for Businesses",
    "hero.tagline": "AI & Process Automation for Businesses",
    "hero.text": "I help businesses automate repetitive tasks and meaningfully integrate AI into existing workflows — less manual work, fewer errors, more time for what matters.",
    "hero.ctaSecondary": "View Services",

    "ticker.label": "Tools I work with",
    "ticker.restApis": "REST APIs",

    "services.heading": "Services",
    "services.intro": "Four areas where automation makes the biggest difference.",
    "services.tabAutomation": "Process Automation",
    "services.tabAi": "AI & Chatbots",
    "services.tabData": "Data & Reports",
    "services.tabCustom": "Custom Integrations",

    "services.automation.desc": "Connect and automate recurring workflows with n8n or Zapier.",
    "services.automation.check1": "Handle recurring tasks without manual effort",
    "services.automation.check2": "Automatically connect systems like email, CRM, and spreadsheets",
    "services.automation.check3": "Avoid errors caused by manual data entry",
    "services.automation.check4": "Automatically trigger notifications and approvals",
    "services.automation.workflowTitle": "Invoice Workflow",
    "services.automation.workflowMeta": "Triggered by: new email",
    "services.automation.step1": "Trigger detected",
    "services.automation.step2": "Data is being processed",
    "services.automation.step3": "Action is being executed",
    "services.automation.step4": "Team is being notified",

    "services.ai.desc": "AI-powered assistants for customer service or internal use.",
    "services.ai.check1": "Answer customer inquiries automatically, around the clock",
    "services.ai.check2": "Resolve common questions instantly, forward complex cases",
    "services.ai.check3": "Connect AI to your own data and tools",
    "services.ai.check4": "Seamless handover to your team when needed",
    "services.ai.workflowTitle": "Support Assistant",
    "services.ai.workflowMeta": "Channel: website chat",
    "services.ai.step1": "Inquiry received",
    "services.ai.step2": "AI is analyzing the request",
    "services.ai.step3": "Response is being generated",
    "services.ai.step4": "Handed over to the team if needed",

    "services.data.desc": "Automatically updated reports and dashboards instead of manual spreadsheet work.",
    "services.data.check1": "Automatically merge metrics from multiple sources",
    "services.data.check2": "Create reports on time without manual spreadsheet work",
    "services.data.check3": "Keep dashboards always up to date",
    "services.data.check4": "Gain time for analysis instead of data collection",
    "services.data.workflowTitle": "Weekly Report",
    "services.data.workflowMeta": "Sources: 3 systems",
    "services.data.step1": "Data is being retrieved",
    "services.data.step2": "Values are being merged",
    "services.data.step3": "Report is being generated",
    "services.data.step4": "Report is being sent",

    "services.custom.desc": "Custom-built interfaces for when standard solutions aren't enough.",
    "services.custom.check1": "Tailor-made interfaces between your systems",
    "services.custom.check2": "Connect to existing software via APIs",
    "services.custom.check3": "Solutions that fit your existing workflows",
    "services.custom.check4": "Scalable as your requirements grow",
    "services.custom.workflowTitle": "Custom Integration",
    "services.custom.workflowMeta": "Connection: 2 systems",
    "services.custom.step1": "Requirement analyzed",
    "services.custom.step2": "Interface developed",
    "services.custom.step3": "Systems connected",
    "services.custom.step4": "Tested & live",

    "about.heading": "About Me",
    "about.text": "I'm Mustafa Bozdogan, and I help businesses automate processes and apply AI where it creates real value. My focus is on pragmatic solutions that fit into existing systems — not a replacement for what already works, but targeted automation exactly where it pays off most.",

    "references.heading": "Example Projects",
    "references.intro": "Anonymized examples of typical projects — for illustration only, not references to specific clients.",
    "references.tag": "Example",
    "references.card1.title": "Automated Invoice Processing",
    "references.card1.desc": "Incoming invoices are automatically captured, checked, and transferred into the accounting system.",
    "references.card2.title": "AI Support Assistant",
    "references.card2.desc": "A chatbot automatically answers common customer inquiries and forwards complex cases to the right person.",
    "references.card3.title": "Automated Weekly Reporting",
    "references.card3.desc": "Metrics from multiple sources are automatically merged and sent out as a report.",

    "contact.heading": "Contact",
    "contact.intro": "Let's talk about your automation potential.",
    "contact.labelName": "Name",
    "contact.labelEmail": "Email",
    "contact.labelMessage": "Message",
    "contact.submit": "Send Message",
    "contact.note": "Your message is sent directly through this form.",

    "footer.impressum": "Legal Notice",
    "footer.datenschutz": "Privacy Policy",

    "meta.title": "Mustafa Bozdogan — AI & Process Automation for Businesses",
    "meta.description": "Mustafa Bozdogan helps businesses automate processes with AI, n8n/Zapier workflows, data reporting, and custom software integrations.",
  },

  tr: {
    "common.ctaPrimary": "Ücretsiz Ön Görüşme",
    "common.statusActive": "Aktif",

    "nav.services": "Hizmetler",
    "nav.about": "Hakkımda",
    "nav.references": "Örnekler",
    "nav.contact": "İletişim",
    "nav.toggleLabel": "Menüyü aç",

    "hero.eyebrow": "İşletmeler için Yapay Zeka ve Otomasyon",
    "hero.tagline": "İşletmeler için Yapay Zeka ve Süreç Otomasyonu",
    "hero.text": "İşletmelerin tekrarlayan görevleri otomatikleştirmesine ve yapay zekayı mevcut iş akışlarına anlamlı şekilde entegre etmesine yardımcı oluyorum — daha az manuel iş, daha az hata, önemli olan şeylere daha çok zaman.",
    "hero.ctaSecondary": "Hizmetleri Görüntüle",

    "ticker.label": "Kullandığım araçlar",
    "ticker.restApis": "REST Arayüzleri",

    "services.heading": "Hizmetler",
    "services.intro": "Otomasyonun en büyük farkı yarattığı dört alan.",
    "services.tabAutomation": "Süreç Otomasyonu",
    "services.tabAi": "Yapay Zeka ve Chatbotlar",
    "services.tabData": "Veri ve Raporlar",
    "services.tabCustom": "Özel Entegrasyonlar",

    "services.automation.desc": "n8n veya Zapier ile tekrarlayan iş akışlarını bağlayın ve otomatikleştirin.",
    "services.automation.check1": "Tekrarlayan görevleri manuel emek harcamadan tamamlayın",
    "services.automation.check2": "E-posta, CRM ve tablolar gibi sistemleri otomatik olarak bağlayın",
    "services.automation.check3": "Manuel veri girişinden kaynaklanan hataları önleyin",
    "services.automation.check4": "Bildirimleri ve onayları otomatik olarak tetikleyin",
    "services.automation.workflowTitle": "Fatura İş Akışı",
    "services.automation.workflowMeta": "Tetikleyici: yeni e-posta",
    "services.automation.step1": "Tetikleyici algılandı",
    "services.automation.step2": "Veriler işleniyor",
    "services.automation.step3": "Eylem gerçekleştiriliyor",
    "services.automation.step4": "Ekip bilgilendiriliyor",

    "services.ai.desc": "Müşteri hizmetleri veya iç kullanım için yapay zeka destekli asistanlar.",
    "services.ai.check1": "Müşteri taleplerini otomatik ve 7/24 yanıtlayın",
    "services.ai.check2": "Sık sorulan soruları anında çözün, karmaşık vakaları yönlendirin",
    "services.ai.check3": "Yapay zekayı kendi verilerinize ve araçlarınıza bağlayın",
    "services.ai.check4": "Gerektiğinde ekibinize sorunsuz devir",
    "services.ai.workflowTitle": "Destek Asistanı",
    "services.ai.workflowMeta": "Kanal: web sitesi sohbeti",
    "services.ai.step1": "Talep alındı",
    "services.ai.step2": "Yapay zeka talebi analiz ediyor",
    "services.ai.step3": "Yanıt oluşturuluyor",
    "services.ai.step4": "Gerekirse ekibe devredilir",

    "services.data.desc": "Manuel Excel çalışması yerine otomatik güncellenen raporlar ve panolar.",
    "services.data.check1": "Birden fazla kaynaktan gelen verileri otomatik olarak birleştirin",
    "services.data.check2": "Raporları manuel Excel işi olmadan zamanında oluşturun",
    "services.data.check3": "Panoları her zaman güncel tutun",
    "services.data.check4": "Veri toplamak yerine analiz için zaman kazanın",
    "services.data.workflowTitle": "Haftalık Rapor",
    "services.data.workflowMeta": "Kaynaklar: 3 sistem",
    "services.data.step1": "Veriler alınıyor",
    "services.data.step2": "Değerler birleştiriliyor",
    "services.data.step3": "Rapor oluşturuluyor",
    "services.data.step4": "Rapor gönderiliyor",

    "services.custom.desc": "Standart çözümlerin yetersiz kaldığı durumlarda özel arayüzler.",
    "services.custom.check1": "Sistemleriniz arasında özel arayüzler",
    "services.custom.check2": "API'ler aracılığıyla mevcut yazılımlara bağlantı",
    "services.custom.check3": "Mevcut iş akışlarınıza uygun çözümler",
    "services.custom.check4": "Büyüyen ihtiyaçlar için ölçeklenebilir",
    "services.custom.workflowTitle": "Özel Entegrasyon",
    "services.custom.workflowMeta": "Bağlantı: 2 sistem",
    "services.custom.step1": "Gereksinim analiz edildi",
    "services.custom.step2": "Arayüz geliştirildi",
    "services.custom.step3": "Sistemler bağlandı",
    "services.custom.step4": "Test edildi ve yayında",

    "about.heading": "Hakkımda",
    "about.text": "Ben Mustafa Bozdogan, işletmelerin süreçlerini otomatikleştirmesine ve yapay zekayı gerçek değer yarattığı yerlerde kullanmasına yardımcı oluyorum. Odak noktam, mevcut sistemlere uyum sağlayan pragmatik çözümler — büyümüş yapıların yerini almak değil, en çok fayda sağladığı noktalarda hedefli otomasyon.",

    "references.heading": "Örnek Projeler",
    "references.intro": "Tipik projelerin anonimleştirilmiş örnekleri — açıklama amaçlıdır, belirli müşterilere referans değildir.",
    "references.tag": "Örnek",
    "references.card1.title": "Otomatik Fatura İşleme",
    "references.card1.desc": "Gelen faturalar otomatik olarak kaydedilir, kontrol edilir ve muhasebe sistemine aktarılır.",
    "references.card2.title": "Yapay Zeka Destek Asistanı",
    "references.card2.desc": "Bir chatbot sık sorulan müşteri sorularını otomatik olarak yanıtlar ve karmaşık vakaları doğru yere yönlendirir.",
    "references.card3.title": "Otomatik Haftalık Raporlama",
    "references.card3.desc": "Birden fazla kaynaktan gelen veriler otomatik olarak birleştirilir ve rapor olarak gönderilir.",

    "contact.heading": "İletişim",
    "contact.intro": "Otomasyon potansiyeliniz hakkında konuşalım.",
    "contact.labelName": "Ad Soyad",
    "contact.labelEmail": "E-posta",
    "contact.labelMessage": "Mesaj",
    "contact.submit": "Mesaj Gönder",
    "contact.note": "Mesajınız doğrudan bu form üzerinden gönderilir.",

    "footer.impressum": "Yasal Bilgiler",
    "footer.datenschutz": "Gizlilik Politikası",

    "meta.title": "Mustafa Bozdogan — İşletmeler için Yapay Zeka ve Süreç Otomasyonu",
    "meta.description": "Mustafa Bozdogan; yapay zeka, n8n/Zapier iş akışları, veri raporlama ve özel yazılım entegrasyonlarıyla işletmelerin süreçlerini otomatikleştirmesine yardımcı olur.",
  },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.de;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  const titleEl = document.querySelector("title");
  if (titleEl && dict["meta.title"]) titleEl.textContent = dict["meta.title"];

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && dict["meta.description"]) descEl.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // localStorage unavailable (private mode, blocked) — language just won't persist
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

let initialLang = "de";
try {
  initialLang = localStorage.getItem("lang") || "de";
} catch (e) {
  // localStorage unavailable — fall back to German default
}

applyLanguage(initialLang);
