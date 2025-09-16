# Overview

This project is a modern landing page for "Sítio Recanto do Jacaré," an event venue located in Piratininga, Niterói, RJ. The site showcases the venue's facilities including a pool, barbecue area, and soccer field, targeting families looking to host children's parties, barbecues, corporate events, and family gatherings. The site focuses on converting visitors through WhatsApp integration and features a clean, nature-inspired design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
- **React with TypeScript**: Modern component-based architecture using functional components with hooks
- **Vite**: Fast development server and build tool with hot module replacement
- **Wouter**: Lightweight client-side routing library as an alternative to React Router
- **Single Page Application**: All content loads on the home page with smooth scrolling navigation

## Styling System
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Shadcn/ui Components**: Pre-built accessible React components with consistent design
- **Custom Design System**: Nature-inspired color palette (forest green, tropical blue, warm terracotta)
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **CSS Variables**: Dynamic theming support for light/dark modes

## UI Component Architecture
- **Modular Components**: Each page section (Hero, About, Events, Gallery, etc.) as separate components
- **Reusable UI Components**: Button, Card, Input, Dialog components following consistent patterns
- **Form Handling**: React Hook Form with Zod validation for contact forms
- **Image Optimization**: Static asset management with proper imports and responsive sizing

## State Management
- **React Query (TanStack Query)**: Server state management with caching and background updates
- **Local Component State**: React hooks (useState, useEffect) for component-level state
- **Context Providers**: Theme and toast notifications managed through React Context

## Backend Architecture
- **Express.js**: Node.js web framework for API endpoints and static file serving
- **Development/Production Split**: Vite middleware in development, static serving in production
- **Modular Route Structure**: Separate route definitions with placeholder API endpoints
- **Memory Storage**: In-memory data storage interface with future database migration support

## Database Layer
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL support
- **Schema Definition**: Centralized schema with Zod validation integration
- **Migration Support**: Database schema versioning through Drizzle Kit
- **Connection Management**: Environment-based database URL configuration

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **Radix UI**: Accessible component primitives for complex UI components
- **Lucide React**: Consistent icon library with tree-shaking support
- **Embla Carousel**: Touch-friendly carousel component for image galleries

## Development Tools
- **TypeScript**: Static type checking and improved developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS with Autoprefixer**: CSS processing and vendor prefix automation

## Integration Services
- **WhatsApp Business API**: Direct messaging integration for lead generation
- **Google Fonts**: Web typography (Inter, Playfair Display) with performance optimization
- **Static Asset Management**: Local image storage with build-time optimization

## Production Infrastructure
- **Replit Hosting**: Cloud deployment with automatic SSL and domain management
- **Environment Variables**: Secure configuration management for database connections
- **Session Management**: PostgreSQL-based session storage for user authentication