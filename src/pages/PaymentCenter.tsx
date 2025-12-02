import { CreditCard, Smartphone, Globe, Shield, PlayCircle, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ImageLightbox } from '@/components/ImageLightbox';
import paymentInterfaceImg from '@/assets/payment-interface.png';
import adminDashboardImg from '@/assets/admin-dashboard.jpg';

const PaymentCenter = () => {
  const { language } = useLanguage();

  const paymentSolutions = [
    {
      number: '01',
      title: language === 'zh' ? 'VPN代收服务（热门）' : 'VPN Payment Collection Service (Popular)',
      description: language === 'zh' 
        ? '主要解决支付宝/微信收款方式，通过推荐接入我们合作的代收平台进行代收款，包括：支付宝收款、微信收款等，简化支付流程，确保资金安全和顺畅的交易体验。此方式有效规避了传统支付渠道的直接风险，保障您的业务正常运营。适用于源码包/定制开发/白标等用户，白标用户可自行在独立的订单面板中查询流水和提现记录（需开通后进入）。'
        : 'Mainly solves Alipay/WeChat payment collection, connecting to our partnered collection platform for payment collection, including: Alipay collection, WeChat collection, etc. Simplifies payment process, ensures fund security and smooth transaction experience. This method effectively avoids direct risks of traditional payment channels, ensuring your business operations. Suitable for source code/custom development/white label users. White label users can check transaction records and withdrawal records in independent order panel (after activation).',
      note: language === 'zh' ? '（购买了我们的白标计划的用户，可免费接入此服务。）' : '(Users who purchased our white label plan can access this service for free.)',
      buttons: [
        { text: language === 'zh' ? '进入面板' : 'Enter Panel', link: '/fangwencuowu.html' },
        { text: language === 'zh' ? '联系客服' : 'Contact Service', link: 'https://t.me/gaoshengsm' }
      ]
    },
    {
      number: '02',
      title: language === 'zh' ? 'VPN跳转技术' : 'VPN Jump Technology',
      description: language === 'zh'
        ? '主要解决支付宝/微信收款方式，我们提供独特的跳转技术，主要帮助您避开不良的用户恶意举报，从而在必要时自动切换，降低支付宝官方审核的风险，确保收款渠道持续稳定。适用于VPN源码包/定制开发/自开发的VPN客户。'
        : 'Mainly solves Alipay/WeChat payment collection. We provide unique jump technology that helps you avoid malicious user reports, automatically switching when necessary, reducing the risk of Alipay official review and ensuring continuous payment channel stability. Suitable for VPN source code/custom development/self-developed VPN clients.',
      pricing: language === 'zh' ? '收费标准：1500U（含技术配置等），需自行准备收款账户。' : 'Pricing: 1500U (including technical configuration), need to prepare your own collection account.',
      buttons: [
        { text: language === 'zh' ? '联系客服' : 'Contact Service', link: 'https://t.me/gaoshengsm' }
      ]
    },
    {
      number: '03',
      title: language === 'zh' ? 'VPN伪装技术' : 'VPN Disguise Technology',
      description: language === 'zh'
        ? '主要解决支付宝/微信收款方式，通过先进的伪装技术，您可以将收款信息进行隐藏和模糊处理，防止官方识别为VPN相关业务，同时用户也不会看到您的实际收款方式，极大提升支付的隐私性与安全性。适用于VPN源码包/定制开发/自开发的VPN客户。'
        : 'Mainly solves Alipay/WeChat payment collection. Through advanced disguise technology, you can hide and obscure payment information, preventing official recognition as VPN-related business. Users will not see your actual payment method, greatly improving payment privacy and security. Suitable for VPN source code/custom development/self-developed VPN clients.',
      pricing: language === 'zh' ? '收费标准：1500U（含技术配置等），需自行准备收款账户。' : 'Pricing: 1500U (including technical configuration), need to prepare your own collection account.',
      buttons: [
        { text: language === 'zh' ? '联系客服' : 'Contact Service', link: 'https://t.me/gaoshengsm' }
      ]
    }
  ];

  const features = [
    {
      icon: CreditCard,
      title: language === 'zh' ? '多种支付方式' : 'Multiple Payment Methods',
      description: language === 'zh' ? '支持信用卡、借记卡、电子钱包等' : 'Support credit cards, debit cards, e-wallets, etc.',
    },
    {
      icon: Smartphone,
      title: language === 'zh' ? '移动支付' : 'Mobile Payment',
      description: language === 'zh' ? '完美支持各类移动支付平台' : 'Perfect support for various mobile payment platforms',
    },
    {
      icon: Globe,
      title: language === 'zh' ? '全球收款' : 'Global Payment',
      description: language === 'zh' ? '支持多币种，覆盖全球市场' : 'Multi-currency support covering global markets',
    },
    {
      icon: Shield,
      title: language === 'zh' ? '安全保障' : 'Security Guarantee',
      description: language === 'zh' ? 'PCI DSS认证，资金安全有保障' : 'PCI DSS certified with fund security guarantee',
    },
  ];

  const faqData = [
    {
      question: language === 'zh' ? 'VPN收款服务支持哪些支付方式？' : 'What payment methods does VPN payment service support?',
      answer: language === 'zh' ? '我们支持支付宝、微信支付、PayPal、Stripe、VISA、Mastercard、银联、加密货币等多种支付方式。' : 'We support Alipay, WeChat Pay, PayPal, Stripe, VISA, Mastercard, UnionPay, cryptocurrency and more.'
    },
    {
      question: language === 'zh' ? '代收服务和跳转技术有什么区别？' : 'What is the difference between collection service and jump technology?',
      answer: language === 'zh' ? '代收服务是通过我们合作的平台代为收款，而跳转技术是帮助您在必要时自动切换收款渠道，降低风险。' : 'Collection service collects payments through our partnered platforms, while jump technology helps you automatically switch payment channels when necessary to reduce risks.'
    },
    {
      question: language === 'zh' ? '接入收款服务需要多长时间？' : 'How long does it take to integrate payment service?',
      answer: language === 'zh' ? '一般情况下，从注册到开始收款只需1-3个工作日，具体取决于您选择的方案和配置复杂度。' : 'Generally, it takes only 1-3 business days from registration to start collecting, depending on the plan you choose and configuration complexity.'
    },
    {
      question: language === 'zh' ? '收款资金安全吗？' : 'Is the payment fund safe?',
      answer: language === 'zh' ? '完全安全。我们的平台通过PCI DSS认证，采用银行级加密技术，确保您的资金安全。' : 'Completely safe. Our platform is PCI DSS certified and uses bank-level encryption technology to ensure your fund security.'
    }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": language === 'zh' ? 'VPN收款解决方案' : 'VPN Payment Solutions',
      "description": language === 'zh' 
        ? '专业的VPN收款解决方案，支持支付宝、微信支付、Visa、加密货币等多种支付方式，提供代收服务、跳转技术和伪装技术三种解决方案。'
        : 'Professional VPN payment solutions supporting Alipay, WeChat Pay, Visa, cryptocurrency and more. Offering payment collection services, jump technology and disguise technology.',
      "provider": {
        "@type": "Organization",
        "name": "VPN Payment Center"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": language === 'zh' ? 'VPN收款服务' : 'VPN Payment Services',
        "itemListElement": paymentSolutions.map((solution) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": solution.title
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": language === 'zh' ? 'VPN收款中心' : 'VPN Payment Center',
      "url": typeof window !== 'undefined' ? window.location.origin : '',
      "logo": typeof window !== 'undefined' ? `${window.location.origin}/favicon.ico` : '',
      "description": language === 'zh' 
        ? '专业VPN行业收款解决方案提供商，提供安全、稳定、高效的支付服务。'
        : 'Professional VPN industry payment solution provider, offering secure, stable, and efficient payment services.',
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://t.me/gaoshengsm"
      },
      "sameAs": [
        "https://t.me/gaoshengsm"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <>
      <SEO 
        title={language === 'zh' ? 'VPN收款中心 - 专业VPN支付解决方案 | 支付宝微信收款' : 'VPN Payment Center - Professional VPN Payment Solutions | Alipay WeChat'}
        description={language === 'zh' 
          ? '专业VPN收款解决方案，支持支付宝、微信支付、PayPal、Visa、加密货币等多种支付方式。提供代收服务、跳转技术和伪装技术，确保VPN业务安全稳定收款。'
          : 'Professional VPN payment solutions supporting Alipay, WeChat Pay, PayPal, Visa, and cryptocurrency. Offering collection services, jump technology and disguise technology for secure VPN business payments.'}
        keywords={language === 'zh' 
          ? 'VPN收款,VPN支付,支付宝收款,微信收款,VPN代收,VPN支付解决方案,加密货币支付,Visa收款,PayPal收款'
          : 'VPN payment,VPN collection,Alipay payment,WeChat Pay,VPN payment gateway,cryptocurrency payment,Visa payment,PayPal payment'}
        canonical={typeof window !== 'undefined' ? window.location.href : ''}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <main className="min-h-screen px-4">
        <div className="container mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {language === 'zh' ? 'VPN收款解决方案' : 'VPN Payment Solutions'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'zh' 
                ? '作为VPN行业的专家，我们还为VPN服务商提供高效、安全的收款解决方案，帮助您顺利开展业务。本方案主要解决支付宝与微信收款的问题，至于Visa、虚拟货币、Paypal等支付网关皆支持VPN收款，因此VPN服务商可以直接接入进行收款。'
                : 'As VPN industry experts, we provide efficient and secure payment solutions for VPN service providers to help you conduct business smoothly. This solution mainly addresses Alipay and WeChat payment collection issues. For Visa, cryptocurrency, Paypal and other payment gateways that support VPN payments, VPN service providers can directly integrate for collection.'}
            </p>
          </header>

          {/* Demo Section */}
          <section className="mb-16" aria-labelledby="demo-section">
            <h2 id="demo-section" className="text-3xl font-bold text-center mb-8">
              {language === 'zh' ? '方案演示' : 'Solution Demonstration'}
            </h2>
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <Tabs defaultValue="screenshots" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 rounded-none border-b border-border">
                    <TabsTrigger value="screenshots" className="rounded-none">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '界面截图' : 'Screenshots'}
                    </TabsTrigger>
                    <TabsTrigger value="video" className="rounded-none">
                      <PlayCircle className="w-4 h-4 mr-2" />
                      {language === 'zh' ? '演示视频' : 'Demo Video'}
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="screenshots" className="p-6 mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                          <ImageLightbox 
                            src={paymentInterfaceImg} 
                            alt={language === 'zh' ? '支付界面示例 - 支持支付宝、微信、加密货币等多种支付方式' : 'Payment Interface Example - Supporting Alipay, WeChat, Cryptocurrency and more'}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                          {language === 'zh' ? '点击图片查看大图 - 用户端支付界面' : 'Click image to enlarge - User payment interface'}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                          <ImageLightbox 
                            src={adminDashboardImg} 
                            alt={language === 'zh' ? '管理后台示例 - 实时查看用户数据和交易记录' : 'Admin Panel Example - Real-time user data and transaction records'}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground text-center">
                          {language === 'zh' ? '点击图片查看大图 - 商户管理后台' : 'Click image to enlarge - Merchant admin panel'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground text-center">
                        {language === 'zh' 
                          ? '💡 提示：联系客服获取更多演示截图和详细使用说明' 
                          : '💡 Tip: Contact customer service for more demo screenshots and detailed instructions'}
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="video" className="p-6 mt-0">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
                      <video 
                        controls 
                        className="w-full h-full object-contain"
                        poster={paymentInterfaceImg}
                      >
                        <source src="/videos/payment-demo.webm" type="video/webm" />
                        {language === 'zh' ? '您的浏览器不支持视频播放' : 'Your browser does not support video playback'}
                      </video>
                    </div>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      {language === 'zh' 
                        ? '完整的操作流程演示，包括支付接入、订单管理、资金提现等功能' 
                        : 'Complete operation demo including payment integration, order management, fund withdrawal and more'}
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Payment Solutions */}
          <section className="space-y-8 mb-12" aria-labelledby="solutions-section">
            <h2 id="solutions-section" className="sr-only">
              {language === 'zh' ? '收款解决方案详情' : 'Payment Solution Details'}
            </h2>
            {paymentSolutions.map((solution, index) => (
              <article key={index} className="bg-card border-border rounded-lg border">
                <div className="pt-8 px-6 pb-6">
                <h2 className="text-3xl font-bold text-center mb-6">
                  {language === 'zh' ? 'VPN收款解决方案' : 'VPN Payment Solution'}·{solution.number}
                </h2>
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-border">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                {solution.note && (
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    {solution.note}
                  </p>
                )}
                {solution.pricing && (
                  <p className="text-lg font-semibold text-destructive mb-6">
                    {solution.pricing}
                  </p>
                )}
                <div className="flex gap-4 justify-center">
                  {solution.buttons.map((button, btnIndex) => (
                    <Button 
                      key={btnIndex}
                      size="lg" 
                      variant={btnIndex === 0 ? "outline" : "default"}
                      className={btnIndex === 0 ? "" : "bg-gradient-primary"}
                      asChild
                    >
                      <a href={button.link} target="_blank" rel="noopener noreferrer">
                        {button.text}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" aria-labelledby="features-section">
            <h2 id="features-section" className="sr-only">
              {language === 'zh' ? '核心功能特性' : 'Core Features'}
            </h2>
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto" role="img" aria-label={feature.title}>
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </section>

          <section aria-labelledby="payment-methods-section">
            <Card className="bg-card border-border mb-8">
              <CardHeader>
                <CardTitle id="payment-methods-section">{language === 'zh' ? '支持的支付方式' : 'Supported Payment Methods'}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    language === 'zh' ? '支付宝' : 'Alipay',
                    language === 'zh' ? '微信支付' : 'WeChat Pay',
                    'PayPal',
                    'Stripe',
                    'VISA',
                    'Mastercard',
                    language === 'zh' ? '银联' : 'UnionPay',
                    language === 'zh' ? '加密货币' : 'Cryptocurrency',
                  ].map((method, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg text-center hover:border-primary/50 transition-all" role="listitem">
                      <p className="font-semibold">{method}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="integration-process-section">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle id="integration-process-section">{language === 'zh' ? '接入流程' : 'Integration Process'}</CardTitle>
              </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: language === 'zh' ? '注册账号' : 'Register Account',
                  desc: language === 'zh' ? '快速注册收款账号' : 'Quick account registration',
                },
                {
                  step: '02',
                  title: language === 'zh' ? '配置支付' : 'Configure Payment',
                  desc: language === 'zh' ? '选择并配置支付方式' : 'Select and configure payment methods',
                },
                {
                  step: '03',
                  title: language === 'zh' ? '集成接口' : 'Integrate API',
                  desc: language === 'zh' ? '集成支付API到您的系统' : 'Integrate payment API into your system',
                },
                {
                  step: '04',
                  title: language === 'zh' ? '开始收款' : 'Start Collecting',
                  desc: language === 'zh' ? '测试通过后即可开始收款' : 'Start collecting after testing',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="text-3xl font-bold text-primary/20">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
          </section>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-primary" asChild>
              <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                {language === 'zh' ? '立即接入' : 'Integrate Now'}
              </a>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaymentCenter;
