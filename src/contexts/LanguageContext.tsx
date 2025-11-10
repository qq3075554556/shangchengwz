import React, { createContext, useContext, useState } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Navigation
    home: '首页',
    sourceCenter: '源码中心',
    customCenter: '定制中心',
    whitelabelCenter: '白标中心',
    nodeCenter: '节点中心',
    aboutUs: '关于我们',
    more: '更多服务',
    paymentCenter: '收款中心',
    listingCenter: '上架中心',
    operationsCenter: '运营与广告中心',
    developerCenter: '开发者账号中心',
    templatesCenter: '更多模板',
    
    // Home page
    heroTitle: '一站式技术服务平台',
    heroSubtitle: '提供专业的源码、定制开发、白标解决方案等全方位技术服务',
    getStarted: '立即开始',
    learnMore: '了解更多',
    
    // Services
    services: '我们的服务',
    sourceTitle: '源码中心',
    sourceDesc: '高质量源码资源，开箱即用，快速启动您的项目',
    customTitle: '定制中心',
    customDesc: '专业定制开发服务，满足您的个性化需求',
    whitelabelTitle: '白标中心',
    whitelabelDesc: '完整的白标解决方案，助您快速建立品牌',
    nodeTitle: '节点中心',
    nodeDesc: '全球节点资源，稳定高速的网络服务',
    paymentTitle: '收款中心',
    paymentDesc: '多种支付方式接入，安全便捷的收款解决方案',
    listingTitle: '上架中心',
    listingDesc: '应用上架服务，帮助您的产品快速上线',
    
    // Common
    contactUs: '联系我们',
    viewDetails: '查看详情',
    copyright: '版权所有',
  },
  en: {
    // Navigation
    home: 'Home',
    sourceCenter: 'Source Center',
    customCenter: 'Custom Center',
    whitelabelCenter: 'Whitelabel Center',
    nodeCenter: 'Node Center',
    aboutUs: 'About Us',
    more: 'More Services',
    paymentCenter: 'Payment Center',
    listingCenter: 'Listing Center',
    operationsCenter: 'Operations Center',
    developerCenter: 'Developer Center',
    templatesCenter: 'Templates Center',
    
    // Home page
    heroTitle: 'One-Stop Tech Service Platform',
    heroSubtitle: 'Professional source code, custom development, whitelabel solutions and comprehensive technical services',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services
    services: 'Our Services',
    sourceTitle: 'Source Center',
    sourceDesc: 'High-quality source code resources, ready to use, quick start for your projects',
    customTitle: 'Custom Center',
    customDesc: 'Professional custom development services to meet your personalized needs',
    whitelabelTitle: 'Whitelabel Center',
    whitelabelDesc: 'Complete whitelabel solutions to help you establish your brand quickly',
    nodeTitle: 'Node Center',
    nodeDesc: 'Global node resources, stable and high-speed network services',
    paymentTitle: 'Payment Center',
    paymentDesc: 'Multiple payment methods integration, secure and convenient payment solutions',
    listingTitle: 'Listing Center',
    listingDesc: 'App listing services to help your products go live quickly',
    
    // Common
    contactUs: 'Contact Us',
    viewDetails: 'View Details',
    copyright: 'All Rights Reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
