import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
