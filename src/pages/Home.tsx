import { Code, Palette, Tag, Server, CreditCard, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-illustration.png';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('sourceTitle'),
      description: t('sourceDesc'),
      icon: Code,
      link: '/source',
    },
    {
      title: t('customTitle'),
      description: t('customDesc'),
      icon: Palette,
      link: '/custom',
    },
    {
      title: t('whitelabelTitle'),
      description: t('whitelabelDesc'),
      icon: Tag,
      link: '/whitelabel',
    },
    {
      title: t('nodeTitle'),
      description: t('nodeDesc'),
      icon: Server,
      link: '/nodes',
    },
    {
      title: t('paymentTitle'),
      description: t('paymentDesc'),
      icon: CreditCard,
      link: '/payment',
    },
    {
      title: t('listingTitle'),
      description: t('listingDesc'),
      icon: Upload,
      link: '/listing',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {t('heroTitle')}
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 border-b-4 border-primary inline-block pb-2">
                  {t('heroSubtitle')}
                </h2>
              </div>
              
              <div className="space-y-3 text-foreground">
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnSource')}：</span>
                  <span className="text-muted-foreground">{t('vpnSourceDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnDevelop')}：</span>
                  <span className="text-muted-foreground">{t('vpnDevelopDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnWhitelabel')}：</span>
                  <span className="text-muted-foreground">
                    {t('vpnWhitelabelDesc').split('-0首付上线')[0]}
                    <span className="text-destructive font-semibold">-0首付上线*</span>
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnNodes')}：</span>
                  <span className="text-muted-foreground">{t('vpnNodesDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnPayment')}：</span>
                  <span className="text-muted-foreground">{t('vpnPaymentDesc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold min-w-[100px]">{t('vpnListing')}：</span>
                  <span className="text-muted-foreground">{t('vpnListingDesc')}</span>
                </div>
              </div>

              <p className="text-destructive font-semibold text-lg pt-4">
                {t('teamExperience')}
              </p>

              <div className="flex gap-4 pt-4">
                <Button size="lg" variant="outline" className="border-2">
                  {t('getStarted')}
                </Button>
                <Button size="lg" variant="outline" className="border-2">
                  {t('learnMore')}
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="VPN Development Platform" 
                className="w-full max-w-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            VPN源码商城
          </h2>
          <div className="text-center text-muted-foreground mb-12 space-y-1">
            <p>新加坡正规的VPN开发公司</p>
            <p>拥有超过10年VPN开发经验</p>
            <p>7*24在线客服提供技术支持</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <ServiceCard {...service} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Source Center Section */}
      <section id="source" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-primary inline-block pb-2 mx-auto block">
            {t('sourceTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('sourceDesc')}
          </p>
          <div className="text-center">
            <Link to="/source">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Center Section */}
      <section id="custom" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-accent inline-block pb-2 mx-auto block">
            {t('customTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('customDesc')}
          </p>
          <div className="text-center">
            <Link to="/custom">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Whitelabel Center Section */}
      <section id="whitelabel" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-primary inline-block pb-2 mx-auto block">
            {t('whitelabelTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('whitelabelDesc')}
          </p>
          <div className="text-center">
            <Link to="/whitelabel">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Node Center Section */}
      <section id="nodes" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-accent inline-block pb-2 mx-auto block">
            {t('nodeTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('nodeDesc')}
          </p>
          <div className="text-center">
            <Link to="/nodes">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Center Section */}
      <section id="payment" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-primary inline-block pb-2 mx-auto block">
            {t('paymentTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('paymentDesc')}
          </p>
          <div className="text-center">
            <Link to="/payment">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Listing Center Section */}
      <section id="listing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 border-b-4 border-accent inline-block pb-2 mx-auto block">
            {t('listingTitle')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('listingDesc')}
          </p>
          <div className="text-center">
            <Link to="/listing">
              <Button size="lg" className="bg-gradient-primary">
                {t('viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
