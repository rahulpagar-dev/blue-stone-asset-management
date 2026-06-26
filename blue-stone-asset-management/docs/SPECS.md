# Blue Stone Asset Management - Technical Specifications

## Architecture
- Next.js 16 app router
- TypeScript throughout
- Tailwind CSS for styling
- API routes for authentication and wallet actions
- Modular components for reusable UI patterns
- Server-side rendering (SSR) and incremental static regeneration (ISR) for pages that benefit from SEO and fast first paint

## Rendering Strategy
- Use SSR for marketing, content, and dashboard entry pages.
- Use ISR or static generation for newsroom, insights, and market update pages where appropriate.
- Generate server-side metadata and Open Graph tags for social sharing.
- Optimize images and assets for fast load times.
- Target Lighthouse Core Web Vitals scores above 90 for Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift.
- Follow WCAG 2.1 AA accessibility requirements.

## Pages and Routes
- `/` - Homepage
- `/about` - About Us
- `/newsroom` - Newsroom
- `/insights` - Insights
- `/investor-relations` - Investor Relations
- `/sustainability` - Corporate Sustainability
- `/careers` - Careers
- `/auth/login` - Login
- `/auth/signup` - Signup
- `/auth/forgot-password` - Password recovery
- `/dashboard` - User dashboard
- `/market-updates` - Market updates
- `/newsletter` - Newsletter signup and archive
- `/ceo-letters` - CEO letters and shareholder communications

## Authentication
- Email / password registration and login
- Secure session storage via HTTP-only cookies
- Forgot password process with email reset token
- Client-side validation and server-side checks

## Dashboard Features
- Portfolio performance summary
- Investment allocation breakdown by sector
- Allocation by product type: gold, silver, ETF, crypto
- Deposit funds workflow and wallet top-up
- Withdraw funds workflow
- Wallet balance and transaction history
- Daily market highlights and alerts
- Custom user welcome and account metrics

## Data Models
### User
- id
- firstName
- lastName
- email
- passwordHash
- createdAt
- updatedAt
- role
- lastLogin

### PortfolioItem
- id
- userId
- assetType: gold | silver | etf | crypto
- ticker
- quantity
- currentValue
- sector
- allocationPct

### WalletTransaction
- id
- userId
- type: deposit | withdrawal
- currency
- amount
- status
- createdAt

### MarketUpdate
- id
- title
- summary
- date
- category
- content

## UI Components
- `NavBar`
- `Footer`
- `AuthForm`
- `DashboardCard`
- `AssetAllocationChart`
- `PerformanceTrend`
- `WalletSummary`
- `TransactionList`
- `NewsCard`
- `InsightCard`

## Styling
- Use Tailwind CSS utility classes.
- Adhere to a BlackRock-inspired color palette.
- Keep spacing, typography, and cards consistent.
- Use responsive breakpoints for mobile-first design.

## Linting & Formatting
- ESLint with Airbnb-inspired defaults.
- Next.js and TypeScript rules enabled.
- Use Prettier-like formatting norms if enabled.
- Enforce no unused variables, consistent imports, and strict typing.

## Testing Strategy
- Implement unit testing for components, utilities, and business logic.
- Maintain code coverage above 85% across the project.
- Use Playwright for end-to-end testing of core user journeys, including signup, login, password reset, dashboard access, deposits, and withdrawals.
- Include tests for accessibility and responsive behavior where appropriate.

## Deployment
- Build with `npm run build`
- Serve with `npm start` or Vercel deployment
- Ensure environment variables are correctly configured for production
- Use asset caching and optimized image handling
