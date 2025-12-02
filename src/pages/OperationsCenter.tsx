import { TrendingUp, Target, BarChart, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const OperationsCenter = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: language === 'zh' ? '运营策略' : 'Operations Strategy',
      description: language === 'zh' ? '制定全面的运营策略和计划' : 'Develop comprehensive operations strategies and plans',
    },
    {
      icon: Target,
      title: language === 'zh' ? '精准营销' : 'Precision Marketing',
      description: language === 'zh' ? '基于数据的精准营销方案' : 'Data-driven precision marketing solutions',
    },
    {
      icon: BarChart,
      title: language === 'zh' ? '数据分析' : 'Data Analysis',
      description: language === 'zh' ? '深度数据分析，优化运营效果' : 'In-depth data analysis to optimize operations',
    },
    {
      icon: Megaphone,
      title: language === 'zh' ? '广告投放' : 'Ad Placement',
      description: language === 'zh' ? '多平台广告投放和优化' : 'Multi-platform ad placement and optimization',
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '运营与广告中心' : 'Operations & Advertising Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '专业的运营和广告服务，助力您的业务增长'
              : 'Professional operations and advertising services to boost your business growth'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>{language === 'zh' ? '运营服务' : 'Operations Services'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  language === 'zh' ? '用户增长策略' : 'User growth strategy',
                  language === 'zh' ? '内容运营' : 'Content operations',
                  language === 'zh' ? '社群运营' : 'Community operations',
                  language === 'zh' ? '活动策划' : 'Event planning',
                  language === 'zh' ? 'SEO优化' : 'SEO optimization',
                  language === 'zh' ? 'ASO优化' : 'ASO optimization',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>{language === 'zh' ? '广告服务' : 'Advertising Services'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  language === 'zh' ? '搜索引擎广告' : 'Search engine ads',
                  language === 'zh' ? '社交媒体广告' : 'Social media ads',
                  language === 'zh' ? '信息流广告' : 'Native ads',
                  language === 'zh' ? '视频广告' : 'Video ads',
                  language === 'zh' ? '程序化广告' : 'Programmatic advertising',
                  language === 'zh' ? '效果追踪' : 'Performance tracking',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-secondary border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'zh' ? '需要定制运营方案？' : 'Need Custom Operations Plan?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'zh' 
                ? '我们的团队将根据您的业务特点，制定专属运营策略'
                : 'Our team will develop exclusive operations strategies based on your business characteristics'}
            </p>
            <Button size="lg" className="bg-gradient-primary" asChild>
              <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                {language === 'zh' ? '咨询专家' : 'Consult Expert'}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default OperationsCenter;
