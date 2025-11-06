import { Code, Palette, Tag, Server, CreditCard, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServiceCard } from '@/components/ServiceCard';
import { useLanguage } from '@/contexts/LanguageContext';

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
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              {t('getStarted')}
            </Button>
            <Button size="lg" variant="secondary">
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            {t('services')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
