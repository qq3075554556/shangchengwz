import { Upload, CheckCircle, FileText, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const ListingCenter = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Upload,
      title: language === 'zh' ? 'App Store上架' : 'App Store Listing',
      description: language === 'zh' ? 'iOS应用上架服务，快速通过审核' : 'iOS app listing service for quick approval',
    },
    {
      icon: CheckCircle,
      title: language === 'zh' ? 'Google Play上架' : 'Google Play Listing',
      description: language === 'zh' ? 'Android应用上架，全程协助' : 'Android app listing with full assistance',
    },
    {
      icon: FileText,
      title: language === 'zh' ? '资质准备' : 'Qualification Preparation',
      description: language === 'zh' ? '协助准备上架所需的各类资质' : 'Assist in preparing required qualifications',
    },
    {
      icon: Rocket,
      title: language === 'zh' ? '加急服务' : 'Express Service',
      description: language === 'zh' ? '提供加急上架服务，快速上线' : 'Provide express listing service for quick launch',
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '上架中心' : 'Listing Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '专业的应用上架服务，帮助您的产品快速上线各大应用市场'
              : 'Professional app listing services to help your products quickly go live on major app markets'}
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

        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '上架流程' : 'Listing Process'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: language === 'zh' ? '提交申请' : 'Submit Application',
                  desc: language === 'zh' ? '提供应用信息和相关资料' : 'Provide app information and related materials',
                },
                {
                  step: '02',
                  title: language === 'zh' ? '资质审核' : 'Qualification Review',
                  desc: language === 'zh' ? '审核应用资质和材料完整性' : 'Review app qualifications and material completeness',
                },
                {
                  step: '03',
                  title: language === 'zh' ? '准备上架' : 'Prepare Listing',
                  desc: language === 'zh' ? '准备上架所需的所有材料' : 'Prepare all materials needed for listing',
                },
                {
                  step: '04',
                  title: language === 'zh' ? '提交审核' : 'Submit Review',
                  desc: language === 'zh' ? '提交应用到应用商店审核' : 'Submit app for app store review',
                },
                {
                  step: '05',
                  title: language === 'zh' ? '上架完成' : 'Listing Complete',
                  desc: language === 'zh' ? '审核通过，应用成功上架' : 'Review passed, app successfully listed',
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

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '支持的应用商店' : 'Supported App Stores'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'App Store',
                'Google Play',
                language === 'zh' ? '华为应用市场' : 'Huawei AppGallery',
                language === 'zh' ? '小米应用商店' : 'Xiaomi GetApps',
                'OPPO',
                'VIVO',
                language === 'zh' ? '应用宝' : 'Tencent MyApp',
                language === 'zh' ? '其他商店' : 'Others',
              ].map((store, index) => (
                <div key={index} className="p-4 border border-border rounded-lg text-center hover:border-primary/50 transition-all">
                  <p className="font-semibold">{store}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary" asChild>
            <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
              {language === 'zh' ? '开始上架' : 'Start Listing'}
            </a>
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ListingCenter;
