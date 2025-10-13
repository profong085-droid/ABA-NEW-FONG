# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the ABA Mobile Banking app - a Next.js 15 application designed for mobile banking with a focus on mobile-first responsive design. The app features a modern UI with Cambodian language support and is configured for static export deployment.

## Key Development Commands

### Development Server
```bash
npm run dev
# Runs Next.js development server with Turbopack for faster builds
# Access at http://localhost:3000
```

### Build & Deployment
```bash
npm run build
# Builds the application with Turbopack and static export
# Outputs to the 'out' directory for static hosting
```

```bash
npm start
# Starts production server (after build)
```

### Code Quality
```bash
npm run lint
# Runs ESLint with Next.js core web vitals and TypeScript rules
# Configuration in eslint.config.mjs
```

## Architecture & Structure

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom design system
- **Fonts**: Google Fonts (Geist Sans & Geist Mono)
- **Build Tool**: Turbopack for enhanced performance
- **Target**: Static export for deployment flexibility

### Directory Structure
```
src/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout with metadata and fonts
│   ├── page.tsx          # Main banking dashboard page
│   ├── globals.css       # Global styles with Tailwind imports
│   └── favicon.ico       # App favicon
public/                    # Static assets
out/                      # Static export output (generated)
```

### Design System Architecture

#### Color Scheme
- **Primary Background**: Deep blue gradient (`#0f2942` to `#1a4d6d`)
- **Accent Colors**: Cyan (`cyan-400/500`), Orange (`orange-400/500/600`), Pink (`pink-400/500`)
- **UI Elements**: Glass-morphism with `backdrop-blur` and transparency layers

#### Component Patterns
- **Glass Cards**: `bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md`
- **Interactive Elements**: Hover scaling (`hover:scale-105`) and smooth transitions
- **Icon Containers**: Rounded containers with colored backgrounds and transparency
- **Typography**: Geist fonts with custom CSS variables

#### Responsive Strategy
- **Mobile-First**: Primary target is mobile devices
- **Desktop Adaptation**: Centers the mobile view on larger screens with shadows
- **Container Max-Width**: 430px on desktop to maintain mobile appearance

### Key Features Implementation

#### Balance Display
- Dynamic balance state management with React hooks
- Privacy toggle functionality for balance visibility
- Account type badges with multilingual support

#### Quick Actions Grid
- 3-column responsive grid for primary banking functions
- Cambodian language labels for accessibility
- Consistent icon system using Heroicons

#### Service Integration
- Modular service button architecture
- Horizontal scrolling for additional actions
- Promotion cards with custom styling

## Development Guidelines

### Component Development
- Use TypeScript with strict typing (`strict: true`)
- Implement mobile-first responsive design
- Follow the established glass-morphism design pattern
- Maintain accessibility with proper ARIA labels
- Support both English and Cambodian text

### Styling Conventions
- Use Tailwind v4 with custom theme configuration
- Implement consistent spacing using Tailwind's spacing scale
- Apply backdrop-blur effects for modern glass appearance
- Use CSS variables for theme consistency (`--background`, `--foreground`)

### State Management
- Use React hooks for local component state
- Follow Next.js best practices for data fetching
- Implement proper loading and error states for banking operations

### Path Aliases
- Use `@/*` alias for imports from `src/` directory
- Keep imports organized and use relative paths when appropriate

## Configuration Files

### Build Configuration
- **next.config.ts**: Configured for static export (`output: "export"`)
- **tsconfig.json**: Strict TypeScript with path aliases
- **postcss.config.mjs**: Tailwind PostCSS integration

### Code Quality
- **eslint.config.mjs**: Next.js and TypeScript ESLint rules
- Ignores build outputs and configuration files
- Extends `next/core-web-vitals` and `next/typescript`

## Banking App Specific Considerations

### Security & Privacy
- Balance visibility toggles for user privacy
- Secure state management for sensitive data
- Proper handling of banking information display

### Internationalization
- Cambodian language support throughout the UI
- Unicode handling for Khmer script
- Cultural considerations in design and functionality

### Mobile Banking UX
- Touch-friendly interface with appropriate target sizes
- Smooth animations and transitions for professional feel
- Clear visual hierarchy for banking operations
- Quick access to essential banking functions

### Performance
- Turbopack integration for faster development builds
- Static export for optimal delivery
- Image optimization with Next.js Image component
- CSS optimization with Tailwind's utility-first approach

## Testing

Currently no testing framework is configured. Consider adding:
- Jest + React Testing Library for unit tests
- Cypress or Playwright for E2E testing
- Accessibility testing with axe-core