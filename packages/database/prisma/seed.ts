import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing products
  await prisma.product.deleteMany();

  // Create sample products
  const products = [
    {
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      inStock: true,
    },
    {
      name: 'Smart Watch',
      description: 'Feature-rich smartwatch with health tracking and notifications',
      price: 399.99,
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      inStock: true,
    },
    {
      name: 'Laptop Stand',
      description: 'Ergonomic aluminum laptop stand for improved posture',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
      inStock: true,
    },
    {
      name: 'Mechanical Keyboard',
      description: 'RGB backlit mechanical keyboard with blue switches',
      price: 129.99,
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      inStock: false,
    },
    {
      name: 'USB-C Hub',
      description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
      inStock: true,
    },
    {
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 79.99,
      imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      inStock: true,
    },
    {
      name: 'Webcam HD',
      description: '1080p HD webcam with autofocus and built-in microphone',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500',
      inStock: true,
    },
    {
      name: 'Portable SSD',
      description: '1TB portable SSD with USB-C 3.2 Gen 2 - blazing fast transfers',
      price: 149.99,
      imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
      inStock: true,
    },
    {
      name: 'Monitor 27"',
      description: '27-inch 4K UHD monitor with HDR support and 144Hz refresh rate',
      price: 549.99,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
      inStock: true,
    },
    {
      name: 'Gaming Chair',
      description: 'Ergonomic gaming chair with lumbar support and adjustable armrests',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500',
      inStock: false,
    },
    {
      name: 'Desk Lamp',
      description: 'LED desk lamp with adjustable brightness and color temperature',
      price: 45.99,
      imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      inStock: true,
    },
    {
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with 360° sound and 20-hour battery',
      price: 119.99,
      imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
      inStock: true,
    },
    {
      name: 'Phone Stand',
      description: 'Adjustable aluminum phone stand for desk - supports all phone sizes',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
      inStock: true,
    },
    {
      name: 'Cable Organizer',
      description: 'Magnetic cable management system - keep your desk tidy',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1625225233840-695456021cde?w=500',
      inStock: true,
    },
    {
      name: 'Microphone USB',
      description: 'Professional USB condenser microphone for podcasting and streaming',
      price: 129.99,
      imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500',
      inStock: true,
    },
    {
      name: 'Drawing Tablet',
      description: 'Digital drawing tablet with 8192 pressure levels and tilt support',
      price: 349.99,
      imageUrl: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500',
      inStock: false,
    },
    {
      name: 'Wireless Charger',
      description: '3-in-1 wireless charging station for phone, watch, and earbuds',
      price: 59.99,
      imageUrl: 'https://images.unsplash.com/photo-1591290619762-c588f7e8e6e2?w=500',
      inStock: true,
    },
    {
      name: 'Ergonomic Mouse Pad',
      description: 'Extended mouse pad with wrist rest and smooth surface',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500',
      inStock: true,
    },
    {
      name: 'Ring Light',
      description: '10-inch ring light with tripod stand for video calls and content creation',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500',
      inStock: true,
    },
    {
      name: 'Power Bank',
      description: '20,000mAh power bank with fast charging and dual USB ports',
      price: 49.99,
      imageUrl: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500',
      inStock: true,
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${product.name}`);
  }

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
