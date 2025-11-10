import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const SourceCenter = () => {
  const { language } = useLanguage();

  const features = [
    {
      text: language === 'zh' ? '新加坡正规的VPN开发公司' : 'Legitimate VPN Development Company in Singapore',
    },
    {
      text: language === 'zh' ? '拥有超过10年VPN开发经验' : 'Over 10 Years of VPN Development Experience',
    },
    {
      text: language === 'zh' ? '7*24在线客服提供技术支援' : '7*24 Online Customer Service for Technical Support',
    },
  ];

  const sourcePackages = [
    {
      id: 1,
      title: language === 'zh' ? 'OpenVPN等协议源码' : 'OpenVPN Protocol Source Code',
      date: '2024.7',
      price: '800U',
      platforms: 4,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/799543_28394.png',
      buyLink: 'https://t.me/gaoshengsm',
    },
    {
      id: 2,
      title: language === 'zh' ? 'V2ray等协议源码整套' : 'V2ray Protocol Complete Source Code',
      date: '2025.2',
      price: '800U',
      platforms: 5,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/341578_299053.png',
      buyLink: 'https://t.me/gaoshengsm',
    },
    {
      id: 3,
      title: language === 'zh' ? '机场多协议源码整套' : 'Multi-Protocol Airport Source Code',
      date: '2025.2',
      price: '1000U',
      platforms: 6,
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/7258853/787526_29593.png',
      buyLink: 'https://t.me/gaoshengsm',
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? 'VPN现成源码商城' : 'VPN Ready Source Code Mall'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === 'zh' 
              ? '我们拥有多款现成完整的VPN源码包，支持自行直接部署使用、商用、二次开发等，即买即用。'
              : 'We have multiple ready-made complete VPN source code packages that support direct deployment, commercial use, secondary development, etc. Buy and use immediately.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all text-center">
              <CardContent className="pt-6">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8">
          {sourcePackages.map((pkg) => (
            <Card key={pkg.id} className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl md:text-3xl mb-2">{pkg.title}</CardTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">
                        {language === 'zh' ? '现成源码' : 'Ready Source'} ({pkg.date})
                      </Badge>
                      <Badge variant="secondary">
                        {language === 'zh' ? `共${pkg.platforms}端` : `${pkg.platforms} Platforms`}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div className="text-3xl font-bold text-primary">
                      {pkg.price}
                      <span className="text-lg text-muted-foreground ml-2">
                        {language === 'zh' ? '/一端' : '/per platform'}
                      </span>
                    </div>
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary"
                      onClick={() => window.open(pkg.buyLink, '_blank')}
                    >
                      {language === 'zh' ? '购买源码' : 'Buy Source Code'}
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.open('https://www.vpnking.cc/3', '_blank')}
          >
            {language === 'zh' ? '查看更多详情' : 'View More Details'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SourceCenter;
