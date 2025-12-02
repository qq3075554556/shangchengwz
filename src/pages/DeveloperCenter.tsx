import { Code, Smartphone, Chrome, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const DeveloperCenter = () => {
  const { language } = useLanguage();

  const accounts = [
    {
      icon: Code,
      title: language === 'zh' ? 'Apple开发者账号' : 'Apple Developer Account',
      description: language === 'zh' ? '个人和企业Apple开发者账号' : 'Individual and Enterprise Apple Developer accounts',
      price: language === 'zh' ? '咨询价格' : 'Contact for pricing',
    },
    {
      icon: Smartphone,
      title: language === 'zh' ? 'Google开发者账号' : 'Google Developer Account',
      description: language === 'zh' ? 'Google Play开发者账号服务' : 'Google Play Developer account services',
      price: language === 'zh' ? '咨询价格' : 'Contact for pricing',
    },
    {
      icon: Chrome,
      title: language === 'zh' ? 'Twitter开发者账号' : 'Twitter Developer Account',
      description: language === 'zh' ? 'Twitter API开发者账号' : 'Twitter API Developer account',
      price: language === 'zh' ? '咨询价格' : 'Contact for pricing',
    },
    {
      icon: MessageSquare,
      title: language === 'zh' ? 'ChatGPT开发者账号' : 'ChatGPT Developer Account',
      description: language === 'zh' ? 'OpenAI API开发者账号' : 'OpenAI API Developer account',
      price: language === 'zh' ? '咨询价格' : 'Contact for pricing',
    },
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="min-h-screen pt-4 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '开发者账号中心' : 'Developer Account Center'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'zh' 
              ? '提供各类开发者账号注册和管理服务'
              : 'Providing various developer account registration and management services'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {accounts.map((account, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <account.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="mb-2">{account.title}</CardTitle>
                    <CardDescription>{account.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{account.price}</span>
                  <Button variant="secondary" asChild>
                    <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                      {language === 'zh' ? '了解详情' : 'Learn More'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border mb-8">
          <CardHeader>
            <CardTitle>{language === 'zh' ? '服务内容' : 'Service Content'}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  {language === 'zh' ? '账号注册' : 'Account Registration'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ {language === 'zh' ? '协助完成账号注册流程' : 'Assist with account registration process'}</li>
                  <li>✓ {language === 'zh' ? '提供所需资料准备指导' : 'Provide guidance on required materials'}</li>
                  <li>✓ {language === 'zh' ? '处理注册过程中的问题' : 'Handle issues during registration'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-primary">
                  {language === 'zh' ? '账号管理' : 'Account Management'}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ {language === 'zh' ? '账号续费提醒' : 'Account renewal reminders'}</li>
                  <li>✓ {language === 'zh' ? '账号安全维护' : 'Account security maintenance'}</li>
                  <li>✓ {language === 'zh' ? '技术支持服务' : 'Technical support services'}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-secondary border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'zh' ? '需要其他平台账号？' : 'Need Other Platform Accounts?'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'zh' 
                ? '我们支持多个开发平台的账号服务，欢迎咨询'
                : 'We support account services for multiple development platforms, feel free to inquire'}
            </p>
            <Button size="lg" className="bg-gradient-primary" asChild>
              <a href="https://t.me/gaoshengsm" target="_blank" rel="noopener noreferrer">
                {language === 'zh' ? '立即咨询' : 'Inquire Now'}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default DeveloperCenter;
