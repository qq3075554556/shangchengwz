import { Building2, Users, Target, Award, Globe, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { language } = useLanguage();

  const values = [
    {
      icon: Target,
      title: language === 'zh' ? '专业专注' : 'Professional Focus',
      description: language === 'zh' ? '专注于VPN技术开发，提供专业的技术服务' : 'Focus on VPN technology development and professional technical services',
    },
    {
      icon: Shield,
      title: language === 'zh' ? '安全可靠' : 'Security & Reliability',
      description: language === 'zh' ? '严格的质量把控，确保产品安全稳定' : 'Strict quality control to ensure product security and stability',
    },
    {
      icon: Users,
      title: language === 'zh' ? '客户至上' : 'Customer First',
      description: language === 'zh' ? '以客户需求为导向，提供优质服务' : 'Customer-oriented, providing quality services',
    },
    {
      icon: Award,
      title: language === 'zh' ? '品质保证' : 'Quality Assurance',
      description: language === 'zh' ? '多年行业经验，值得信赖的合作伙伴' : 'Years of industry experience, trustworthy partner',
    },
  ];

  const stats = [
    {
      value: '2013',
      label: language === 'zh' ? '成立年份' : 'Founded',
    },
    {
      value: '1000+',
      label: language === 'zh' ? '服务客户' : 'Clients Served',
    },
    {
      value: '50+',
      label: language === 'zh' ? '国家覆盖' : 'Countries',
    },
    {
      value: '99.9%',
      label: language === 'zh' ? '服务稳定性' : 'Service Stability',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '关于我们' : 'About Us'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'zh' 
              ? '新加坡VPN开发专家，自2013年起致力于提供专业的VPN开发与技术服务。我们专注于为全球客户提供高质量的源码、定制开发、白标解决方案等全方位技术服务。'
              : 'Singapore VPN Development Expert, committed to providing professional VPN development and technical services since 2013. We focus on providing high-quality source code, custom development, white label solutions and comprehensive technical services for global clients.'}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Introduction */}
        <Card className="bg-card border-border mb-16">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">
                {language === 'zh' ? '公司介绍' : 'Company Introduction'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {language === 'zh'
                ? 'VPN开发王（VPNKing）是一家专注于VPN技术研发与服务的专业平台。我们总部位于新加坡，拥有一支经验丰富的技术团队，致力于为全球客户提供最优质的VPN解决方案。'
                : 'VPNKing is a professional platform focusing on VPN technology R&D and services. Headquartered in Singapore, we have an experienced technical team dedicated to providing the best VPN solutions for global clients.'}
            </p>
            <p>
              {language === 'zh'
                ? '我们的服务涵盖源码开发、定制开发、白标方案、节点服务、支付集成、应用上架等多个领域。无论您是初创企业还是成熟公司，我们都能为您提供量身定制的技术解决方案。'
                : 'Our services cover source code development, custom development, white label solutions, node services, payment integration, app listing and more. Whether you are a startup or an established company, we can provide you with tailored technical solutions.'}
            </p>
            <p>
              {language === 'zh'
                ? '多年来，我们已为超过1000家客户提供服务，业务遍及全球50多个国家和地区。我们坚持"客户至上、品质第一"的服务理念，赢得了客户的广泛认可和信赖。'
                : 'Over the years, we have served more than 1,000 clients, with business spanning over 50 countries and regions worldwide. We adhere to the service philosophy of "customer first, quality first" and have won wide recognition and trust from customers.'}
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {language === 'zh' ? '核心价值' : 'Core Values'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <Card className="bg-card border-border mb-16">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl">
                {language === 'zh' ? '服务范围' : 'Service Scope'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {language === 'zh' ? '技术开发' : 'Technical Development'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {language === 'zh' ? 'iOS/Android/Windows/Mac VPN开发' : 'iOS/Android/Windows/Mac VPN Development'}</li>
                  <li>• {language === 'zh' ? '多协议支持（OpenVPN、IKEv2、SS等）' : 'Multi-protocol support (OpenVPN, IKEv2, SS, etc.)'}</li>
                  <li>• {language === 'zh' ? '定制功能开发' : 'Custom feature development'}</li>
                  <li>• {language === 'zh' ? '界面设计与优化' : 'UI design and optimization'}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {language === 'zh' ? '配套服务' : 'Supporting Services'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {language === 'zh' ? '全球节点部署与维护' : 'Global node deployment and maintenance'}</li>
                  <li>• {language === 'zh' ? '支付系统集成' : 'Payment system integration'}</li>
                  <li>• {language === 'zh' ? '应用商店上架服务' : 'App store listing services'}</li>
                  <li>• {language === 'zh' ? '运营与技术支持' : 'Operations and technical support'}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-gradient-primary text-primary-foreground mb-16">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              {language === 'zh' ? '联系我们' : 'Contact Us'}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {language === 'zh' 
                ? '有任何问题或需求？欢迎随时联系我们的客服团队'
                : 'Any questions or needs? Feel free to contact our customer service team'}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="text-sm opacity-90">
                {language === 'zh' ? '电报社群：' : 'Telegram Group: '}t.me/vpndevelop
              </div>
              <div className="text-sm opacity-90">
                {language === 'zh' ? '客服联系：' : 'Customer Service: '}t.me/ximi1688
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground mb-8">
          <p>
            {language === 'zh' 
              ? '©Copyright 2013-2025 | 本平台服务仅供合法用途'
              : '©Copyright 2013-2025 | Services are for legal purposes only'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
