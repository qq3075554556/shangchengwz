import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const SourceCenter = () => {
  const { language } = useLanguage();

  const features = [
    {
      text: language === 'zh' ? '新加坡正规的VPN开发公司' : 'Legitimate VPN Development Company in Singapore',
    },
    {
      text: language === 'zh' ? '拥有超过10年VPN开发经验' : 'Over 10 Years of VPN Development Experience',
    },
    {
      text: language === 'zh' ? '7*24在线客服提供技术支援' : '7*24 Online Customer Service for Technical Support',
    },
  ];

  const sourcePackages = [
    {
      id: 1,
      title: language === 'zh' ? 'OpenVPN等协议源码' : 'OpenVPN Protocol Source Code',
      date: '2024.7',
      price: '800U',
      platforms: 4,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/799543_28394.png',
      buyLink: 'https://t.me/gaoshengsm',
    },
    {
      id: 2,
      title: language === 'zh' ? 'V2ray等协议源码整套' : 'V2ray Protocol Complete Source Code',
      date: '2025.2',
      price: '800U',
      platforms: 5,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/341578_299053.png',
      buyLink: 'https://t.me/gaoshengsm',
    },
    {
      id: 3,
      title: language === 'zh' ? '机场多协议源码整套' : 'Multi-Protocol Airport Source Code',
      date: '2025.2',
      price: '1000U',
      platforms: 6,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/787526_29593.png',
      buyLink: 'https://t.me/gaoshengsm',
    },
    {
      id: 4,
      title: language === 'zh' ? 'UI设计/VPN问题修复' : 'UI Design/VPN Problem Fixing',
      date: language === 'zh' ? '根据需求报价' : 'Quote on Demand',
      price: language === 'zh' ? '联系客服' : 'Contact Us',
      platforms: 0,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/224938_927877.png',
      buyLink: 'https://t.me/gaoshengsm',
      isConsultation: true,
    },
  ];

  const faqItems = [
    {
      question: language === 'zh' ? '源码包是给所有代码吗？' : 'Does the source code package include all the code?',
      answer: language === 'zh' 
        ? '是的，源码包是将所有的代码发送给你，没有保留，没有加密，相当于所有权都是你的。'
        : 'Yes, the source code package sends you all the code without any reservations or encryption. All ownership rights belong to you.',
    },
    {
      question: language === 'zh' ? '可以直接部署使用吗？' : 'Can it be deployed and used directly?',
      answer: language === 'zh'
        ? '可以。源码包都是测试好的源码，可以直接部署使用、商业、二次开发等。'
        : 'Yes. All source code packages have been tested and can be directly deployed, used for commercial purposes, or for secondary development.',
    },
    {
      question: language === 'zh' ? '源码包的源码跟白标有什么区别吗？' : 'What is the difference between the source code package and white label?',
      answer: language === 'zh'
        ? '源码包的版本都是独立的，跟白标是不同的源码，但UI上能会有一些相似，因为我们在开发新的版本的时候会常常使用同一个UI进行，但代码、协议、逻辑、内核、管理功能等都是不一样的。'
        : 'The source code packages are all independent versions, different from white label source code. While UI may have some similarities (as we often use the same UI when developing new versions), the code, protocols, logic, kernel, management functions, etc. are all different.',
    },
  ];

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": language === 'zh' ? 'VPN现成源码商城' : 'VPN Ready Source Code Mall',
    "description": language === 'zh' 
      ? '专业VPN源码商城，提供OpenVPN、V2ray、机场多协议等完整VPN源码包，支持直接部署、商用和二次开发。10年VPN开发经验，7*24技术支持。'
      : 'Professional VPN source code store offering OpenVPN, V2ray, multi-protocol airport complete packages. Direct deployment, commercial use, and secondary development supported. 10 years VPN development experience with 7*24 technical support.',
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'zh' ? 'VPN源码产品' : 'VPN Source Code Products',
      "itemListElement": sourcePackages.map((pkg, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": pkg.title,
          "image": pkg.image,
          "offers": {
            "@type": "Offer",
            "price": pkg.price.replace('U', ''),
            "priceCurrency": "USD"
          }
        }
      }))
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VPNKing",
    "description": language === 'zh' 
      ? '新加坡正规VPN开发公司，拥有超过10年VPN开发经验，提供VPN源码、白标套餐、节点服务和定制开发'
      : 'Legitimate VPN development company in Singapore with over 10 years experience, providing VPN source code, white label packages, node services and custom development',
    "url": "https://vpnking.cc",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-24:00",
    "sameAs": ["https://t.me/gaoshengsm"]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": language === 'zh' ? 'VPN源码商城产品' : 'VPN Source Code Mall Products',
    "description": language === 'zh' 
      ? '专业VPN源码包，支持直接部署和二次开发'
      : 'Professional VPN source code packages, supporting direct deployment and secondary development',
    "brand": {
      "@type": "Brand",
      "name": "VPNKing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "189",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": language === 'zh' ? "王先生" : "Mr. Wang"
        },
        "reviewBody": language === 'zh' 
          ? "源码质量很高，部署简单，客服响应及时，非常满意！"
          : "High quality source code, easy deployment, responsive customer service, very satisfied!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": language === 'zh' ? "陈先生" : "Mr. Chen"
        },
        "reviewBody": language === 'zh' 
          ? "10年开发经验确实不一般，源码完整，文档齐全，二开很方便。"
          : "10 years of development experience is indeed remarkable, complete source code, comprehensive documentation, easy for secondary development."
      }
    ]
  };

  const structuredData = [storeSchema, localBusinessSchema, reviewSchema];

  return (
    <>
      <SEO 
        title={language === 'zh' ? 'VPN源码商城 - OpenVPN/V2ray源码包 | 专业VPN开发' : 'VPN Source Code Mall - OpenVPN/V2ray Packages | Professional VPN Development'}
        description={language === 'zh' 
          ? '专业VPN源码商城，提供OpenVPN、V2ray、机场多协议等完整VPN源码包，支持直接部署、商用和二次开发。10年VPN开发经验，新加坡正规公司，7*24技术支持，即买即用。'
          : 'Professional VPN source code store offering complete OpenVPN, V2ray, multi-protocol packages. Direct deployment, commercial use, secondary development. 10 years experience, legitimate Singapore company, 7*24 support, instant delivery.'}
        keywords={language === 'zh' 
          ? 'VPN源码,OpenVPN源码,V2ray源码,机场源码,VPN开发,VPN源码商城,VPN源码包,VPN二次开发'
          : 'VPN source code,OpenVPN source,V2ray source,airport source code,VPN development,VPN source mall,VPN packages,VPN secondary development'}
        canonical={typeof window !== 'undefined' ? window.location.href : ''}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <main className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {language === 'zh' ? 'VPN现成源码商城' : 'VPN Ready Source Code Mall'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'zh' 
                ? '我们拥有多款现成完整的VPN源码包，支持自行直接部署使用、商用、二次开发等，即买即用。'
                : 'We have multiple ready-made complete VPN source code packages that support direct deployment, commercial use, secondary development, etc. Buy and use immediately.'}
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" aria-labelledby="features-section">
            <h2 id="features-section" className="sr-only">
              {language === 'zh' ? '核心特色' : 'Core Features'}
            </h2>
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" aria-labelledby="products-section">
            <h2 id="products-section" className="sr-only">
              {language === 'zh' ? '源码产品' : 'Source Code Products'}
            </h2>
            {sourcePackages.map((pkg) => (
              <article key={pkg.id} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all rounded-lg border" itemScope itemType="https://schema.org/Product">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    itemProp="image"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" itemProp="name">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'zh' ? '现成源码' : 'Ready Source'}({pkg.date})
                  </p>
                  <div className="mb-4" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span className="text-2xl font-bold text-foreground">{language === 'zh' ? '价格：' : 'Price: '}</span>
                    <span className="text-2xl font-bold text-foreground" itemProp="price">{pkg.price}</span>
                    <meta itemProp="priceCurrency" content="USD" />
                    {!pkg.isConsultation && (
                      <span className="text-sm text-muted-foreground ml-2">
                        {language === 'zh' ? `/一端（共${pkg.platforms}端）` : `/per platform (${pkg.platforms} total)`}
                      </span>
                    )}
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full"
                    variant={pkg.isConsultation ? "outline" : "default"}
                    onClick={() => window.open(pkg.buyLink, '_blank')}
                  >
                    {pkg.isConsultation 
                      ? (language === 'zh' ? '立即咨询' : 'Contact Now')
                      : (language === 'zh' ? '购买源码' : 'Buy Source Code')
                    }
                  </Button>
                </div>
              </article>
            ))}
          </section>

          <section aria-labelledby="terms-section">
            <Card className="bg-card border-border mb-16">
              <CardContent className="p-8">
                <h2 id="terms-section" className="text-2xl font-bold mb-6">
                  {language === 'zh' ? '购买须知' : 'Purchase Terms'}
                </h2>
                <div className="space-y-4 text-muted-foreground">
              <p className="text-destructive font-semibold">
                {language === 'zh' 
                  ? '首款仅支持USDT付款（如需公司转账、支付宝转账，请联系客服取。）'
                  : 'Only USDT payment is supported (For bank transfer or Alipay, please contact customer service.)'}
              </p>
              <p>
                {language === 'zh'
                  ? '4端指：手机端：IOS端/Android端；电脑端：Window端/MacOS端；'
                  : '4 platforms: Mobile: iOS/Android; Desktop: Windows/MacOS;'}
              </p>
              <p>
                {language === 'zh'
                  ? '5端指：手机端：IOS端/Android端；电脑端：Window端/MacOS端/Linux端。'
                  : '5 platforms: Mobile: iOS/Android; Desktop: Windows/MacOS/Linux.'}
              </p>
              <p>
                {language === 'zh'
                  ? '6端指：手机端：IOS端/Android端；电脑端：Window端/MacOS端/Linux端；网站端。'
                  : '6 platforms: Mobile: iOS/Android; Desktop: Windows/MacOS/Linux; Web.'}
              </p>
              <p>
                {language === 'zh'
                  ? '注意：本产品只含基础功能和设计的整套VPN源码（非加盟源码），不含部署服务，可直接部署使用、二开或商用。'
                  : 'Note: This product only includes basic functions and designed complete VPN source code (not franchise source code). Deployment service is not included. Can be directly deployed, used for secondary development or commercial use.'}
              </p>
              <p>
                {language === 'zh'
                  ? '发货：源码自动发送至你的邮箱，源码包含：登陆/订阅/连接功能/前端后台/管理面板。'
                  : 'Delivery: Source code will be automatically sent to your email, including: login/subscription/connection functions/frontend and backend/management panel.'}
              </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="faq-section">
            <h2 id="faq-section" className="text-3xl font-bold text-center mb-8">
              {language === 'zh' ? '常见问题' : 'FAQ'}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {language === 'zh' ? '在源码商场遇到的常见问题。' : 'Common questions about the source code marketplace.'}
            </p>
            <div itemScope itemType="https://schema.org/FAQPage">
              <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <AccordionTrigger className="text-left text-lg font-semibold">
                      <span itemProp="name">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <span itemProp="text">{item.answer}</span>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('/faq', '_blank')}
            >
              {language === 'zh' ? '查看更多详情' : 'View More Details'}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SourceCenter;
