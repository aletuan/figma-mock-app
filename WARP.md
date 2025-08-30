# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 application built with React 19, TypeScript, and Tailwind CSS v4. The project uses the modern Next.js App Router architecture and is optimized with Turbopack for faster development and builds.

## Development Commands

### Primary Development
```bash
# Start development server with Turbopack (faster builds)
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Development Server
The development server runs on http://localhost:3000 by default. The app uses Turbopack for faster hot reloading and builds.

## Architecture & Structure

### App Router Structure
- Uses Next.js App Router (`src/app/` directory)
- `src/app/layout.tsx` - Root layout with font configuration (Geist fonts)
- `src/app/page.tsx` - Homepage component
- `src/app/globals.css` - Global styles with Tailwind CSS v4

### Key Technologies
- **Next.js 15.5.2** with App Router
- **React 19** with latest concurrent features
- **TypeScript 5** with strict configuration
- **Tailwind CSS v4** with inline theme configuration
- **Turbopack** for development and production builds
- **ESLint 9** with Next.js rules

### Font System
The project uses Next.js font optimization with Geist fonts:
- `--font-geist-sans` for sans-serif text
- `--font-geist-mono` for monospace text

### Styling Architecture
- Tailwind CSS v4 with inline theme syntax (`@theme inline`)
- CSS custom properties for theming (light/dark mode support)
- Responsive design patterns using Tailwind's responsive classes

### TypeScript Configuration
- Path aliases: `@/*` maps to `./src/*`
- Strict TypeScript configuration
- Next.js TypeScript plugin integration

## File Organization

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles and Tailwind config
│   └── favicon.ico        # App icon
public/                    # Static assets
├── *.svg                  # SVG icons and logos
```

## Development Notes

- The project is bootstrapped with `create-next-app` and follows Next.js 15 best practices
- Uses the latest React 19 features and concurrent rendering
- Turbopack is enabled for both development and production builds
- ESLint configuration includes Next.js core web vitals and TypeScript rules
- Font optimization is handled through Next.js font system with Geist fonts
