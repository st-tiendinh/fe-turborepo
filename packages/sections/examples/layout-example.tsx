import { Header, Footer } from '@repo/sections';

export default function ExampleLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header
        logo="My Shop"
        logoHref="/"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
        rightContent={
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-indigo-600">
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Sign In
            </button>
          </div>
        }
      />

      {/* Main Content */}
      <main className="flex-1">{/* Your page content goes here */}</main>

      {/* Footer */}
      <Footer
        companyName="My Shop"
        sections={[
          {
            title: 'Shop',
            links: [
              { label: 'All Products', href: '/products' },
              { label: 'Categories', href: '/categories' },
              { label: 'Deals', href: '/deals' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About Us', href: '/about' },
              { label: 'Careers', href: '/careers' },
              { label: 'Press', href: '/press' },
            ],
          },
          {
            title: 'Support',
            links: [
              { label: 'Help Center', href: '/help' },
              { label: 'Contact Us', href: '/contact' },
              { label: 'Returns', href: '/returns' },
            ],
          },
        ]}
        socialLinks={{
          facebook: 'https://facebook.com',
          twitter: 'https://twitter.com',
          instagram: 'https://instagram.com',
        }}
      />
    </div>
  );
}
