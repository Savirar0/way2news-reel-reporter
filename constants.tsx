import { Content, Language } from './types';

export const translations: Record<Language, Content> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "Process",
      earnings: "Earnings",
      contact: "Join",
    },
    hero: {
      badge: "Reel Reporter Program",
      title: "Earn ₹15,000 – ₹40,000+ per month by Creating News Reels",
      subtitle: "Work from home. Zero investment. All you need is curiosity, a smartphone, and 1 minute per video.",
      cta: "Get Started Now",
      watchDemo: "Watch Demo",
      dailyEarnings: "₹40,000+",
      dailyEarningsLabel: "Potential Earnings",
    },
    sections: {
      howItWorks: "4-Step Process",
      earnings: "Earnings & Growth Model",
      whoCanJoin: "Who Can Join?",
      categories: "Reel Categories",
      guidelines: "Requirements & Policy",
      testimonials: "Success Stories",
      faq: "Top FAQs",
      register: "Start Earning Today",
    },
    steps: [
      { title: "Submit 2 Sample Reels", desc: "Shoot two 60-second news reels. Face must be visible, use natural voice. No personal reels." },
      { title: "Evaluation", desc: "Our team evaluates your camera presence, clarity, topic delivery, accuracy, and originality." },
      { title: "Onboarding", desc: "Get selected, receive content category, basic training, and your Creator Studio login." },
      { title: "Upload & Track", desc: "Upload via Creator Studio. Track approvals, earnings, and subscriber growth." },
    ],
    earnings: {
      subtitle: "Weekly payouts for approved reels. Monthly payouts for bonuses. Processed via UPI within 24 hours of request.",
      modelTitle: "Payment Model",
      modelItems: ["Earning per published reel (EPR)", "Subscriber incentive", "View incentive", "Subscriber milestone bonus"],
      tiersTitle: "Subscriber Growth Tiers",
      tiers: [
        { range: "0 – 25K Subs", rate: "₹50 / reel", subBonus: "+ ₹1 / sub" },
        { range: "25K – 75K Subs", rate: "₹75 / reel", subBonus: "+ ₹0.85 / sub" },
        { range: "75K – 125K Subs", rate: "₹100 / reel", subBonus: "+ ₹0.75 / sub" },
        { range: "125K – 250K Subs", rate: "₹150 / reel", subBonus: "+ ₹0.60 / sub" },
        { range: "250K – 500K Subs", rate: "₹250 / reel", subBonus: "+ ₹0.50 / sub" },
        { range: "500K+ Subs", rate: "₹400 / reel", subBonus: "+ ₹0.50 / sub" },
      ]
    },
    personas: [
      { label: "Housewives" },
      { label: "Students" },
      { label: "Unemployed Youth" },
      { label: "Professionals" },
      { label: "Retired" },
    ],
    categoriesList: [
      { name: 'Trending News' },
      { name: 'Politics' },
      { name: 'Health & Tips' },
      { name: 'Agriculture' },
      { name: 'Education' },
      { name: 'Entertainment' },
    ],
    guidelinesList: {
      acceptedTitle: "Mandatory Requirements",
      accepted: ["Face visible clearly", "Real voice (No AI)", "Vertical video (9:16)", "Good lighting & Audio", "Factual & Informative"],
      rejectedTitle: "Strictly Not Allowed",
      rejected: ["Fake News / Deepfakes", "AI Voices or Visuals", "Copyrighted Content", "Political Paid Promo", "Hate Speech"],
      penaltyWarning: "Note: Violations can lead to 5% deduction or termination depending on severity.",
    },
    testimonialsList: [
      {
        id: 1,
        name: "Lakshmi Priya",
        role: "Homemaker",
        image: "https://picsum.photos/100/100?random=1",
        quote: "I started with zero experience. Now I have 50K subscribers and earn regularly from home!"
      },
      {
        id: 2,
        name: "Ravi Teja",
        role: "Student",
        image: "https://picsum.photos/100/100?random=2",
        quote: "Way2News gave me a platform to share my knowledge on Tech. The UPI payments are super fast."
      },
      {
        id: 3,
        name: "Suresh Babu",
        role: "Retired Teacher",
        image: "https://picsum.photos/100/100?random=3",
        quote: "Reporting on local agriculture issues gives me satisfaction and a steady monthly income."
      }
    ],
    faqList: [
      {
        question: "Do I need to show my face in every video?",
        answer: "Yes, face must be visible to build trust and authenticity."
      },
      {
        question: "Who assigns my category?",
        answer: "Way2News assigns a category based on your interest and knowledge during onboarding."
      },
      {
        question: "How do I upload my reels?",
        answer: "You can upload videos easily via the Creator Studio app or WhatsApp."
      },
      {
        question: "How much can I earn monthly?",
        answer: "₹15,000–₹40,000+, depending on your number of reels, views, and subscriber growth."
      },
      {
        question: "Do I need professional equipment?",
        answer: "No, a smartphone with a decent camera and basic accessories is enough."
      }
    ],
    form: {
      title: "Join India's Largest Hyperlocal Network",
      subtitle: "Submit your first 2 sample reels today.",
      name: "Full Name",
      phone: "Phone Number",
      city: "City / Town",
      submit: "Become a Member",
      success: "Registration Successful!",
      successDesc: "We will contact you shortly with the next steps.",
      registerAnother: "Register another person",
      error: "Submission failed. Please check your connection.",
      loading: "Submitting...",
      portalDesc: "Click below to visit the official Way2Studios portal and submit your application securely.",
      portalLabel: "Official Way2Studios Portal"
    },
    footer: {
      about: "About Program",
      desc: "Empowering every citizen to become a digital journalist. Reach millions of viewers.",
      quickLinks: "Quick Links",
      links: {
        about: "About Us",
        terms: "Terms of Service",
        policy: "Content Policy",
        contact: "Contact Support"
      },
      followUs: "Follow Us",
      copyright: "© 2025 Way2News Network. All rights reserved."
    },
    languageModal: {
      selectLanguage: "Select Language",
      title: "Change Language?",
      desc: "You are switching to {lang}. The website content will be updated.",
      cancel: "Cancel",
      confirm: "Confirm"
    },
    policy: {
      title: "Program Policies & Guidelines",
      standardsTitle: "Content Standards",
      standards: ["Must be factual, informative, simple, and clear.", "Must be original work with your own face and voice."],
      prohibitedTitle: "Prohibited Content",
      prohibited: ["Fake news, deepfakes, or unverified information.", "AI generated voices or visuals.", "Copyrighted music or video clips.", "Political paid promotions or hate speech."],
      penaltiesTitle: "Violations & Penalties",
      penaltiesDesc: "Any violation of the content policy may result in penalties ranging from a 5% deduction in earnings to immediate termination of the account, depending on severity.",
      approvalTitle: "Approval & Rejection",
      approvalDesc: "Reels are approved immediately if criteria are met. Rejections will include reasons (e.g., poor lighting, AI voice) and suggestions for improvement.",
      close: "Close"
    }
  },
  te: {
    nav: {
      home: "హోమ్",
      howItWorks: "విధానం",
      earnings: "ఆదాయం",
      contact: "చేరండి",
    },
    hero: {
      badge: "రీల్ రిపోర్టర్ ప్రోగ్రామ్",
      title: "న్యూస్ రీల్స్ ద్వారా నెలకు ₹15,000 – ₹40,000+ సంపాదించండి",
      subtitle: "ఇంటి నుండే పని. పెట్టుబడి లేదు. కేవలం మీ ఆసక్తి, స్మార్ట్‌ఫోన్ మరియు 1 నిమిషం చాలు.",
      cta: "ఇప్పుడే ప్రారంభించండి",
      watchDemo: "డెమో చూడండి",
      dailyEarnings: "₹40,000+",
      dailyEarningsLabel: "సంభావ్య ఆదాయం",
    },
    sections: {
      howItWorks: "4-దశల విధానం",
      earnings: "ఆదాయం & వృద్ధి",
      whoCanJoin: "ఎవరెవరు చేరవచ్చు?",
      categories: "రీల్ విభాగాలు",
      guidelines: "ముఖ్యమైన నియమాలు",
      testimonials: "విజయ గాథలు",
      faq: "తరచుగా అడిగే ప్రశ్నలు",
      register: "సంపాదన ప్రారంభించండి",
    },
    steps: [
      { title: "2 శాంపిల్ రీల్స్ తీయండి", desc: "60 సెకన్ల రెండు న్యూస్ రీల్స్ తీయండి. ముఖం కనిపించాలి, సొంత గొంతు వాడాలి." },
      { title: "మూల్యాంకనం (Evaluation)", desc: "మీ కెమెరా ప్రెజెన్స్, స్పష్టత మరియు కంటెంట్ నాణ్యతను మా టీమ్ పరిశీలిస్తుంది." },
      { title: "ఆన్‌బోర్డింగ్", desc: "ఎంపికైన వారికి కంటెంట్ కేటగిరీ, ప్రాథమిక శిక్షణ మరియు క్రియేటర్ స్టూడియో లాగిన్ ఇవ్వబడుతుంది." },
      { title: "అప్‌లోడ్ & ట్రాక్", desc: "క్రియేటర్ స్టూడియో ద్వారా అప్‌లోడ్ చేయండి. మీ ఆమోదాలు మరియు ఆదాయాన్ని ట్రాక్ చేయండి." },
    ],
    earnings: {
      subtitle: "ఆమోదించబడిన రీల్స్‌కు వారం వారం చెల్లింపులు. UPI ద్వారా 24 గంటల్లో జమ చేయబడుతుంది.",
      modelTitle: "చెల్లింపు విధానం",
      modelItems: ["ప్రతి రీల్ కు సంపాదన (EPR)", "సబ్స్క్రయిబర్ ప్రోత్సాహకం", "వ్యూ ఇన్సెంటివ్", "మైలురాయి బోనస్"],
      tiersTitle: "సబ్స్క్రయిబర్ వృద్ధి ఆదాయం",
      tiers: [
        { range: "0 – 25K సబ్స్", rate: "₹50 / రీల్", subBonus: "+ ₹1 / సబ్" },
        { range: "25K – 75K సబ్స్", rate: "₹75 / రీల్", subBonus: "+ ₹0.85 / సబ్" },
        { range: "75K – 125K సబ్స్", rate: "₹100 / రీల్", subBonus: "+ ₹0.75 / సబ్" },
        { range: "125K – 250K సబ్స్", rate: "₹150 / రీల్", subBonus: "+ ₹0.60 / సబ్" },
        { range: "250K – 500K సబ్స్", rate: "₹250 / రీల్", subBonus: "+ ₹0.50 / సబ్" },
        { range: "500K+ సబ్స్", rate: "₹400 / రీల్", subBonus: "+ ₹0.50 / సబ్" },
      ]
    },
    personas: [
      { label: "గృహిణులు" },
      { label: "విద్యార్థులు" },
      { label: "నిరుద్యోగులు" },
      { label: "ఉద్యోగులు" },
      { label: "రిటైర్డ్" },
    ],
    categoriesList: [
      { name: 'ట్రెండింగ్ న్యూస్' },
      { name: 'రాజకీయాలు' },
      { name: 'ఆరోగ్యం' },
      { name: 'వ్యవసాయం' },
      { name: 'విద్య' },
      { name: 'వినోదం' },
    ],
    guidelinesList: {
      acceptedTitle: "తప్పనిసరి నిబంధనలు",
      accepted: ["ముఖం స్పష్టంగా కనిపించాలి", "సొంత గొంతు (AI వద్దు)", "నిలువు వీడియో (9:16)", "మంచి లైటింగ్ & ఆడియో", "వాస్తవమైన సమాచారం"],
      rejectedTitle: "అనుమతించబడనివి",
      rejected: ["ఫేక్ న్యూస్ / డీప్‌ఫేక్స్", "AI వాయిస్ లేదా విజువల్స్", "కాపీరైట్ కంటెంట్", "రాజకీయ ప్రచారాలు", "ద్వేషపూరిత ప్రసంగాలు"],
      penaltyWarning: "గమనిక: నిబంధనల ఉల్లంఘన వల్ల 5% ఆదాయ కోత లేదా అకౌంట్ తొలగింపు జరగవచ్చు.",
    },
    testimonialsList: [
      {
        id: 1,
        name: "లక్ష్మి ప్రియ",
        role: "గృహిణి",
        image: "https://picsum.photos/100/100?random=1",
        quote: "నాకు ఎలాంటి అనుభవం లేదు, కానీ ఇప్పుడు నాకు 50 వేల సబ్స్క్రయిబర్స్ ఉన్నారు మరియు ఇంటి నుండే సంపాదిస్తున్నాను."
      },
      {
        id: 2,
        name: "రవి తేజ",
        role: "విద్యార్థి",
        image: "https://picsum.photos/100/100?random=2",
        quote: "టెక్నాలజీపై నాకున్న జ్ఞానాన్ని పంచుకోవడానికి Way2News మంచి వేదిక. పేమెంట్స్ చాలా ఫాస్ట్ గా ఉంటాయి."
      },
      {
        id: 3,
        name: "సురేష్ బాబు",
        role: "రిటైర్డ్ టీచర్",
        image: "https://picsum.photos/100/100?random=3",
        quote: "స్థానిక వ్యవసాయ సమస్యలపై రీల్స్ చేయడం నాకు సంతృప్తిని మరియు నెలవారీ ఆదాయాన్ని ఇస్తుంది."
      }
    ],
    faqList: [
      {
        question: "ప్రతి వీడియోలో నా ముఖం చూపించాలా?",
        answer: "అవును, విశ్వసనీయత కోసం ముఖం కనిపించడం తప్పనిసరి."
      },
      {
        question: "నాకు కేటగిరీ ఎవరు ఇస్తారు?",
        answer: "ఆన్‌బోర్డింగ్ సమయంలో మీ ఆసక్తి మరియు జ్ఞానం ఆధారంగా Way2News కేటగిరీని కేటాయిస్తుంది."
      },
      {
        question: "రీల్స్ ఎలా అప్‌లోడ్ చేయాలి?",
        answer: "మీరు క్రియేటర్ స్టూడియో యాప్ లేదా వాట్సాప్ ద్వారా సులభంగా అప్‌లోడ్ చేయవచ్చు."
      },
      {
        question: "నెలకు ఎంత సంపాదించవచ్చు?",
        answer: "మీ రీల్స్, వ్యూస్ మరియు సబ్స్క్రయిబర్స్ ఆధారంగా ₹15,000–₹40,000+ వరకు సంపాదించవచ్చు."
      },
      {
        question: "ప్రొఫెషనల్ కెమెరా అవసరమా?",
        answer: "అవసరం లేదు, మంచి కెమెరా ఉన్న స్మార్ట్‌ఫోన్ సరిపోతుంది."
      }
    ],
    form: {
      title: "భారతదేశపు అతిపెద్ద హైపర్ లోకల్ నెట్‌వర్క్‌లో చేరండి",
      subtitle: "మీ మొదటి 2 శాంపిల్ రీల్స్‌ను ఈరోజే సమర్పించండి.",
      name: "పూర్తి పేరు",
      phone: "ఫోన్ నంబర్",
      city: "ఊరు / నగరం",
      submit: "సభ్యులుగా చేరండి",
      success: "నమోదు విజయవంతమైంది!",
      successDesc: "తదుపరి వివరాలతో మేము మిమ్మల్ని త్వరలో సంప్రదిస్తాము.",
      registerAnother: "మరొకరిని నమోదు చేయండి",
      error: "సమర్పణ విఫలమైంది. దయచేసి ఇంటర్నెట్ సరిచూసుకోండి.",
      loading: "పంపుతోంది...",
      portalDesc: "అధికారిక Way2Studios పోర్టల్‌ను సందర్శించి, మీ దరఖాస్తును సురక్షితంగా పూర్తి చేయడానికి క్లిక్ చేయండి.",
      portalLabel: "అధికారిక Way2Studios పోర్టల్"
    },
    footer: {
      about: "ప్రోగ్రామ్ గురించి",
      desc: "ప్రతి పౌరుడిని డిజిటల్ జర్నలిస్టుగా మార్చడం. కోట్లాది మంది ప్రేక్షకులను చేరుకోండి.",
      quickLinks: "త్వరిత లింకులు",
      links: {
        about: "మా గురించి",
        terms: "నిబంధనలు",
        policy: "విధానాలు",
        contact: "సహాయం"
      },
      followUs: "మమ్మల్ని అనుసరించండి",
      copyright: "© 2025 Way2News Network. సర్వహక్కులు రిజర్వ్ చేయబడ్డాయి."
    },
    languageModal: {
      selectLanguage: "భాషను ఎంచుకోండి",
      title: "భాషను మార్చాలా?",
      desc: "మీరు భాషను {lang} కు మారుస్తున్నారు. వెబ్‌సైట్ కంటెంట్ మొత్తం నవీకరించబడుతుంది.",
      cancel: "రద్దు",
      confirm: "నిర్ధారించు"
    },
    policy: {
      title: "ప్రోగ్రామ్ విధానాలు & నిబంధనలు",
      standardsTitle: "కంటెంట్ ప్రమాణాలు",
      standards: ["కంటెంట్ వాస్తవంగా, సమాచారంగా మరియు స్పష్టంగా ఉండాలి.", "మీ సొంత ముఖం మరియు గొంతుతో ఒరిజినల్ వర్క్ ఉండాలి."],
      prohibitedTitle: "నిషేధించబడిన కంటెంట్",
      prohibited: ["ఫేక్ న్యూస్, ధృవీకరించని సమాచారం.", "AI రూపొందించిన వాయిస్ లేదా విజువల్స్.", "కాపీరైట్ మ్యూజిక్ లేదా వీడియో క్లిప్స్.", "రాజకీయ ప్రచారాలు లేదా ద్వేషపూరిత ప్రసంగాలు."],
      penaltiesTitle: "ఉల్లంఘనలు & జరిమానాలు",
      penaltiesDesc: "నిబంధనల ఉల్లంఘన తీవ్రతను బట్టి ఆదాయంలో 5% కోత నుండి అకౌంట్ శాశ్వత తొలగింపు వరకు చర్యలు ఉంటాయి.",
      approvalTitle: "ఆమోదం & తిరస్కరణ",
      approvalDesc: "ప్రమాణాలకు అనుగుణంగా ఉంటే రీల్స్ వెంటనే ఆమోదించబడతాయి. తిరస్కరించబడితే కారణాలు మరియు సూచనలు ఇవ్వబడతాయి.",
      close: "మూసివేయి"
    }
  },
  ta: {
    nav: {
      home: "முகப்பு",
      howItWorks: "செயல்முறை",
      earnings: "வருமானம்",
      contact: "சேர",
    },
    hero: {
      badge: "ரீல் ரிப்போர்ட்டர் திட்டம்",
      title: "செய்தி ரீல்ஸ் மூலம் மாதம் ₹15,000 – ₹40,000+ சம்பாதிக்கலாம்",
      subtitle: "வீட்டிலிருந்தே வேலை. முதலீடு இல்லை. ஆர்வம், ஸ்மார்ட்போன் மற்றும் 1 நிமிடம் மட்டும் போதும்.",
      cta: "இப்போதே தொடங்குங்கள்",
      watchDemo: "டெமோ பார்க்க",
      dailyEarnings: "₹40,000+",
      dailyEarningsLabel: "சாத்தியமான வருமானம்",
    },
    sections: {
      howItWorks: "4-படி செயல்முறை",
      earnings: "வருமானம் & வளர்ச்சி",
      whoCanJoin: "யாரெல்லாம் சேரலாம்?",
      categories: "ரீல் வகைகள்",
      guidelines: "முக்கிய விதிமுறைகள்",
      testimonials: "சாதனையாளர்கள்",
      faq: "முக்கிய கேள்விகள்",
      register: "சம்பாதிக்கத் தொடங்குங்கள்",
    },
    steps: [
      { title: "2 மாதிரி ரீல்களை சமர்ப்பிக்கவும்", desc: "60 நொடி செய்தி ரீல்களை எடுங்கள். முகம் தெரிய வேண்டும், சொந்த குரல் அவசியம்." },
      { title: "மதிப்பீடு (Evaluation)", desc: "உங்கள் கேமரா தோற்றம், தெளிவு மற்றும் உள்ளடக்கத்தின் தரத்தை எங்கள் குழு மதிப்பிடும்." },
      { title: "இணைதல் (Onboarding)", desc: "தேர்வானவர்களுக்கு வகை ஒதுக்கீடு, அடிப்படை பயிற்சி மற்றும் கிரியேட்டர் ஸ்டுடியோ லாகின் வழங்கப்படும்." },
      { title: "பதிவேற்றம் & கண்காணிப்பு", desc: "கிரியேட்டர் ஸ்டுடியோ மூலம் பதிவேற்றவும். உங்கள் ஒப்புதல்கள் மற்றும் வருமானத்தைக் கண்காணிக்கவும்." },
    ],
    earnings: {
      subtitle: "ஒப்புதல் அளிக்கப்பட்ட ரீல்களுக்கு வாராந்திர பணம். UPI மூலம் 24 மணி நேரத்தில் செலுத்தப்படும்.",
      modelTitle: "பணம் செலுத்தும் முறை",
      modelItems: ["ஒவ்வொரு ரீலுக்கும் கட்டணம் (EPR)", "சந்தாதாரர் ஊக்கத்தொகை", "பார்வை ஊக்கத்தொகை", "மைல்கல் போனஸ்"],
      tiersTitle: "சந்தாதாரர் வளர்ச்சி வருமானம்",
      tiers: [
        { range: "0 – 25K சந்தாதாரர்கள்", rate: "₹50 / ரீல்", subBonus: "+ ₹1 / சந்தாதாரர்" },
        { range: "25K – 75K சந்தாதாரர்கள்", rate: "₹75 / ரீல்", subBonus: "+ ₹0.85 / சந்தாதாரர்" },
        { range: "75K – 125K சந்தாதாரர்கள்", rate: "₹100 / ரீல்", subBonus: "+ ₹0.75 / சந்தாதாரர்" },
        { range: "125K – 250K சந்தாதாரர்கள்", rate: "₹150 / ரீல்", subBonus: "+ ₹0.60 / சந்தாதாரர்" },
        { range: "250K – 500K சந்தாதாரர்கள்", rate: "₹250 / ரீல்", subBonus: "+ ₹0.50 / சந்தாதாரர்" },
        { range: "500K+ சந்தாதாரர்கள்", rate: "₹400 / ரீல்", subBonus: "+ ₹0.50 / சந்தாதாரர்" },
      ]
    },
    personas: [
      { label: "இல்லத்தரசிகள்" },
      { label: "மாணவர்கள்" },
      { label: "வேலையற்ற இளைஞர்கள்" },
      { label: "பணிபுரிபவர்கள்" },
      { label: "ஓய்வுபெற்றவர்கள்" },
    ],
    categoriesList: [
      { name: 'டிரெண்டிங் நியூஸ்' },
      { name: 'அரசியல்' },
      { name: 'ஆரோக்கியம்' },
      { name: 'விவசாயம்' },
      { name: 'கல்வி' },
      { name: 'பொழுதுபோக்கு' },
    ],
    guidelinesList: {
      acceptedTitle: "கட்டாயத் தேவைகள்",
      accepted: ["முகம் தெளிவாகத் தெரிய வேண்டும்", "சொந்தக் குரல் (AI வேண்டாம்)", "செங்குத்து வீடியோ (9:16)", "நல்ல வெளிச்சம் & ஆடியோ", "உண்மையான தகவல்"],
      rejectedTitle: "கண்டிப்பாக அனுமதி இல்லை",
      rejected: ["போலி செய்திகள்", "AI குரல் அல்லது காட்சிகள்", "பதிப்புரிமை உள்ளடக்கம்", "அரசியல் விளம்பரங்கள்", "வெறுப்புப் பேச்சு"],
      penaltyWarning: "குறிப்பு: விதிமீறல்களுக்கு வருமானத்தில் 5% பிடித்தம் அல்லது கணக்கு முடக்கம் செய்யப்படலாம்.",
    },
    testimonialsList: [
      {
        id: 1,
        name: "லட்சுமி பிரியா",
        role: "இல்லத்தரசி",
        image: "https://picsum.photos/100/100?random=1",
        quote: "எனக்கு முன் அனுபவம் இல்லை. இப்போது எனக்கு 50K சந்தாதாரர்கள் உள்ளனர், வீட்டிலிருந்தே சம்பாதிக்கிறேன்!"
      },
      {
        id: 2,
        name: "ரவி தேஜா",
        role: "மாணவர்",
        image: "https://picsum.photos/100/100?random=2",
        quote: "தொழில்நுட்ப அறிவைப் பகிர்ந்து கொள்ள Way2News எனக்கு ஒரு மேடையை வழங்கியது. UPI பேமெண்ட்ஸ் மிக வேகமாக உள்ளது."
      },
      {
        id: 3,
        name: "சுரேஷ் பாபு",
        role: "ஓய்வுபெற்ற ஆசிரியர்",
        image: "https://picsum.photos/100/100?random=3",
        quote: "உள்ளூர் விவசாயப் பிரச்சினைகளைப் பேசுவது எனக்கு மனநிறைவையும் நிலையான வருமானத்தையும் தருகிறது."
      }
    ],
    faqList: [
      {
        question: "ஒவ்வொரு வீடியோவிலும் என் முகத்தைக் காட்ட வேண்டுமா?",
        answer: "ஆம், நம்பிக்கை மற்றும் உண்மைத்தன்மைக்கு முகம் தெரிவது அவசியம்."
      },
      {
        question: "எனக்கு வகையை (Category) யார் ஒதுக்குவார்கள்?",
        answer: "உங்கள் ஆர்வம் மற்றும் அறிவின் அடிப்படையில் Way2News வகையை ஒதுக்கும்."
      },
      {
        question: "ரீல்களை எப்படி பதிவேற்றுவது?",
        answer: "Creator Studio செயலி அல்லது WhatsApp மூலம் எளிதாகப் பதிவேற்றலாம்."
      },
      {
        question: "மாதம் எவ்வளவு சம்பாதிக்கலாம்?",
        answer: "உங்கள் ரீல்கள், பார்வைகள் மற்றும் சந்தாதாரர்களைப் பொறுத்து ₹15,000–₹40,000+ வரை சம்பாதிக்கலாம்."
      },
      {
        question: "தொழில்முறை கேமரா தேவையா?",
        answer: "இல்லை, நல்ல கேமரா கொண்ட ஸ்மார்ட்போன் மற்றும் அடிப்படை வசதிகள் போதுமானது."
      }
    ],
    form: {
      title: "இந்தியாவின் மிகப்பெரிய ஹைப்பர் லோக்கல் நெட்வொர்க்கில் இணையுங்கள்",
      subtitle: "உங்கள் முதல் 2 மாதிரி ரீல்களை இன்றே சமர்ப்பிக்கவும்.",
      name: "முழு பெயர்",
      phone: "தொலைபேசி எண்",
      city: "நகரம் / ஊர்",
      submit: "உறுப்பினராகுங்கள்",
      success: "பதிவு வெற்றிகரமானது!",
      successDesc: "அடுத்த கட்ட நடவடிக்கைகளுடன் விரைவில் உங்களைத் தொடர்புகொள்வோம்.",
      registerAnother: "மற்றொருவரை பதிவு செய்யுங்கள்",
      error: "சமர்ப்பிப்பு தோல்வியடைந்தது. இணைய இணைப்பை சரிபார்க்கவும்.",
      loading: "அனுப்பப்படுகிறது...",
      portalDesc: "எங்கள் அதிகாரப்பூர்வ Way2Studios போர்ட்டலைப் பார்வையிட மற்றும் உங்கள் விண்ணப்பத்தை பாதுகாப்பாக முடிக்க கீழே கிளிக் செய்யவும்.",
      portalLabel: "அதிகாரப்பூர்வ Way2Studios தளம்"
    },
    footer: {
      about: "திட்டம் பற்றி",
      desc: "ஒவ்வொரு குடிமகனையும் டிஜிட்டல் பத்திரிகையாளராக மாற்றுவது. கோடிக்கணக்கான பார்வையாளர்களைச் சென்றடையுங்கள்.",
      quickLinks: "விரைவு இணைப்புகள்",
      links: {
        about: "எங்களைப் பற்றி",
        terms: "விதிமுறைகள்",
        policy: "கொள்கைகள்",
        contact: "உதவி"
      },
      followUs: "எங்களைப் பின்தொடரவும்",
      copyright: "© 2025 Way2News Network. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },
    languageModal: {
      selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
      title: "மொழியை மாற்றவா?",
      desc: "நீங்கள் மொழியை {lang} க்கு மாற்றுகிறீர்கள். இணையதள உள்ளடக்கம் புதுப்பிக்கப்படும்.",
      cancel: "ரத்து",
      confirm: "உறுதி"
    },
    policy: {
      title: "திட்டக் கொள்கைகள் & விதிமுறைகள்",
      standardsTitle: "உள்ளடக்க தரநிலைகள்",
      standards: ["உள்ளடக்கம் உண்மையானதாகவும், தகவல் தருவதாகவும், தெளிவாகவும் இருக்க வேண்டும்.", "சொந்த முகம் மற்றும் குரலுடன் கூடிய அசல் படைப்பாக இருக்க வேண்டும்."],
      prohibitedTitle: "தடைசெய்யப்பட்ட உள்ளடக்கம்",
      prohibited: ["போலி செய்திகள் அல்லது சரிபார்க்கப்படாத தகவல்கள்.", "AI உருவாக்கிய குரல் அல்லது காட்சிகள்.", "பதிப்புரிமை பெற்ற இசை அல்லது வீடியோக்கள்.", "அரசியல் விளம்பரங்கள் அல்லது வெறுப்புப் பேச்சு."],
      penaltiesTitle: "விதிமீறல்கள் & அபராதங்கள்",
      penaltiesDesc: "விதிமீறலின் தீவிரத்தைப் பொறுத்து, வருமானத்தில் 5% பிடித்தம் முதல் கணக்கு நிரந்தரமாக நீக்கப்படுவது வரை நடவடிக்கை எடுக்கப்படும்.",
      approvalTitle: "ஒப்புதல் & நிராகரிப்பு",
      approvalDesc: "விதிமுறைகளுக்கு உட்பட்ட ரீல்கள் உடனடியாக ஏற்கப்படும். நிராகரிக்கப்பட்டால் காரணங்கள் மற்றும் திருத்தங்களுக்கான ஆலோசனைகள் வழங்கப்படும்.",
      close: "மூடு"
    }
  }
};