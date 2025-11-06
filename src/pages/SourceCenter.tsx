import { Code2, GitBranch, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const SourceCenter = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Code2,
      title: language === 'zh' ? '高质量代码' : 'High-Quality Code',
      description: language === 'zh' ? '经过专业团队审核的优质源码' : 'Premium source code reviewed by professional teams',
    },
    {
      icon: GitBranch,
      title: language === 'zh' ? '版本控制' : 'Version Control',
      description: language === 'zh' ? '完整的版本管理和更新支持' : 'Complete version management and update support',
    },
    {
      icon: Zap,
      title: language === 'zh' ? '快速部署' : 'Quick Deploy',
      description: language === 'zh' ? '一键部署，快速上线' : 'One-click deployment for quick launch',
    },
    {
      icon: Shield,
      title: language === 'zh' ? '安全可靠' : 'Secure & Reliable',
      description: language === 'zh' ? '代码安全检测，无后门保障' : 'Security tested code with no backdoors',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '源码中心' : 'Source Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '提供各类高质量源码资源，助力您的项目快速启动'
              : 'Providing various high-quality source code resources to jumpstart your projects'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '源码分类' : 'Source Categories'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="secondary" className="h-auto py-6">
                <div className="text-left">
                  <p className="font-semibold">{language === 'zh' ? 'Web应用' : 'Web Apps'}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? '完整的Web应用源码' : 'Complete web application source'}
                  </p>
                </div>
              </Button>
              <Button variant="secondary" className="h-auto py-6">
                <div className="text-left">
                  <p className="font-semibold">{language === 'zh' ? '移动应用' : 'Mobile Apps'}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? 'iOS/Android应用源码' : 'iOS/Android app source'}
                  </p>
                </div>
              </Button>
              <Button variant="secondary" className="h-auto py-6">
                <div className="text-left">
                  <p className="font-semibold">{language === 'zh' ? '系统源码' : 'System Source'}</p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh' ? '完整系统解决方案' : 'Complete system solutions'}
                  </p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary">
            {language === 'zh' ? '浏览源码库' : 'Browse Source Library'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SourceCenter;
