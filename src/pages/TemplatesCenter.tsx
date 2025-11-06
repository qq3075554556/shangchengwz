import { Layout, Smartphone, ShoppingCart, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TemplatesCenter = () => {
  const { language } = useLanguage();

  const categories = [
    {
      icon: Layout,
      title: language === 'zh' ? '网站模板' : 'Website Templates',
      description: language === 'zh' ? '各类网站UI模板，响应式设计' : 'Various website UI templates with responsive design',
      count: '200+',
    },
    {
      icon: Smartphone,
      title: language === 'zh' ? '移动应用模板' : 'Mobile App Templates',
      description: language === 'zh' ? 'iOS和Android应用界面模板' : 'iOS and Android app interface templates',
      count: '150+',
    },
    {
      icon: ShoppingCart,
      title: language === 'zh' ? '电商模板' : 'E-commerce Templates',
      description: language === 'zh' ? '完整的电商系统UI模板' : 'Complete e-commerce system UI templates',
      count: '100+',
    },
    {
      icon: Briefcase,
      title: language === 'zh' ? '企业模板' : 'Business Templates',
      description: language === 'zh' ? '专业的企业官网模板' : 'Professional corporate website templates',
      count: '120+',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '更多模板' : 'More Templates'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '精美的UI模板库，加速您的项目开发'
              : 'Beautiful UI template library to accelerate your project development'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{category.count}</span>
                  <Button variant="secondary">
                    {language === 'zh' ? '浏览模板' : 'Browse Templates'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '模板特色' : 'Template Features'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">
                  {language === 'zh' ? '响应式设计' : 'Responsive Design'}
                </p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  {language === 'zh' ? '即插即用' : 'Plug & Play'}
                </div>
                <p className="text-muted-foreground">
                  {language === 'zh' ? '开箱即用' : 'Ready to Use'}
                </p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">
                  {language === 'zh' ? '定制' : 'Customizable'}
                </div>
                <p className="text-muted-foreground">
                  {language === 'zh' ? '易于定制' : 'Easy to Customize'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

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
                <Button size="lg" className="bg-gradient-primary">
                  {language === 'zh' ? '定制模板' : 'Custom Template'}
                </Button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{language === 'zh' ? '专业UI/UX设计' : 'Professional UI/UX Design'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{language === 'zh' ? '符合品牌风格' : 'Match Brand Style'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{language === 'zh' ? '提供源文件' : 'Provide Source Files'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{language === 'zh' ? '免费修改调整' : 'Free Revisions'}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TemplatesCenter;
