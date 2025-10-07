# Sections Package

Reusable layout sections for the monorepo.

## Components

- `Header` - Main navigation header
- `Footer` - Footer section (coming soon)

## Usage

```tsx
import { Header } from '@repo/sections';

<Header 
  logo="My Store"
  links={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' }
  ]}
/>
```
