import { Sparkles, Target, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const CustomCenter = () => {
  const { language } = useLanguage();

  const advantages = [
    {
      icon: Sparkles,
      title: language === 'zh' ? '个性化定制' : 'Personalized',
      description: language === 'zh' ? '完全按照您的需求定制开发' : 'Fully customized to your requirements',
    },
    {
      icon: Target,
      title: language === 'zh' ? '精准实现' : 'Precise Implementation',
      description: language === 'zh' ? '准确理解需求，精准实现功能' : 'Accurate understanding and precise feature implementation',
    },
    {
      icon: Users,
      title: language === 'zh' ? '专业团队' : 'Professional Team',
      description: language === 'zh' ? '经验丰富的开发团队支持' : 'Experienced development team support',
    },
    {
      icon: Clock,
      title: language === 'zh' ? '按时交付' : 'On-Time Delivery',
      description: language === 'zh' ? '严格的项目管理，保证按时交付' : 'Strict project management ensures timely delivery',
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": language === 'zh' ? 'VPN定制开发服务' : 'VPN Custom Development Service',
    "provider": {
      "@type": "Organization",
      "name": "VPNKing"
    },
    "areaServed": "Worldwide",
    "description": language === 'zh' 
      ? '专业VPN定制开发服务，支持定制系统、协议、功能、设计和技术服务。为个人和企业提供量身定制的VPN解决方案。'
      : 'Professional VPN custom development service supporting custom systems, protocols, features, design and technical services. Tailored VPN solutions for individuals and enterprises.'
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VPNKing",
    "description": language === 'zh' 
      ? '专业VPN源码商城和定制开发平台，提供VPN源码、白标套餐、节点服务和定制开发'
      : 'Professional VPN source code marketplace and custom development platform',
    "url": "https://vpnking.cc",
    "telephone": "+86-400-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CN"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-24:00",
    "sameAs": [
      "https://t.me/gaoshengsm"
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": language === 'zh' ? 'VPN定制开发服务' : 'VPN Custom Development Service',
    "description": language === 'zh' 
      ? '专业VPN定制开发服务，支持全平台定制'
      : 'Professional VPN custom development service with full platform support',
    "brand": {
      "@type": "Brand",
      "name": "VPNKing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "256",
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
          "name": language === 'zh' ? "张先生" : "Mr. Zhang"
        },
        "reviewBody": language === 'zh' 
          ? "非常专业的团队，定制的VPN系统完全符合我们的需求，交付准时，推荐！"
          : "Very professional team, the customized VPN system fully meets our needs, delivered on time, highly recommended!"
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
          "name": language === 'zh' ? "李女士" : "Ms. Li"
        },
        "reviewBody": language === 'zh' 
          ? "服务态度很好，技术实力强，定制功能都实现了，很满意！"
          : "Great service attitude, strong technical capabilities, all custom features implemented, very satisfied!"
      }
    ]
  };

  const structuredData = [serviceSchema, localBusinessSchema, reviewSchema];

  return (
    <>
      <SEO 
        title={language === 'zh' ? 'VPN定制开发服务 - 专业VPN系统定制 | 个性化开发方案' : 'VPN Custom Development - Professional VPN System Customization | Personalized Solutions'}
        description={language === 'zh' 
          ? '专业VPN定制开发服务，支持定制VPN系统、协议、功能、设计和技术。Window/MacOS/Android/iOS全平台支持，经验丰富的开发团队，按时交付，提供一站式VPN定制解决方案。'
          : 'Professional VPN custom development service supporting custom systems, protocols, features, design and technology. Full platform support for Window/MacOS/Android/iOS. Experienced development team with on-time delivery and one-stop VPN customization solutions.'}
        keywords={language === 'zh' 
          ? 'VPN定制开发,VPN系统定制,定制VPN协议,VPN功能开发,VPN设计定制,VPN技术服务,个性化VPN开发'
          : 'VPN custom development,VPN system customization,custom VPN protocol,VPN feature development,VPN design customization,VPN technical service,personalized VPN development'}
        canonical={typeof window !== 'undefined' ? window.location.href : ''}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <main className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {language === 'zh' ? 'VPN定制开发服务' : 'VPN Custom Development Service'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'zh' 
                ? '如果源码和白标还无法满足你的要求，你还可以选择VPN定制开发。'
                : 'If source code and white label cannot meet your requirements, you can also choose VPN custom development.'}
            </p>
          </header>

          {/* 定制开发模板 - Template Section at Top */}
          <section aria-labelledby="templates-section">
            <Card className="bg-card border-border mb-12">
              <CardHeader>
                <CardTitle id="templates-section" className="text-2xl text-center">
                  {language === 'zh' ? '定制开发模板' : 'Custom Development Templates'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-semibold">
                    {language === 'zh' ? 'VPNKing定制模板' : 'VPNKing Custom Templates'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'zh' 
                      ? '我们提供专业的定制模板，满足您的各种需求'
                      : 'We provide professional custom templates to meet your various needs'}
                  </p>
                  <Button size="lg" className="bg-gradient-primary" asChild>
                    <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                      {language === 'zh' ? '立即咨询客服' : 'Contact Customer Service'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 我们提供什么 Section */}
          <section aria-labelledby="services-section">
            <h2 id="services-section" className="text-3xl font-bold text-center mb-8">
              {language === 'zh' ? '我们提供什么？' : 'What Do We Provide?'}
            </h2>
            <p className="text-center text-lg mb-6 text-muted-foreground">
              {language === 'zh' 
                ? '定制系统 | 定制协议 | 定制功能 | 定制设计 | 定制服务'
                : 'Custom Systems | Custom Protocols | Custom Features | Custom Design | Custom Services'}
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <CardTitle>{language === 'zh' ? '定制VPN系统' : 'Custom VPN Systems'}</CardTitle>
              <CardDescription>
                {language === 'zh' 
                  ? '支持Window/MacOS/Android/iOS/网页系统'
                  : 'Support Window/MacOS/Android/iOS/Web Systems'}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle>{language === 'zh' ? '定制VPN协议' : 'Custom VPN Protocols'}</CardTitle>
              <CardDescription>
                {language === 'zh' 
                  ? '支持OpenVPN/PPTP/IKEv2/L2TP/SS/等协议'
                  : 'Support OpenVPN/PPTP/IKEv2/L2TP/SS/etc protocols'}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle>{language === 'zh' ? '定制VPN功能' : 'Custom VPN Features'}</CardTitle>
              <CardDescription>
                {language === 'zh' 
                  ? '支持连接/订阅系统/支付系统/营销系统等'
                  : 'Support connection/subscription/payment/marketing systems etc'}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle>{language === 'zh' ? '定制VPN设计' : 'Custom VPN Design'}</CardTitle>
              <CardDescription>
                {language === 'zh' 
                  ? '风格定制/朋克风格/简约风格/流行风格等'
                  : 'Style customization/Punk/Minimalist/Popular styles etc'}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle>{language === 'zh' ? '定制VPN技术' : 'Custom VPN Technology'}</CardTitle>
              <CardDescription>
                {language === 'zh' 
                  ? '漏洞检查/技术服务/维护服务/运营服务等'
                  : 'Vulnerability checks/Technical service/Maintenance/Operations etc'}
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <CardTitle>{language === 'zh' ? 'VPN开发流程' : 'VPN Development Process'}</CardTitle>
                  <CardDescription>
                    {language === 'zh' 
                      ? '提供你所需要的开发要求，向客服获取报价和细节后，便可进行付款，付款方式可向客服人员获取，付款完成后将开始开发工作。'
                      : 'Provide your development requirements, get quotation and details from customer service, then proceed with payment. Payment methods can be obtained from customer service, and development work will begin after payment is completed.'}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Advantages Section */}
          <section aria-labelledby="advantages-section">
            <h2 id="advantages-section" className="text-3xl font-bold text-center mb-8">
              {language === 'zh' ? '我们的优势' : 'Our Advantages'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto" role="img" aria-label={advantage.title}>
                      <advantage.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    <CardDescription>{advantage.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'zh' ? '极速开发 实现梦想' : 'Fast Development, Realize Dreams'}
            </h3>
            <Button size="lg" className="bg-gradient-primary" asChild>
              <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                {language === 'zh' ? '开发咨询' : 'Development Consultation'}
              </a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CustomCenter;
