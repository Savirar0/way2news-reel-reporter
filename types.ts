export type Language = 'en' | 'te' | 'ta';

export interface Content {
  nav: {
    home: string;
    howItWorks: string;
    earnings: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    watchDemo: string;
    dailyEarnings: string;
    dailyEarningsLabel: string;
  };
  sections: {
    howItWorks: string;
    earnings: string;
    whoCanJoin: string;
    categories: string;
    guidelines: string;
    testimonials: string;
    faq: string;
    register: string;
  };
  steps: {
    title: string;
    desc: string;
  }[];
  earnings: {
    subtitle: string;
    modelTitle: string;
    modelItems: string[];
    tiersTitle: string;
    tiers: { range: string; rate: string; subBonus: string }[];
  };
  personas: {
    label: string;
  }[];
  categoriesList: {
    name: string;
  }[];
  guidelinesList: {
    acceptedTitle: string;
    accepted: string[];
    rejectedTitle: string;
    rejected: string[];
    penaltyWarning: string;
  };
  testimonialsList: {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
  }[];
  faqList: {
    question: string;
    answer: string;
  }[];
  form: {
    title: string;
    subtitle: string;
    name: string;
    phone: string;
    city: string;
    submit: string;
    success: string;
    successDesc: string;
    registerAnother: string;
    error: string;
    loading: string;
    portalDesc: string;
    portalLabel: string;
  };
  footer: {
    about: string;
    desc: string;
    quickLinks: string;
    links: { about: string; terms: string; policy: string; contact: string };
    followUs: string;
    copyright: string;
  };
  languageModal: {
    selectLanguage: string;
    title: string;
    desc: string;
    cancel: string;
    confirm: string;
  };
  policy: {
    title: string;
    standardsTitle: string;
    standards: string[];
    prohibitedTitle: string;
    prohibited: string[];
    penaltiesTitle: string;
    penaltiesDesc: string;
    approvalTitle: string;
    approvalDesc: string;
    close: string;
  };
}