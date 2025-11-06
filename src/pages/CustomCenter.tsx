import { Sparkles, Target, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const CustomCenter = () => {
  const { language } = useLanguage();

  const advantages = [
    {
      icon: Sparkles,
      title: language === 'zh' ? '个性化定制' : 'Personalized',
      description: language === 'zh' ? '完全按照您的需求定制开发' : 'Fully customized to your requirements',
    },
    {
      icon: Target,
      title: language === 'zh' ? '精准实现' : 'Precise Implementation',
      description: language === 'zh' ? '准确理解需求，精准实现功能' : 'Accurate understanding and precise feature implementation',
    },
    {
      icon: Users,
      title: language === 'zh' ? '专业团队' : 'Professional Team',
      description: language === 'zh' ? '经验丰富的开发团队支持' : 'Experienced development team support',
    },
    {
      icon: Clock,
      title: language === 'zh' ? '按时交付' : 'On-Time Delivery',
      description: language === 'zh' ? '严格的项目管理，保证按时交付' : 'Strict project management ensures timely delivery',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '定制中心' : 'Custom Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '专业的定制开发服务，将您的想法变为现实'
              : 'Professional custom development services to turn your ideas into reality'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <advantage.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{advantage.title}</CardTitle>
                <CardDescription>{advantage.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '定制流程' : 'Custom Process'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: language === 'zh' ? '需求沟通' : 'Requirements Discussion',
                  desc: language === 'zh' ? '详细了解您的需求和期望' : 'Understand your needs and expectations in detail',
                },
                {
                  step: '02',
                  title: language === 'zh' ? '方案设计' : 'Solution Design',
                  desc: language === 'zh' ? '制定详细的开发方案和时间表' : 'Create detailed development plan and timeline',
                },
                {
                  step: '03',
                  title: language === 'zh' ? '开发实施' : 'Development',
                  desc: language === 'zh' ? '按照方案进行开发，定期反馈进度' : 'Develop according to plan with regular updates',
                },
                {
                  step: '04',
                  title: language === 'zh' ? '测试交付' : 'Testing & Delivery',
                  desc: language === 'zh' ? '全面测试后交付，提供后续支持' : 'Deliver after thorough testing with ongoing support',
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

        <div className="text-center">
          <Button size="lg" className="bg-gradient-primary">
            {language === 'zh' ? '开始定制' : 'Start Customization'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomCenter;
