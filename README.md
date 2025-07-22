# Next.js E-commerce with Domain Driven Design

This project is structured using Domain Driven Design (DDD) principles combined with Next.js App Router for optimal organization and maintainability.

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── product/                  # Product Domain
│   │   ├── [slug]/              # Dynamic product pages
│   │   ├── __components/        # Product-specific components
│   │   ├── __entities/          # Product business entities
│   │   ├── __services/          # Product business logic
│   │   ├── __types/             # Product type definitions
│   │   └── page.tsx             # Product listing page
│   ├── cart/                    # Cart Domain
│   │   ├── __components/        # Cart-specific components
│   │   ├── __entities/          # Cart business entities
│   │   ├── __services/          # Cart business logic
│   │   ├── __types/             # Cart type definitions
│   │   └── page.tsx             # Cart page
│   ├── search/                  # Search Domain
│   │   ├── __services/          # Search business logic
│   │   ├── __types/             # Search type definitions
│   │   └── page.tsx             # Search page
│   ├── __components/            # Shared app components
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── shared/                      # Shared utilities and components
│   ├── components/              # Reusable UI components
│   └── utils/                   # Utility functions
└── __const/                     # Global constants
```

## 🎯 Domain Structure

Each domain follows this structure:

- **`__types/`**: TypeScript interfaces and types
- **`__entities/`**: Business entities with business logic
- **`__services/`**: Business logic and data operations
- **`__components/`**: Domain-specific UI components
- **`__layouts/`**: Domain-specific layouts (if needed)
- **`__utils/`**: Domain-specific utilities (if needed)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## 📁 Import Aliases

The project uses TypeScript path aliases for clean imports:

```typescript
// Domain imports
import { ProductService } from "@/product/__services/product.service";
import { CartEntity } from "@/cart/__entities/cart.entity";
import { SearchService } from "@/search/__services/search.service";

// Shared imports
import { Button } from "@/shared/components/Button";
import { formatPrice } from "@/shared/utils/format";

// Constants
import { CONSTANTS } from "@/const/const";
```

## 🏛️ Domain Driven Design Principles

### 1. **Product Domain**

- **Entities**: `ProductEntity`, `ProductReviewEntity`
- **Services**: `ProductService` (CRUD operations, filtering, search)
- **Types**: `Product`, `ProductReview`, `ProductFilters`

### 2. **Cart Domain**

- **Entities**: `CartEntity`, `CartItemEntity`
- **Services**: `CartService` (add, update, remove, calculate totals)
- **Types**: `Cart`, `CartItem`, `CartUpdateRequest`

### 3. **Search Domain**

- **Services**: `SearchService` (search, suggestions, filters)
- **Types**: `SearchResult`, `SearchOptions`, `SearchResponse`

## 🔧 Key Features

- **Type Safety**: Full TypeScript support with strict typing
- **Business Logic Separation**: Clear separation between UI and business logic
- **Reusable Components**: Shared components for consistency
- **Utility Functions**: Common formatting and helper functions
- **Mock Data**: Realistic mock data for development

## 📝 Adding New Domains

1. Create a new folder in `src/app/` for your domain
2. Add the standard DDD structure:
   ```
   domain/
   ├── __types/
   ├── __entities/
   ├── __services/
   ├── __components/
   └── page.tsx
   ```
3. Add path alias in `tsconfig.json`
4. Create index.ts for easy imports

## 🎨 Styling

The project uses Tailwind CSS for styling. All components are designed to be responsive and accessible.

## 📦 Dependencies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **React**: UI library

## 🤝 Contributing

1. Follow the DDD structure
2. Use TypeScript for all new code
3. Add proper types and interfaces
4. Keep components small and focused
5. Use shared utilities when possible

## 📄 License

This project is licensed under the MIT License.
