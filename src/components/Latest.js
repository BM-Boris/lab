import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  AvatarGroup,
  Box,
  Grid,
  Pagination,
  Typography,
  Card,
  CardContent,
  Collapse,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const articleInfo = [
  {
    tag: 'News',
    title:
      'Hu Lab Joins IndiePHARM to Pioneer Precision Drug Outcome Prediction through Big Data Integration, an ARPA-H project',
    description:
      'Pioneering precision drug outcome prediction through big data integration.',
    content: `
      <p>We have joined forces with <a href="https://www.publichealth.columbia.edu/news/research-effort-aims-bring-personalized-medicine-drug-prescriptions">IndiePHARM</a>, spearheading innovative network modeling to merge vast exposome and metabolome datasets. By integrating these unique biological and chemical profiles, the collaboration led by Columbia with 11 investigators including several from Emory (<a href="https://news.emory.edu/stories/2024/09/hs-drug-efficacy-research-26-09-2024/story.html">link</a>) aims to enhance predictive accuracy in drug responses, allowing for tailored treatments that align with each individual's environmental and metabolic influences.</p>
      <p>This project holds promise for more personalized and effective therapeutic strategies, advancing precision medicine on a global scale.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '09.01.2024',
  },
  {
    tag: 'Awards',
    title:
      'Hu Lab Awarded ULRI Discovery Grant to Advance Research on CBD Personal Care Product Safety',
    description:
      'Advancing research on the safety of CBD-infused personal care products.',
    content: `
      <p>We have been awarded a discovery grant from ULRI to investigate the safety of CBD-infused personal care products. The study will assess synthetic and plant-derived CBD formulations, examining product composition, potential contaminants, and effects on skin health.</p>
      <p>By enhancing regulatory knowledge and consumer safety, this research aims to provide critical insights into CBD product quality and standards in the rapidly growing personal care market.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '08.24.2024',
  },
  {
    tag: 'Conference',
    title:
      'Multi-Generational Impact of Environmental Exposures Revealed at GRC 2024 Conference on Endocrine Disruptors',
    description:
      'Presented findings on the impact of environmental exposures across generations.',
    content: `
      <p>At the 2024 GRC Conference on Environmental Endocrine Disruptors in Lucca, Italy, we presented findings from the Child Health and Development Studies cohort, conducted in collaboration with Barbara Cohn's team. The study highlighted how environmental exposures on both maternal and paternal sides may impact health across multiple generations.</p>
      <p>This research underscores the complex inheritance of exposure effects and potential implications for public health strategies addressing endocrine disruptors.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '07.01.2024',
  },
  {
    tag: 'Collaboration',
    title:
      'Continued Collaboration on Exposome Research through the Columbia SHARP Bootcamp',
    description:
      "Deepening expertise in exposome science at Columbia University's SHARP Bootcamp.",
    content: `
      <p>We recently participated in Columbia University's SHARP Bootcamp in July 2024, joining a global cohort of instructors and trainees to deepen expertise in exposome science. The intensive training focused on cutting-edge analytical and computational tools to better understand the exposome's role in health and disease.</p>
      <p>This collaborative experience advances research capabilities in mapping environmental exposures and their complex biological effects.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '06.22.2024',
  },
  {
    tag: 'Publication',
    title:
      'New Study Links Pyrimidine Biosynthesis to Branching Morphogenesis Defects from Prenatal Heavy Metal Exposure',
    description:
      'Published new findings on the impact of heavy metals on respiratory development.',
    content: `
      <p>We have a new publication in the <em>American Journal of Respiratory Cell and Molecular Biology</em> that reveals disruptions in pyrimidine biosynthesis are linked to branching morphogenesis defects caused by prenatal exposure to heavy metals.</p>
      <p>The study underscores the impact of heavy metal exposures that are relevant to the general population during critical developmental periods, shedding light on potential mechanisms driving respiratory developmental abnormalities. These findings may open doors to targeted prevention strategies for environmental exposure-related respiratory birth defects.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '05.11.2024',
  },
  {
    tag: 'Conference',
    title:
      'Single-Cell Multiomics Insights into Prenatal Heavy Metal Exposure and Lung Development',
    description:
      'Presented at ATS 2024 on the cellular impact of prenatal heavy metal exposure.',
    content: `
      <p>At the American Thoracic Society (ATS) annual conference, Development and Regeneration Mini Symposium, held on May 22 at the San Diego Convention Center, we presented findings on the cellular impact of prenatal heavy metal exposure during airway development.</p>
      <p>Using advanced single-cell multiomics, the study uncovers how toxic exposures disrupt cellular pathways and key regulators critical to lung differentiation and maturation. More details will be published soon.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '04.30.2024',
  },
  {
    tag: 'Symposium',
    title:
      "Hu Presented in 14th Annual Ruesch Center Symposium Highlighting the Exposome's Role in Rising Rates of Early-Onset GI Cancer",
    description:
      'Discussed environmental factors contributing to early-onset GI cancers.',
    content: `
      <p>At the <a href="https://lombardi.georgetown.edu/lombardi-stories/ruesch-center-symposium-focuses-on-early-onset-gi-cancer/">14th Annual Ruesch Center Symposium</a>, nearly 300 experts gathered to discuss emerging insights into gastrointestinal (GI) cancers, with a focus on the troubling increase in early-onset cases.</p>
      <p>During the event, Dr. Hu presented exposome studies exploring environmental and biological factors that may contribute to cancer development in younger populations. A collaborative effort from a Think Tank held at the Symposium underscores the urgency of understanding external influences on cancer risk, with more detailed discussion to be published in a call-to-action paper.</p>
    `,
    authors: [
      {
        name: 'Xin Hu',
        avatar: '/static/images/avatar/hu.jpg',
      },
    ],
    date: '03.03.2024',
  },

  // ... Include all other articles with the 'content' field added
  // Make sure each article has a unique 'content' field with detailed information
];

const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

const ExpandedCardContent = styled(CardContent)(({ theme }) => ({
  '& h2, & h3, & h4': {
    marginTop: theme.spacing(2),
  },
  '& p': {
    marginBottom: theme.spacing(2),
  },
  '& ul': {
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

function Author({ authors,date }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 2,
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
      >
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">{date}</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  date: PropTypes.string,
};

export default function Latest() {
  const [expandedCardIndex, setExpandedCardIndex] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 6;

  const handleCardClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    setExpandedCardIndex(null); // Collapse any expanded card when page changes
  };

  // Pagination logic
  const totalPages = Math.ceil(articleInfo.length / itemsPerPage);
  const displayedArticles = articleInfo.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Latest News
      </Typography>
      <Grid container spacing={2} sx={{ my: 4 }}>
        {displayedArticles.map((article, index) => {
          const globalIndex = (page - 1) * itemsPerPage + index;
          const isExpanded = expandedCardIndex === globalIndex;
          const gridSize = isExpanded ? 12 : { xs: 12, sm: 6, md: 4 };

          return (
            <Grid item xs={12} sm={gridSize.sm} md={gridSize.md} key={globalIndex}>
              <StyledCard
                onClick={() => handleCardClick(globalIndex)}
                sx={{
                  transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: isExpanded ? 4 : 1,
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    {article.tag}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant={isExpanded ? 'h4' : 'h6'}
                    component="div"
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    variant={isExpanded ? 'body1' : 'body2'}
                    color="text.secondary"
                    gutterBottom
                  >
                    {article.description}
                  </Typography>
                  {/* Expanded Content */}
                  <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                    <ExpandedCardContent>
                      <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </ExpandedCardContent>
                  </Collapse>
                  <Author authors={article.authors} date={article.date} />
                </CardContent>
              </StyledCard>
            </Grid>
          );
        })}
      </Grid>
      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
    </div>
  );
}
