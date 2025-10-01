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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Import SVG images
import ResearchIcon from './assets/Research-Level Analysis.svg';
import CoffeeIcon from './assets/coffee chat.svg';
import AssessmentIcon from './assets/assessment.svg';
import MatchingIcon from './assets/matching.svg';
import OpportunityIcon from './assets/Opportunity Discovery.svg';

// ===== SCROLL FADE COMPONENT =====
function ScrollFade({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <Fade in={isVisible} timeout={800}>
      <div ref={ref}>{children}</div>
    </Fade>
  );
}

// ===== MAIN APP COMPONENT =====
function App() {
  return (
    <>
      {/* Grid Background Pattern */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(98, 168, 172, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(98, 168, 172, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Radial Gradient Overlay */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(98, 168, 172, 0.15), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Noise Texture Overlay */}
      <Box
        sx={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main Content Container */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>

        {/* ===== HEADER ===== */}
        <AppBar
          position="sticky"
          sx={{
            bgcolor: 'rgba(37, 38, 38, 0.95)',
            backdropFilter: 'blur(20px)',
            boxShadow: 'none',
            borderBottom: '1px solid rgba(98, 168, 172, 0.1)',
          }}
        >
          <Toolbar sx={{ py: 1 }}>
            <Link href="#" underline="none" sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#EFD28D', '&:hover': { opacity: 0.8 }, cursor: 'pointer' }}>
                GoodFutures | Marketplace
              </Typography>
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 3   }}>
              <Link href="#vision" color="text.primary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                Vision
              </Link>
              <Link href="#features" color="text.primary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                Solution
              </Link>
              <Link href="#candidates" color="text.primary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                For Candidates
              </Link>
              <Link href="#companies" color="text.primary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                For Companies
              </Link>
              <Link href="#contact" color="text.primary" underline="none" sx={{ '&:hover': { color: 'primary.main' } }}>
                Contact
              </Link>
            </Box>
            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              sx={{
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.light',
                  bgcolor: 'rgba(98, 168, 172, 0.1)',
                },
              }}
            >
              Follow on LinkedIn
            </Button>
          </Toolbar>
        </AppBar>

        {/* ===== HERO SECTION ===== */}
        <Container maxWidth="lg">
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
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #62A8AC 0%, #5497A7 100%)',
                    color: 'white',
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    boxShadow: '0 4px 16px rgba(98, 168, 172, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 24px rgba(98, 168, 172, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Find Your Next Role
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    borderRadius: 50,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'primary.light',
                      bgcolor: 'rgba(98, 168, 172, 0.1)',
                    },
                  }}
                >
                  Hire Great Talent
                </Button>
              </Box>
            </ScrollFade>
          </Box>
        </Container>

        {/* ===== VISION SECTION ===== */}
        <Box id="vision" sx={{ bgcolor: 'background.default', py: { xs: 12, md: 16 } }}>
          <Container maxWidth="lg">
            <ScrollFade delay={0}>
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  color: 'primary.main',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Our Vision
              </Typography>
            </ScrollFade>

            <ScrollFade delay={100}>
              <Typography
                variant="h3"
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  mb: 2,
                  fontWeight: 700,
                }}
              >
                We're building a hiring system where authenticity wins, context matters, and talent is truly seen.
              </Typography>
            </ScrollFade>

            <ScrollFade delay={200}>
              <Grid container spacing={4} sx={{ mt: 6 }}>
                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(98, 168, 172, 0.05)',
                      border: '2px solid rgba(98, 168, 172, 0.2)',
                      borderRadius: 4,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(98, 168, 172, 0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        bgcolor: 'rgba(98, 168, 172, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <VerifiedUserIcon sx={{ fontSize: '3rem', color: 'primary.main' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: 'secondary.main' }}>
                      Authenticity First
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, fontSize: '1rem', px: 2 }}>
                      Candidates can present their real skills and experiences, without keyword games or resume hacks.
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(239, 210, 141, 0.05)',
                      border: '2px solid rgba(239, 210, 141, 0.3)',
                      borderRadius: 4,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'secondary.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(239, 210, 141, 0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        bgcolor: 'rgba(239, 210, 141, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <VisibilityIcon sx={{ fontSize: '3rem', color: 'secondary.main' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: 'secondary.main' }}>
                      Context Matters
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, fontSize: '1rem', px: 2 }}>
                      Companies see the full story: transferable skills, potential, and achievements that go beyond titles.
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(84, 151, 167, 0.05)',
                      border: '2px solid rgba(84, 151, 167, 0.2)',
                      borderRadius: 4,
                      p: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'info.main',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 24px rgba(84, 151, 167, 0.2)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 3,
                        bgcolor: 'rgba(84, 151, 167, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <TrendingUpIcon sx={{ fontSize: '3rem', color: 'info.main' }} />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: 'secondary.main' }}>
                      Mutual Growth
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2, fontSize: '1rem', px: 2 }}>
                      When candidates and employers connect honestly, both careers and companies grow stronger.
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </ScrollFade>
          </Container>
        </Box>

        {/* ===== FEATURES SECTION ===== */}
        <Container maxWidth="lg" id="features">
          <Box sx={{ py: { xs: 12, md: 16 } }}>
            <ScrollFade delay={0}>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2, textAlign: 'center' }}
              >
                All-in-One Platform
                <br />
                <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
                  Transforming How Candidates and Companies Connect.
                </Box>
              </Typography>
            </ScrollFade>

            <ScrollFade delay={100}>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ textAlign: 'center', mb: 8, maxWidth: '900px', mx: 'auto' }}
              >
                Five integrated capabilities that reveal who candidates truly are and find their perfect match.
              </Typography>
            </ScrollFade>

            {/* Top Row - 2 Cards */}
            <Grid container spacing={3} sx={{ mb: 3, justifyContent: 'center' }}>
              <Grid item xs={12} md={4}>
                <ScrollFade delay={200}>
                  <Card
                    sx={{
                      height: 550,
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      border: '2px solid rgba(98, 168, 172, 0.4)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 280,
                        background: '#252626',
                        borderRadius: '16px 16px 0 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                      }}
                    >
                      <img src={ResearchIcon} alt="Research-Level Analysis" style={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: '#EFD28D', minHeight: '60px' }}>
                        Research-Level Analysis
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '60px', mt: -2, textAlign: 'justify' }}>
                        Deep candidate profiles from resumes, GitHub, and beyond. We see initiative, adaptability, and depth—not just keywords.
                      </Typography>
                      <Button
                        fullWidth
                        component="a"
                        href="/passport"
                        sx={{
                          background: 'linear-gradient(135deg, #62A8AC 0%, #5497A7 100%)',
                          color: 'white',
                          borderRadius: 50,
                          py: 1.5,
                          boxShadow: '0 4px 16px rgba(98, 168, 172, 0.3)',
                          '&:hover': {
                            boxShadow: '0 6px 24px rgba(98, 168, 172, 0.4)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollFade>
              </Grid>

              <Grid item xs={12} md={4}>
                <ScrollFade delay={300}>
                  <Card
                    sx={{
                      height: 550,
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      border: '2px solid rgba(98, 168, 172, 0.4)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 280,
                        background: '#252626',
                        borderRadius: '16px 16px 0 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                      }}
                    >
                      <img src={CoffeeIcon} alt="Structured Coffee Chats" style={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: '#EFD28D', minHeight: '60px' }}>
                        Structured Coffee Chats
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '60px', mt: -2, textAlign: 'justify' }}>
                        Real conversations that reveal personality, motivation, and cultural fit. Assess coachability, not just competence.
                      </Typography>
                      <Button
                        fullWidth
                        sx={{
                          background: 'linear-gradient(135deg, #62A8AC 0%, #5497A7 100%)',
                          color: 'white',
                          borderRadius: 50,
                          py: 1.5,
                          boxShadow: '0 4px 16px rgba(98, 168, 172, 0.3)',
                          '&:hover': {
                            boxShadow: '0 6px 24px rgba(98, 168, 172, 0.4)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollFade>
              </Grid>
            </Grid>

            {/* Bottom Row - 3 Cards */}
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <ScrollFade delay={400}>
                  <Card
                    sx={{
                      height: 550,
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      border: '2px solid rgba(98, 168, 172, 0.4)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 280,
                        background: '#252626',
                        borderRadius: '16px 16px 0 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                      }}
                    >
                      <img src={AssessmentIcon} alt="Virtual Assessments" style={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: '#EFD28D', minHeight: '60px' }}>
                        Virtual Assessments
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '60px', mt: -2, textAlign: 'justify' }}>
                        Watch candidates solve real problems with AI tools like Cursor and Claude. Evaluate problem-solving, not memorization.
                      </Typography>
                      <Button
                        fullWidth
                        disabled
                        sx={{
                          background: 'rgba(98, 168, 172, 0.2)',
                          color: 'rgba(224, 224, 224, 0.6)',
                          border: '1px solid rgba(98, 168, 172, 0.3)',
                          borderRadius: 50,
                          py: 1.5,
                          '&.Mui-disabled': {
                            color: 'rgba(224, 224, 224, 0.6)',
                          },
                        }}
                      >
                        Coming Soon
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollFade>
              </Grid>

              <Grid item xs={12} md={4}>
                <ScrollFade delay={500}>
                  <Card
                    sx={{
                      height: 550,
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      border: '2px solid rgba(98, 168, 172, 0.4)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 280,
                        background: '#252626',
                        borderRadius: '16px 16px 0 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                      }}
                    >
                      <img src={MatchingIcon} alt="Semantic Matching" style={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: '#EFD28D', minHeight: '60px' }}>
                        Semantic Matching
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '60px', mt: -2, textAlign: 'justify' }}>
                        Match on culture, values, and team dynamics—not just skills. Predict long-term fit, not surface compatibility.
                      </Typography>
                      <Button
                        fullWidth
                        disabled
                        sx={{
                          background: 'rgba(98, 168, 172, 0.2)',
                          color: 'rgba(224, 224, 224, 0.6)',
                          border: '1px solid rgba(98, 168, 172, 0.3)',
                          borderRadius: 50,
                          py: 1.5,
                          '&.Mui-disabled': {
                            color: 'rgba(224, 224, 224, 0.6)',
                          },
                        }}
                      >
                        Coming Soon
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollFade>
              </Grid>

              <Grid item xs={12} md={4}>
                <ScrollFade delay={600}>
                  <Card
                    sx={{
                      height: 550,
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.paper',
                      border: '2px solid rgba(98, 168, 172, 0.4)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 280,
                        background: '#252626',
                        borderRadius: '16px 16px 0 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 3,
                      }}
                    >
                      <img src={OpportunityIcon} alt="Opportunity Discovery" style={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'brightness(1.2)' }} />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: '#EFD28D', minHeight: '60px' }}>
                        Opportunity Discovery
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, minHeight: '60px', mt: -2, textAlign: 'justify' }}>
                        Discover roles you never knew existed. We connect your unique skill mix to careers perfectly tailored for you.
                      </Typography>
                      <Button
                        fullWidth
                        disabled
                        sx={{
                          background: 'rgba(98, 168, 172, 0.2)',
                          color: 'rgba(224, 224, 224, 0.6)',
                          border: '1px solid rgba(98, 168, 172, 0.3)',
                          borderRadius: 50,
                          py: 1.5,
                          '&.Mui-disabled': {
                            color: 'rgba(224, 224, 224, 0.6)',
                          },
                        }}
                      >
                        Coming Soon
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollFade>
              </Grid>
            </Grid>
          </Box>
        </Container>

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
                    border: '1px solid rgba(98, 168, 172, 0.3)',
                    mb: 2,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                    sx={{
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6 }}>
                        01
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        Authenticity Over Gaming
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3 }}>
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
                    border: '1px solid rgba(98, 168, 172, 0.3)',
                    mb: 2,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                    sx={{
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6 }}>
                        02
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        Context Over Keywords
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3 }}>
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
                    border: '1px solid rgba(98, 168, 172, 0.3)',
                    mb: 2,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                    sx={{
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6 }}>
                        03
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        Scalable Depth
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3 }}>
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
                    border: '1px solid rgba(98, 168, 172, 0.3)',
                    mb: 2,
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                    sx={{
                      '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.05)' },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '100%' }}>
                      <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 900, opacity: 0.6 }}>
                        04
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                        Transparent Process
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3 }}>
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
        <Box sx={{ bgcolor: 'background.paper', py: 8, borderTop: '1px solid rgba(98, 168, 172, 0.2)' }}>
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