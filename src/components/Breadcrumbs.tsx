import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
  path: string;
  labelZh: string;
  labelEn: string;
}

const routeMap: Record<string, { zh: string; en: string }> = {
  '/': { zh: '首页', en: 'Home' },
  '/source': { zh: '源码中心', en: 'Source Center' },
  '/custom': { zh: '定制中心', en: 'Custom Center' },
  '/whitelabel': { zh: '白标中心', en: 'Whitelabel Center' },
  '/nodes': { zh: '节点中心', en: 'Node Center' },
  '/payment': { zh: '收款中心', en: 'Payment Center' },
  '/listing': { zh: '上架中心', en: 'Listing Center' },
  '/operations': { zh: '运营与广告中心', en: 'Operations Center' },
  '/developer': { zh: '开发者账号中心', en: 'Developer Center' },
  '/templates': { zh: '更多模板', en: 'Templates' },
  '/about': { zh: '关于我们', en: 'About Us' },
  '/faq': { zh: '常见问题', en: 'FAQ' },
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  const currentPath = location.pathname;
  const currentRoute = routeMap[currentPath];
  
  if (!currentRoute || currentPath === '/') return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'zh' ? '首页' : 'Home',
        "item": "https://vpnking.cc/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": language === 'zh' ? currentRoute.zh : currentRoute.en,
        "item": `https://vpnking.cc${currentPath}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav 
        aria-label="Breadcrumb" 
        className="container mx-auto px-4 pt-20 pb-4"
      >
        <ol 
          className="flex items-center gap-2 text-sm text-muted-foreground"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              to="/" 
              className="flex items-center gap-1 hover:text-foreground transition-colors"
              itemProp="item"
            >
              <Home className="w-4 h-4" />
              <span itemProp="name">{language === 'zh' ? '首页' : 'Home'}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4" />
          </li>
          
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <span 
              className="text-foreground font-medium"
              itemProp="name"
            >
              {language === 'zh' ? currentRoute.zh : currentRoute.en}
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>
    </>
  );
};
