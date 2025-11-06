import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-muted-foreground">
          <p>© 2024 TechService. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
