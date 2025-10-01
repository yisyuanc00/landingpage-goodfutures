import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link as MuiLink,
  IconButton,
} from '@mui/material';
import {
  ContentCopy,
  Print,
  CalendarToday,
  School,
  TrendingUp,
  People,
  WorkOutline,
  ExitToApp,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Rating Bar Component
function RatingBar({ rating, maxRating = 5 }) {
  return (
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      {[...Array(maxRating)].map((_, index) => (
        <Box
          key={index}
          sx={{
            width: 12,
            height: 8,
            borderRadius: 0.5,
            bgcolor: index < rating ? '#3b82f6' : 'rgba(98, 168, 172, 0.2)',
          }}
        />
      ))}
    </Box>
  );
}

function Passport() {
  const navigate = useNavigate();

  const handleCopyJSON = () => {
    const candidateData = {
      slug: "tejas-goyal",
      name: "Tejas Goyal",
      headline: "TPM-minded engineer driving AI products, cross-functional execution, and data-informed delivery.",
      tags: ["Fast Learner", "Data-Driven", "Cross-Functional", "Clear Communicator", "Owner Mindset"],
      lastUpdatedISO: "2025-09-26"
    };
    navigator.clipboard.writeText(JSON.stringify(candidateData, null, 2));
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ExitToApp sx={{ transform: 'rotate(180deg)' }} />}
          onClick={() => navigate('/')}
          sx={{
            mb: 3,
            color: 'primary.main',
            '&:hover': { bgcolor: 'rgba(98, 168, 172, 0.1)' }
          }}
        >
          Back to Home
        </Button>

        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 3, mb: 3 }}>
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>
                Tejas Goyal
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 3, maxWidth: 800 }}>
                TPM-minded engineer driving AI products, cross-functional execution, and data-informed delivery.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Fast Learner" color="success" size="small" />
                <Chip label="Data-Driven" color="info" size="small" />
                <Chip label="Cross-Functional" color="secondary" size="small" />
                <Chip label="Clear Communicator" color="warning" size="small" />
                <Chip label="Owner Mindset" color="error" size="small" />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton onClick={handleCopyJSON} sx={{ bgcolor: 'background.paper' }}>
                <ContentCopy />
              </IconButton>
              <IconButton onClick={() => window.print()} sx={{ bgcolor: 'background.paper' }}>
                <Print />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
            <CalendarToday sx={{ fontSize: 16, mr: 1 }} />
            <Typography variant="body2">Last updated: September 26, 2025</Typography>
          </Box>
        </Box>

        {/* Snapshot */}
        <Paper sx={{ p: 4, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(98, 168, 172, 0.2)' }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
            <School sx={{ mr: 1 }} />
            Snapshot
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Education</Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>MISM (Master of Information Systems Management)</Typography>
                <Typography variant="body2" color="text.secondary">Carnegie Mellon University • 2025–2026</Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>B.Tech, Computer Science & Engineering</Typography>
                <Typography variant="body2" color="text.secondary">PES University • 2020–2024</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>System Summary</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Graduate TA and former TPM/AI intern with experience aligning engineering and GTM for AI features, building agentic automations around Jira/LLM stacks, and validating LLM systems (RAG, evals, robustness). Comfortable in ambiguous, cross-functional environments with measurable cycle-time and resolution-time improvements.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Skills & Experience */}
        <Paper sx={{ p: 4, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(98, 168, 172, 0.2)' }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
            <TrendingUp sx={{ mr: 1 }} />
            Skills & Experience
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Skill Matrix</Typography>
          <TableContainer sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Domain</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Items</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Rating</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Confidence</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Source</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Program/Delivery</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label="Agile, Sprint Planning" size="small" variant="outlined" />
                      <Chip label="Stakeholder Comms" size="small" variant="outlined" />
                      <Chip label="Risk & Dependency Mgmt" size="small" variant="outlined" />
                    </Box>
                  </TableCell>
                  <TableCell><RatingBar rating={5} /></TableCell>
                  <TableCell><RatingBar rating={5} /></TableCell>
                  <TableCell><Typography variant="caption" color="text.secondary">Confluent role + GTA coaching</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Data & ML</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label="RAG (Azure OpenAI, Llama)" size="small" variant="outlined" />
                      <Chip label="Pinecone" size="small" variant="outlined" />
                      <Chip label="LangChain/LangTest" size="small" variant="outlined" />
                    </Box>
                  </TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><RatingBar rating={5} /></TableCell>
                  <TableCell><Typography variant="caption" color="text.secondary">Philips internship</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Software</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label="Python" size="small" variant="outlined" />
                      <Chip label="C/C++" size="small" variant="outlined" />
                      <Chip label="Java" size="small" variant="outlined" />
                      <Chip label="SQL" size="small" variant="outlined" />
                    </Box>
                  </TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><RatingBar rating={5} /></TableCell>
                  <TableCell><Typography variant="caption" color="text.secondary">Coursework + projects</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Cloud & MLOps</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label="Azure, GCP, AWS" size="small" variant="outlined" />
                      <Chip label="Docker" size="small" variant="outlined" />
                      <Chip label="Spark" size="small" variant="outlined" />
                      <Chip label="Azure ML" size="small" variant="outlined" />
                    </Box>
                  </TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><Typography variant="caption" color="text.secondary">Internship + coursework</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>NLP/LLM</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label="HuggingFace, PyTorch" size="small" variant="outlined" />
                      <Chip label="NLTK" size="small" variant="outlined" />
                      <Chip label="Keras/TensorFlow" size="small" variant="outlined" />
                    </Box>
                  </TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><Typography variant="caption" color="text.secondary">Projects + INOCON/ICICV papers</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Soft Skills</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      <Chip label="Technical Communication" size="small" variant="outlined" />
                      <Chip label="Customer Empathy" size="small" variant="outlined" />
                      <Chip label="Leadership" size="small" variant="outlined" />
                    </Box>
                  </TableCell>
                  <TableCell><RatingBar rating={5} /></TableCell>
                  <TableCell><RatingBar rating={4} /></TableCell>
                  <TableCell><Typography variant="caption" color="text.secondary">GTA + TPM experience</Typography></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Experience Benchmark</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              {
                title: "Carnegie Mellon University, School of Computer Science • Graduate Teaching Assistant",
                benchmark: "Graduate TA typically supports instruction, coaching on research methods, and technical depth in ML/NLP; coordinates with faculty and guides student cohorts.",
                differentiators: [
                  "Coached 150+ students on literature review methods across DL/NLP/unsupervised learning → broader exposure across DS subfields",
                  "Scaled academic mentorship beyond a single course (volume + topic breadth)"
                ]
              },
              {
                title: "Confluent • Technical Program Manager",
                benchmark: "TPM in a real-time data streaming company (Kafka) drives cross-org execution, risk/dependency mgmt, GTM alignment, and technically aware delivery at scale.",
                differentiators: [
                  "Led strategy for AI-powered Customer Intelligence Hub (single source of truth) aligning Eng + GTM → 40% faster pipeline for 500+ reps",
                  "Built agentic ticket management via N8N + Jira APIs + Gemini; semantic resolution → 85% faster ticket resolution; Quarterly Key Contributor",
                  "Consolidated 12 Jira boards; coached DE/Infra/BI on agile → end-to-end cycle time ↓40%"
                ]
              },
              {
                title: "Philips • AI Engineering Intern",
                benchmark: "AI intern work typically prototypes LLM apps, retrieval, evaluation, and reliability for healthcare support settings.",
                differentiators: [
                  "LLM support tool with Azure OpenAI, Llama, Pinecone (RAG) → patient query resolution time ↓60%, $1.1M projected savings",
                  "Context-aware chunking (spaCy) for indexing → RAG accuracy ~90%",
                  "Stress-tested with LangTest + LLMOps practices for production readiness"
                ]
              },
              {
                title: "Indian Institute of Science (IISc) • Research Intern (with Prof. Y. Narahari)",
                benchmark: "Research interns explore theoretical analysis, data structures/algorithms, and benchmarking.",
                differentiators: [
                  "Theoretical and empirical analysis of skip lists; C++ codebase from scratch",
                  "Large-scale runtime benchmarking showing gains vs traditional structures"
                ]
              }
            ].map((exp, index) => (
              <Paper key={index} sx={{ p: 3, border: '1px solid rgba(98, 168, 172, 0.3)' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>{exp.title}</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', mb: 1 }}>
                      Role Benchmark:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.benchmark}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary', mb: 1 }}>
                      Candidate Differentiators:
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2 }}>
                      {exp.differentiators.map((diff, i) => (
                        <Typography key={i} component="li" variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                          {diff}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
        </Paper>

        {/* Behavioral Insights */}
        <Paper sx={{ p: 4, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(98, 168, 172, 0.2)' }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
            <People sx={{ mr: 1 }} />
            Behavioral Insights
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Metric</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Score</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>System Observation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[
                  { metric: "Learning Speed", rating: 5, observation: "Ramp-up across DL/NLP/unsupervised topics and new LLM toolchains; effective in short cycles." },
                  { metric: "Technical Communication", rating: 5, observation: "Bridges Eng and GTM; clear user-oriented reasoning; GTA coaching experience." },
                  { metric: "Ownership", rating: 5, observation: "End-to-end systems (agentic tickets, Jira consolidation) with measurable impact." },
                  { metric: "Customer Empathy", rating: 4, observation: "Requirements from 50+ sales execs; healthcare support scenarios at Philips." },
                  { metric: "Systems Thinking", rating: 4, observation: "Unified workflows across 12 boards; dependency/risk awareness typical of TPMs." }
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: 600 }}>{row.metric}</TableCell>
                    <TableCell><RatingBar rating={row.rating} /></TableCell>
                    <TableCell><Typography variant="body2" color="text.secondary">{row.observation}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2, fontStyle: 'italic' }}>
            Assessment based on academic mentorship performance, TPM role execution, and demonstrated measurable impact across AI/ML projects.
          </Typography>
        </Paper>

        {/* Opportunity Fit */}
        <Paper sx={{ p: 4, mb: 4, bgcolor: 'background.paper', border: '1px solid rgba(98, 168, 172, 0.2)' }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
            <WorkOutline sx={{ mr: 1 }} />
            Opportunity Fit
          </Typography>
          <TableContainer sx={{ mb: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Fit</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Rationale</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Technical Program Manager (AI/Data Platform)</TableCell>
                  <TableCell><Chip label="High" color="success" size="small" /></TableCell>
                  <TableCell><Typography variant="body2" color="text.secondary">Demonstrated cross-org alignment, measurable delivery, and LLM/NLP literacy.</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Forward Deployed Engineer / Solutions Architect (AI)</TableCell>
                  <TableCell><Chip label="High" color="success" size="small" /></TableCell>
                  <TableCell><Typography variant="body2" color="text.secondary">Customer-facing build + problem framing; agentic workflows; GTM collaboration.</Typography></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Applied ML Engineer (LLM/RAG)</TableCell>
                  <TableCell><Chip label="Medium" color="warning" size="small" /></TableCell>
                  <TableCell><Typography variant="body2" color="text.secondary">Strong hands-on RAG and evaluation; could deepen research-grade modeling.</Typography></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Career Trajectory</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Chip label="Engineer/TA" size="small" />
              <Box sx={{ width: 16, height: 1, bgcolor: 'text.secondary' }} />
              <Chip label="Technical Program Manager (AI/Platform)" color="info" size="small" />
              <Box sx={{ width: 16, height: 1, bgcolor: 'text.secondary' }} />
              <Chip label="Product/Programs Leader" size="small" />
            </Box>
          </Box>
        </Paper>

        {/* Citations */}
        <Paper sx={{ p: 4, bgcolor: 'background.paper', border: '1px solid rgba(98, 168, 172, 0.2)' }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, display: 'flex', alignItems: 'center', color: 'secondary.main' }}>
            <ExitToApp sx={{ mr: 1 }} />
            Citations
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { label: "Confluent—data streaming & Kafka", url: "https://www.confluent.io/resources/report/2025-data-streaming-report/" },
              { label: "Confluent TPM—responsibilities (role benchmark)", url: "https://www.zettlor.com/job-posts/e5f382a8-f4a3-4d90-b332-1b6a1732c6dc" },
              { label: "TPM overview (industry)", url: "https://www.launchnotes.com/blog/the-complete-guide-to-a-technical-program-managers-role-responsibilities-and-career-path" },
              { label: "PES University CSE program page", url: "https://cs.pes.edu/programs/" },
              { label: "ICICV 2024 (Springer conference page)", url: "https://link.springer.com/conference/icicv1" },
              { label: "INOCON 2024 (IEEE conf. reference)", url: "https://www.scribd.com/document/748343706/Exploring-the-Application-of-Natural-Language-Processing-for-Social-Media-Sentiment-Analysis" },
              { label: "IISc Prof. Y. Narahari (lab home)", url: "https://gtl.csa.iisc.ac.in/hari/" }
            ].map((citation, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <ExitToApp sx={{ fontSize: 16, color: 'text.secondary', mt: 0.5 }} />
                <MuiLink
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: 'primary.main', '&:hover': { color: 'primary.light' } }}
                >
                  {citation.label}
                </MuiLink>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Passport;
