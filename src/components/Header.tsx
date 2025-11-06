import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const mainNavItems = [
    { path: '/', label: t('home') },
    { path: '/source', label: t('sourceCenter') },
    { path: '/custom', label: t('customCenter') },
    { path: '/whitelabel', label: t('whitelabelCenter') },
    { path: '/nodes', label: t('nodeCenter') },
  ];

  const moreNavItems = [
    { path: '/payment', label: t('paymentCenter') },
    { path: '/listing', label: t('listingCenter') },
    { path: '/operations', label: t('operationsCenter') },
    { path: '/developer', label: t('developerCenter') },
    { path: '/templates', label: t('templatesCenter') },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TechService
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground/80">
                  {t('more')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                {moreNavItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem onClick={() => setLanguage('zh')}>
                  中文 {language === 'zh' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem onClick={() => setLanguage('zh')}>
                  中文 {language === 'zh' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 space-y-3 border-t border-border">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">{t('more')}</p>
              {moreNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-foreground/80 hover:text-primary transition-colors py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
