import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Link,
  IconButton,
  Fade,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RecommendIcon from '@mui/icons-material/Recommend';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Import SVG images
import ResearchIcon from './assets/Research-Level Analysis.svg';
import CoffeeIcon from './assets/coffee chat.svg';
import AssessmentIcon from './assets/assessment.svg';
import MatchingIcon from './assets/matching.svg';
import OpportunityIcon from './assets/Opportunity Discovery.svg';
import HeroImage from './assets/Resume folder-cuate.svg';

// Import PNG icons for hero section
import JobSearchIcon from './assets/job search.png';
import MatchIcon from './assets/match.png';
import TestIcon from './assets/test.png';
import ChatIcon from './assets/chat.png';
import AnalysisIcon from './assets/analysis.png';
import PassportUI from './assets/passport_ui.png';
import PassportSummary from './assets/passport_summary.png';
import UploadJD from './assets/UploadJD.png';
import MatchedCandidates from './assets/Matched Candidates.png';
import CompletePassportVideo from './assets/complete-passport.mp4';
import CoffeeChatVideo from './assets/CoffeeChatDemo.mp4';

function ScrollFade({ children, delay = 0 }) {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        if (rect.top > 0) {
          const fadeInProgress = Math.min(1, (windowHeight - rect.top) / 300);
          setOpacity(fadeInProgress);
        } else if (rect.bottom < windowHeight) {
          const fadeOutProgress = Math.max(0, rect.bottom / 300);
          setOpacity(fadeOutProgress);
        } else {
          setOpacity(1);
        }
      } else {
        setOpacity(0);
      }
    };

    setTimeout(handleScroll, delay);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [delay]);

  return (
    <div ref={ref} style={{ opacity, transition: 'opacity 0.6s ease-out', height: '100%' }}>
      {children}
    </div>
  );
}

function VideoPlayer({ src, loop = true, muted = true, autoPlay = true, objectPosition = 'center center', autoPlayOnScroll = false }) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hasAutoPlayedRef = useRef(false); // Track if video has auto-played once

  useEffect(() => {
    if (autoPlayOnScroll && videoRef.current && containerRef.current) {
      const currentContainer = containerRef.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Only auto-play on first intersection
          if (entry.isIntersecting && videoRef.current && !hasAutoPlayedRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
            hasAutoPlayedRef.current = true; // Mark as auto-played
          }
        },
        { threshold: 0.5 } // Trigger when video is 50% visible
      );

      observer.observe(currentContainer);

      return () => {
        if (currentContainer) {
          observer.unobserve(currentContainer);
        }
      };
    }
  }, [autoPlayOnScroll]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        bgcolor: '#F5F5F5',
        borderRadius: 3,
        border: '1px solid rgba(30, 59, 51, 0.1)',
        overflow: 'hidden',
        height: { xs: '320px', md: '450px' },
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          '& video': {
            opacity: 0.9,
          }
        }
      }}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: objectPosition,
          display: 'block',
          transition: 'opacity 0.2s'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Icon */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '50%',
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            transform: 'scale(1.1)',
          }
        }}
      >
        {isPlaying ? (
          <PauseIcon sx={{ color: '#fff', fontSize: 20 }} />
        ) : (
          <PlayArrowIcon sx={{ color: '#fff', fontSize: 20 }} />
        )}
      </Box>
    </Box>
  );
}

function ScrollFadeEnhanced({ children, delay = 0 }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        if (rect.top > 0) {
          const fadeInProgress = Math.min(1, (windowHeight - rect.top) / 300);
          setProgress(fadeInProgress);
        } else if (rect.bottom < windowHeight) {
          const fadeOutProgress = Math.max(0, rect.bottom / 300);
          setProgress(fadeOutProgress);
        } else {
          setProgress(1);
        }
      } else {
        setProgress(0);
      }
    };

    setTimeout(handleScroll, delay);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [delay]);

  const translateY = (1 - progress) * 50;
  const scale = 1 + (1 - progress) * 0.05;

  return (
    <div
      ref={ref}
      style={{
        opacity: progress,
        transform: `translateY(${translateY}px) scale(${scale})`,
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100%'
      }}
    >
      {children}
    </div>
  );
}
function App() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['vision', 'candidates', 'companies', 'features'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Content Container */}
      <Box sx={{ position: 'relative' }}>

        {/* ===== HEADER ===== */}
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            bgcolor: 'transparent',
            backdropFilter: 'none',
            borderBottom: 'none',
            boxShadow: 'none',
            zIndex: 1450,
          }}
        >
          <Container maxWidth="xl" sx={{ pt: { xs: 1, md: 2 }, px: { xs: 2, sm: 3 } }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: { xs: '54px', md: '70px' },
              py: { xs: 0.5, md: 2 },
              px: { xs: 1.5, md: 3 },
              bgcolor: mobileMenuAnchor ? '#F8F8F6' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: '50px',
              border: '1px solid rgba(30, 59, 51, 0.15)',
            }}>
              {/* Logo + Mobile Menu Button */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                <RecommendIcon
                  sx={{
                    '@keyframes shine': {
                      '0%': { backgroundPosition: '-200% center' },
                      '100%': { backgroundPosition: '200% center' }
                    },
                    background: 'linear-gradient(90deg, #1E3B33 0%, #4A8B7F 25%, #1E3B33 50%, #4A8B7F 75%, #1E3B33 100%)',
                    backgroundSize: '200% auto',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'shine 6s ease-in-out infinite',
                    fontSize: { xs: '1.3rem', md: '1.65rem' },
                  }}
                />
                <Typography variant="h6" sx={{
                  '@keyframes shine': {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' }
                  },
                  fontWeight: 700,
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                  background: 'linear-gradient(90deg, #1E3B33 0%, #4A8B7F 25%, #1E3B33 50%, #4A8B7F 75%, #1E3B33 100%)',
                  backgroundSize: '200% auto',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'shine 6s ease-in-out infinite',
                }}>
                  GoodFutures
                </Typography>
              </Link>
              </Box>

              {/* Center Navigation */}
              <Box sx={{
                display: mobileMenuAnchor ? 'none' : 'flex',
                alignItems: 'center',
                gap: { xs: 1.5, md: 4 }
              }}>
                <Link
                  href="#vision"
                  underline="none"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    color: 'primary.main',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    bgcolor: activeSection === 'vision' ? 'rgba(255, 184, 0, 0.08)' : 'transparent',
                    borderColor: activeSection === 'vision' ? 'rgba(255, 184, 0, 0.3)' : 'transparent',
                    borderBottom: activeSection === 'vision' ? '3px solid #FFB800' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(30, 59, 51, 0.08)',
                      borderColor: 'rgba(30, 59, 51, 0.2)'
                    }
                  }}
                >
                  Vision
                </Link>
                <Link
                  href="#candidates"
                  underline="none"
                  sx={{
                    color: 'primary.main',
                    fontSize: { xs: '0.85rem', md: '1.05rem' },
                    fontWeight: 700,
                    padding: { xs: '6px 10px', md: '8px 16px' },
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    bgcolor: activeSection === 'candidates' ? 'rgba(255, 184, 0, 0.08)' : 'transparent',
                    borderColor: activeSection === 'candidates' ? 'rgba(255, 184, 0, 0.3)' : 'transparent',
                    borderBottom: activeSection === 'candidates' ? '3px solid #FFB800' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(30, 59, 51, 0.08)',
                      borderColor: 'rgba(30, 59, 51, 0.2)'
                    }
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>For Candidates</Box>
                  <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>Candidates</Box>
                </Link>
                <Link
                  href="#companies"
                  underline="none"
                  sx={{
                    color: 'primary.main',
                    fontSize: { xs: '0.85rem', md: '1.05rem' },
                    fontWeight: 700,
                    padding: { xs: '6px 10px', md: '8px 16px' },
                    border: '1px solid transparent',
                    borderRadius: '8px',
                    bgcolor: activeSection === 'companies' ? 'rgba(255, 184, 0, 0.08)' : 'transparent',
                    borderColor: activeSection === 'companies' ? 'rgba(255, 184, 0, 0.3)' : 'transparent',
                    borderBottom: activeSection === 'companies' ? '3px solid #FFB800' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(30, 59, 51, 0.08)',
                      borderColor: 'rgba(30, 59, 51, 0.2)'
                    }
                  }}
                >
                  <Box component="span" sx={{ display: { xs: 'none', md: 'inline' } }}>For Companies</Box>
                  <Box component="span" sx={{ display: { xs: 'inline', md: 'none' } }}>Companies</Box>
                </Link>
                <Link
                  href="#features"
                  underline="none"
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    color: 'primary.main',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid transparent',
                    bgcolor: activeSection === 'features' ? 'rgba(255, 184, 0, 0.08)' : 'transparent',
                    borderColor: activeSection === 'features' ? 'rgba(255, 184, 0, 0.3)' : 'transparent',
                    borderBottom: activeSection === 'features' ? '3px solid #FFB800' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(30, 59, 51, 0.08)',
                      borderColor: 'rgba(30, 59, 51, 0.2)'
                    }
                  }}
                >
                  Solution
                </Link>
              </Box>

              {/* Right Actions */}
              <Box sx={{
                display: 'none',
                '@media (min-width: 1350px)': {
                  display: 'flex',
                },
                alignItems: 'center',
                gap: 1.5
              }}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: 'secondary.main',
                    color: '#212121',
                    borderRadius: '50px',
                    px: { lg: 2.5, xl: 3 },
                    py: 1,
                    fontSize: { lg: '0.85rem', xl: '0.9rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 'none',
                    border: '2px solid transparent',
                    minWidth: { lg: '160px', xl: '180px' },
                    height: '40px',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.2s ease',
                    '&:hover': {
                      bgcolor: 'secondary.dark',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Sign up as candidate
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: 'transparent',
                    color: 'primary.main',
                    border: '2px solid',
                    borderColor: 'secondary.main',
                    borderRadius: '50px',
                    px: { lg: 2.5, xl: 3 },
                    py: 1,
                    fontSize: { lg: '0.85rem', xl: '0.9rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 'none',
                    minWidth: { lg: '160px', xl: '180px' },
                    height: '40px',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.2s ease, color 0.2s ease',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      color: '#212121',
                      border: '2px solid',
                      borderColor: 'secondary.main',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Sign up as company
                </Button>
              </Box>

              {/* Hamburger Menu Icon - Far Right */}
              <IconButton
                size="small"
                sx={{
                  display: 'flex',
                  '@media (min-width: 1350px)': {
                    display: 'none',
                  },
                  color: 'primary.main',
                  zIndex: 1500,
                  padding: { xs: '6px', md: '8px' },
                  '& svg': {
                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                  },
                }}
                onClick={() => setMobileMenuAnchor(mobileMenuAnchor ? null : true)}
              >
                {mobileMenuAnchor ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Container>
        </AppBar>

        {/* Mobile Navigation Menu - Overlay */}
        <Box
          sx={{
            position: 'fixed',
            top: 90,
            left: 0,
            right: 0,
            bgcolor: 'rgba(248, 248, 246, 0.98)',
            backdropFilter: 'blur(10px)',
            zIndex: 1400,
            display: mobileMenuAnchor ? 'flex' : 'none',
            flexDirection: 'column',
            alignItems: 'center',
            py: 4,
            px: 3,
            gap: 0.5,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
            animation: mobileMenuAnchor ? 'slideDown 0.3s ease-out' : 'none',
            '@keyframes slideDown': {
              from: {
                opacity: 0,
                transform: 'translateY(-20px)'
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)'
              }
            }
          }}
        >
          <Link
            href="#vision"
            underline="none"
            onClick={() => setMobileMenuAnchor(null)}
            sx={{
              color: 'primary.main',
              fontSize: '1rem',
              fontWeight: 600,
              py: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'secondary.main',
              }
            }}
          >
            Vision
          </Link>
          <Link
            href="#candidates"
            underline="none"
            onClick={() => setMobileMenuAnchor(null)}
            sx={{
              color: 'primary.main',
              fontSize: '1rem',
              fontWeight: 600,
              py: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'secondary.main',
              }
            }}
          >
            For Candidates
          </Link>
          <Link
            href="#companies"
            underline="none"
            onClick={() => setMobileMenuAnchor(null)}
            sx={{
              color: 'primary.main',
              fontSize: '1rem',
              fontWeight: 600,
              py: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'secondary.main',
              }
            }}
          >
            For Companies
          </Link>
          <Link
            href="#features"
            underline="none"
            onClick={() => setMobileMenuAnchor(null)}
            sx={{
              color: 'primary.main',
              fontSize: '1rem',
              fontWeight: 600,
              py: 1.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'secondary.main',
              }
            }}
          >
            Solution
          </Link>

          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2, width: '90%', maxWidth: '500px', px: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: 'secondary.main',
                color: '#212121',
                borderRadius: '50px',
                py: 2,
                height: '56px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: 'none',
                border: '2px solid transparent',
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  bgcolor: 'secondary.dark',
                  boxShadow: 'none',
                },
              }}
            >
              Sign up as candidate
            </Button>
            <Button
              variant="outlined"
              sx={{
                bgcolor: 'transparent',
                color: 'primary.main',
                border: '2px solid',
                borderColor: 'secondary.main',
                borderRadius: '50px',
                py: 2,
                height: '56px',
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: 'none',
                transition: 'background-color 0.2s ease, color 0.2s ease',
                '&:hover': {
                  bgcolor: 'secondary.main',
                  color: '#212121',
                  border: '2px solid',
                  borderColor: 'secondary.main',
                  boxShadow: 'none',
                },
              }}
            >
              Sign up as company
            </Button>
          </Box>
        </Box>

        {/* ===== HERO SECTION ===== */}
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #F8F8F6 0%, #E0E0D8 30%, rgba(30, 59, 51, 0.15) 100%)',
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Grid container spacing={6} sx={{ pt: { xs: 16, md: 20 }, pb: { xs: 12, md: 20 }, alignItems: 'center' }}>
              {/* Left Column - Text Content */}
              <Grid item xs={12} md={8} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'block',
                  opacity: 0,
                  animation: 'heroTitleEntrance 1.2s ease-out forwards',
                  '@keyframes heroTitleEntrance': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(60px) scale(1.1)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0) scale(1)',
                    },
                  },
                }}
              >
                {/* Moving light effect behind text */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-30%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '150%',
                    height: '180%',
                    background: 'radial-gradient(ellipse at center, rgba(255, 184, 0, 0.25) 0%, rgba(255, 184, 0, 0.1) 40%, transparent 70%)',
                    filter: 'blur(80px)',
                    animation: 'shimmer 5s ease-in-out infinite',
                    '@keyframes shimmer': {
                      '0%, 100%': {
                        opacity: 0.5,
                        transform: 'translateX(-50%) translateY(0) scale(1)',
                      },
                      '50%': {
                        opacity: 0.8,
                        transform: 'translateX(-50%) translateY(-15px) scale(1.05)',
                      },
                    },
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: '2.5rem', sm: '2.8rem', md: '3.2rem', lg: '4rem' },
                    mb: 0,
                    lineHeight: 1.2,
                    color: 'primary.main',
                    fontWeight: 700,
                    '@keyframes shine': {
                      '0%': {
                        backgroundPosition: '-200% center',
                      },
                      '100%': {
                        backgroundPosition: '200% center',
                      },
                    },
                    '& .highlight': {
                      background: 'linear-gradient(90deg, #1E3B33 0%, #4A8B7F 25%, #1E3B33 50%, #4A8B7F 75%, #1E3B33 100%)',
                      backgroundSize: '200% auto',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: 'shine 6s ease-in-out infinite',
                      fontWeight: 800,
                    },
                  }}
                >
                  Rethinking How
                  <br />
                  <span className="highlight">Talent</span> and <span className="highlight">Work</span> Connect
                </Typography>
              </Box>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mt: 5,
                  mb: 6,
                  fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.5rem' },
                  lineHeight: 1.6,
                  opacity: 0,
                  animation: 'heroSubtitleEntrance 1.2s ease-out 0.3s forwards',
                  '@keyframes heroSubtitleEntrance': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateY(50px) scale(1.08)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateY(0) scale(1)',
                    },
                  },
                }}
              >
                GoodFutures helps individuals and organizations connect beyond the résumé — through intelligent insight, authentic conversation, and a shared vision for growth.
              </Typography>

              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: { xs: 1, sm: 2 },
                flexWrap: 'nowrap',
                justifyContent: { xs: 'center', md: 'flex-start' },
                width: '100%',
                opacity: 0,
                animation: 'heroCtaEntrance 1.2s ease-out 0.5s forwards',
                '@keyframes heroCtaEntrance': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(50px) scale(1.1)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0) scale(1)',
                  },
                },
              }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: 'transparent',
                    color: '#212121',
                    borderRadius: '50px',
                    pl: { xs: 2.5, sm: 5 },
                    pr: { xs: 1.5, sm: 2.5 },
                    height: { xs: '50px', sm: '56px', md: '60px' },
                    py: 0,
                    flex: { xs: '1 1 0', sm: '0 1 280px', md: '0 1 300px' },
                    minWidth: { xs: 0, sm: '280px' },
                    maxWidth: { sm: '300px' },
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.05rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    border: '2px solid #FFB800',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: { xs: '50px', sm: '60px' },
                      bgcolor: 'secondary.main',
                      borderRadius: '50px',
                      transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: 0,
                    },
                    '&:hover::before': {
                      width: '100%',
                    },
                    '&:hover': {
                      bgcolor: 'transparent',
                      border: '2px solid #FFB800',
                    },
                    '& .icon-circle': {
                      position: 'absolute',
                      left: { xs: '16px', sm: '20px' },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover .icon-circle': {
                      opacity: 0,
                    },
                    '&:hover .default-text': {
                      display: 'none',
                    },
                    '&:hover .hover-text': {
                      display: 'flex !important',
                    },
                  }}
                >
                    <PersonIcon className="icon-circle" sx={{ fontSize: { xs: 18, sm: 20 }, color: '#212121' }} />
                    <Box className="default-text" sx={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>For Candidates</Box>
                      <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Candidates</Box>
                    </Box>
                    <Box className="hover-text" sx={{ position: 'relative', zIndex: 2, display: 'none', alignItems: 'center', gap: { xs: 0.5, sm: 1 }, justifyContent: 'center', width: '100%' }}>
                      <PersonIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Discover Your Fit</Box>
                      <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Your Fit</Box>
                    </Box>
                  </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    bgcolor: 'transparent',
                    color: '#212121',
                    borderRadius: '50px',
                    pl: { xs: 2.5, sm: 5 },
                    pr: { xs: 1.5, sm: 2.5 },
                    height: { xs: '50px', sm: '56px', md: '60px' },
                    py: 0,
                    flex: { xs: '1 1 0', sm: '0 1 280px', md: '0 1 300px' },
                    minWidth: { xs: 0, sm: '280px' },
                    maxWidth: { sm: '300px' },
                    fontSize: { xs: '0.85rem', sm: '1rem', md: '1.05rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    border: '2px solid #FFB800',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: { xs: '50px', sm: '60px' },
                      bgcolor: 'secondary.main',
                      borderRadius: '50px',
                      transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: 0,
                    },
                    '&:hover::before': {
                      width: '100%',
                    },
                    '&:hover': {
                      bgcolor: 'transparent',
                      border: '2px solid #FFB800',
                    },
                    '& .icon-circle': {
                      position: 'absolute',
                      left: { xs: '16px', sm: '20px' },
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover .icon-circle': {
                      opacity: 0,
                    },
                    '&:hover .default-text': {
                      display: 'none',
                    },
                    '&:hover .hover-text': {
                      display: 'flex !important',
                    },
                  }}
                >
                    <BusinessIcon className="icon-circle" sx={{ fontSize: { xs: 18, sm: 20 }, color: '#212121' }} />
                    <Box className="default-text" sx={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>For Companies</Box>
                      <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Companies</Box>
                    </Box>
                    <Box className="hover-text" sx={{ position: 'relative', zIndex: 2, display: 'none', alignItems: 'center', gap: { xs: 0.5, sm: 1 }, justifyContent: 'center', width: '100%' }}>
                      <BusinessIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                      <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Find the Right Talent</Box>
                      <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>Find Talent</Box>
                    </Box>
                  </Button>
              </Box>
              </Grid>

              {/* Right Column - Hero Image */}
              <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: { md: '280px', lg: '320px', xl: '380px' },
                    opacity: 0,
                    animation: 'heroImageEntrance 1.2s ease-out 0.4s forwards',
                    '@keyframes heroImageEntrance': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateX(50px) scale(0.95)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateX(0) scale(1)',
                      },
                    },
                  }}
                >
                  {/* Base container with aspect ratio */}
                  <Box sx={{ width: '100%', paddingBottom: '100%', position: 'relative' }}>
                    {/* Circular border */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        border: '1px solid rgba(30, 59, 51, 0.15)',
                        borderRadius: '50%',
                        zIndex: 0,
                      }}
                    />

                    {/* Rotating container */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        transform: 'translate(-50%, -50%)',
                        animation: 'rotateContainer 20s linear infinite',
                        '@keyframes rotateContainer': {
                          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
                          '100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
                        },
                      }}
                    >
                      {[0, 1, 2, 3, 4].map((index) => {
                        const angle = (index * 360) / 5;
                        const radian = (angle * Math.PI) / 180;
                        const x = 50 + 50 * Math.cos(radian - Math.PI / 2);
                        const y = 50 + 50 * Math.sin(radian - Math.PI / 2);

                        return (
                          <Box
                            key={index}
                            sx={{
                              position: 'absolute',
                              top: `${y}%`,
                              left: `${x}%`,
                              width: { md: '48px', lg: '54px', xl: '60px' },
                              height: { md: '48px', lg: '54px', xl: '60px' },
                              transform: 'translate(-50%, -50%)',
                            }}
                          >
                            <Box
                              sx={{
                                width: '100%',
                                height: '100%',
                                bgcolor: 'background.paper',
                                borderRadius: '50%',
                                border: '1px solid rgba(30, 59, 51, 0.15)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(30, 59, 51, 0.08)',
                                animation: 'counterRotate 20s linear infinite',
                                '@keyframes counterRotate': {
                                  '0%': { transform: 'rotate(0deg)' },
                                  '100%': { transform: 'rotate(-360deg)' },
                                },
                              }}
                            >
                              {index === 0 && <img src={AnalysisIcon} alt="Analysis" style={{ width: '60%', height: '60%' }} />}
                              {index === 1 && <img src={ChatIcon} alt="Chat" style={{ width: '60%', height: '60%' }} />}
                              {index === 2 && <img src={TestIcon} alt="Test" style={{ width: '60%', height: '60%' }} />}
                              {index === 3 && <img src={MatchIcon} alt="Match" style={{ width: '60%', height: '60%' }} />}
                              {index === 4 && <img src={JobSearchIcon} alt="Job Search" style={{ width: '60%', height: '60%' }} />}
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>

                    {/* Center image */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '70%',
                        zIndex: 1,
                      }}
                    >
                      <img src={HeroImage} alt="AI Careers Marketplace" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Two-Column Value Proposition */}
            <Box sx={{ mt: 16, mb: 12, maxWidth: '1100px', mx: 'auto' }}>
                <Grid container spacing={0}>
                  {/* Left Column - For Candidates */}
                  <Grid item xs={12} md={6} sx={{
                    position: 'relative',
                    pr: { xs: 0, md: 4 },
                    pb: { xs: 4, md: 0 },
                    borderRight: { xs: 'none', md: '1px solid rgba(30, 59, 51, 0.15)' },
                    borderBottom: { xs: '1px solid rgba(30, 59, 51, 0.15)', md: 'none' }
                  }}>
                    <ScrollFade delay={0}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          mb: 0.5,
                          fontWeight: 700,
                          color: 'primary.main',
                          lineHeight: 1.3,
                          textAlign: 'left',
                        }}
                      >
                        For Candidates
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                          mb: 2,
                          fontWeight: 700,
                          color: 'primary.main',
                          lineHeight: 1.3,
                          textAlign: 'left',
                        }}
                      >
                        Discover your true potential.
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          lineHeight: 1.7,
                          fontSize: '1rem',
                          color: 'text.secondary',
                          textAlign: 'left',
                        }}
                      >
                        We help you showcase who you are — not just what's on your resume. Through deep analysis, structured conversations, and real-world assessments, you're seen for your skills, mindset, and growth potential.
                      </Typography>
                    </ScrollFade>
                  </Grid>

                  {/* Right Column - For Employers */}
                  <Grid item xs={12} md={6} sx={{
                    pl: { xs: 0, md: 4 },
                    pt: { xs: 4, md: 0 }
                  }}>
                    <ScrollFade delay={200}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        mb: 0.5,
                        fontWeight: 700,
                        color: 'primary.main',
                        lineHeight: 1.3,
                        textAlign: 'left',
                      }}
                    >
                      For Companies
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '1.75rem' },
                        mb: 2,
                        fontWeight: 700,
                        color: 'primary.main',
                        lineHeight: 1.3,
                        textAlign: 'left',
                      }}
                    >
                      Hire with confidence.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        fontSize: '1rem',
                        color: 'text.secondary',
                        textAlign: 'left',
                      }}
                    >
                      Go beyond resumes and keywords. Our AI-driven analysis helps you identify authentic talent aligned with your culture, values, and long-term goals — saving time while improving match quality.
                    </Typography>
                    </ScrollFade>
                  </Grid>
                </Grid>
              </Box>
          </Container>
        </Box>

        {/* ===== VISION SECTION ===== */}
        <Box id="vision" sx={{ bgcolor: '#ECECEA', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="md">
            <ScrollFade delay={0}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  p: { xs: 3, md: 4 },
                  maxWidth: '700px',
                  mx: 'auto',
                  transform: 'rotate(-2deg)',
                  boxShadow: '-15px 20px 40px rgba(30, 59, 51, 0.25), -8px 12px 20px rgba(30, 59, 51, 0.15)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'rotate(0deg) translateY(-8px)',
                    boxShadow: '8px 30px 60px rgba(30, 59, 51, 0.3), 5px 20px 35px rgba(30, 59, 51, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    mb: 1.5,
                    display: 'block',
                    fontWeight: 600,
                  }}
                >
                  Founder Memo
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    mb: 1.5,
                    fontWeight: 700,
                    lineHeight: 1.3,
                    color: 'primary.main',
                  }}
                >
                  Rebuilding How the World Discovers Talent
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    color: 'text.secondary',
                  }}
                >
                  For decades, hiring has rewarded optimization over authenticity. Candidates learn to game the system while companies rely on keywords instead of understanding people. We founded GoodFutures to rebuild hiring from first principles — using AI not to replace human judgment, but to scale it. Our AI Careers Marketplace brings depth, honesty, and context back to hiring through five core capabilities:
                </Typography>

                <Box component="ul" sx={{ mb: 1.5, pl: 3, color: 'text.secondary' }}>
                  <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
                    <strong style={{ color: '#1E3B33' }}>Research-Level Analysis</strong> — Reveals the full depth of each candidate's capabilities through resumes, GitHub, and beyond, interpreting context, not just credentials.
                  </Box>
                  <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
                    <strong style={{ color: '#1E3B33' }}>Structured Coffee Chats</strong> — Explores personality, motivation, coachability, and cultural fit through authentic, guided conversations.
                  </Box>
                  <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
                    <strong style={{ color: '#1E3B33' }}>Virtual Assessments</strong> — Evaluates real-world problem-solving using modern AI tools, capturing how candidates think, adapt, and collaborate.
                  </Box>
                  <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
                    <strong style={{ color: '#1E3B33' }}>Semantic Matching</strong> — Predicts long-term success by aligning people and organizations through shared culture, values, and team dynamics.
                  </Box>
                  <Box component="li" sx={{ mb: 1, lineHeight: 1.6 }}>
                    <strong style={{ color: '#1E3B33' }}>Opportunity Discovery</strong> — Connects unique skill mixes to career paths candidates may never have considered but are truly suited for.
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    color: 'text.secondary',
                  }}
                >
                  We believe technology should make people more knowable, not more optimized. Hiring should feel like discovery, not chance. That's how we rebuild trust in the system — one honest connection at a time.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                      textAlign: 'right',
                      fontWeight: 600,
                      fontStyle: 'italic',
                    }}
                  >
                    The GoodFutures Founding Team
                  </Typography>
                </Box>
              </Box>
            </ScrollFade>
          </Container>
        </Box>

        {/* ===== FOR CANDIDATES SECTION ===== */}
        <Box id="candidates" sx={{ bgcolor: '#ECECEA', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="lg">
            {/* Candidates Hero */}
            <ScrollFade>
              <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Chip
                  label="For Candidates"
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2,
                    py: 0.5,
                    mb: 3,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 3,
                  }}
                >
                  Be Seen for Who You Really Are
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    color: 'text.secondary',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Move beyond resume keywords and connect with opportunities that value your full potential — your skills, mindset, and growth trajectory.
                </Typography>
              </Box>
            </ScrollFade>

            {/* How It Works */}
            <ScrollFade delay={100}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 8,
                }}
              >
                How It Works
              </Typography>
            </ScrollFade>

            <Box sx={{ mb: 10 }}>
              {/* Step 01 - Content Left, Image Right */}
              <ScrollFade delay={0}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(33, 33, 33, 0.8)',
                          mb: 2,
                        }}
                      >
                        01
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        Upload Resume & Share Your Goals
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Submit your resume and tell us about your target careers. Click "Generate Passport" and our AI analyzes your background, skills, and career aspirations to create your professional profile.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        bgcolor: '#F5F5F5',
                        borderRadius: 3,
                        border: '1px solid rgba(30, 59, 51, 0.1)',
                        overflow: 'hidden',
                        height: { xs: '320px', md: '450px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <img
                        src={PassportUI}
                        alt="Passport UI"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </ScrollFade>

              {/* Step 02 - Image Left, Content Right */}
              <ScrollFade delay={100}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                    <Box
                      sx={{
                        bgcolor: '#F5F5F5',
                        borderRadius: 3,
                        border: '1px solid rgba(30, 59, 51, 0.1)',
                        overflow: 'hidden',
                        height: { xs: '320px', md: '450px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <img
                        src={PassportSummary}
                        alt="Passport Summary"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(33, 33, 33, 0.8)',
                          mb: 2,
                        }}
                      >
                        02
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        View Your Passport Summary
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Instantly see a comprehensive summary of your professional profile. Your Passport highlights your key strengths, skills, experiences, and career trajectory — giving you insight into how you're positioned in the job market.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </ScrollFade>

              {/* Step 03 - Content Left, Image Right */}
              <ScrollFade delay={200}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(33, 33, 33, 0.8)',
                          mb: 2,
                        }}
                      >
                        03
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        Start Your Coffee Chat
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Click the Coffee Chat button and engage in a friendly 10-minute AI conversation. We'll explore your motivations, working style, career aspirations, and what truly drives you — helping us understand you beyond your resume.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <VideoPlayer
                      src={CoffeeChatVideo}
                      loop={false}
                      muted={false}
                      autoPlay={false}
                      autoPlayOnScroll={true}
                    />
                  </Grid>
                </Grid>
              </ScrollFade>

              {/* Step 04 - Image Left, Content Right */}
              <ScrollFade delay={300}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                    <VideoPlayer
                      src={CompletePassportVideo}
                      objectPosition="55% center"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(33, 33, 33, 0.8)',
                          mb: 2,
                        }}
                      >
                        04
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: 'primary.main',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        Get Your Complete Report
                      </Typography>
                      <Typography
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Receive a comprehensive report combining your Passport and Coffee Chat insights. Get personalized feedback on your strengths, areas for growth, career fit analysis, and tailored recommendations to help you stand out to the right opportunities.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </ScrollFade>
            </Box>

            {/* CTA */}
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'secondary.main',
                  color: '#212121',
                  borderRadius: '50px',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(255, 184, 0, 0.25)',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                    boxShadow: '0 6px 24px rgba(255, 184, 0, 0.35)',
                  },
                }}
              >
                Unlock Your Personalized Career Insights
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ===== FOR COMPANIES SECTION ===== */}
        <Box id="companies" sx={{ bgcolor: '#6B8B7E', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="lg">
            {/* Companies Hero */}
            <ScrollFade>
              <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Chip
                  label="For Companies"
                  sx={{
                    bgcolor: '#FFFFFF',
                    color: '#1E3B33',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    px: 2,
                    py: 0.5,
                    mb: 3,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    fontWeight: 700,
                    color: '#FFFFFF',
                    mb: 3,
                  }}
                >
                  Hire Talent That Actually Fits
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    color: 'rgba(255, 255, 255, 0.85)',
                    maxWidth: '800px',
                    mx: 'auto',
                    lineHeight: 1.6,
                  }}
                >
                  Stop wasting time on mismatched candidates. Find people who align with your culture, values, and long-term vision — faster and with more confidence.
                </Typography>
              </Box>
            </ScrollFade>

            {/* How It Works */}
            <ScrollFade delay={100}>
              <Typography
                variant="h4"
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  mb: 6,
                }}
              >
                How It Works
              </Typography>
            </ScrollFade>

            <Box sx={{ mb: 10 }}>
              {/* Step 01 - Content Left, Image Right */}
              <ScrollFade delay={0}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(255, 255, 255, 0.7)',
                          mb: 2,
                        }}
                      >
                        01
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        Upload Your Job Description
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Share your open roles — our AI analyzes required skills, growth potential, and cultural indicators to understand your hiring needs.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        overflow: 'hidden',
                        height: { xs: '320px', md: '450px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <img
                        src={UploadJD}
                        alt="Upload Job Description"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: '60% center',
                          display: 'block'
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </ScrollFade>

              {/* Step 02 - Image Left, Content Right */}
              <ScrollFade delay={100}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                    <Box
                      sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 3,
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        overflow: 'hidden',
                        height: { xs: '320px', md: '450px' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      <img
                        src={MatchedCandidates}
                        alt="Matched Candidates"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: '48% center',
                          display: 'block'
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(255, 255, 255, 0.7)',
                          mb: 2,
                        }}
                      >
                        02
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        Get Matched Candidates
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Receive a curated shortlist of candidates whose Passports align with your goals — each backed by verified skills and authentic insights.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </ScrollFade>

              {/* Step 03 - Content Left, Image Right */}
              <ScrollFade delay={200}>
                <Grid container spacing={4} sx={{ mb: 8, alignItems: 'center' }}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: 'rgba(255, 255, 255, 0.7)',
                          mb: 2,
                        }}
                      >
                        03
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: '#FFFFFF',
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                        }}
                      >
                        Go Beyond Résumés, Choose the Right Fit
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                        }}
                      >
                        Dive into each candidate's Passport, understand who they really are, and confidently select the best long-term match.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <VideoPlayer
                      src={CompletePassportVideo}
                      objectPosition="55% center"
                    />
                  </Grid>
                </Grid>
              </ScrollFade>
            </Box>

            {/* CTA */}
            <Box sx={{ textAlign: 'center', mt: 8 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'secondary.main',
                  color: '#212121',
                  borderRadius: '50px',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(255, 184, 0, 0.25)',
                  '&:hover': {
                    bgcolor: 'secondary.dark',
                    boxShadow: '0 6px 24px rgba(255, 184, 0, 0.35)',
                  },
                }}
              >
                Start Hiring Smarter
              </Button>
            </Box>
          </Container>
        </Box>

        {/* ===== FEATURES SECTION ===== */}
        <Box sx={{ bgcolor: '#ECECEA', py: { xs: 12, md: 16 } }} id="features">
          <Container maxWidth="lg">
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <ScrollFade delay={0}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2rem', md: '3.5rem' },
                    mb: 3,
                    color: 'primary.main',
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  All in One Platform
                </Typography>
              </ScrollFade>
            </Box>

            {/* Top Row - Two Main Feature Cards */}
            <Grid container spacing={4} sx={{ mb: 4 }}>
              {/* Left Card - Research-Level Analysis */}
              <Grid item xs={12} md={6}>
                <ScrollFadeEnhanced delay={100}>
                  <Card sx={{ bgcolor: 'background.paper', borderRadius: 3, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 200,
                          }}
                        >
                          <img src={ResearchIcon} alt="Research Analysis" style={{ width: '60%', maxHeight: '180px', objectFit: 'contain' }} />
                        </Box>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Research-Level Analysis
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        Reveals the full depth of each candidate through resumes, GitHub, and beyond — because we see beyond the surface.
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollFadeEnhanced>
              </Grid>

              {/* Right Card - Structured Coffee Chats */}
              <Grid item xs={12} md={6}>
                <ScrollFadeEnhanced delay={200}>
                  <Card sx={{ bgcolor: 'background.paper', borderRadius: 3, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 200,
                          }}
                        >
                          <img src={CoffeeIcon} alt="Coffee Chats" style={{ width: '60%', maxHeight: '180px', objectFit: 'contain' }} />
                        </Box>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Structured Coffee Chats
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                        Explores personality, motivation, and coachability through guided conversations that bring out authenticity.
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollFadeEnhanced>
              </Grid>
            </Grid>

            {/* Bottom Row - Three Feature Cards */}
            <Grid container spacing={4}>
              {/* Virtual Assessments */}
              <Grid item xs={12} md={4}>
                <ScrollFadeEnhanced delay={300}>
                  <Card sx={{ bgcolor: 'background.paper', borderRadius: 3, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 200,
                          }}
                        >
                          <img src={AssessmentIcon} alt="Assessments" style={{ width: '95%', maxHeight: '200px', objectFit: 'contain' }} />
                        </Box>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Virtual Assessments
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, minHeight: '110px' }}>
                        Designed to reveal real problem-solving, not test-taking — using modern AI tools to uncover genuine ability.
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollFadeEnhanced>
              </Grid>

              {/* Semantic Matching */}
              <Grid item xs={12} md={4}>
                <ScrollFadeEnhanced delay={400}>
                  <Card sx={{ bgcolor: 'background.paper', borderRadius: 3, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 200,
                          }}
                        >
                          <img src={MatchingIcon} alt="Matching" style={{ width: '80%', maxHeight: '180px', objectFit: 'contain' }} />
                        </Box>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Semantic Matching
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, minHeight: '110px' }}>
                        Our AI understands people, not profiles — predicting long-term fit by aligning values, growth, and team dynamics.
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollFadeEnhanced>
              </Grid>

              {/* Opportunity Discovery */}
              <Grid item xs={12} md={4}>
                <ScrollFadeEnhanced delay={500}>
                  <Card sx={{ bgcolor: 'background.paper', borderRadius: 3, height: '100%', border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 2,
                            p: 3,
                            mb: 3,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 200,
                          }}
                        >
                          <img src={OpportunityIcon} alt="Opportunity Discovery" style={{ width: '80%', maxHeight: '180px', objectFit: 'contain' }} />
                        </Box>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'primary.main', mb: 2, fontWeight: 600 }}>
                        Opportunity Discovery
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, minHeight: '110px' }}>
                        Connects unique skill combinations to roles and industries candidates may never have considered — helping potential meet opportunity.
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollFadeEnhanced>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ===== BENEFITS SECTION ===== */}
        <Box sx={{ bgcolor: '#ECECEA', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="lg">
            <ScrollFade delay={0}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 8, textAlign: 'center', color: 'primary.main', fontWeight: 700 }}
              >
                What Makes This Different?
              </Typography>
            </ScrollFade>

            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              <ScrollFade delay={100}>
                <Accordion
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                    '&:last-child': {
                      borderBottom: '1px solid',
                      borderColor: 'divider',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'text.secondary', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(30, 59, 51, 0.03)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 900, opacity: 0.8, fontSize: '3rem' }}>
                        01
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Authenticity Over Gaming
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 4 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, pl: 10, pr: 4, textAlign: 'justify', fontSize: '1.1rem' }}>
                      Our assessment rewards genuine skill demonstration. Candidates who try to fake their way through detailed technical conversations and real-world tasks reveal themselves immediately. The system naturally selects for honesty and capability.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ScrollFade>

              <ScrollFade delay={200}>
                <Accordion
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'text.secondary', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(30, 59, 51, 0.03)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 900, opacity: 0.8, fontSize: '3rem' }}>
                        02
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Context Over Keywords
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 4 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, pl: 10, pr: 4, textAlign: 'justify', fontSize: '1.1rem' }}>
                      We understand semantic relationships between skills and experiences. Our analysis recognizes that someone with strong React experience can learn Vue.js quickly, or that startup experience translates to valuable soft skills regardless of the specific company.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ScrollFade>

              <ScrollFade delay={300}>
                <Accordion
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'text.secondary', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(30, 59, 51, 0.03)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 900, opacity: 0.8, fontSize: '3rem' }}>
                        03
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Scalable Depth
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 4 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, pl: 10, pr: 4, textAlign: 'justify', fontSize: '1.1rem' }}>
                      We automate the kind of thorough candidate evaluation that only the best human recruiters could previously provide, maintaining quality insights while processing thousands of applications.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ScrollFade>

              <ScrollFade delay={400}>
                <Accordion
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    borderTop: '1px solid',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'text.secondary', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(30, 59, 51, 0.03)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 900, opacity: 0.8, fontSize: '3rem' }}>
                        04
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        Transparent Process
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 4 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, pl: 10, pr: 4, textAlign: 'justify', fontSize: '1.1rem' }}>
                      Both candidates and companies receive detailed explanations for matches and rejections. This feedback helps candidates improve while giving companies confidence in their hiring decisions.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ScrollFade>
            </Box>
          </Container>
        </Box>

        {/* ===== FINAL CTA SECTION ===== */}
        <Box sx={{ bgcolor: '#ECECEA', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="lg">
            <ScrollFade delay={0}>
              <Box
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  p: { xs: 6, md: 10 },
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 3, color: 'primary.main', fontWeight: 700 }}
                >
                  Every great journey<br />begins with a first step.
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mb: 5, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}
                >
                  Whether you're looking for a role that fits who you are, or building a team that reflects your values, we're here to make every match meaningful.
                </Typography>

                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: 'transparent',
                      color: '#212121',
                      borderRadius: '50px',
                      pl: 5,
                      pr: 2.5,
                      height: '60px',
                      py: 0,
                      width: '300px',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      border: '2px solid #FFB800',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '60px',
                        bgcolor: 'secondary.main',
                        borderRadius: '50px',
                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 0,
                      },
                      '&:hover::before': {
                        width: '100%',
                      },
                      '&:hover': {
                        bgcolor: 'transparent',
                        border: '2px solid #FFB800',
                      },
                      '& .icon-circle': {
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover .icon-circle': {
                        opacity: 0,
                      },
                      '&:hover .default-text': {
                        display: 'none',
                      },
                      '&:hover .hover-text': {
                        display: 'flex !important',
                      },
                    }}
                  >
                      <PersonIcon className="icon-circle" sx={{ fontSize: { xs: 18, sm: 20 }, color: '#212121' }} />
                      <Box className="default-text" sx={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <span>For Candidates</span>
                      </Box>
                      <Box className="hover-text" sx={{ position: 'relative', zIndex: 2, display: 'none', alignItems: 'center', gap: 1, justifyContent: 'center', width: '100%' }}>
                        <PersonIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                        <span>Discover Your Fit</span>
                      </Box>
                    </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      bgcolor: 'transparent',
                      color: '#212121',
                      borderRadius: '50px',
                      pl: 5,
                      pr: 2.5,
                      height: '60px',
                      py: 0,
                      width: '300px',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      border: '2px solid #FFB800',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        width: '60px',
                        bgcolor: 'secondary.main',
                        borderRadius: '50px',
                        transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        zIndex: 0,
                      },
                      '&:hover::before': {
                        width: '100%',
                      },
                      '&:hover': {
                        bgcolor: 'transparent',
                        border: '2px solid #FFB800',
                      },
                      '& .icon-circle': {
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover .icon-circle': {
                        opacity: 0,
                      },
                      '&:hover .default-text': {
                        display: 'none',
                      },
                      '&:hover .hover-text': {
                        display: 'flex !important',
                      },
                    }}
                  >
                      <BusinessIcon className="icon-circle" sx={{ fontSize: { xs: 18, sm: 20 }, color: '#212121' }} />
                      <Box className="default-text" sx={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <span>For Companies</span>
                      </Box>
                      <Box className="hover-text" sx={{ position: 'relative', zIndex: 2, display: 'none', alignItems: 'center', gap: 1, justifyContent: 'center', width: '100%' }}>
                        <BusinessIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                        <span>Start Hiring Smarter</span>
                      </Box>
                    </Button>
                </Box>
              </Box>
            </ScrollFade>
          </Container>
        </Box>

        {/* ===== FOOTER ===== */}
        <Box sx={{
          bgcolor: 'primary.main',
          py: 8,
          borderTopLeftRadius: { xs: '30px', md: '50px' },
          borderTopRightRadius: { xs: '30px', md: '50px' },
          mt: -6
        }}>
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            {/* Brand and Navigation */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
              <Link href="#" underline="none">
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'rgba(255, 255, 255, 0.95)', cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}>
                  GoodFutures
                </Typography>
              </Link>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href="#vision" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.8)', '&:hover': { color: 'secondary.main' } }}>
                  Vision
                </Link>
                <Link href="#candidates" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.8)', '&:hover': { color: 'secondary.main' } }}>
                  For Candidates
                </Link>
                <Link href="#companies" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.8)', '&:hover': { color: 'secondary.main' } }}>
                  For Companies
                </Link>
                <Link href="#features" underline="none" sx={{ color: 'rgba(255, 255, 255, 0.8)', '&:hover': { color: 'secondary.main' } }}>
                  Solution
                </Link>
              </Box>
            </Box>

            {/* Copyright */}
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.2)', textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                © 2025 GoodFutures. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;