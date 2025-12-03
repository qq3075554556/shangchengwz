import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const NodeCenter = () => {
  const { language } = useLanguage();

  const pricingPlans = [
    {
      name: language === 'zh' ? 'VPN节点' : 'VPN Node',
      bandwidth: '200M',
      package: language === 'zh' ? '套餐' : 'Package',
      users: language === 'zh' ? '支持同时在线5000人以上' : 'Supports 5000+ concurrent users',
      price: 'USD$ 500',
      period: language === 'zh' ? '每个月' : 'Per Month',
      buttonText: language === 'zh' ? '立即联系' : 'Contact Now',
      recommended: false,
      nodes: 10,
      speed: '200M',
      features: [
        language === 'zh' ? '免费配置10个节点' : 'Free 10 nodes',
        language === 'zh' ? '(全球地区任选)' : '(Global regions)',
        '',
        language === 'zh' ? '无限流量' : 'Unlimited traffic',
        language === 'zh' ? 'VPN专用服务器' : 'Dedicated VPN server',
        language === 'zh' ? '200M速度专线' : '200M dedicated line',
        language === 'zh' ? '稳定防封抗�击' : 'Stable & anti-block',
        language === 'zh' ? '24小时在线支持' : '24/7 online support',
        language === 'zh' ? '全程包维护与售后' : 'Full maintenance',
        language === 'zh' ? '中国大陆稳定率99.9%' : 'China 99.9% uptime',
        '',
        language === 'zh' ? '支持补差价升级*' : 'Support upgrade*',
        language === 'zh' ? '支持添加更多节点*' : 'Add more nodes*',
        language === 'zh' ? '支持动态节点方案*' : 'Dynamic nodes*'
      ]
    },
    {
      name: language === 'zh' ? 'VPN节点' : 'VPN Node',
      bandwidth: '500M',
      package: language === 'zh' ? '套餐' : 'Package',
      users: language === 'zh' ? '支持同时在线10000人以上' : 'Supports 10000+ concurrent users',
      price: 'USD$ 1800',
      period: language === 'zh' ? '每个月' : 'Per Month',
      buttonText: language === 'zh' ? '立即咨询' : 'Inquire Now',
      recommended: true,
      nodes: 20,
      speed: '500M',
      features: [
        language === 'zh' ? '免费配置20个节点' : 'Free 20 nodes',
        language === 'zh' ? '(全球地区任选)' : '(Global regions)',
        '',
        language === 'zh' ? '无限流量' : 'Unlimited traffic',
        language === 'zh' ? 'VPN专用服务器' : 'Dedicated VPN server',
        language === 'zh' ? '500M速度专线' : '500M dedicated line',
        language === 'zh' ? '稳定防封抗攻击' : 'Stable & anti-block',
        language === 'zh' ? '24小时在线支持' : '24/7 online support',
        language === 'zh' ? '全程包维护与售后' : 'Full maintenance',
        language === 'zh' ? '中国大陆稳定率99.9%' : 'China 99.9% uptime',
        '',
        language === 'zh' ? '支持补差价升级*' : 'Support upgrade*',
        language === 'zh' ? '支持添加更多节点*' : 'Add more nodes*',
        language === 'zh' ? '支持动态节点方案*' : 'Dynamic nodes*'
      ]
    },
    {
      name: language === 'zh' ? 'VPN节点' : 'VPN Node',
      bandwidth: '1000M',
      package: language === 'zh' ? '套餐' : 'Package',
      users: language === 'zh' ? '支持同时在线5万人以上' : 'Supports 50000+ concurrent users',
      price: 'USD$ 3000',
      period: language === 'zh' ? '每个月' : 'Per Month',
      buttonText: language === 'zh' ? '立即咨询' : 'Inquire Now',
      recommended: false,
      nodes: 30,
      speed: '1000M',
      features: [
        language === 'zh' ? '免费配置30个节点' : 'Free 30 nodes',
        language === 'zh' ? '(全球地区任选)' : '(Global regions)',
        '',
        language === 'zh' ? '无限流量' : 'Unlimited traffic',
        language === 'zh' ? 'VPN专用服务器' : 'Dedicated VPN server',
        language === 'zh' ? '1000M速度专线' : '1000M dedicated line',
        language === 'zh' ? '稳定防封抗攻击' : 'Stable & anti-block',
        language === 'zh' ? '24小时在线支持' : '24/7 online support',
        language === 'zh' ? '全程包维护与售后' : 'Full maintenance',
        language === 'zh' ? '中国大陆稳定率99.9%' : 'China 99.9% uptime',
        '',
        language === 'zh' ? '支持补差价升级*' : 'Support upgrade*',
        language === 'zh' ? '支持添加更多节点*' : 'Add more nodes*',
        language === 'zh' ? '支持动态节点方案*' : 'Dynamic nodes*'
      ]
    },
    {
      name: language === 'zh' ? 'VPN节点' : 'VPN Node',
      bandwidth: '5000M',
      package: language === 'zh' ? '套餐' : 'Package',
      users: language === 'zh' ? '支持同时在线10万人以上' : 'Supports 100000+ concurrent users',
      price: 'USD$ 8800',
      period: language === 'zh' ? '每个月' : 'Per Month',
      buttonText: language === 'zh' ? '立即咨询' : 'Inquire Now',
      recommended: false,
      nodes: 100,
      speed: '5000M',
      features: [
        language === 'zh' ? '免费配置100个节点' : 'Free 100 nodes',
        language === 'zh' ? '(全球地区任选)' : '(Global regions)',
        '',
        language === 'zh' ? '无限流量' : 'Unlimited traffic',
        language === 'zh' ? 'VPN专用服务器' : 'Dedicated VPN server',
        language === 'zh' ? '5000M速度专线' : '5000M dedicated line',
        language === 'zh' ? '稳定防封抗攻击' : 'Stable & anti-block',
        language === 'zh' ? '24小时在线支持' : '24/7 online support',
        language === 'zh' ? '全程包维护与售后' : 'Full maintenance',
        language === 'zh' ? '中国大陆稳定率99.9%' : 'China 99.9% uptime',
        '',
        language === 'zh' ? '支持补差价升级*' : 'Support upgrade*',
        language === 'zh' ? '支持添加更多节点*' : 'Add more nodes*',
        language === 'zh' ? '支持动态节点方案*' : 'Dynamic nodes*'
      ]
    }
  ];

  const advantages = [
    language === 'zh' ? 'VPN专线不限流量：按需开通，弹性扩容' : 'VPN unlimited traffic: On-demand, elastic scaling',
    language === 'zh' ? '带宽可选 100M-10G：高并发、低时延' : 'Bandwidth 100M-10G: High concurrency, low latency',
    language === 'zh' ? '免费节点配置：主流协议与策略一站式交付' : 'Free node configuration: One-stop delivery',
    language === 'zh' ? '全球节点可选：多区域就近接入与容灾' : 'Global nodes: Multi-region access',
    language === 'zh' ? '稳定抗封与防护：自动健康检测与切换、抗攻击' : 'Stable protection: Auto health check, anti-attack',
    language === 'zh' ? '7×24 专业运维：工单直连技术团队' : '7×24 support: Direct tech team access',
    language === 'zh' ? '近一年中国大陆可用率 99.9%*' : 'China uptime 99.9%*'
  ];

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": language === 'zh' ? 'VPN节点商城' : 'VPN Node Store',
    "description": language === 'zh'
      ? '专业VPN节点服务，提供200M到5000M带宽套餐，全球任意地区节点可选，稳定率99.9%，支持5000到10万人同时在线，7×24专业运维。'
      : 'Professional VPN node service offering 200M to 5000M bandwidth packages, global node selection, 99.9% uptime, supporting 5000 to 100000 concurrent users with 7×24 professional support.',
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'zh' ? 'VPN节点套餐' : 'VPN Node Packages',
      "itemListElement": pricingPlans.map((plan, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `${plan.bandwidth} ${plan.package}`
        },
        "price": plan.price.replace('USD$ ', ''),
        "priceCurrency": "USD"
      }))
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VPNKing 节点商城",
    "description": language === 'zh' 
      ? '专业VPN国际专线服务商，提供全球任意地区节点，稳定率99.9%'
      : 'Professional VPN international dedicated line provider with global node selection and 99.9% uptime',
    "url": "https://vpnking.cc/nodes",
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
    "name": language === 'zh' ? 'VPN节点服务' : 'VPN Node Service',
    "description": language === 'zh' 
      ? 'VPN国际专线节点服务，稳定率99.9%'
      : 'VPN international dedicated line node service with 99.9% uptime',
    "brand": {
      "@type": "Brand",
      "name": "VPNKing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "428",
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
          "name": language === 'zh' ? "孙先生" : "Mr. Sun"
        },
        "reviewBody": language === 'zh' 
          ? "节点质量非常好，速度快且稳定，99.9%可用率名副其实！"
          : "Node quality is excellent, fast and stable speed, 99.9% uptime is well-deserved!"
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
          "name": language === 'zh' ? "周先生" : "Mr. Zhou"
        },
        "reviewBody": language === 'zh' 
          ? "7x24技术支持很给力，遇到问题都能及时解决，服务态度很好。"
          : "7x24 technical support is great, problems are solved promptly, excellent service attitude."
      }
    ]
  };

  const structuredData = [storeSchema, localBusinessSchema, reviewSchema];

  return (
    <>
      <SEO 
        title={language === 'zh' ? 'VPN节点商城 - 全球VPN专线节点 | 200M-5000M带宽套餐' : 'VPN Node Store - Global VPN Dedicated Nodes | 200M-5000M Bandwidth Packages'}
        description={language === 'zh' 
          ? 'VPN节点商城提供专业VPN国际专线服务，200M-5000M带宽可选，全球任意地区节点配置，稳定率99.9%，支持5000到10万人同时在线，无限流量，7×24专业运维，抗攻击防封。'
          : 'VPN Node Store offers professional VPN international dedicated line service, 200M-5000M bandwidth options, global node configuration, 99.9% uptime, supporting 5000-100000 concurrent users, unlimited traffic, 7×24 support, anti-attack protection.'}
        keywords={language === 'zh' 
          ? 'VPN节点,VPN专线,VPN国际线路,VPN带宽,全球节点,VPN服务器,VPN线路商城,稳定VPN节点'
          : 'VPN nodes,VPN dedicated line,VPN international line,VPN bandwidth,global nodes,VPN servers,VPN line store,stable VPN nodes'}
        canonical={typeof window !== 'undefined' ? window.location.href : ''}
        structuredData={structuredData}
      />
      <Breadcrumbs />
      <main className="min-h-screen pt-4 px-4 pb-16">
        <div className="container mx-auto">
          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'zh' ? 'VPN节点商城' : 'VPN Node Store'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'zh' 
                ? '全球任意地区节点可选，可定制流量。'
                : 'Global node selection with customizable traffic.'}
            </p>
          </header>

          {/* Pricing Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" aria-labelledby="pricing-section">
            <h2 id="pricing-section" className="sr-only">
              {language === 'zh' ? 'VPN节点价格套餐' : 'VPN Node Pricing Packages'}
            </h2>
            {pricingPlans.map((plan, index) => (
              <article 
                key={index} 
                className={`relative ${plan.recommended ? 'bg-muted/30' : 'bg-card'} border-border hover:border-primary/50 transition-all rounded-lg border`}
                itemScope
                itemType="https://schema.org/Product"
              >
                {plan.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background">
                    {language === 'zh' ? '推荐' : 'Recommended'}
                  </Badge>
                )}
                <div className="text-center pb-4 p-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" itemProp="name">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-1">
                    <span className="text-destructive">{plan.bandwidth}{plan.package}</span>
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">({plan.users})</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-1">{plan.period}</p>
                    <div className="text-3xl font-bold mb-4" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="price">{plan.price.replace('USD$ ', '')}</span>
                      <meta itemProp="priceCurrency" content="USD" />
                    </div>
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90" asChild>
                      <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                        {plan.buttonText}
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="pt-0 p-6">
                  <div className="border-t border-border pt-4">
                    <h4 className="font-bold mb-3">
                      {language === 'zh' ? '特点：' : 'Features:'}
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className={`text-sm ${feature === '' ? 'h-2' : ''} ${feature.includes('99.9%') ? 'text-destructive font-semibold' : 'text-muted-foreground'}`}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* VPN International Line Introduction */}
          <section className="bg-muted/30 rounded-lg p-8 md:p-12 mb-8" aria-labelledby="introduction-section">
            <h2 id="introduction-section" className="text-3xl font-bold text-center mb-8">
              {language === 'zh' ? 'VPN国际专线介绍' : 'VPN International Line Introduction'}
            </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">
              {language === 'zh' ? 'VPN开发王 - 多类型 VPN/VPS线路服务' : 'VPN Development Platform - Multiple VPN/VPS Services'}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'zh'
                ? '作为业内领先的 VPN 开发与整体解决方案提供商，我们上线全新线路产品，为个人与企业提供高效、稳定、安全的节点与专线采购/托管服务；根据不同业务场景（跨境办公、出海业务、远程访问、内容分发等）量身定制带宽与策略。'
                : 'As an industry-leading VPN development and solution provider, we launch new line products to provide individuals and enterprises with efficient, stable, and secure node and dedicated line procurement/hosting services; customized bandwidth and strategies according to different business scenarios.'}
            </p>

            <h3 className="text-xl font-bold mb-4">
              {language === 'zh' ? '核心优势' : 'Core Advantages'}
            </h3>
            <ul className="space-y-3 mb-8">
              {advantages.map((advantage, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{advantage}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-4">
              {language === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {language === 'zh'
                ? '即买即用、开箱即上；从规划、部署到运维全托管，减少自建成本与试错时间，助力业务持续增长。'
                : 'Instant deployment and use; from planning to operation and maintenance, fully managed, reducing self-built costs and trial-and-error time, helping business growth.'}
            </p>

            <div className="border-t border-border pt-6">
              <h3 className="text-xl font-bold mb-4">
                {language === 'zh' ? 'VPN开发王的 VPS 线路商城' : 'VPN Development VPS Line Store'}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {language === 'zh'
                  ? '致力为您提供优质的 VPN 连接与专线解决方案 ——'
                  : 'Dedicated to providing you with premium VPN connections and dedicated line solutions —'}
                <span className="font-bold text-foreground">
                  {language === 'zh' ? '现在就咨询/开通' : 'Consult/Activate Now'}
                </span>
                {language === 'zh'
                  ? '，获得稳定高速的全球网络能力。'
                  : ', get stable and high-speed global network capabilities.'}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                {language === 'zh'
                  ? '* 可用率为近一年监测数据的统计口径，实际表现以所选区域与网络环境为准。'
                  : '* Uptime is based on one-year monitoring data, actual performance depends on selected region and network environment.'}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90" asChild>
              <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                {language === 'zh' ? '联系客服' : 'Contact Support'}
              </a>
            </Button>
          </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default NodeCenter;
