import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import App from './App'

// Theme Configuration - GoodFutures Brand Identity
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E3B33', // Forest Green (Grounded Accent)
      light: '#2d574a',
      dark: '#152921',
    },
    secondary: {
      main: '#FFB800', // Amber/Gold (Catalyst Accent)
      light: '#ffc533',
      dark: '#cc9300',
    },
    background: {
      default: '#F8F8F6', // Soft off-white
      paper: '#FFFFFF',
    },
    info: {
      main: '#62A8AC', // Supporting teal
    },
    error: {
      main: '#d32f2f',
    },
    text: {
      primary: '#212121', // Deep charcoal
      secondary: 'rgba(33, 33, 33, 0.7)',
    },
    divider: 'rgba(30, 59, 51, 0.12)',
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
    h1: {
      fontFamily: 'Marcellus, serif',
      fontWeight: 400,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'Marcellus, serif',
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Marcellus, serif',
      fontWeight: 400,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 50,
          padding: '12px 32px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 2px 8px rgba(30, 59, 51, 0.08)',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 24px rgba(30, 59, 51, 0.12)',
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)