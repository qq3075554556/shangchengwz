import { Tag, Rocket, Palette, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const WhitelabelCenter = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Tag,
      title: language === 'zh' ? '品牌定制' : 'Brand Customization',
      description: language === 'zh' ? '完全使用您的品牌标识和设计' : 'Complete use of your brand identity and design',
    },
    {
      icon: Rocket,
      title: language === 'zh' ? '快速上线' : 'Quick Launch',
      description: language === 'zh' ? '成熟方案，快速部署上线' : 'Mature solution for quick deployment',
    },
    {
      icon: Palette,
      title: language === 'zh' ? '灵活配置' : 'Flexible Configuration',
      description: language === 'zh' ? '可自定义功能模块和界面' : 'Customizable features and interface',
    },
    {
      icon: Settings,
      title: language === 'zh' ? '技术支持' : 'Technical Support',
      description: language === 'zh' ? '完善的技术支持和维护服务' : 'Comprehensive technical support and maintenance',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '白标中心' : 'Whitelabel Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '快速建立您的品牌，提供完整的白标解决方案'
              : 'Quickly establish your brand with complete whitelabel solutions'}
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
            <CardTitle>{language === 'zh' ? '白标方案' : 'Whitelabel Solutions'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg hover:border-primary/50 transition-all">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'zh' ? '基础版' : 'Basic'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'zh' 
                    ? '适合初创团队，快速启动您的业务'
                    : 'Suitable for startups to quickly launch your business'}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ {language === 'zh' ? '基础品牌定制' : 'Basic brand customization'}</li>
                  <li>✓ {language === 'zh' ? '核心功能模块' : 'Core feature modules'}</li>
                  <li>✓ {language === 'zh' ? '标准技术支持' : 'Standard technical support'}</li>
                </ul>
              </div>
              <div className="p-6 border border-primary rounded-lg hover:shadow-glow transition-all">
                <h3 className="text-xl font-semibold mb-2">
                  {language === 'zh' ? '专业版' : 'Professional'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'zh' 
                    ? '适合成长型企业，功能更丰富'
                    : 'Suitable for growing businesses with richer features'}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ {language === 'zh' ? '深度品牌定制' : 'Deep brand customization'}</li>
                  <li>✓ {language === 'zh' ? '全功能模块' : 'Full feature modules'}</li>
                  <li>✓ {language === 'zh' ? '优先技术支持' : 'Priority technical support'}</li>
                  <li>✓ {language === 'zh' ? '定制开发服务' : 'Custom development services'}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary">
            {language === 'zh' ? '咨询方案' : 'Consult Solutions'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhitelabelCenter;
