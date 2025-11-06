import { CreditCard, Smartphone, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PaymentCenter = () => {
  const { language } = useLanguage();

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

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '收款中心' : 'Payment Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '安全便捷的收款解决方案，支持多种支付方式'
              : 'Safe and convenient payment solutions supporting multiple payment methods'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '支持的支付方式' : 'Supported Payment Methods'}</CardTitle>
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
                <div key={index} className="p-4 border border-border rounded-lg text-center hover:border-primary/50 transition-all">
                  <p className="font-semibold">{method}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '接入流程' : 'Integration Process'}</CardTitle>
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

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary">
            {language === 'zh' ? '立即接入' : 'Integrate Now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCenter;
