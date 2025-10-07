# Database Package

Shared Prisma database client for the monorepo.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Generate Prisma client:
```bash
npm run db:generate
```

3. Push schema to database:
```bash
npm run db:push
```

## Scripts

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database (development)
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Open Prisma Studio

## Schema

The database includes a `Product` model with the following fields:
- id (String, CUID)
- name (String)
- description (String)
- price (Float)
- imageUrl (String)
- inStock (Boolean)
- createdAt (DateTime)
- updatedAt (DateTime)
