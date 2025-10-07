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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import RecommendIcon from '@mui/icons-material/Recommend';

// Import SVG images
import ResearchIcon from './assets/Research-Level Analysis.svg';
import CoffeeIcon from './assets/coffee chat.svg';
import AssessmentIcon from './assets/assessment.svg';
import MatchingIcon from './assets/matching.svg';
import OpportunityIcon from './assets/Opportunity Discovery.svg';

// ===== SCROLL FADE COMPONENT =====
function ScrollFade({ children, delay = 0 }) {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 當元素進入視窗時淡入
      if (rect.top < windowHeight && rect.bottom > 0) {
        // 在視窗中
        if (rect.top > 0) {
          // 正在進入視窗
          const fadeInProgress = Math.min(1, (windowHeight - rect.top) / 300);
          setOpacity(fadeInProgress);
        } else if (rect.bottom < windowHeight) {
          // 正在離開視窗頂部（向下滾動）
          const fadeOutProgress = Math.max(0, rect.bottom / 300);
          setOpacity(fadeOutProgress);
        } else {
          // 完全在視窗中
          setOpacity(1);
        }
      } else {
        setOpacity(0);
      }
    };

    // 初始檢查
    setTimeout(handleScroll, delay);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [delay]);

  return (
    <div ref={ref} style={{ opacity, transition: 'opacity 0.6s ease-out' }}>
      {children}
    </div>
  );
}

// ===== MAIN APP COMPONENT =====
function App() {
  return (
    <>
      {/* Film Grain Overlay for entire site */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='600'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='5' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Main Content Container */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>

        {/* ===== HEADER ===== */}
        <AppBar
          position="fixed"
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'none',
            borderBottom: 'none',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'stretch', height: '80px' }}>
            {/* Logo Section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 4,
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                minWidth: '280px',
                bgcolor: 'rgba(0, 0, 0, 0.15)',
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover .icon-blink': {
                    animation: 'popDisappear 0.6s ease-in-out',
                  },
                  '@keyframes popDisappear': {
                    '0%': { transform: 'scale(1)', opacity: 1 },
                    '20%': { transform: 'scale(1.2)', opacity: 1 },
                    '40%': { transform: 'scale(0)', opacity: 0 },
                    '60%': { transform: 'scale(0)', opacity: 0 },
                    '80%': { transform: 'scale(1.2)', opacity: 1 },
                    '100%': { transform: 'scale(1)', opacity: 1 },
                  },
                }}
              >
                <RecommendIcon
                  className="icon-blink"
                  sx={{
                    color: 'white',
                    fontSize: '1.5rem',
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', cursor: 'pointer' }}>
                  GoodFutures
                </Typography>
              </Link>
            </Box>

            {/* Follow on LinkedIn Section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 3,
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                bgcolor: 'rgba(0, 0, 0, 0.15)',
              }}
            >
              <Link
                href="#"
                underline="none"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.875rem',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Follow on LinkedIn
              </Link>
            </Box>

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Navigation Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'stretch' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', px: 3, borderLeft: '1px solid rgba(255, 255, 255, 0.2)', bgcolor: 'rgba(0, 0, 0, 0.15)' }}>
                <Link href="#vision" color="text.primary" underline="none" sx={{ fontSize: '1rem', '&:hover': { color: 'primary.main' } }}>
                  Vision
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', px: 3, borderLeft: '1px solid rgba(255, 255, 255, 0.2)', bgcolor: 'rgba(0, 0, 0, 0.15)' }}>
                <Link href="#features" color="text.primary" underline="none" sx={{ fontSize: '1rem', '&:hover': { color: 'primary.main' } }}>
                  Solution
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', px: 3, borderLeft: '1px solid rgba(255, 255, 255, 0.2)', bgcolor: 'rgba(0, 0, 0, 0.15)' }}>
                <Link href="#candidates" color="text.primary" underline="none" sx={{ fontSize: '1rem', '&:hover': { color: 'primary.main' } }}>
                  For Candidates
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', px: 3, borderLeft: '1px solid rgba(255, 255, 255, 0.2)', bgcolor: 'rgba(0, 0, 0, 0.15)' }}>
                <Link href="#companies" color="text.primary" underline="none" sx={{ fontSize: '1rem', '&:hover': { color: 'primary.main' } }}>
                  For Companies
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', px: 3, borderLeft: '1px solid rgba(255, 255, 255, 0.2)', bgcolor: 'rgba(0, 0, 0, 0.15)' }}>
                <Link href="#contact" color="text.primary" underline="none" sx={{ fontSize: '1rem', '&:hover': { color: 'primary.main' } }}>
                  Contact
                </Link>
              </Box>
            </Box>
          </Box>
        </AppBar>

        {/* ===== HERO SECTION ===== */}
        <Box
          sx={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/hero-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 70%',
              backgroundRepeat: 'no-repeat',
              opacity: 0.7,
              zIndex: -1,
            },
            '@keyframes drawArc': {
              '0%': {
                strokeDashoffset: 250,
                opacity: 0,
              },
              '3%': {
                strokeDashoffset: 250,
                opacity: 1,
              },
              '50%': {
                strokeDashoffset: 50,
                opacity: 1,
              },
              '100%': {
                strokeDashoffset: 50,
                opacity: 1,
              },
            },
          }}
        >
          {/* Arc Light Trail */}
          <Box
            component="svg"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              pointerEvents: 'none',
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                <stop offset="20%" stopColor="rgba(200, 220, 255, 0.3)" />
                <stop offset="30%" stopColor="rgba(210, 230, 255, 0.5)" />
                <stop offset="40%" stopColor="rgba(220, 235, 255, 0.7)" />
                <stop offset="50%" stopColor="rgba(230, 240, 255, 0.85)" />
                <stop offset="70%" stopColor="rgba(245, 250, 255, 0.95)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <radialGradient id="headGlow">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
              </radialGradient>
            </defs>
            <path
              d="M 25 25 A 40 40 0 0 1 75 25"
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{
                strokeDasharray: '120 10000',
                animation: 'drawArc 4s ease-out forwards',
              }}
            />
          </Box>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ py: { xs: 12, md: 20 }, textAlign: 'center' }}>
            <ScrollFade delay={0}>
              <Chip
                label="REVOLUTIONIZING HIRING"
                sx={{
                  bgcolor: 'rgba(98, 168, 172, 0.2)',
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 3,
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                }}
              />
            </ScrollFade>

            <ScrollFade delay={100}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                The End of Broken Hiring.
                <br />
                The Start of{' '}
                <Box
                  component="span"
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #62A8AC 0%, #5497A7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textShadow: '0 0 15px rgba(98, 168, 172, 0.2)',
                    '&::before': {
                      content: '"Real Matches."',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 30%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      zIndex: 1,
                    }
                  }}
                >
                  Real Matches.
                </Box>
              </Typography>
            </ScrollFade>

            <ScrollFade delay={200}>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 5, maxWidth: '850px', mx: 'auto', fontSize: { xs: '1.1rem', md: '1.5rem' } }}
              >
                The first AI-driven hiring platform that transforms applications into real matches.
              </Typography>
            </ScrollFade>

            <ScrollFade delay={300}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'inline-block',
                    padding: '20px',
                    '&::before, &::after': {
                      content: '""',
                      position: 'absolute',
                      width: '30px',
                      height: '30px',
                      border: '3px solid rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.4s ease',
                    },
                    '&::before': {
                      top: '0',
                      left: '0',
                      borderRight: 'none',
                      borderBottom: 'none',
                      borderTopLeftRadius: '12px',
                    },
                    '&::after': {
                      bottom: '0',
                      right: '0',
                      borderLeft: 'none',
                      borderTop: 'none',
                      borderBottomRightRadius: '12px',
                    },
                    '&:hover::before': {
                      top: '8px',
                      left: '8px',
                    },
                    '&:hover::after': {
                      bottom: '8px',
                      right: '8px',
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'white',
                      color: 'black',
                      borderRadius: '50px',
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      textTransform: 'none',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    Request a Demo
                  </Button>
                </Box>
              </Box>
            </ScrollFade>
          </Box>
          </Container>
        </Box>

        {/* ===== VISION SECTION ===== */}
        <Box id="vision" sx={{ bgcolor: '#1a1a1a', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="md">
            <ScrollFade delay={0}>
              <Box
                sx={{
                  bgcolor: '#252626',
                  border: '2px solid #EFD28D',
                  borderRadius: 2,
                  p: { xs: 4, md: 6 },
                  maxWidth: '900px',
                  mx: 'auto',
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: '#EFD28D',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    mb: 3,
                    display: 'block',
                  }}
                >
                  A Letter from the Founders
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '2rem', md: '3rem' },
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: '#E0E0E0',
                  }}
                >
                  Hiring doesn't have to be broken.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    color: '#C0C0C0',
                  }}
                >
                  We've all been there—the endless applications that disappear into the void, the talented candidates overlooked by keyword filters, the interviews that never capture the full picture.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    color: '#C0C0C0',
                  }}
                >
                  But hiring has never been harder. Job seekers face black-box processes where their applications vanish without explanation. Companies drown in unqualified applicants while missing perfect candidates buried in the stack. And everyone knows the system is broken—yet we keep using the same tired approaches.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    color: '#C0C0C0',
                  }}
                >
                  We're here to change that. GoodFutures combines deep candidate analysis with intelligent matching to create something entirely new: a platform where authenticity wins, context matters, and talent is truly seen.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: '#EFD28D',
                  }}
                >
                  Our approach brings together:
                </Typography>

                <Box component="ul" sx={{ mb: 4, pl: 3, color: '#C0C0C0' }}>
                  <Box component="li" sx={{ mb: 2, lineHeight: 1.8 }}>
                    <strong style={{ color: '#E0E0E0' }}>Research-Level Analysis</strong> that reveals the full depth of each candidate's capabilities through resumes, GitHub, and beyond
                  </Box>
                  <Box component="li" sx={{ mb: 2, lineHeight: 1.8 }}>
                    <strong style={{ color: '#E0E0E0' }}>Structured Coffee Chats</strong> that assess personality, motivation, coachability, and cultural fit through real conversations
                  </Box>
                  <Box component="li" sx={{ mb: 2, lineHeight: 1.8 }}>
                    <strong style={{ color: '#E0E0E0' }}>Virtual Assessments</strong> that evaluate real-world problem-solving with modern AI tools like Cursor and Claude
                  </Box>
                  <Box component="li" sx={{ mb: 2, lineHeight: 1.8 }}>
                    <strong style={{ color: '#E0E0E0' }}>Semantic Matching</strong> that predicts long-term fit based on culture, values, and team dynamics—not just skills
                  </Box>
                  <Box component="li" sx={{ mb: 2, lineHeight: 1.8 }}>
                    <strong style={{ color: '#E0E0E0' }}>Opportunity Discovery</strong> that connects your unique skill mix to careers perfectly tailored for you
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    color: '#C0C0C0',
                  }}
                >
                  From day-to-day hiring to long-term talent strategy, we guide both candidates and companies through every stage of the journey.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    color: '#C0C0C0',
                  }}
                >
                  It's all delivered through a transparent, intelligent process that benefits everyone. That's what makes GoodFutures a trusted partner for the careers and companies we serve—and we're determined to earn that trust every day.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 5,
                    lineHeight: 1.8,
                    fontSize: '1.05rem',
                    color: '#C0C0C0',
                  }}
                >
                  The best talent deserves to be found. Let's make that happen.
                </Typography>

                <Box sx={{ borderTop: '1px solid rgba(239, 210, 141, 0.3)', pt: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '2rem',
                      color: '#EFD28D',
                      mb: 1,
                    }}
                  >
                    The GoodFutures Team
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#C0C0C0',
                      fontSize: '0.875rem',
                    }}
                  >
                    Founders
                  </Typography>
                </Box>
              </Box>
            </ScrollFade>
          </Container>
        </Box>

        {/* ===== FEATURES SECTION ===== */}
        <Box sx={{ bgcolor: '#1a1a1a', py: { xs: 12, md: 16 } }} id="features">
          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              {/* Left Column - Title and Description */}
              <Grid item xs={12} md={5}>
                <ScrollFade delay={0}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: '#62A8AC',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      mb: 3,
                      display: 'block',
                    }}
                  >
                    OUR SOLUTIONS
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      mb: 4,
                      lineHeight: 1.2,
                      color: '#C0C0C0',
                    }}
                  >
                    Built for Talent
                    <br />
                    <Box component="span" sx={{ color: 'white', fontWeight: 700 }}>
                      Smart by Design
                    </Box>
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <VerifiedUserIcon sx={{ color: '#62A8AC', mr: 2, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ color: '#C0C0C0', fontSize: '1.1rem' }}>
                        Deep analysis reveals true potential
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                      <VisibilityIcon sx={{ color: '#62A8AC', mr: 2, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ color: '#C0C0C0', fontSize: '1.1rem' }}>
                        Real conversations that matter
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <TrendingUpIcon sx={{ color: '#62A8AC', mr: 2, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ color: '#C0C0C0', fontSize: '1.1rem' }}>
                        AI-powered matching precision
                      </Typography>
                    </Box>
                  </Box>
                </ScrollFade>
              </Grid>

              {/* Right Column - 2x2 Grid */}
              <Grid item xs={12} md={7}>
                <Grid container spacing={3}>
                  {/* Research-Level Analysis */}
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        sx={{
                          border: '1px dashed rgba(98, 168, 172, 0.3)',
                          borderRadius: 2,
                          p: 4,
                          height: 220,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <img src={ResearchIcon} alt="Research Analysis" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
                        Research-Level Analysis
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#C0C0C0', lineHeight: 1.6 }}>
                        Deep candidate profiles from resumes, GitHub, and beyond. We see initiative, adaptability, and depth—not just keywords.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Structured Coffee Chats */}
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        sx={{
                          border: '1px dashed rgba(98, 168, 172, 0.3)',
                          borderRadius: 2,
                          p: 4,
                          height: 220,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <img src={CoffeeIcon} alt="Coffee Chats" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
                        Structured Coffee Chats
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#C0C0C0', lineHeight: 1.6 }}>
                        Real conversations that reveal personality, motivation, and cultural fit. Assess coachability, not just competence.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Virtual Assessments */}
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        sx={{
                          border: '1px dashed rgba(98, 168, 172, 0.3)',
                          borderRadius: 2,
                          p: 4,
                          height: 220,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <img src={AssessmentIcon} alt="Assessments" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
                        Virtual Assessments
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#C0C0C0', lineHeight: 1.6 }}>
                        Watch candidates solve real problems with AI tools like Cursor and Claude. Evaluate problem-solving, not memorization.
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Semantic Matching */}
                  <Grid item xs={6}>
                    <Box>
                      <Box
                        sx={{
                          border: '1px dashed rgba(98, 168, 172, 0.3)',
                          borderRadius: 2,
                          p: 4,
                          height: 220,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <img src={MatchingIcon} alt="Matching" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600 }}>
                        Semantic Matching
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#C0C0C0', lineHeight: 1.6 }}>
                        Match on culture, values, and team dynamics—not just skills. Predict long-term fit, not surface compatibility.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ===== BENEFITS SECTION ===== */}
        <Box sx={{ bgcolor: 'background.default', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="lg">
            <ScrollFade delay={0}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 8, textAlign: 'center' }}
              >
                4 Reasons Why You Should Trust Our Platform
              </Typography>
            </ScrollFade>

            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              <ScrollFade delay={100}>
                <Accordion
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                    '&:last-child': {
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6, fontSize: '3rem' }}>
                        01
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
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
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6, fontSize: '3rem' }}>
                        02
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
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
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6, fontSize: '3rem' }}>
                        03
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
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
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 0,
                    '&:before': { display: 'none' },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '2rem' }} />}
                    sx={{
                      py: 3,
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                        transform: 'rotate(45deg)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6, fontSize: '3rem' }}>
                        04
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
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
        <Container maxWidth="lg">
          <Box sx={{ py: { xs: 16, md: 20 }, textAlign: 'center' }}>
            <ScrollFade delay={0}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 3 }}
              >
                Ready for Hiring That Works?
              </Typography>
            </ScrollFade>

            <ScrollFade delay={100}>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 5, maxWidth: '800px', mx: 'auto' }}
              >
                Join the marketplace where talent meets opportunity through intelligence, not chance.
              </Typography>
            </ScrollFade>

            <ScrollFade delay={200}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #62A8AC 0%, #5497A7 100%)',
                    color: 'white',
                    borderRadius: 50,
                    px: 5,
                    py: 2,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 16px rgba(98, 168, 172, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 24px rgba(98, 168, 172, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Get Started Today
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    borderRadius: 50,
                    px: 5,
                    py: 2,
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: 'primary.light',
                      bgcolor: 'rgba(98, 168, 172, 0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </ScrollFade>
          </Box>
        </Container>

        {/* ===== FOOTER ===== */}
        <Box sx={{ bgcolor: '#1a1a1a', py: 8, borderTop: '1px solid rgba(98, 168, 172, 0.2)' }}>
          <Container maxWidth="lg">
            {/* Brand and Navigation */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
              <Link href="#" underline="none">
                <Typography variant="h6" sx={{ fontWeight: 700, cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                  GoodFutures
                </Typography>
              </Link>

              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                <Link href="#vision" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                  Vision
                </Link>
                <Link href="#features" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                  Solution
                </Link>
                <Link href="#candidates" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                  For Candidates
                </Link>
                <Link href="#companies" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                  For Companies
                </Link>
                <Link href="#contact" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                  Contact
                </Link>
              </Box>
            </Box>

            {/* Copyright */}
            <Box sx={{ mt: 6, pt: 4, borderTop: '1px solid rgba(98, 168, 172, 0.2)', textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                © 2025 GoodFutures Marketplace. All rights reserved.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default App;