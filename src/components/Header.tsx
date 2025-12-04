import { NavLink, Link } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';
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

  // 主导航项（桌面端和手机端共用）
  const mainNavItems = [
    { path: '/', label: t('home') },
    { path: '/source', label: t('sourceCenter') },
    { path: '/custom', label: t('customCenter') },
    { path: '/whitelabel', label: t('whitelabelCenter') },
    { path: '/nodes', label: t('nodeCenter') },
    { path: '/payment', label: t('paymentCenter') },
    { path: '/listing', label: t('listingCenter') },
    { path: '/operations', label: t('operationsCenter') },
    { path: '/developer', label: t('developerCenter') },
  ];

  // "更多"下拉菜单项
  const moreNavItems = [
    { path: '/templates', label: t('templatesCenter') },
    { path: '/about', label: t('aboutUs') },
    { path: '/faq', label: t('faq') },
  ];

  // 手机端显示前7个主导航项
  const mobileVisibleItems = mainNavItems.slice(0, 7);
  const mobileHiddenItems = [...mainNavItems.slice(7), ...moreNavItems];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex flex-col items-center gap-2">
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

          {/* 桌面端导航 - 主导航 + 更多下拉 */}
          <div className="hidden md:flex items-center justify-center gap-2 flex-nowrap">
            {mainNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-sm px-3 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* 桌面端更多下拉菜单 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm px-3 py-1.5 rounded-md transition-all duration-200 whitespace-nowrap text-foreground/70 hover:text-primary hover:bg-primary/5 flex items-center gap-1">
                  {language === 'zh' ? '更多' : 'More'}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border z-50">
                {moreNavItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `w-full ${isActive ? 'text-primary font-medium' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* 手机端导航 - 显示7个 + 更多 */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-x-1 gap-y-1">
            {mobileVisibleItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `text-xs px-2 py-1 rounded-md transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-primary/15 text-primary font-medium'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* 更多下拉菜单 */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-xs px-2 py-1 rounded-md transition-all duration-200 whitespace-nowrap text-foreground/70 hover:text-primary hover:bg-primary/5 flex items-center gap-0.5">
                  {language === 'zh' ? '更多' : 'More'}
                  <ChevronDown className="h-3 w-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border z-50">
                {mobileHiddenItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `w-full ${isActive ? 'text-primary font-medium' : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};
