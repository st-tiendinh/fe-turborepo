import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logo?: string;
  logoHref?: string;
  links?: NavLink[];
  rightContent?: React.ReactNode;
}

export function Header({ 
  logo = 'Logo',
  logoHref = '/',
  links = [],
  rightContent 
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href={logoHref}
              className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              {logo}
            </a>
          </div>

          {/* Navigation Links */}
          {links.length > 0 && (
            <nav className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Content */}
          {rightContent && (
            <div className="flex items-center">
              {rightContent}
            </div>
          )}

          {/* Mobile Menu Button */}
          {links.length > 0 && (
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
