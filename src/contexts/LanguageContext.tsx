import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translations = language === 'en' ? enTranslations : zhTranslations;
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// English translations
const enTranslations = {
  header: {
    home: 'Home',
    partners: 'Partners',
    solutions: 'Solutions',
    about: 'About',
    products: 'Products',
    caseStudies: 'Case Studies',
    contact: 'Contact',
    login: 'Login',
    getStarted: 'Get Started',
    loading: 'Loading...',
    noPartners: 'No partners available',
    iotConnectivity: 'IoT Connectivity',
    m2mPlatform: 'M2M Platform',
    deviceManagement: 'Device Management',
    analytics: 'Analytics & Insights',
    customSolutions: 'Custom Solutions',
  },
  hero: {
    companyName: 'IISL - Inclusive Information Services Limited',
    title1: 'Global IoT & M2M Connectivity,',
    title2: 'Engineered Locally',
    description: 'Powering millions of IoT devices across China, India, EU, USA, and Singapore with carrier-grade reliability',
    iotSolutions: 'IoT Solutions',
    m2mConnectivity: 'M2M Connectivity',
    support: '24/7 Support',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
  },
  about: {
    title: 'Global IoT & M2M Connectivity, Engineered Locally',
    subtitle1: 'We bridge the gap between global reach and local expertise, delivering seamless IoT connectivity across continents.',
    subtitle2: 'Trusted by enterprises worldwide, IISL powers millions of connected devices with carrier-grade reliability and regional compliance.',
    globalOperations: 'Global Operations',
    active: 'Active',
    ourValues: 'Our Values',
    compliance: 'Compliance & Certifications',
    value1: 'Reliability: 99.9% uptime SLA backed by redundant networks',
    value2: 'Local Expertise: In-country regulatory compliance and support',
    value3: 'Innovation: Cutting-edge IoT solutions for evolving needs',
    value4: 'Transparency: Clear pricing with no hidden fees',
    miit: 'MIIT',
    miitDesc: 'China Ministry Approved',
    trai: 'TRAI',
    traiDesc: 'India Telecom Authority',
    ce: 'CE',
    ceDesc: 'European Conformity',
    fcc: 'FCC',
    fccDesc: 'USA Federal Certified',
    ctaTitle: 'Ready to Connect Globally?',
    ctaDesc: 'Book a 15-minute discovery call to discuss your IoT connectivity needs',
    bookCall: 'Book Discovery Call',
    china: 'China',
    chinaLocation: 'Beijing',
    india: 'India',
    indiaLocation: 'Mumbai & Delhi',
    eu: 'EU',
    euLocation: 'Amsterdam',
    usa: 'USA',
    usaLocation: 'New York',
    singapore: 'Singapore',
    singaporeLocation: 'Singapore',
  },
  cta: {
    title: "Let's Connect Your IoT Ecosystem",
    description: 'Start your global IoT deployment with IISL. Contact us for a personalized consultation.',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Email Address',
    companyPlaceholder: 'Company Name',
    submitButton: 'Request a Consultation',
    reachUs: 'Or reach us directly at:',
    contactInfo: 'contact@iisl.com | +1 (555) 123-4567',
  },
  solutions: {
    title: 'Enterprise IoT Solutions',
    subtitle: 'End-to-end connectivity solutions tailored for your IoT deployment needs',
    globalIotSim: 'Global IoT SIM',
    globalIotSimDesc: 'Multi-IMSI, eUICC-enabled SIMs for seamless global roaming across 190+ countries',
    globalIotSimBenefit: 'One SIM, worldwide connectivity',
    privateApn: 'Private APN + VPN',
    privateApnDesc: 'Dedicated network tunnels with enterprise-grade security for sensitive IoT data',
    privateApnBenefit: 'Bank-level security for your devices',
    smsVoice: 'SMS & Voice for IoT',
    smsVoiceDesc: 'Two-way SMS and voice channels for device management and critical alerts',
    smsVoiceBenefit: 'Real-time device communication',
    chinaApproval: 'China Type-Approval & Whitelist',
    chinaApprovalDesc: 'Full MIIT certification and network whitelist service for China market entry',
    chinaApprovalBenefit: 'Fast-track China market access',
    indiaDlt: 'India DLT Onboarding',
    indiaDltDesc: 'Complete DLT registration bundle for TRAI-compliant promotional SMS campaigns',
    indiaDltBenefit: 'Launch SMS campaigns in 48 hours',
    learnMore: 'Learn More',
  },
  products: {
    title: 'Flexible Pricing Plans',
    subtitle: 'Choose the plan that fits your IoT deployment scale',
    prepaid: 'Pre-paid',
    postpaid: 'Post-paid',
    popular: 'Popular',
    getStarted: 'Get Started',
    customSolution: 'Need a custom solution?',
    contactSales: 'Contact our sales team',
    starterPack: 'Starter SIM Pack',
    volumePlans: 'Volume Plans',
    oemWhiteLabel: 'OEM White-Label SIM',
    managementPortal: 'Management Portal',
    perSim3Months: 'per SIM / 3 months',
    basedOnVolume: 'based on volume',
    perSimMoq: 'per SIM (10K+ MOQ)',
    withAllPlans: 'with all plans',
    included: 'Included',
    custom: 'Custom',
  },
  footer: {
    companyDesc: 'Leading provider of IoT M2M connectivity solutions for businesses worldwide.',
    services: 'Services',
    iotConnectivity: 'IoT Connectivity',
    m2mSolutions: 'M2M Solutions',
    networkSecurity: 'Network Security',
    dataManagement: 'Data Management',
    company: 'Company',
    aboutUs: 'About Us',
    careers: 'Careers',
    partners: 'Partners',
    contact: 'Contact',
    contactUs: 'Contact Us',
    whatsappSupport: 'WhatsApp Support',
    chinaOffice: 'China Office',
    chinaLocation: 'Beijing, China',
    indiaOffice: 'India Office',
    indiaLocation: 'Mumbai & Delhi, India',
    euOffice: 'EU Office',
    euLocation: 'Amsterdam, Netherlands',
    copyright: '© 2025 Inclusive Information Services Limited. All rights reserved.',
  },
};

// Chinese Simplified translations
const zhTranslations = {
  header: {
    home: '首页',
    partners: '合作伙伴',
    solutions: '解决方案',
    about: '关于我们',
    products: '产品',
    caseStudies: '案例研究',
    contact: '联系我们',
    login: '登录',
    getStarted: '开始使用',
    loading: '加载中...',
    noPartners: '暂无合作伙伴',
    iotConnectivity: '物联网连接',
    m2mPlatform: 'M2M平台',
    deviceManagement: '设备管理',
    analytics: '分析与洞察',
    customSolutions: '定制解决方案',
  },
  hero: {
    companyName: 'IISL - 包容性信息服务有限公司',
    title1: '全球物联网与M2M连接',
    title2: '本地化工程',
    description: '在中国、印度、欧盟、美国和新加坡为数百万物联网设备提供运营商级可靠性',
    iotSolutions: '物联网解决方案',
    m2mConnectivity: 'M2M连接',
    support: '24/7支持',
    getStarted: '开始使用',
    learnMore: '了解更多',
  },
  about: {
    title: '全球物联网与M2M连接，本地化工程',
    subtitle1: '我们弥合全球覆盖与本地专业知识之间的差距，提供跨大陆的无缝物联网连接。',
    subtitle2: '受到全球企业信赖，IISL通过运营商级可靠性和区域合规性为数百万连接设备提供动力。',
    globalOperations: '全球运营',
    active: '活跃',
    ourValues: '我们的价值观',
    compliance: '合规与认证',
    value1: '可靠性：99.9%正常运行时间SLA，由冗余网络支持',
    value2: '本地专业知识：国内法规遵从和支持',
    value3: '创新：为不断发展的需求提供尖端物联网解决方案',
    value4: '透明：明确定价，无隐藏费用',
    miit: '工信部',
    miitDesc: '中国工信部批准',
    trai: 'TRAI',
    traiDesc: '印度电信管理局',
    ce: 'CE',
    ceDesc: '欧洲合格认证',
    fcc: 'FCC',
    fccDesc: '美国联邦认证',
    ctaTitle: '准备好全球连接了吗？',
    ctaDesc: '预约15分钟探讨电话，讨论您的物联网连接需求',
    bookCall: '预约探讨电话',
    china: '中国',
    chinaLocation: '北京',
    india: '印度',
    indiaLocation: '孟买和德里',
    eu: '欧盟',
    euLocation: '阿姆斯特丹',
    usa: '美国',
    usaLocation: '纽约',
    singapore: '新加坡',
    singaporeLocation: '新加坡',
  },
  cta: {
    title: '让我们连接您的物联网生态系统',
    description: '通过IISL开始您的全球物联网部署。联系我们获取个性化咨询。',
    namePlaceholder: '您的姓名',
    emailPlaceholder: '电子邮件地址',
    companyPlaceholder: '公司名称',
    submitButton: '请求咨询',
    reachUs: '或直接联系我们：',
    contactInfo: 'contact@iisl.com | +1 (555) 123-4567',
  },
  solutions: {
    title: '企业物联网解决方案',
    subtitle: '为您的物联网部署需求量身定制的端到端连接解决方案',
    globalIotSim: '全球物联网SIM卡',
    globalIotSimDesc: '多IMSI、eUICC启用的SIM卡，在190多个国家实现无缝全球漫游',
    globalIotSimBenefit: '一张SIM卡，全球连接',
    privateApn: '专用APN + VPN',
    privateApnDesc: '专用网络隧道，为敏感物联网数据提供企业级安全',
    privateApnBenefit: '设备的银行级安全',
    smsVoice: '物联网短信和语音',
    smsVoiceDesc: '用于设备管理和关键警报的双向短信和语音通道',
    smsVoiceBenefit: '实时设备通信',
    chinaApproval: '中国型号核准和白名单',
    chinaApprovalDesc: '完整的工信部认证和网络白名单服务，进入中国市场',
    chinaApprovalBenefit: '快速进入中国市场',
    indiaDlt: '印度DLT入驻',
    indiaDltDesc: '完整的DLT注册捆绑包，符合TRAI规范的促销短信活动',
    indiaDltBenefit: '48小时内启动短信活动',
    learnMore: '了解更多',
  },
  products: {
    title: '灵活的定价计划',
    subtitle: '选择适合您物联网部署规模的计划',
    prepaid: '预付费',
    postpaid: '后付费',
    popular: '热门',
    getStarted: '开始使用',
    customSolution: '需要定制解决方案？',
    contactSales: '联系我们的销售团队',
    starterPack: '入门SIM套餐',
    volumePlans: '批量计划',
    oemWhiteLabel: 'OEM白标SIM',
    managementPortal: '管理门户',
    perSim3Months: '每张SIM / 3个月',
    basedOnVolume: '基于批量',
    perSimMoq: '每张SIM（10K+起订量）',
    withAllPlans: '所有计划包含',
    included: '包含',
    custom: '定制',
  },
  footer: {
    companyDesc: '全球企业物联网M2M连接解决方案的领先提供商。',
    services: '服务',
    iotConnectivity: '物联网连接',
    m2mSolutions: 'M2M解决方案',
    networkSecurity: '网络安全',
    dataManagement: '数据管理',
    company: '公司',
    aboutUs: '关于我们',
    careers: '职业',
    partners: '合作伙伴',
    contact: '联系我们',
    contactUs: '联系我们',
    whatsappSupport: 'WhatsApp支持',
    chinaOffice: '中国办公室',
    chinaLocation: '中国北京',
    indiaOffice: '印度办公室',
    indiaLocation: '印度孟买和德里',
    euOffice: '欧盟办公室',
    euLocation: '荷兰阿姆斯特丹',
    copyright: '© 2025 包容性信息服务有限公司。保留所有权利。',
  },
};
