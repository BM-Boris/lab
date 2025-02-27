import * as React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  Collapse,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../logo.svg';
import '../App__.css';
import aboutimage from '../imgs/about.webp';
import boris from '../imgs/boris.png';
import jackie from '../imgs/jackie.png';
import lung from '../imgs/lung.png';
import bpd from '../imgs/bpd.png';
import metabolic from '../imgs/metabolic.png';
import cbd from '../imgs/cbd.webp';
import f2 from '../imgs/f2.webp';
import arph from '../imgs/arph.webp';
import xin from '../imgs/xin.png';
import wang from '../imgs/wang.png';



const cardData = [
  // About Section (always expanded)
  {
    category: 'About',
    description: `
    <p>Our Lab is a dynamic team of environmental health scientists 
dedicated to understanding the broad impact of environmental exposures 
on health outcomes across different life stages. With combined expertise in biology, bioinformatics, and chemistry, we 
study how exposures—especially during prenatal development—affect lung development, cellular resilience, and metabolism.</p>
    
    <p>Our research approach integrates traditional scientific methods with advanced multi-omics and computational tools to reveal new biological insights. Since 2023, our Lab has actively participated in multiple projects and grants, focusing on areas such as:</p>
    
    <ul>
        <li><strong>Lung Development Research</strong>: Investigating how environmental factors shape lung health from early stages.</li>
        <li><strong>Omics Data Analysis</strong>: Creating cutting-edge tools to analyze complex data.</li>
        <li><strong>Network Construction</strong>: Building networks to understand the relationships within biological systems.</li>
        <li><strong>Cell Type-Specific Metabolism</strong>: Exploring metabolic changes at the cellular level.</li>
        <li><strong>Exposome Research</strong>: Characterizing exposure profiles at ‘omic scale and the link between early-life exposure and health risk of later-life and future generations.
    </ul>

    <p>Our lab collaborates with leading institutions and industry partners globally, pushing the boundaries of environmental health research.</p>

    <p><strong>Current Opening:</strong> We are seeking a postdoctoral researcher to join our team and contribute to our innovative projects in environmental health science.</p>
 `,
    image: aboutimage,
  },
  // People (added more entries)
  {
    category: 'People',
    name: 'Xin Hu',
    role: 'Principal Investigator/Assistant Professor',
    bio: 'Expert in toxicology with over 10 years of experience.',
    image: xin,
    details: `
      <p>Affiliations in Emory: Dept. of Environmental Health, Pulmonary Division, Winship, Graduate programs (Biochemistry, cell development and biology;</p>
      <p>Academic training/interest: Toxicology, Developmental Biology, Multi-Omics Methods</p>
      <p>Alternate reality career: Writer or some sort of critic for murder mystery books</p>
 `,
  },
  
  {
    category: 'People',
    name: 'Boris Minasenko',
    role: 'Sr. Bioinformatics Analyst',
    bio: 'Bioinformatics trailblazer, exploring new methods to advance science.',
    image: boris,
    details: `
      <p>Academic training/interest: Toxicology, Bioinformatics, Applied Mathematics</p>
      <p>Alternate reality career: Ski Coach</p>
 `,
  },
  {
    category: 'People',
    name: 'Dongxue Wang',
    role: 'Associate Research Scientist',
    bio: 'Provides innovative wet lab experiments and data analysis.',
    image: wang,
    details: `
      <p>Academic training/interest:  Biochemistry and Cell Biology</p>
      <p>Alternate reality career: School teacher</p>
    `,
  },
  {
    category: 'People',
    name: 'Jackie Korn',
    role: 'Undergraduate researcher',
    bio: 'Aspiring Physician-Scientists.',
    image: jackie,
    details: `
      <p>Alternate reality career: CIA Agent</p>
    `,
  },
  
  // Projects (added more entries)
  {
    category: 'Projects',
    title: 'Lung development and prenatal heavy metal exposure',
    image: lung,
    details: `
      <p>Exposure to heavy metals through food and water is common and has been linked to asthma and other respiratory disease. It is a major public health concern, especially for pregnant women and developing children. We are interested in how heavy metal exposure during pregnancy affects lung development. This project uses novel experimental models, such as mouse embryonic lungs, human iPSC organoids and employ cutting edge single-cell technologies and metabolomics to gain a comprehensive molecular view of the impact and health risks.</p>
      <p>Funding: NIH R01 2023-2027</p>
      `,
  },
  {
    category: 'Projects',
    title: 'BPD (bronchopulmonary dysplasia) and prenatal exposure',
    image: bpd,
    details: `
      <p>BPD is the most common complication of preterm birth and high mortality and increased risks of long-term respiratory conditions. The etiology of this complex disease is largely unknown especially regarding the environmental contributors. This project tests the association between BPD development and prenatal/early postnatal environmental chemical exposure, using human postmortem lung tissue and iPSC organoid models.</p>
      <p>Funding: HERCULES center pilot grogram 2024-2025</p>
    `,
  },
  {
    category: 'Projects',
    title: 'Metabolism of the lung',
    image: metabolic,
    details: `
      <p>Metabolism is a fundamental function of biological systems. It varies across different cell types and readily responds to environmental stimulus. In this project, we employ stable isotopic tracers to understand how the metabolism in different lung cell types is rewired to adapt to environmental cues.
      </p>
    `,
  },
  // Additional project entries
  {
    category: 'Projects',
    title: 'Personal care products, CBD and endocrine disruptors',
    image: cbd,
    details: `
      <p>With the growing popularity of CBD products, especially in personal care products, there are increasing concerns about the safety and purity of these products. CBD is often extracted from hemp, which can absorb harmful substances like pesticides and heavy metals from the environment. This project aims to analyze and compare plant-derived and synthetic CBD in cosmetics to identify any contaminants and understand potential health risks. Using advanced technology, we will measure hundreds of chemicals and assess their effects, helping to improve safety standards and protect consumers.</p>
    `,
  },
  {
    category: 'Projects',
    title: 'Transgenerational effects down the paternal and maternal lines',
    image: f2,
    details: `
      <p>Transgenerational effects are non-genetic environmental influences passed from ancestors to offspring, causing phenotypic variation without changes to DNA sequences. This project explores how environmental factors experienced by grandparents (F0 generation) might influence their daughters (F1) and granddaughters (F2), even without genetic changes. We use metabolomics to reveal how each lineage impacts F1 and F2.</p>
    `,
  },

  {
    category: 'Projects',
    title: 'Individualized pharma-genome and exposome',
    image: arph,
    details: `
      <p>IndiPHARM (Individual metabolome and exposome assessment for pharmaceutical optimization) is a Columbia University-led multicenter research effort, aiming to develop a system to optimize therapeutic efficacy, supported by $39.5 million funding. The Hu Lab aims to integrate molecular and clinical measurements to understand the mechanisms driving individual drug responses. By analyzing interactions within the exposome, metabolome, and pharmacokinetics, the team will identify key biological players impacting drug reactions and predict personalized drug outcomes.</p>
      <p>Funding: ARPA-H (IndiPHARM)</p>
    `,
  },
  // Publications (added more entries)
  // 2025 Publications
  {
    category: 'Publications',
    title:
      'Rethinking the rise of early onset gastrointestinal cancers: a call to action.',
    authors: [
      'Weinberg BA',
      'Murphy CC',
      'Freyer DR',
      'Greathouse KL',
      'Blancato JK',
      'Stoffel EM',
      'Drewes JL',
      'Blaes A',
      'Salsman JM',
      'You YN',
      'Arem H',
      'Mukherji R',
      'Kanth P',
      'Hu X',
      'Fabrizio A',
      'Hartley ML',
      'Giannakis M',
      'Marshall JL'
    ],
    date: '2025',
    abstract: '',
    details: `
      <p>Published in <em>JNCI Cancer Spectr</em>, 2025 Jan 15:pkaf002.</p>
      <p>DOI: 10.1093/jncics/pkaf002</p>
      <p>Epub ahead of print. PMID: 39814070.</p>
    `,
  },
  // 2024 Publications
  {
    category: 'Publications',
    title:
      'Pyrimidine Biosynthesis in Branching Morphogenesis Defects Induced by Prenatal Heavy Metal Exposure',
    authors: [
      'Wongtrakool C',
      'Ma J',
      'Jarrell ZR',
      'Liu KH',
      'Orr M',
      'Tran V',
      'Gauthier TW',
      'Marsit CJ',
      'Jones DP',
      'Go YM',
      'Hu X*',
    ],
    date: '2024',
    abstract: '',
    details: `
      <p>Published in <em>American Journal of Respiratory Cell and Molecular Biology</em>, 2024.</p>
      <p><a href="https://doi.org/10.1165/rcmb.2024-0123LE">DOI Link</a></p>
      <p><a href="https://www.atsjournals.org/doi/10.1165/rcmb.2024-0123LE?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed">Full Text Link</a></p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Interactions of Polychlorinated Biphenyls and Their Metabolites with the Brain and Liver Transcriptome of Female Mice',
    authors: [
      'Bullert AJ',
      'Wang H',
      'Valenzuela AE',
      'Neier K',
      'Wilson RJ',
      'Badley JR',
      'LaSalle JM',
      'Hu X',
      'Lein PJ',
      'Lehmler HJ',
    ],
    date: '2024',
    abstract: '',
    details: `
      <p>Published in <em>ACS Chemical Neuroscience</em>.</p>
      <p>DOI: <a href="https://doi.org/10.1021/acschemneuro.4c00367">10.1021/acschemneuro.4c00367</a></p>
    `,
  },
  {
    category: 'Publications',
    title:
      'A Pilot Metabolomics Study Across the Continuum of Interstitial Lung Disease Fibrosis Severity',
    authors: [
      'Zhan J',
      'Jarrell ZR',
      'Hu X',
      'Weinberg J',
      'Orr M',
      'Marts L',
      'Jones DP',
      'Go YM',
    ],
    date: '2024-10',
    abstract: '',
    details: `
      <p>Published in <em>Physiological Reports</em>, Oct 2024;12(20):e70093.</p>
      <p>DOI: <a href="https://doi.org/10.14814/phy2.70093">10.14814/phy2.70093</a></p>
      <p>PMID: 39424430; PMCID: PMC11489002</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'High-Resolution Mass Spectrometry for Human Exposomics: Expanding Chemical Space Coverage',
    authors: [
      'Lai Y',
      'Koelmel JP',
      'Walker DI',
      'Price EJ',
      'Papazian S',
      'Manz KE',
      // ... (additional authors)
      'Hu X',
      // ... (remaining authors)
      'Pennell KD',
      'Jones DP',
      'Miller GW',
    ],
    date: '2024-07-10',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Science & Technology</em>.</p>
      <p>DOI: <a href="https://doi.org/10.1021/acs.est.4c01156">10.1021/acs.est.4c01156</a></p>
      <p>Epub ahead of print.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Postprandial Metabolite Profiles and Risk of Prediabetes in Young People: A Longitudinal Multicohort Study',
    authors: [
      'Goodrich JA',
      'Wang H',
      'Walker DI',
      'Lin X',
      'Hu X',
      'Alderete TL',
      'Chen Z',
      'Valvi D',
      'Baumert BO',
      'Rock S',
      'Berhane K',
      'Gilliland FD',
      'Goran MI',
      'Jones DP',
      'Conti DV',
      'Chatzi L',
    ],
    date: '2024',
    abstract: '',
    details: `
      <p>Published in <em>Diabetes Care</em>, 47(1):151-159.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Human Milk Composition is Associated with Maternal Body Mass Index in a Cross-Sectional, Untargeted Metabolomics Analysis of Human Milk from Guatemalan Mothers',
    authors: [
      'Sivalogan K',
      'Liang D',
      'Accardi C',
      'Diaz-Artiga A',
      'Hu X',
      'Mollinedo E',
      'Ramakrishnan U',
      'Teeny SN',
      'Tran V',
      'Clasen TF',
      'Thompson LM',
      'Sinharoy S',
    ],
    date: '2024',
    abstract: '',
    details: `
      <p>Published in <em>Current Developments in Nutrition</em>, 8(5):102144.</p>
    `,
  },
  // 2023 Publications
  {
    category: 'Publications',
    title:
      'Blood and Urinary Metal Levels Among Exclusive Marijuana Users in NHANES (2005-2018)',
    authors: [
      'McGraw KE',
      'Nigra AE',
      'Klett Joshua',
      'Sobel M',
      'Oelsner EC',
      'Navas-Acien A',
      'Hu X',
      'Sanchez TR',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Health Perspectives</em>.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Discovery of Phytochelatins in Human Urine: Evidence for Function in Selenium Disposition and Protection Against Cadmium',
    authors: [
      'Jarrell ZR',
      'Liu KH',
      'Dennis KK',
      'Hu X',
      'Martin GS',
      'Jones DP',
      'Go YM',
    ],
    date: '2023-09',
    abstract: '',
    details: `
      <p>Published in <em>FASEB BioAdvances</em>, Sep;5(9):367–375.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Paired ATAC- and RNA-seq Offer Insight into the Impact of HIV on Alveolar Macrophages: A Pilot Study',
    authors: [
      'Staitieh BS',
      'Hu X',
      'Yeligar SM',
      'Auld SC',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Scientific Reports</em>, 13:15276.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'AMPK Activator-Treated Human Cardiac Spheres Enhance Maturation and Enable Pathological Modeling',
    authors: [
      'Li D',
      'Armand LC',
      'Sun F',
      'Hwang H',
      'Wolfson D',
      'Rampoldi A',
      'Liu R',
      'Forghani P',
      'Hu X',
      'Yu WM',
      'Qu CK',
      'Jones DP',
      'Wu RW',
      'Cho HC',
      'Maxwell J',
      'Xu C',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Stem Cell Research & Therapy</em>, 14:322.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Blood and Urinary Metal Levels Among Exclusive Marijuana Users in NHANES (2005-2018)',
    authors: [
      'McGraw KE',
      'Nigra AE',
      'Klett Joshua',
      'Sobel M',
      'Oelsner EC',
      'Navas-Acien A',
      'Hu X',
      'Sanchez TR',
    ],
    date: '2023-08',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Health Perspectives</em>, Aug;131(8):87019.</p>
      <p>Relative Citation Ratio (RCR): 2.47</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Low-Dose Vanadium Pentoxide Perturbed Lung Metabolism Associated with Inflammation and Fibrosis Signaling in Male Animal and In Vitro Models',
    authors: [
      'He X',
      'Jarrell ZR',
      'Smith MR',
      'Tran V',
      'Hu X',
      'Sueblinvong V',
      'Liang Y',
      'Orr M',
      'Go YM',
      'Jones DP',
    ],
    date: '2023-08-01',
    abstract: '',
    details: `
      <p>Published in <em>American Journal of Physiology-Lung Cellular and Molecular Physiology</em>, Aug 1;325(2):L215-L232.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Antagonistic Interactions in Mitochondria ROS Signaling Responses to Manganese',
    authors: [
      'Fernandes J',
      'Uppal K',
      'Liu KH',
      'Hu X',
      'Orr M',
      'Tran V',
      'Go YM',
      'Jones DP',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Antioxidants</em>, 12(4), 804.</p>
      <p>RCR: 3.98</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'PISTACHIo (PreemptIon of diSrupTive behAvior in CHIldren): Real-Time Monitoring of Sleep and Behavior of Children 3–7 Years Old Receiving Parent–Child Interaction Therapy Augment with Artificial Intelligence — The Study Protocol, Pilot Study',
    authors: [
      'Saliba M',
      'Drapeau N',
      'Skime M',
      'Hu X',
      'Accardi CJ',
      'Athreya AP',
      'Kolacz J',
      'Shekunov J',
      'Jones DP',
      'Croarkin PE',
      'Romanowicz M',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Pilot and Feasibility Studies</em>, 9:23.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Environmental Chemicals and Their Association with Hyperparathyroidism',
    authors: [
      'McMullin JL',
      'Codner J',
      'Patel SG',
      'Sharma J',
      'Hu X',
      'Jones DP',
      'Weber CJ',
      'Saunders ND',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>World Journal of Surgery</em>, 47:296–303.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Environmental Chemicals and Endogenous Metabolites in Bile of USA and Norway Patients with Primary Sclerosing Cholangitis',
    authors: [
      'Grant CW',
      'Juran BD',
      'Ali AH',
      'Schlicht EM',
      'Bianchi JK',
      'Hu X',
      'Liang Y',
      'Jarrell Z',
      'Liu KH',
      'Go YM',
      'Jones DP',
      'Walker DI',
      'Miller GW',
      'Folseraas T',
      'Karlsen TH',
      'LaRusso NF',
      'Gores GJ',
      'Athreya AP',
      'Lazaridis KN',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Exposome</em>, 3(1), osac011.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Chronic Ethanol Exposure Induces Mitochondrial Dysfunction and Alters Gene Expression and Metabolism in Human Cardiac Spheroids',
    authors: [
      'Hwang H',
      'Liu R',
      'Eldridge R',
      'Hu X',
      'Forghani P',
      'Jones DP',
      'Xu C',
    ],
    date: '2023-02-17',
    abstract: '',
    details: `
      <p>Published in <em>Alcoholism: Clinical and Experimental Research</em>, February 17, 2023.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Study on the Relationship Between Selenium and Cadmium in Diseased Human Lungs',
    authors: [
      'Smith MR',
      'Hu X',
      'Jarrell ZR',
      'He X',
      'Orr M',
      'Fernandes J',
      'Chandler JD',
      'Walker DI',
      'Esper A',
      'Marts L',
      'Neujahr DC',
      'Jones DP',
      'Go YM',
    ],
    date: '2023',
    abstract: '',
    details: `
      <p>Published in <em>Advances in Redox Research</em>, 7:100065.</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Metabolic Signatures of Youth Exposure to Mixtures of Per-and Polyfluoroalkyl Substances: A Multi-Cohort Study',
    authors: [
      'Goodrich JA',
      'Walker DI',
      'He J',
      'Lin X',
      'Baumert BO',
      'Hu X',
      'Alderete TL',
      'Chen Z',
      'Valvi D',
      'Fuentes ZC',
      'Rock S',
      'Wang H',
      'Berhane K',
      'Gilliland FD',
      'Goran MI',
      'Jones DP',
      'Conti DV',
      'Chatzi L',
    ],
    date: '2023-02-22',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Health Perspectives</em>, February 22, 2023; CID: 027005.</p>
      <p>RCR: 8.42</p>
    `,
  },
  // 2022 Publications
  {
    category: 'Publications',
    title:
      'Multiomics Analysis of Structural Magnetic Resonance Imaging of the Brain and Cerebrospinal Fluid Metabolomics in Cognitively Normal and Impaired Adults',
    authors: [
      'Eldridge RC',
      'Uppal K',
      'Shokouhi M',
      'Smith MR',
      'Hu X',
      'Qin ZS',
      'Jones DP',
      'Hajjar I',
    ],
    date: '2022',
    abstract: '',
    details: `
      <p>Published in <em>Frontiers in Aging Neuroscience</em>, 13:796067.</p>
      <p>DOI: <a href="https://doi.org/10.3389/fnagi.2021.796067">10.3389/fnagi.2021.796067</a></p>
      <p>RCR: 0.40</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Evaluation of the Use of Saliva Metabolome as a Surrogate of Blood Metabolome in Assessing Internal Exposures to Traffic-Related Air Pollution',
    authors: [
      'Li Z',
      'Sarnat JA',
      'Liu K',
      'Hood R',
      'Chang CJ',
      'Hu X',
      'Tran V',
      'Greenwald R',
      'Chang H',
      'Russell AG',
      'Yu T',
      'Jones DP',
      'Liang D',
    ],
    date: '2022',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Science & Technology</em>, 56(10):6525.</p>
      <p>RCR: 1.97</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Plasma Concentrations of Lipophilic Persistent Organic Pollutants and Glucose Homeostasis in Youth Populations',
    authors: [
      'Baumert B',
      'Goodrich JA',
      'Hu X',
      'Walker DI',
      'Alderete TL',
      'Chen Z',
      'Valvi D',
      'Rock S',
      'Berhane K',
      'Gilliland FD',
      'Goran MI',
      'Jones DP',
      'Conti DV',
      'Chatzi L',
    ],
    date: '2022',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Research</em>, 212:113296.</p>
      <p>RCR: 2.79</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Low Dose Cadmium Potentiates Metabolic Reprogramming Following Early-Life Respiratory Syncytial Virus Infection',
    authors: [
      'Jarrell ZR',
      'Smith MR',
      'Kim KH',
      'Lee Y',
      'Hu X',
      'He X',
      'Orr M',
      'Chen Y',
      'Kang SM',
      'Jones DP',
      'Go YM',
    ],
    date: '2022',
    abstract: '',
    details: `
      <p>Published in <em>Toxicological Sciences</em>, 188(1), 62-74.</p>
      <p>RCR: 2.04</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'An Actionable Annotation Scoring Framework for Gas Chromatography – High Resolution Mass Spectrometry (GC-HRMS)',
    authors: [
      'Koelmel J',
      'Xie H',
      'Price E',
      'Lin E',
      'Manz K',
      'Stelben P',
      'Paige M',
      'Papazian S',
      'Okeme J',
      'Jones DP',
      'Bowden J',
      'Barupal D',
      'Rostkowski P',
      'Pennell K',
      'Nikiforov V',
      'Wang T',
      'Hu X',
      'Lai Y',
      'Miller G',
      'Walker DI',
      'Martin J',
      'Pollitt K',
    ],
    date: '2022',
    abstract: '',
    details: `
      <p>Published in <em>Exposome</em>, 2(1), osac007.</p>
      <p>RCR: 2.92</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Haemophilus ducreyi Infection Induces Oxidative Stress, Central Metabolic Changes, and a Mixed Pro- and Anti-inflammatory Environment in the Human Host',
    authors: [
      'Brothwell JA',
      'Fortney KR',
      'Gao H',
      'Wilson LS',
      'Andrews CF',
      'Tran TM',
      'Hu X',
      'Batteiger TA',
      'Barnes S',
      'Liu Y',
      'Spinola SM',
    ],
    date: '2022',
    abstract: '',
    details: `
      <p>Published in <em>mBio</em>, Vol. 13, No. 6.</p>
      <p>RCR: 0.28</p>
    `,
  },
  // 2021 Publications
  {
    category: 'Publications',
    title:
      'Environmental chemicals and metabolic disruption in primary and secondary human parathyroid tumors',
    authors: [
      'Hu X',
      'Saunders N',
      'Safley S',
      'Smith MR',
      'Liang Y',
      'Tran V',
      'Sharma J',
      'Jones DP',
      'Weber CJ',
    ],
    date: '2021-01',
    abstract: '',
    details: `
      <p>Published in <em>Surgery</em>, Jan 2021;169(1):102-108.</p>
      <p>Relative Citation Ratio (RCR): 0.87</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'An atlas of metallome and metabolome interactions and associations with incident diabetes in the Strong Heart family study',
    authors: [
      'Sanchez TR*',
      'Hu X*',
      'Zhao J',
      'Tran VL',
      'Loiacono N',
      'Go YM',
      'Goessler W',
      'Cole S',
      'Umans J',
      'Jones DP',
      'Navas-Acien A',
      'Uppal K',
    ],
    date: '2021',
    abstract: '',
    details: `
      <p>Published in <em>Environment International</em>, 2021;157:106810.</p>
      <p>Article was featured by National Institute of Environmental Health Sciences on NIEHS Environmental Factor Website.</p>
      <p>Relative Citation Ratio (RCR): 2.29</p>
      <p><em>*Equal contribution</em></p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Plasma metabolic phenotypes of HPV-associated vs smoking-associated head and neck cancer and patient survival',
    authors: [
      'Eldridge RC',
      'Uppal K',
      'Hayes DN',
      'Smith MR',
      'Hu X',
      'Qin ZS',
      'Beitler JJ',
      'Miller AH',
      'Wommack EC',
      'Higgins KA',
      'Shin DM',
      'Ulrich BC',
      'Qian DC',
      'Saba NF',
      'Bruner DW',
      'Jones DP',
      'Xiao C',
    ],
    date: '2021-10',
    abstract: '',
    details: `
      <p>Published in <em>Cancer Epidemiology, Biomarkers & Prevention</em>, Oct 2021;30(10):1858-1866.</p>
      <p>Relative Citation Ratio (RCR): 0.52</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Exposure to perfluoroalkyl substances and glucose homeostasis in youth',
    authors: [
      'Goodrich JA',
      'Alderete TL',
      'Berhane K',
      'Chen Z',
      'Gilliland FD',
      'Goran ML',
      'Hu X',
      'Jones DP',
      'Margetaki K',
      'Stratakis',
      'Valvi D',
      'Walker DL',
      'Conti DV',
      'Chatzi L',
    ],
    date: '2021-09-01',
    abstract: '',
    details: `
      <p>Published in <em>Environmental Health Perspectives</em>, Sep 1, 2021;129(9):097002.</p>
      <p>Relative Citation Ratio (RCR): 2.09</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'A scalable workflow to characterize the human exposome',
    authors: [
      'Hu X',
      'Walker DI',
      'Liang Y',
      'Smith MR',
      'Orr ML',
      'Juran BD',
      'Ma C',
      'Uppal K',
      'Koval M',
      'Martin GS',
      'Neujahr DC',
      'Marsit CJ',
      'Go YM',
      'Pennell K',
      'Miller GW',
      'Lazaridis KN',
      'Jones DP',
    ],
    date: '2021-09-22',
    abstract: '',
    details: `
      <p>Published in <em>Nature Communications</em>, Sep 22, 2021;12(1):5575.</p>
      <p>Article was featured by National Institute of Environmental Health Sciences on NIEHS Environmental Factor Website.</p>
      <p>Relative Citation Ratio (RCR): 3.68</p>
    `,
  },
  {
    category: 'Publications',
    title:
      'Microbial metabolite delta-valerobetaine is a diet-dependent obesogen',
    authors: [
      'Liu KH',
      'Saeedi B',
      'Owens JA',
      'Cioffi C',
      'Bellissimo MP',
      'Naudin C',
      'Darby T',
      'Druzak S',
      'Maner-Smith K',
      'Orr M',
      'Hu X',
      'Fernandes J',
      'Camacho MC',
      'Hunter-Chang S',
      'van Insberghe D',
      'Ma C',
      'Ganesh T',
      'Yeligar S',
      'Uppal K',
      'Go YM',
      'Alvarez JA',
      'Vos MB',
      'Ziegler TR',
      'Jones RM',
      'Ortlund E',
      'Neish AS',
      'Jones DP',
    ],
    date: '2021',
    abstract: '',
    details: `
      <p>Published in <em>Nature Metabolism</em>, 2021;3:1694–1705.</p>
      <p>Relative Citation Ratio (RCR): 2.60</p>
    `,
  },

];

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  transition: 'all 0.3s ease',
}));

const ExpandedCardContent = styled(CardContent)(({ theme }) => ({
  '& h2, & h3, & h4': {
    marginTop: theme.spacing(2),
  },
  '& p': {
    marginBottom: theme.spacing(1),
  },
  '& ul': {
    paddingLeft: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
}));

export default function MainContent() {
  const [selectedCategory, setSelectedCategory] = React.useState('About');
  const [expandedCardIndex, setExpandedCardIndex] = React.useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setExpandedCardIndex(null); // Reset expanded card when category changes
  };

  const handleCardClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  // Filter cards based on selected category
  const filteredCards = cardData.filter((card) => card.category === selectedCategory);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
  {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Text content on the left */}
        <div>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <span style={{ marginRight: '23px' }}>Xin Hu</span>
          <span>Lab</span>
        </Typography>
          <Typography variant="h3" gutterBottom>
            {selectedCategory}
          </Typography>
          <Typography variant="h5">
            {selectedCategory === 'About' && 'Learn more about our lab and research.'}
            {selectedCategory === 'People' && 'Meet our team members:'+ '\u00A0\u00A0\u00A0\u00A0\u00A0'}
            {selectedCategory === 'Projects' && 'Explore our ongoing projects.'}
            {selectedCategory === 'Publications' && 'Read our latest publications.'}
          </Typography>
        </div>
        {/* Image on the right */}
        <img
          src={logo} // Replace with your image or GIF URL
          className="App-logo"
          alt="logo"
          style={{ width: '30%',maxWidth: '240px',minWidth: '120px',      // Adjust this percentage to control responsiveness
                  height: 'auto', marginLeft: '-11px',
          }}
        />
        
      </div>


      
      {/* Categories */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
        
        }}
      >
        {['About', 'People', 'Projects', 'Publications'].map((category) => (
          <Chip
            key={category}
            onClick={() => handleCategoryClick(category)}
            size="medium"
            label={category}
            color={selectedCategory === category ? 'primary' : 'default'}
            sx={{
              fontSize: '1.1rem',       // Increase font size
              
            }}
          />
        ))}
      </Box>
      {/* Content */}
      {selectedCategory === 'About' ? (
        <StyledCard sx={{ boxShadow: 1 }}>
          {filteredCards[0].image && (
            <CardMedia
              component="img"
              image={filteredCards[0].image}
              alt={filteredCards[0].title}
              sx={{ height: 300 }}
            />
          )}
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {filteredCards[0].title}
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: filteredCards[0].description }}
            />
          </CardContent>
        </StyledCard>
      ) : (
        <Grid container spacing={2}>
          {filteredCards.map((item, index) => {
            const isExpanded = expandedCardIndex === index;
            // Updated gridSize calculation
            const gridSize = isExpanded
              ? { xs: 12, sm: 12, md: 12 }
              : { xs: 12, sm: 6, md: 4 };

            return (
              <Grid item {...gridSize} key={index}>
                <StyledCard
                  onClick={() => handleCardClick(index)}
                  sx={{
                    transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isExpanded ? 4 : 1,
                    cursor: isExpanded ? 'default' : 'pointer',
                  }}
                >
                  {/* Card Media */}
                  {item.image && (
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.title || item.name}
                      sx={{ height: isExpanded ? 300 : 200 }}
                    />
                  )}
                  {/* Card Content */}
                  <CardContent>
                    <Typography variant={isExpanded ? 'h4' : 'h6'} gutterBottom>
                      {item.title || item.name}
                    </Typography>
                    {item.role && (
                      <Typography variant="subtitle1" color="text.primary" gutterBottom>
                        {item.role}
                      </Typography>
                    )}
                    <Typography
                      variant={isExpanded ? 'body1' : 'body2'}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.bio || item.description || item.authors && `${item.authors.join(', ')}${item.date ? `, ${item.date}` : ''}`}
                    </Typography>
                    {/* Expanded Content */}
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                      <ExpandedCardContent>
                        <div dangerouslySetInnerHTML={{ __html: item.details }} />
                      </ExpandedCardContent>
                    </Collapse>
                  </CardContent>
                </StyledCard>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}