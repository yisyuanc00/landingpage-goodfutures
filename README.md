# GoodFutures - AI Careers Marketplace Landing Page

Landing page for an AI-driven hiring platform that transforms applications into real matches.

## Tech Stack

- React 18
- Material-UI (MUI) v5
- Vite
- Emotion (CSS-in-JS)
- Google Fonts (Marcellus, Inter)

## Quick Start

```bash
git clone https://github.com/goodFuturesHQ/landingpage.git
cd landingpage
npm install
npm run dev
# Visit http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
landingpage/
├── src/
│   ├── assets/           # Images and icons
│   │   ├── *.svg        # Custom SVG icons for solution section
│   │   ├── *.png        # PNG icons for hero rotating animation
│   │   └── Resume folder-cuate.svg  # Hero center image
│   ├── App.jsx           # Main landing page component
│   └── main.jsx          # Application entry point with theme config
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Design System

### Colors
- **Primary (Forest Green)**: `#1E3B33`
- **Secondary (Amber/Gold)**: `#FFB800`
- **Solution Icons**: `#326358`
- **Backgrounds**:
  - Default: `#F8F8F6`
  - Companies Section: `#E8E6E1`
  - Paper: `#FFFFFF`

### Typography
- **Headings**: Marcellus (serif) - elegant, professional feel
- **Body**: Inter (sans-serif) - clean, readable
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

### Interactive Elements
- **CTA Buttons**: Animated yellow fill expanding from left to right on hover
- **Scroll Animations**: Fade-in effects triggered on scroll
- **Logo**: Shimmer animation using gradient

## Key Sections

- **Navigation Bar**: Logo with shimmer effect, main navigation links, and signup buttons for candidates and companies
- **Hero Section**: Headline with animated rotating icons and two CTA buttons with expanding yellow circle hover effect
- **Founders' Memo**: Vision statement explaining the mission and purpose of GoodFutures
- **For Candidates**: 4-step journey with alternating layout showing how candidates discover fitting opportunities
- **For Companies**: 4-step journey with alternating layout showing how companies find the right talent
- **Solution Section**: Five core features (Research-Level Analysis, Coffee Chats, Virtual Assessments, Semantic Matching, Opportunity Discovery)
- **Trust Factors**: Accordion highlighting how GoodFutures differs from traditional platforms
- **Final CTA**: "Every great journey begins with a first step" with animated buttons
- **Footer**: Navigation links and company information

## Features

- Smooth scroll animations and responsive design
- Interactive button hover states with animated yellow fill
- Alternating layouts for visual rhythm
- Mobile-first approach with breakpoints

