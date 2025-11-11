import { Code, Palette, Tag, Server, CreditCard, Upload, Check, CheckCircle2, Sparkles, Target, Users, Clock, DollarSign, Heart, Trophy, FileText, Rocket, Smartphone, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-illustration.png';
const Home = () => {
  const {
    t,
    language
  } = useLanguage();
  const services = [{
    title: t('sourceTitle'),
    description: t('sourceDesc'),
    icon: Code,
    link: '/source'
  }, {
    title: t('customTitle'),
    description: t('customDesc'),
    icon: Palette,
    link: '/custom'
  }, {
    title: t('whitelabelTitle'),
    description: t('whitelabelDesc'),
    icon: Tag,
    link: '/whitelabel'
  }, {
    title: t('nodeTitle'),
    description: t('nodeDesc'),
    icon: Server,
    link: '/nodes'
  }, {
    title: t('paymentTitle'),
    description: t('paymentDesc'),
    icon: CreditCard,
    link: '/payment'
  }, {
    title: t('listingTitle'),
    description: t('listingDesc'),
    icon: Upload,
    link: '/listing'
  }];

  // Source packages
  const sourcePackages = [{
    title: language === 'zh' ? 'OpenVPN等协议源码' : 'OpenVPN Protocol Source Code',
    date: '2024.7',
    price: '800U',
    platforms: 4,
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/799543_28394.png'
  }, {
    title: language === 'zh' ? 'V2ray等协议源码整套' : 'V2ray Protocol Complete Source Code',
    date: '2025.2',
    price: '800U',
    platforms: 5,
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/341578_299053.png'
  }, {
    title: language === 'zh' ? '机场多协议源码整套' : 'Multi-Protocol Airport Source Code',
    date: '2025.2',
    price: '1000U',
    platforms: 6,
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/787526_29593.png'
  }];

  // Custom advantages
  const customAdvantages = [{
    icon: Sparkles,
    title: language === 'zh' ? '个性化定制' : 'Personalized',
    description: language === 'zh' ? '完全按照您的需求定制开发' : 'Fully customized to your requirements'
  }, {
    icon: Target,
    title: language === 'zh' ? '精准实现' : 'Precise Implementation',
    description: language === 'zh' ? '准确理解需求，精准实现功能' : 'Accurate understanding and precise feature implementation'
  }, {
    icon: Users,
    title: language === 'zh' ? '专业团队' : 'Professional Team',
    description: language === 'zh' ? '经验丰富的开发团队支持' : 'Experienced development team support'
  }, {
    icon: Clock,
    title: language === 'zh' ? '按时交付' : 'On-Time Delivery',
    description: language === 'zh' ? '严格的项目管理，保证按时交付' : 'Strict project management ensures timely delivery'
  }];

  // Whitelabel packages
  const whitelabelPackages = [{
    title: language === 'zh' ? 'VPN创业计划' : 'VPN Startup Plan',
    subtitle: language === 'zh' ? '终身授权套餐(1端)' : 'Lifetime License (1 Platform)',
    price: '1999 USD',
    platforms: language === 'zh' ? '1端(1*电脑端 or 1*手机端)' : '1 Platform (1*PC or 1*Mobile)',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/291683_93024.jpeg'
  }, {
    title: language === 'zh' ? 'VPN创业计划' : 'VPN Startup Plan',
    subtitle: language === 'zh' ? '终身授权套餐(2端)' : 'Lifetime License (2 Platforms)',
    price: '3999 USD',
    platforms: language === 'zh' ? '2端(2*电脑端 or 2*手机端)' : '2 Platforms (2*PC or 2*Mobile)',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/86139_70414.jpeg',
    popular: true
  }, {
    title: language === 'zh' ? 'VPN深度合作伙伴' : 'VPN Deep Partner',
    subtitle: language === 'zh' ? '终身授权套餐(5端)' : 'Lifetime License (5 Platforms)',
    price: '5999 USD',
    platforms: language === 'zh' ? '5端(2*电脑端 2*手机端 Web)' : '5 Platforms (2*PC 2*Mobile Web)',
    image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/319948_754656.jpeg'
  }];

  // Node plans
  const nodePlans = [{
    bandwidth: '200M',
    users: language === 'zh' ? '支持同时在线5000人以上' : 'Supports 5000+ concurrent users',
    price: 'USD$ 500',
    nodes: 10
  }, {
    bandwidth: '500M',
    users: language === 'zh' ? '支持同时在线10000人以上' : 'Supports 10000+ concurrent users',
    price: 'USD$ 1800',
    nodes: 20,
    recommended: true
  }, {
    bandwidth: '1000M',
    users: language === 'zh' ? '支持同时在线5万人以上' : 'Supports 50000+ concurrent users',
    price: 'USD$ 3000',
    nodes: 30
  }];

  // Payment features
  const paymentFeatures = [{
    icon: CreditCard,
    title: language === 'zh' ? '多种支付方式' : 'Multiple Payment Methods',
    description: language === 'zh' ? '支持信用卡、借记卡、电子钱包等' : 'Support credit cards, debit cards, e-wallets, etc.'
  }, {
    icon: Smartphone,
    title: language === 'zh' ? '移动支付' : 'Mobile Payment',
    description: language === 'zh' ? '完美支持各类移动支付平台' : 'Perfect support for various mobile payment platforms'
  }, {
    icon: Globe,
    title: language === 'zh' ? '全球收款' : 'Global Payment',
    description: language === 'zh' ? '支持多币种，覆盖全球市场' : 'Multi-currency support covering global markets'
  }, {
    icon: Shield,
    title: language === 'zh' ? '安全保障' : 'Security Guarantee',
    description: language === 'zh' ? 'PCI DSS认证，资金安全有保障' : 'PCI DSS certified with fund security guarantee'
  }];

  // Listing services
  const listingServices = [{
    icon: Upload,
    title: language === 'zh' ? 'App Store上架' : 'App Store Listing',
    description: language === 'zh' ? 'iOS应用上架服务，快速通过审核' : 'iOS app listing service for quick approval'
  }, {
    icon: CheckCircle2,
    title: language === 'zh' ? 'Google Play上架' : 'Google Play Listing',
    description: language === 'zh' ? 'Android应用上架，全程协助' : 'Android app listing with full assistance'
  }, {
    icon: FileText,
    title: language === 'zh' ? '资质准备' : 'Qualification Preparation',
    description: language === 'zh' ? '协助准备上架所需的各类资质' : 'Assist in preparing required qualifications'
  }, {
    icon: Rocket,
    title: language === 'zh' ? '加急服务' : 'Express Service',
    description: language === 'zh' ? '提供加急上架服务，快速上线' : 'Provide express listing service for quick launch'
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {t('heroTitle')}
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-primary inline-block pb-2">
                  {t('heroSubtitle')}
                </h2>
              </div>
              
              <div className="space-y-3 text-foreground">
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnSource')}：</span>
                  <span className="text-muted-foreground">{t('vpnSourceDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnDevelop')}：</span>
                  <span className="text-muted-foreground">{t('vpnDevelopDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnWhitelabel')}：</span>
                  <span className="text-muted-foreground">
                    {t('vpnWhitelabelDesc').split('-0首付上线')[0]}
                    <span className="text-destructive font-semibold">-0首付上线*</span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnNodes')}：</span>
                  <span className="text-muted-foreground">{t('vpnNodesDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnPayment')}：</span>
                  <span className="text-muted-foreground">{t('vpnPaymentDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnListing')}：</span>
                  <span className="text-muted-foreground">{t('vpnListingDesc')}</span>
                </div>
              </div>

              <p className="text-destructive font-semibold text-lg pt-4">
                {t('teamExperience')}
              </p>

              <div className="flex gap-4 pt-4">
                <Button size="lg" variant="outline" className="border-2">
                  {t('getStarted')}
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  {t('learnMore')}
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={heroImage} alt="VPN Development Platform" className="w-full max-w-lg rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          
          <div className="text-center text-muted-foreground mb-12 space-y-1">
            
            
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => <Link to={service.link} key={index}>
                <ServiceCard {...service} />
              </Link>)}
          </div>
        </div>
      </section>

      {/* Source Center Section */}
      <section id="source" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-primary inline-block pb-2 mx-auto block">
            {t('sourceTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'zh' ? '我们拥有多款现成完整的VPN源码包，支持自行直接部署使用、商用、二次开发等，即买即用。' : 'We have multiple ready-made complete VPN source code packages that support direct deployment, commercial use, secondary development, etc.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {sourcePackages.map((pkg, index) => <Card key={index} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'zh' ? '现成源码' : 'Ready Source'}({pkg.date})
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {language === 'zh' ? `/一端（共${pkg.platforms}端）` : `/per platform (${pkg.platforms} total)`}
                    </span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center">
            <Link to="/source">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Center Section */}
      <section id="custom" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-accent inline-block pb-2 mx-auto block">
            {t('customTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'zh' ? '如果源码和白标还无法满足你的要求，你还可以选择VPN定制开发。' : 'If source code and white label cannot meet your requirements, you can also choose VPN custom development.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customAdvantages.map((advantage, index) => <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <advantage.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  <CardDescription>{advantage.description}</CardDescription>
                </CardHeader>
              </Card>)}
          </div>

          <div className="text-center text-lg mb-8 text-muted-foreground">
            {language === 'zh' ? '定制系统 | 定制协议 | 定制功能 | 定制设计 | 定制服务' : 'Custom Systems | Custom Protocols | Custom Features | Custom Design | Custom Services'}
          </div>

          <div className="text-center">
            <Link to="/custom">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Whitelabel Center Section */}
      <section id="whitelabel" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-primary inline-block pb-2 mx-auto block">
            {t('whitelabelTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'zh' ? '一站式VPN贴牌套餐' : 'One-Stop VPN White Label Packages'}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {whitelabelPackages.map((pkg, index) => <Card key={index} className={`bg-card border-border hover:border-primary/50 transition-all relative ${pkg.popular ? 'border-primary shadow-glow' : ''}`}>
                {pkg.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                    {language === 'zh' ? '热门' : 'Popular'}
                  </Badge>}
                <CardHeader>
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <div className="text-sm text-muted-foreground mb-2">{pkg.subtitle}</div>
                  <CardTitle className="text-xl mb-2">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground">{pkg.platforms}</div>
                </CardHeader>
              </Card>)}
          </div>

          <div className="text-center">
            <Link to="/whitelabel">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Node Center Section */}
      <section id="nodes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-accent inline-block pb-2 mx-auto block">
            {t('nodeTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'zh' ? 'VPN节点套餐' : 'VPN Node Packages'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {nodePlans.map((plan, index) => <Card key={index} className={`bg-card border-border hover:border-primary/50 transition-all relative ${plan.recommended ? 'border-primary shadow-glow' : ''}`}>
                {plan.recommended && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                    {language === 'zh' ? '推荐' : 'Recommended'}
                  </Badge>}
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-2">
                    {plan.bandwidth} {language === 'zh' ? '套餐' : 'Package'}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">({plan.users})</p>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? `免费配置${plan.nodes}个节点` : `Free ${plan.nodes} nodes`}
                  </p>
                </CardHeader>
              </Card>)}
          </div>

          <div className="text-center">
            <Link to="/nodes">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Center Section */}
      <section id="payment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-primary inline-block pb-2 mx-auto block">
            {t('paymentTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'zh' ? '安全便捷的收款解决方案，支持多种支付方式' : 'Safe and convenient payment solutions supporting multiple payment methods'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {paymentFeatures.map((feature, index) => <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>)}
          </div>

          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {language === 'zh' ? '支持：支付宝、微信支付、PayPal、Stripe、VISA、Mastercard、银联、加密货币' : 'Support: Alipay, WeChat Pay, PayPal, Stripe, VISA, Mastercard, UnionPay, Cryptocurrency'}
            </p>
          </div>

          <div className="text-center">
            <Link to="/payment">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Listing Center Section */}
      <section id="listing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-accent inline-block pb-2 mx-auto block">
            {t('listingTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'zh' ? '专业的应用上架服务，帮助您的产品快速上线各大应用市场' : 'Professional app listing services to help your products quickly go live on major app markets'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {listingServices.map((service, index) => <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>)}
          </div>

          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {language === 'zh' ? '支持：App Store、Google Play、华为应用市场、小米应用商店、OPPO、VIVO、应用宝等' : 'Support: App Store, Google Play, Huawei AppGallery, Xiaomi GetApps, OPPO, VIVO, Tencent MyApp, etc.'}
            </p>
          </div>

          <div className="text-center">
            <Link to="/listing">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;