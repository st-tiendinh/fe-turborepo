# Quick Start Guide

This guide will help you get the shop and CMS applications running.

## Prerequisites

- Node.js 18+ installed
- npm 11.0.0+ installed

## Step 1: Install Dependencies

From the root of the monorepo:

```bash
npm install
```

## Step 2: Set Up the Database

Navigate to the database package and set up Prisma:

```bash
cd packages/database

# Generate Prisma client
npm run db:generate

# Create the database and tables
npm run db:push

# Seed the database with sample products
npm run db:seed
```

## Step 3: Build Shared Packages

Build the shared UI components and database package:

```bash
# From the root
npm run build
```

Or build individually:

```bash
# Build UI package
cd packages/ui
npm run build:styles
npm run build:components

# Build database package
cd packages/database
npm run build
```

## Step 4: Run the Applications

You can run all apps at once or individually:

### Option A: Run All Apps (from root)

```bash
npm run dev
```

### Option B: Run Individual Apps

**Shop App (Customer-facing store):**
```bash
cd apps/shop
npm run dev
```
Access at: http://localhost:3002

**CMS App (Product management):**
```bash
cd apps/cms
npm run dev
```
Access at: http://localhost:3003

## Testing the Setup

1. **Visit the Shop**: Open http://localhost:3002
   - You should see 6 sample products
   - Products display with images, descriptions, and prices
   - Out-of-stock items are marked

2. **Visit the CMS**: Open http://localhost:3003
   - You should see a table with all products
   - Try adding a new product
   - Try editing an existing product
   - Try deleting a product
   - Changes appear immediately in the shop

## Database Management Commands

All commands should be run from `packages/database`:

```bash
# View all products in the database
npm run db:view

# Open Prisma Studio (visual database editor)
npm run db:studio

# Reset and reseed the database
npm run db:push
npm run db:seed
```

## Project Structure

```
apps/
  ├── shop/          # Customer storefront (port 3002)
  ├── cms/           # Admin panel (port 3003)
  ├── docs/          # Documentation
  └── web/           # Example app
packages/
  ├── ui/            # Shared components (ProductCard, Button, etc.)
  ├── database/      # Prisma schema and client
  ├── eslint-config/
  ├── tailwind-config/
  └── typescript-config/
```

## Troubleshooting

### Issue: Module not found errors

**Solution:** Rebuild the shared packages
```bash
cd packages/ui && npm run build:styles && npm run build:components
cd ../database && npm run build
```

### Issue: Database connection errors

**Solution:** Regenerate Prisma client and database
```bash
cd packages/database
npm run db:generate
npm run db:push
```

### Issue: Port already in use

**Solution:** The apps use specific ports:
- Shop: 3002
- CMS: 3003

Make sure these ports are available, or modify the port in the package.json scripts.

### Issue: Changes not reflecting

**Solution:** Restart the development server or rebuild packages
```bash
# Kill the dev servers (Ctrl+C)
# Rebuild packages
npm run build
# Restart dev servers
npm run dev
```

## Next Steps

1. **Customize the Schema**: Edit `packages/database/prisma/schema.prisma` to add more fields
2. **Add More Components**: Create new components in `packages/ui/src/`
3. **Add Authentication**: Implement user authentication for the CMS
4. **Add Cart Functionality**: Implement shopping cart in the shop app
5. **Add Images Upload**: Replace image URLs with file uploads

## Need Help?

- Check the README.md in each app/package directory
- Review the Prisma documentation: https://www.prisma.io/docs
- Review Next.js documentation: https://nextjs.org/docs
