# Template Morpheus

A React + Vite template with modern UI patterns including glassmorphism components.

## Origin

This repository is a template derived from the original "Project Morpheus - Dream Archive System." It keeps the core UI patterns and glassmorphism system while removing the product-specific data and workflow so it can be reused for new projects.

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first styling
- **Lucide React** - Icon library
- **JSZip + FileSaver.js** - File handling utilities
- **ESLint + Prettier** - Code quality and formatting

## Features

- Glassmorphism UI components with refraction and polish effects
- Responsive design with Tailwind CSS
- High-performance Vite build setup
- Icon generation from source asset
- Static site deployment ready

## Getting Started

1. **Clone and install**:
   ```bash
   git clone <repo-url>
   cd template-morpheus
   npm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Lint and format**:
   ```bash
   npm run lint
   npm run format
   ```

## Project Structure

```
src/
  ├── App.jsx              - Main application component
  ├── main.jsx             - Entry point
  ├── index.css            - Global styles
  ├── assets/              - Images and static assets
  └── component/           - React components
      ├── GlassSurface.jsx           - Glassmorphism component
      ├── GlassSurfaceDemo.jsx       - Demo page
      └── GooeyNav.jsx               - Navigation component

public/
  ├── icons/               - Generated app icons
  └── manifest.webmanifest - PWA manifest

docs/                       - Built output (GitHub Pages)
```

## Component Highlights

### GlassSurface Components

Advanced glassmorphism implementation with:
- Real-time SVG refraction filters
- Optional polish layers (grain, sheen, chromatic fringe)
- Graceful browser fallbacks
- Two variants: `GlassSurface` and `GlassSurfaceReactBits`

### Icon Generation

To regenerate app icons from source (macOS):

```bash
npm run icons:generate
```

Requires source at `src/assets/app-icon-source.png` (recommended: 1024×1024)

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint check |
| `npm run format` | Prettier formatting |
| `npm run check` | Lint + build check |
| `npm run icons:generate` | Regenerate app icons |

## Version

v1.7.0

This exports a minimal package into `~/Downloads/morpheus-dream-archive-designer-minimal` with the core UI, styles, and a sample entry.

## License

MIT

## GitHub Pages Setup

Include instructions in README for enabling GitHub Pages:

- Settings → Pages
- Source: Deploy from branch
- Branch: main
- Folder: /docs
