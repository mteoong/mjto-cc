# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 personal portfolio website built with:
- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui components (New York style)
- **Theming**: next-themes for dark/light mode support
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm run start
```

## Project Structure

The application follows Next.js App Router conventions:

- `app/` - Next.js app router pages and layouts
- `components/` - React components organized by feature
- `components/ui/` - shadcn/ui base components
- `lib/` - Utility functions and shared logic

## Key Architecture Details

### Component Organization
Components are split into feature-based modules:
- `profile-header.tsx` - Hero/header section
- `projects-section.tsx` - Portfolio projects display
- `experience-section.tsx` - Work experience timeline
- `education-section.tsx` - Educational background
- `social-links.tsx` - Social media links
- `theme-toggle.tsx` - Dark/light mode switcher

### Styling Approach
- Uses Tailwind CSS v4 with CSS variables for theming
- shadcn/ui components configured with "new-york" style
- Base color scheme: neutral
- Custom utility function `cn()` in `lib/utils.ts` for conditional classes

### Import Aliases
Path mapping configured in `tsconfig.json`:
- `@/*` maps to root directory
- Components imported as `@/components/component-name`
- Utils imported as `@/lib/utils`

### Main Layout Structure
The homepage (`app/page.tsx`) renders sections in this order:
1. ProfileHeader
2. ProjectsSection 
3. ExperienceSection (with border separator)
4. EducationSection (with border separator)
5. SocialLinks
6. ThemeToggle (positioned separately)

All content is constrained to max-width of 700px and centered.