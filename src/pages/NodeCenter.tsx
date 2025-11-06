import { Server, Globe, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const NodeCenter = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Globe,
      title: language === 'zh' ? '全球覆盖' : 'Global Coverage',
      description: language === 'zh' ? '全球多个国家和地区的节点资源' : 'Node resources in multiple countries and regions worldwide',
    },
    {
      icon: Zap,
      title: language === 'zh' ? '高速稳定' : 'High-Speed & Stable',
      description: language === 'zh' ? '优质线路，保证连接速度和稳定性' : 'Premium routes ensuring connection speed and stability',
    },
    {
      icon: Shield,
      title: language === 'zh' ? '安全可靠' : 'Secure & Reliable',
      description: language === 'zh' ? '企业级安全保障，数据加密传输' : 'Enterprise-grade security with encrypted data transmission',
    },
    {
      icon: Server,
      title: language === 'zh' ? '弹性扩展' : 'Elastic Scaling',
      description: language === 'zh' ? '根据需求灵活调整节点配置' : 'Flexible node configuration based on needs',
    },
  ];

  const regions = [
    {
      name: language === 'zh' ? '亚太地区' : 'Asia Pacific',
      nodes: language === 'zh' ? '50+ 节点' : '50+ Nodes',
    },
    {
      name: language === 'zh' ? '北美地区' : 'North America',
      nodes: language === 'zh' ? '30+ 节点' : '30+ Nodes',
    },
    {
      name: language === 'zh' ? '欧洲地区' : 'Europe',
      nodes: language === 'zh' ? '40+ 节点' : '40+ Nodes',
    },
    {
      name: language === 'zh' ? '其他地区' : 'Other Regions',
      nodes: language === 'zh' ? '20+ 节点' : '20+ Nodes',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '节点中心' : 'Node Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '提供全球高质量节点资源，保障网络连接稳定高速'
              : 'Providing global high-quality node resources for stable and high-speed network connections'}
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
            <CardTitle>{language === 'zh' ? '节点分布' : 'Node Distribution'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="p-6 border border-border rounded-lg text-center hover:border-primary/50 transition-all">
                  <h3 className="text-xl font-semibold mb-2">{region.name}</h3>
                  <p className="text-2xl font-bold text-primary">{region.nodes}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-secondary border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'zh' ? '需要专属节点？' : 'Need Dedicated Nodes?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'zh' 
                ? '我们可以为您提供定制的专属节点解决方案'
                : 'We can provide customized dedicated node solutions for you'}
            </p>
            <Button size="lg" className="bg-gradient-primary">
              {language === 'zh' ? '联系我们' : 'Contact Us'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NodeCenter;
