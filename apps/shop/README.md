# Shop App

The customer-facing e-commerce storefront.

## Features

- Browse products
- View product details
- See real-time inventory status

## Development

```bash
npm run dev
```

The shop app runs on `http://localhost:3002`

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3002
DATABASE_URL=file:../../packages/database/prisma/dev.db
```
