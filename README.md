# E-commerce Monorepo with Turborepo

A full-stack e-commerce monorepo featuring a shop, CMS, and shared packages built with Next.js, Prisma, and Tailwind CSS.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps

- `shop`: Customer-facing e-commerce storefront (runs on port 3002)
- `cms`: Content Management System for managing products (runs on port 3003)

### Packages

- `@repo/ui`: Shared React component library with [Tailwind CSS](https://tailwindcss.com/) including:
  - `shop-components`: ProductCard component
  - `common-components`: PageHeader, Button components
- `@repo/sections`: Reusable layout sections:
  - Header: Main navigation header with logo, links, and custom content
  - Footer: Footer with sections, links, and social media
- `@repo/database`: Shared Prisma database client and schema
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/tailwind-config`: Shared Tailwind CSS configuration
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Getting Started

### Prerequisites

- Node.js 18+
- npm 11+

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up the database:

```bash
cd packages/database
npm run db:generate
npm run db:push
```

4. Build shared packages:

```bash
npm run build
```

### Development

Run all apps in development mode:

```bash
npm run dev
```

Or run individual apps:

```bash
# Shop app (http://localhost:3002)
cd apps/shop
npm run dev

# CMS app (http://localhost:3003)
cd apps/cms
npm run dev
```

### Database Management

The database package uses Prisma with SQLite. Available commands:

```bash
cd packages/database

# Generate Prisma client
npm run db:generate

# Push schema to database (development)
npm run db:push

# Run migrations (production)
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

## Project Structure

```
apps/
  ├── shop/        # Customer-facing storefront
  └── cms/         # Content management system
packages/
  ├── ui/          # Shared React components
  ├── sections/    # Layout sections (Header, Footer)
  ├── database/    # Prisma schema and client
  ├── eslint-config/
  ├── tailwind-config/
  └── typescript-config/
```

## Features

### Shop App
- Browse products with real-time inventory
- Product cards with images, descriptions, and pricing
- Responsive design

### CMS App
- Add, edit, and delete products
- Manage product inventory status
- Real-time product management interface

### Shared UI Components
- ProductCard: Display product information
- PageHeader: Consistent page headers
- Button: Reusable button component

### Database Schema

**Product Model:**
- id (String, CUID)
- name (String)
- description (String)
- price (Float)
- imageUrl (String)
- inStock (Boolean)
- createdAt (DateTime)
- updatedAt (DateTime)

## Utilities

This Turborepo has the following tools:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Prisma](https://www.prisma.io/) for database ORM
