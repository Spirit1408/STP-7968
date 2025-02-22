# Blaze of Battle - Landing Page

A modern landing page for "Blaze of Battle" - an epic real-time strategy game.
This project serves as the official website showcasing the game's features,
gameplay mechanics, and engaging content to potential players.

## Project Purpose

This landing page is designed to:

- Introduce players to the "Blaze of Battle" game universe
- Showcase key game features and unique selling points
- Provide information about gameplay mechanics
- Display game gallery and player reviews
- Offer easy access to game-related documentation (Terms & Conditions, Privacy
  Policy)
- Present an engaging and responsive user interface that matches the game's epic
  theme

## Features

- Built with Vite.js for fast development and optimized production builds
- SCSS support for advanced styling
- Image optimization using vite-plugin-image-optimizer
- Swiper integration for creating modern touch sliders
- HTML injection support
- Full page reload during development
- Responsive design for all devices
- Cookie policy management
- SEO optimized structure

## Prerequisites

- Node.js (latest LTS version recommended)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd STP-7968
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production with base path '/STP-7968/'
- `npm run preview` - Preview production build locally
- `npm run build:preview` - Build and preview production build
- `npm run deploy` - Deploy to Netlify (requires Netlify CLI setup)

## Project Structure

```
├── dist/               # Production build files
├── src/               # Source files
│   ├── img/           # Image assets
│   ├── js/           # JavaScript files
│   ├── scss/         # SCSS style files
│   ├── partials/     # HTML partials (header, hero, features, etc.)
│   └── public/       # Public assets
├── vite.config.js    # Vite configuration
└── package.json      # Project dependencies and scripts
```

## Development

The project uses Vite.js for development. Start the development server with:

```bash
npm run dev
```

## Building for Production

Build the project for production with:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

The project is configured for deployment to Netlify. Deploy using:

```bash
npm run deploy
```

## Technologies Used

- Vite.js
- SCSS
- Swiper

## License

ISC
