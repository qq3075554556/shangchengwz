import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/source', label: t('sourceCenter') },
    { path: '/custom', label: t('customCenter') },
    { path: '/whitelabel', label: t('whitelabelCenter') },
    { path: '/nodes', label: t('nodeCenter') },
    { path: '/payment', label: t('paymentCenter') },
    { path: '/listing', label: t('listingCenter') },
    { path: '/operations', label: t('operationsCenter') },
    { path: '/developer', label: t('developerCenter') },
    { path: '/templates', label: t('templatesCenter') },
    { path: '/about', label: t('aboutUs') },
    { path: '/faq', label: t('faq') },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex flex-col items-center gap-3">
          {/* Logo and Language Switcher Row */}
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechService
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">{language === 'zh' ? '中文' : 'EN'}</span>
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

          {/* Navigation Links - Centered and Responsive */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-3 md:gap-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-xs sm:text-sm px-2 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};