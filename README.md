# AI Careers Marketplace - Landing Page

The first AI-driven hiring platform that transforms applications into real matches.

## Features

- **Modern Design**: Built with React and Material-UI for a sleek, professional look
- **Dark Mode**: Eye-friendly dark theme with custom color palette
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Scroll-triggered fade-in animations for engaging user experience
- **Interactive Components**: Hover effects, accordions, and dynamic content
- **Candidate Passport**: Detailed candidate profile showcase with research-level analysis

## Tech Stack

- **Framework**: React 18
- **UI Library**: Material-UI (MUI) v5
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Material-UI Icons
- **Styling**: Emotion (CSS-in-JS)

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd landingpage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
landingpage/
├── src/
│   ├── assets/           # SVG images and assets
│   ├── App.jsx           # Main landing page component
│   ├── Passport.jsx      # Candidate passport page
│   └── main.jsx          # Application entry point with routing
├── public/               # Static files
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Design System

### Color Palette
- **Primary**: `#62A8AC` (Teal)
- **Secondary**: `#EFD28D` (Gold)
- **Background**: `#252626` (Dark Gray)
- **Paper**: `#09342B` (Dark Teal)
- **Info**: `#5497A7` (Blue)

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif
- **Weights**: 600 (semibold), 700 (bold), 800 (extrabold)

## Pages

### Home Page (`/`)
- Hero section with call-to-action
- Vision statement with core values
- Feature showcase (5 key capabilities)
- Trust factors (accordion section)
- Final CTA
- Footer with navigation

### Candidate Passport (`/passport`)
- Candidate snapshot
- Skills matrix with ratings
- Experience benchmark
- Behavioral insights
- Opportunity fit analysis
- Citations and references

## Key Features Explained

### Research-Level Analysis
Deep candidate profiles from resumes, GitHub, and beyond. Sees initiative, adaptability, and depth—not just keywords.

### Structured Coffee Chats
Real conversations that reveal personality, motivation, and cultural fit.

### Virtual Assessments
Watch candidates solve real problems with AI tools like Cursor and Claude.

### Semantic Matching
Match on culture, values, and team dynamics—not just skills.

### Opportunity Discovery
Discover roles you never knew existed through unique skill matching.

