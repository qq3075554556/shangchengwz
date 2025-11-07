import { Layout, Smartphone, ShoppingCart, Briefcase, Palette, Code2, Layers, Sparkles, Globe, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

  const templates = [
    {
      id: 1,
      name: language === 'zh' ? 'VPN源码商城模板01' : 'VPN Source Mall Template 01',
      category: language === 'zh' ? '电商系统' : 'E-commerce',
      description: language === 'zh' ? '完整的VPN源码商城系统，包含用户管理、订单系统、支付集成' : 'Complete VPN source mall system with user management, order system, payment integration',
      features: language === 'zh' 
        ? ['响应式设计', '多语言支持', '支付集成', '后台管理']
        : ['Responsive Design', 'Multi-language', 'Payment Integration', 'Admin Panel'],
      tag: language === 'zh' ? '热门' : 'Popular'
    },
    {
      id: 2,
      name: language === 'zh' ? 'SaaS服务平台模板' : 'SaaS Service Platform Template',
      category: language === 'zh' ? 'SaaS平台' : 'SaaS Platform',
      description: language === 'zh' ? '现代化SaaS服务平台UI，包含订阅管理、用户仪表板' : 'Modern SaaS service platform UI with subscription management and user dashboard',
      features: language === 'zh'
        ? ['订阅系统', '数据可视化', '实时通知', 'API集成']
        : ['Subscription System', 'Data Visualization', 'Real-time Notifications', 'API Integration'],
      tag: language === 'zh' ? '新品' : 'New'
    },
    {
      id: 3,
      name: language === 'zh' ? '移动应用官网模板' : 'Mobile App Landing Template',
      category: language === 'zh' ? '落地页' : 'Landing Page',
      description: language === 'zh' ? '专业的移动应用展示官网，包含功能介绍、下载链接' : 'Professional mobile app showcase website with feature introduction and download links',
      features: language === 'zh'
        ? ['精美动画', '下载统计', '用户评价', 'SEO优化']
        : ['Beautiful Animations', 'Download Analytics', 'User Reviews', 'SEO Optimized'],
      tag: language === 'zh' ? '推荐' : 'Featured'
    },
    {
      id: 4,
      name: language === 'zh' ? '企业官网模板' : 'Corporate Website Template',
      category: language === 'zh' ? '企业站' : 'Corporate',
      description: language === 'zh' ? '专业企业官网设计，包含公司介绍、产品展示、联系方式' : 'Professional corporate website design with company intro, product showcase, contact info',
      features: language === 'zh'
        ? ['多页面布局', '团队展示', '案例展示', '表单系统']
        : ['Multi-page Layout', 'Team Showcase', 'Case Studies', 'Form System'],
      tag: ''
    },
    {
      id: 5,
      name: language === 'zh' ? '在线商城模板' : 'Online Store Template',
      category: language === 'zh' ? '电商' : 'E-commerce',
      description: language === 'zh' ? '功能完整的在线商城系统，支持商品管理、购物车、结算' : 'Full-featured online store system with product management, shopping cart, checkout',
      features: language === 'zh'
        ? ['商品搜索', '购物车', '订单追踪', '会员系统']
        : ['Product Search', 'Shopping Cart', 'Order Tracking', 'Membership System'],
      tag: language === 'zh' ? '热门' : 'Popular'
    },
    {
      id: 6,
      name: language === 'zh' ? '博客/内容平台模板' : 'Blog/Content Platform Template',
      category: language === 'zh' ? '内容平台' : 'Content Platform',
      description: language === 'zh' ? '现代化博客和内容发布平台，支持文章管理、评论系统' : 'Modern blog and content publishing platform with article management and comment system',
      features: language === 'zh'
        ? ['内容编辑器', '标签分类', '评论系统', 'SEO友好']
        : ['Content Editor', 'Tag Categories', 'Comment System', 'SEO Friendly'],
      tag: ''
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

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'zh' ? '精选模板' : 'Featured Templates'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="bg-card border-border hover:border-primary/50 transition-all group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <Layers className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform" />
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
                  <Button variant="secondary" className="w-full">
                    {language === 'zh' ? '查看详情' : 'View Details'}
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
                <Button size="lg" className="bg-gradient-primary">
                  {language === 'zh' ? '定制模板' : 'Custom Template'}
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
  );
};

export default TemplatesCenter;
