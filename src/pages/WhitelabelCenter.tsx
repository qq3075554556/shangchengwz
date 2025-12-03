import { Check, DollarSign, Heart, Clock, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const WhitelabelCenter = () => {
  const { language } = useLanguage();

  const productInfo = {
    title: 'SingLink VPN®️',
    subtitle: language === 'zh' ? '2025源码授权软件' : '2025 Licensed Software',
    specs: [
      { label: language === 'zh' ? '白标软件版本' : 'White Label Version', value: 'v2.0' },
      { label: language === 'zh' ? '软件语言' : 'Programming Language', value: 'Flutter, PHP' },
      { label: language === 'zh' ? '协议' : 'Protocol', value: language === 'zh' ? '支持全现有协议' : 'All protocols supported' },
      { label: language === 'zh' ? '内核' : 'Core', value: language === 'zh' ? 'Clash混合Singbox' : 'Clash mixed Singbox' },
      { label: language === 'zh' ? '发布日期' : 'Release Date', value: language === 'zh' ? '2023年3月1号' : 'March 1, 2023' },
      { label: language === 'zh' ? '系统' : 'Platforms', value: 'iOS, Android, macOS, Windows, Web' },
    ],
  };

  const advantages = [
    {
      icon: DollarSign,
      title: language === 'zh' ? '省钱' : 'Save Money',
      description: language === 'zh' 
        ? '根据市场调查，开发一个VPN平台运营，每年合计约5万美金成本，这些费用会给创业者带来巨大压力。' 
        : 'Market research shows that developing a VPN platform costs about $50,000 annually, creating huge pressure for entrepreneurs.',
      benefit: language === 'zh'
        ? 'VPN开发王白标的好处：价格巨划算，我们的白标无需担心开发和技术问题，直接省去开发与技术成本。只需1999美金即可开启VPN运营。'
        : 'VPN King White Label advantage: Great value pricing. No need to worry about development and technical issues, directly saving development and technical costs. Start VPN operations for only $1999.',
    },
    {
      icon: Heart,
      title: language === 'zh' ? '省心' : 'Peace of Mind',
      description: language === 'zh'
        ? 'VPN开发王白标的好处：傻瓜式操作，管理操作简单，即便你是在校读书的学生/家庭主妇，都能够轻松运营。'
        : 'VPN King White Label advantage: Foolproof operation, simple management. Even students or homemakers can easily operate it.',
      benefit: language === 'zh'
        ? '现在购买，还有赠送：免费部署服务、免费代收款、首个月线路（价值500U的）、免费节点配置、免费官网、免费技术支持等一站式全套服务。'
        : 'Purchase now and get: Free deployment service, free payment collection, first month routes (worth 500U), free node configuration, free website, free technical support and more one-stop services.',
    },
    {
      icon: Clock,
      title: language === 'zh' ? '省时' : 'Save Time',
      description: language === 'zh'
        ? 'VPN开发王白标的好处：马上即可运营，无需浪费时间在开发、繁杂的技术维护，以及操作失败风险上。'
        : 'VPN King White Label advantage: Operate immediately, no need to waste time on development, complex technical maintenance, and operation failure risks.',
      benefit: language === 'zh'
        ? '现在，用户最低只需购买1端白标套餐，即可立即运营属于你的VPN品牌，这是我们开创的轻运营模式 - 白标计划。'
        : 'Now, users only need to purchase a 1-platform white label package to immediately operate your own VPN brand. This is our pioneering light operation model - White Label Plan.',
    },
    {
      icon: Trophy,
      title: language === 'zh' ? '领先' : 'Leading',
      description: language === 'zh'
        ? 'VPN开发王白标的好处：是目前最先进的VPN软件版本。'
        : 'VPN King White Label advantage: The most advanced VPN software version currently available.',
      benefit: language === 'zh'
        ? 'VPN开发王白标软件，内含有顶级VPN协议、各种企业高级功能、代理营销功能、任务奖励功能、多重订阅模式、高级动态UI设计等，这些都能助力你的VPN业务发展。'
        : 'VPN King White Label software includes top VPN protocols, various enterprise advanced features, agent marketing features, task reward features, multiple subscription models, advanced dynamic UI design, etc., all helping your VPN business grow.',
    },
  ];

  const packages = [
    {
      title: language === 'zh' ? 'VPN创业计划' : 'VPN Startup Plan',
      subtitle: language === 'zh' ? '终身授权套餐(1端)' : 'Lifetime License (1 Platform)',
      price: '1999 USD',
      platforms: language === 'zh' ? '1端(1*电脑端 or 1*手机端)' : '1 Platform (1*PC or 1*Mobile)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/291683_93024.jpeg',
      features: [
        language === 'zh' ? '提供终身授权证书' : 'Lifetime authorization certificate',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端软件)' : 'Advanced client (Client software)',
        language === 'zh' ? '管理面板(提供管理面板链接)' : 'Management panel (Panel link)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? '绑定1个域名(可申请更换域名)' : 'Bind 1 domain (Can change)',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
        language === 'zh' ? '符合条件可0首付上线' : 'Qualified for 0 down payment launch',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '可加500U配置线路和专线' : 'Add 500U for routes and dedicated lines',
      ],
    },
    {
      title: language === 'zh' ? 'VPN创业计划' : 'VPN Startup Plan',
      subtitle: language === 'zh' ? '终身授权套餐(2端)' : 'Lifetime License (2 Platforms)',
      price: '3999 USD',
      platforms: language === 'zh' ? '2端(2*电脑端 or 2*手机端)' : '2 Platforms (2*PC or 2*Mobile)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/86139_70414.jpeg',
      popular: true,
      features: [
        language === 'zh' ? '提供终身授权证书' : 'Lifetime authorization certificate',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端软件)' : 'Advanced client (Client software)',
        language === 'zh' ? '管理面板(提供管理面板链接)' : 'Management panel (Panel link)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? '绑定1个域名(可申请更换域名)' : 'Bind 1 domain (Can change)',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
        language === 'zh' ? '符合条件可0首付上线' : 'Qualified for 0 down payment launch',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '首月赠送价值500U节点' : 'First month 500U value nodes gift',
      ],
    },
    {
      title: language === 'zh' ? 'VPN深度合作伙伴' : 'VPN Deep Partner',
      subtitle: language === 'zh' ? '终身授权套餐(5端)' : 'Lifetime License (5 Platforms)',
      price: '5999 USD',
      platforms: language === 'zh' ? '5端(2*电脑端 2*手机端 Web)' : '5 Platforms (2*PC 2*Mobile Web)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/319948_754656.jpeg',
      features: [
        language === 'zh' ? '提供终身授权证书' : 'Lifetime authorization certificate',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端软件)' : 'Advanced client (Client software)',
        language === 'zh' ? '管理面板(提供管理面板链接)' : 'Management panel (Panel link)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? '绑定1个域名(可申请更换域名)' : 'Bind 1 domain (Can change)',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
        language === 'zh' ? '符合条件可0首付上线' : 'Qualified for 0 down payment launch',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '首月赠送价值500U节点' : 'First month 500U value nodes gift',
      ],
    },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SingLink VPN®️",
    "description": language === 'zh' 
      ? 'VPN白标授权套餐，提供终身授权、全协议支持、管理面板、技术支持等一站式服务。1999美金起即可开启VPN运营。'
      : 'VPN White Label License Package with lifetime authorization, full protocol support, management panel, technical support and more. Start VPN operations from $1999.',
    "brand": {
      "@type": "Brand",
      "name": "SingLink VPN"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "1999",
      "highPrice": "5999",
      "priceCurrency": "USD",
      "offerCount": packages.length
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VPNKing - SingLink VPN",
    "description": language === 'zh' 
      ? '专业VPN白标服务提供商，提供终身授权的VPN贴牌套餐，省钱省心省时'
      : 'Professional VPN white label service provider, offering lifetime licensed VPN branding packages',
    "url": "https://vpnking.cc/whitelabel",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SG"
    },
    "priceRange": "$$$",
    "openingHours": "Mo-Su 00:00-24:00",
    "sameAs": ["https://t.me/gaoshengsm"]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": language === 'zh' ? 'SingLink VPN白标套餐' : 'SingLink VPN White Label Package',
    "description": language === 'zh' 
      ? 'VPN白标授权套餐，终身授权，一站式服务'
      : 'VPN white label license package with lifetime authorization and one-stop service',
    "brand": {
      "@type": "Brand",
      "name": "SingLink VPN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "312",
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
          "name": language === 'zh' ? "刘先生" : "Mr. Liu"
        },
        "reviewBody": language === 'zh' 
          ? "白标套餐真的很划算，省去了开发成本，一站式服务非常省心！"
          : "White label package is really cost-effective, saved development costs, one-stop service is worry-free!"
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
          "name": language === 'zh' ? "赵女士" : "Ms. Zhao"
        },
        "reviewBody": language === 'zh' 
          ? "傻瓜式操作，小白也能轻松运营VPN业务，技术支持响应很快。"
          : "Foolproof operation, even beginners can easily run VPN business, fast technical support response."
      }
    ]
  };

  const structuredData = [productSchema, localBusinessSchema, reviewSchema];

  return (
    <>
      <SEO 
        title={language === 'zh' ? 'VPN白标套餐 - SingLink VPN®️授权 | 终身授权低至1999美金' : 'VPN White Label - SingLink VPN®️ License | Lifetime License from $1999'}
        description={language === 'zh' 
          ? 'VPN白标授权套餐，SingLink VPN®️终身授权，支持全协议、提供管理面板、免费部署、代收款服务、节点配置等一站式服务。1999美金起即可开启VPN运营，省钱省心省时，小白也能轻松运营。'
          : 'VPN White Label License Package, SingLink VPN®️ lifetime authorization with full protocol support, management panel, free deployment, payment collection, node configuration and more. Start VPN operations from $1999. Save money, worry-free, time-saving, easy for beginners.'}
        keywords={language === 'zh' 
          ? 'VPN白标,VPN授权,SingLink VPN,VPN贴牌,VPN白标套餐,VPN创业,VPN运营,终身授权,0首付VPN'
          : 'VPN white label,VPN license,SingLink VPN,VPN branding,VPN white label package,VPN startup,VPN operation,lifetime license,zero down payment VPN'}
        canonical={typeof window !== 'undefined' ? window.location.href : ''}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <main className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          {/* Product Header */}
          <header className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {productInfo.title}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              {productInfo.subtitle}
            </h2>
            <div className="flex justify-center mb-8">
              <Button size="lg" className="bg-gradient-primary" asChild>
                <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                  {language === 'zh' ? '联系客服' : 'View Demo'}
                </a>
              </Button>
            </div>
          </header>

          {/* Packages Section - Moved to Top */}
          <section id="packages" aria-labelledby="packages-section">
            <h2 id="packages-section" className="text-3xl font-bold text-center mb-4">
              {language === 'zh' ? '一站式VPN贴牌套餐' : 'One-Stop VPN White Label Packages'}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {language === 'zh' 
                ? '官网仅支持USDT付款（如需公司转账, 支付宝转账，请联系客服获取。）'
                : 'Official website only supports USDT payment (Contact customer service for company transfer or Alipay transfer.)'}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" itemScope itemType="https://schema.org/ItemList">
              {packages.map((pkg, index) => (
                <article key={index} className={`bg-card border-border hover:border-primary/50 transition-all relative rounded-lg border ${pkg.popular ? 'border-primary shadow-glow' : ''}`} itemScope itemProp="itemListElement" itemType="https://schema.org/Product">
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                      {language === 'zh' ? '热门' : 'Popular'}
                    </Badge>
                  )}
                  <div className="p-6">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded-lg mb-4" itemProp="image" />
                    <div className="text-sm text-muted-foreground mb-2">{pkg.subtitle}</div>
                    <h3 className="text-xl mb-2 font-bold" itemProp="name">{pkg.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="price">{pkg.price.replace(' USD', '')}</span>
                      <meta itemProp="priceCurrency" content="USD" />
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">{pkg.platforms}</div>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">{language === 'zh' ? '套餐内容：' : 'Package Content:'}</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">{language === 'zh' ? '额外服务：' : 'Extra Services:'}</h4>
                      <ul className="space-y-2">
                        {pkg.extras.map((extra, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-primary">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="font-medium">{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-primary" size="lg" asChild>
                      <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                        {language === 'zh' ? '立即购买' : 'Buy Now'}
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

        {/* Product Specs */}
        <Card className="bg-card border-border mb-12">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {productInfo.specs.map((spec, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                  <div className="font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Advantages Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {language === 'zh' ? 'VPN白标的优势' : 'VPN White Label Advantages'}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-4xl mx-auto">
            {language === 'zh' 
              ? '我们的VPN白标计划，小白也可直接运营，提供一站式服务，包括：部署、代收款、节点配置、维护与更新等。永久源码授权、终身免费更新，也可以自行二开源码和上架商店，唯一的局限即只能绑定一个域名（但可向我们申请更换）。'
              : 'Our VPN white label plan allows even beginners to operate directly, providing one-stop services including: deployment, payment collection, node configuration, maintenance and updates. Permanent source code authorization, lifetime free updates, and you can also develop and list on app stores. The only limitation is that you can only bind one domain name (but you can apply to us for a change).'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{advantage.description}</p>
                  <p className="text-sm font-medium">{advantage.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary" asChild>
            <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
              {language === 'zh' ? '联系客服' : 'Contact Customer Service'}
            </a>
          </Button>
        </div>
        </div>
      </main>
    </>
  );
};

export default WhitelabelCenter;
