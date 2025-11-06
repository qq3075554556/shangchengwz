import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export const ServiceCard = ({ title, description, icon: Icon, link }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link to={link}>
          <Button variant="secondary" className="w-full">
            {t('viewDetails')}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
