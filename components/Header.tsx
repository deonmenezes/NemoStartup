import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Logo } from './ui/Logo';
import { NavLink } from './ui/NavLink';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Demo', path: '/demo' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Learn', path: '/learn' },
  { name: 'Shop', path: '/shop' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, signOut } = useAuth();

  const closeMenu = () => setIsMenuOpen(false);

  const displayName = user?.user_metadata?.full_name || user?.email || 'User';
  const avatarUrl = user?.user_metadata?.avatar_url;

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {!loading && user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="" className="w-8 h-8 rounded-full border-2 border-black" />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-black bg-pop-yellow flex items-center justify-center font-bold text-sm">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="font-bold text-sm max-w-[150px] truncate">{displayName}</span>
                </div>
                <button
                  onClick={signOut}
                  className="flex items-center gap-1 text-black font-bold text-sm hover:underline uppercase"
                >
                  <LogOut size={16} strokeWidth={3} />
                  Log Out
                </button>
              </div>
            ) : !loading ? (
              <>
                <Link to="/login" className="text-black font-bold text-lg hover:underline uppercase">
                  Log In
                </Link>
                <Button href="/get-started">Get Started</Button>
              </>
            ) : null}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:bg-pop-yellow p-1 border-2 border-transparent hover:border-black focus:outline-none transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-4 border-black absolute w-full left-0 shadow-pop">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                variant="mobile"
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
            {!loading && user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-2">
                  {avatarUrl ? (
                    <img src={avatarUrl} alt="" className="w-8 h-8 rounded-full border-2 border-black" />
                  ) : (
                    <div className="w-8 h-8 rounded-full border-2 border-black bg-pop-yellow flex items-center justify-center font-bold text-sm">
                      {displayName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <span className="font-bold text-sm truncate">{displayName}</span>
                </div>
                <button
                  onClick={() => { signOut(); closeMenu(); }}
                  className="block w-full text-left text-black hover:underline px-3 py-2 text-xl font-bold font-headings uppercase"
                >
                  Log Out
                </button>
              </>
            ) : !loading ? (
              <>
                <Link
                  to="/login"
                  className="block text-black hover:underline px-3 py-2 text-xl font-bold font-headings uppercase"
                  onClick={closeMenu}
                >
                  Log In
                </Link>
                <div className="p-3">
                  <Button className="w-full" href="/get-started" onClick={closeMenu}>
                    Get Started
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
};
