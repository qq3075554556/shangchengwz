import { Palette, Code2, Sparkles, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const TemplatesCenter = () => {
  const { language } = useLanguage();

  const templates = [
    {
      id: 1,
      name: language === 'zh' ? 'VPN源码商城·模板01' : 'VPN Source Mall Template 01',
      category: language === 'zh' ? 'Flutter应用' : 'Flutter App',
      description: language === 'zh' ? '现成UI，前端采用Flutter，适用于IOS与安卓。' : 'Ready-made UI, frontend using Flutter, suitable for iOS and Android.',
      features: language === 'zh' 
        ? ['Flutter框架', 'iOS适配', 'Android适配', '现成UI']
        : ['Flutter Framework', 'iOS Compatible', 'Android Compatible', 'Ready UI'],
      tag: language === 'zh' ? '热门' : 'Popular',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/11379024/280058_637515.jpeg',
      buyLink: 'https://fqmpprrl.aisupermall.com/index.php/product/openvpn-and-other-protocol-source-code/'
    },
    {
      id: 2,
      name: language === 'zh' ? 'VPN源码商城·模板02' : 'VPN Source Mall Template 02',
      category: language === 'zh' ? 'Flutter应用' : 'Flutter App',
      description: language === 'zh' ? '现成UI，前端采用Flutter，适用于IOS与安卓。' : 'Ready-made UI, frontend using Flutter, suitable for iOS and Android.',
      features: language === 'zh'
        ? ['Flutter框架', 'iOS适配', 'Android适配', '现成UI']
        : ['Flutter Framework', 'iOS Compatible', 'Android Compatible', 'Ready UI'],
      tag: language === 'zh' ? '新品' : 'New',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/11379024/682503_879033.jpeg',
      buyLink: 'https://fqmpprrl.aisupermall.com/index.php/product/ss-ss2/'
    },
    {
      id: 3,
      name: language === 'zh' ? 'VPN源码商城·模板03' : 'VPN Source Mall Template 03',
      category: language === 'zh' ? 'Flutter应用' : 'Flutter App',
      description: language === 'zh' ? '现成UI，前端采用Flutter，适用于IOS与安卓。' : 'Ready-made UI, frontend using Flutter, suitable for iOS and Android.',
      features: language === 'zh'
        ? ['Flutter框架', 'iOS适配', 'Android适配', '现成UI']
        : ['Flutter Framework', 'iOS Compatible', 'Android Compatible', 'Ready UI'],
      tag: language === 'zh' ? '推荐' : 'Featured',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/321835_517232.jpeg',
      buyLink: 'https://fqmpprrl.aisupermall.com/index.php/product/ss-ss2/'
    },
    {
      id: 4,
      name: language === 'zh' ? 'VPN源码商城·模板04' : 'VPN Source Mall Template 04',
      category: language === 'zh' ? 'Flutter应用' : 'Flutter App',
      description: language === 'zh' ? '现成UI，前端采用Flutter，适用于IOS与安卓。' : 'Ready-made UI, frontend using Flutter, suitable for iOS and Android.',
      features: language === 'zh'
        ? ['Flutter框架', 'iOS适配', 'Android适配', '现成UI']
        : ['Flutter Framework', 'iOS Compatible', 'Android Compatible', 'Ready UI'],
      tag: '',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/492806_117772.jpeg',
      buyLink: 'https://fqmpprrl.aisupermall.com/index.php/product/ss-ss2/'
    },
    {
      id: 5,
      name: language === 'zh' ? 'VPN源码商城·模板05' : 'VPN Source Mall Template 05',
      category: language === 'zh' ? 'Flutter应用' : 'Flutter App',
      description: language === 'zh' ? '现成UI，前端采用Flutter，适用于IOS与安卓。' : 'Ready-made UI, frontend using Flutter, suitable for iOS and Android.',
      features: language === 'zh'
        ? ['Flutter框架', 'iOS适配', 'Android适配', '现成UI']
        : ['Flutter Framework', 'iOS Compatible', 'Android Compatible', 'Ready UI'],
      tag: language === 'zh' ? '热门' : 'Popular',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/22354_159696.jpeg',
      buyLink: 'https://fqmpprrl.aisupermall.com/index.php/product/ss-ss2/'
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'zh' ? '精选模板' : 'Featured Templates'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="bg-card border-border hover:border-primary/50 transition-all group overflow-hidden">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {template.tag && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {template.tag}
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {template.category}
                  </Badge>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {template.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    asChild
                  >
                    <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                      {language === 'zh' ? '立即购买' : 'Buy Now'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>{language === 'zh' ? '源码交付' : 'Source Code Delivery'}</CardTitle>
              <CardDescription>
                {language === 'zh' ? '完整源码，包含详细文档和技术支持' : 'Complete source code with detailed documentation and technical support'}
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>{language === 'zh' ? '品牌定制' : 'Brand Customization'}</CardTitle>
              <CardDescription>
                {language === 'zh' ? '支持完全定制，打造独特品牌形象' : 'Support full customization to create unique brand identity'}
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>{language === 'zh' ? '快速部署' : 'Quick Deployment'}</CardTitle>
              <CardDescription>
                {language === 'zh' ? '一键部署，快速上线您的项目' : 'One-click deployment to launch your project quickly'}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="bg-gradient-secondary border-border">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'zh' ? '找不到合适的模板？' : 'Can\'t Find Suitable Template?'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'zh' 
                    ? '我们提供定制UI设计服务，为您量身打造专属模板'
                    : 'We provide custom UI design services to create exclusive templates for you'}
                </p>
                <Button size="lg" className="bg-gradient-primary" asChild>
                  <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                    {language === 'zh' ? '定制模板' : 'Custom Template'}
                  </a>
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>{language === 'zh' ? '专业UI/UX设计' : 'Professional UI/UX Design'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-primary" />
                  <span>{language === 'zh' ? '符合品牌风格' : 'Match Brand Style'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>{language === 'zh' ? '提供源文件' : 'Provide Source Files'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span>{language === 'zh' ? '免费修改调整' : 'Free Revisions'}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default TemplatesCenter;
