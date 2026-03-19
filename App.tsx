import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ChatWidget } from './components/ChatWidget';
import {
  LandingPage,
  DemoPage,
  PricingPage,
  LoginPage,
  GetStartedPage,
  LearnPage,
  ShopPage,
  AuthCallbackPage
} from './components/pages';

// Layout wrapper for pages that need header/footer
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="antialiased overflow-x-hidden bg-white text-black selection:bg-pop-yellow selection:text-black">
    <Header />
    <main>{children}</main>
    <Footer />
    <ChatWidget />
  </div>
);

// Minimal layout for auth pages
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="antialiased overflow-x-hidden bg-white text-black selection:bg-pop-yellow selection:text-black">
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main pages with header/footer */}
          <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
          <Route path="/demo" element={<MainLayout><DemoPage /></MainLayout>} />
          <Route path="/pricing" element={<MainLayout><PricingPage /></MainLayout>} />
          <Route path="/learn" element={<MainLayout><LearnPage /></MainLayout>} />
          <Route path="/shop" element={<MainLayout><ShopPage /></MainLayout>} />

          {/* Auth pages without header/footer */}
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
          <Route path="/get-started" element={<AuthLayout><GetStartedPage /></AuthLayout>} />
          <Route path="/auth/callback" element={<AuthLayout><AuthCallbackPage /></AuthLayout>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
