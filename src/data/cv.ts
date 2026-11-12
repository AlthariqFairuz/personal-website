// All content is sourced from the CV (public/cv-muhammad-al-thariq-fairuz.pdf).
// Edit this file to update the site.

export interface Link {
  label: string;
  href: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights?: string[];
  tech: string[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
}

export interface Publication {
  title: string;
  kind: 'Conference Paper' | 'Software Copyright';
  date: string;
  authors: string;
  venue: string;
  description: string;
  points: string[];
  metrics: { value: string; label: string }[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  detail: string;
  thesis: string;
}

export const profile = {
  name: 'Muhammad Al Thariq Fairuz',
  shortName: 'Al Thariq',
  role: 'Machine Learning Engineer',
  location: 'Jakarta, Indonesia',
  email: 'althariqfairuz273@gmail.com',
  phone: '+62 813 7488 4029',
  tagline:
    'I research and build machine learning systems, from reinforcement learning for markets to computer vision for disaster recovery.',
  // Hero intro. Text in [brackets] is highlighted in the accent color.
  intro:
    "I'm an [Informatics Engineering] graduate (cum laude) from [Institut Teknologi Bandung], working as an [AI Engineer] at [Juxtalabs] and a [Research Assistant] at ITB. I build machine learning systems across the full lifecycle, from [reinforcement learning] research presented at [IEEE ICAICTA 2026] to AI products shipped in production.",
  summary: [
    'Informatics Engineering graduate (cum laude, GPA 3.6/4.0) from Institut Teknologi Bandung with hands-on experience in machine learning research and in deploying AI systems in practice.',
    'I presented research at IEEE ICAICTA 2026 and have worked on ML for real-world engineering problems in a cross-disciplinary team. My work spans the full ML lifecycle, from data preparation and modelling to building and shipping working applications.',
    'I am looking to contribute to research or industry teams where machine learning is used to solve meaningful, data-driven problems.',
  ],
  cv: '/cv-muhammad-al-thariq-fairuz.pdf',
  // First role (AI Lab Assistant, ITB). Used to compute years of experience.
  careerStart: new Date('2024-09-01'),
};

export const socials: Link[] = [
  { label: 'GitHub', href: 'https://github.com/althariqfairuz' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-althariq-fairuz-10503a247/',
  },
  { label: 'Email', href: 'mailto:althariqfairuz273@gmail.com' },
];

export const experiences: Experience[] = [
  {
    company: 'Juxtalabs',
    role: 'AI Engineer',
    period: 'Apr 2026 — Present',
    summary:
      "Deployed as part of a 3-person engineering team to optimize Bank Mega's telemarketing QC platform, building an automated system to assess and score sales agents' performance.",
    highlights: [
      'Reduced data processing latency by up to 98%.',
      'Streamlined the QA workflow to handle high daily volumes of sales calls with near-zero manual intervention.',
    ],
    tech: ['Python', 'OpenAI', 'PostgreSQL', 'Redis', 'MinIO', 'RAG'],
  },
  {
    company: 'Institut Teknologi Bandung',
    role: 'Research Assistant',
    period: 'Apr 2026 — Present',
    summary:
      'Developed computer vision models to detect and classify road damage in satellite and aerial imagery for post-disaster road network restoration planning, in collaboration with civil engineering researchers at ITB and ITERA.',
    tech: ['PyTorch', 'Hugging Face', 'Python', 'QGIS', 'Computer Vision'],
  },
  {
    company: 'PT Bati Investasi Teknologi',
    role: 'AI Software Engineer',
    period: 'Oct 2025 — Jan 2026',
    summary:
      'Collaborated with the engineering team to develop and maintain scalable software solutions with high code quality and performance. Architected and developed a RAG chatbot to enhance data retrieval capabilities.',
    tech: ['FastAPI', 'TypeScript', 'PostgreSQL', 'Qdrant', 'RAG'],
  },
  {
    company: 'PT Kilang Pertamina Internasional',
    role: 'AI Engineer',
    period: 'Jul 2025 — Sep 2025',
    summary:
      'Developed proof-of-concept models for equipment predictive maintenance using limited data, and delivered the results through an ASP.NET interface for end users.',
    highlights: [
      'Autoencoder-based anomaly detector with F1-score above 0.75.',
      'Forecasting model built on Amazon Chronos with WAPE below 8%.',
    ],
    tech: ['TensorFlow', 'Deep Learning', 'C#', 'ASP.NET', 'MongoDB'],
  },
  {
    company: 'Institut Teknologi Bandung',
    role: 'Artificial Intelligence Lab Assistant',
    period: 'Sep 2024 — Jun 2026',
    summary:
      'Mentored undergraduate students and collaborated with professors to redesign practical assignments across three computer science courses: Computational Logic, Artificial Intelligence, and Machine Learning.',
    tech: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Jupyter'],
  },
];

export const publications: Publication[] = [
  {
    kind: 'Conference Paper',
    title:
      'Multi-Agent Reinforcement Learning for Portfolio Management on the Indonesia Stock Exchange: A Microstructure-Aware Ablation Study',
    date: 'Oct 2026',
    authors: 'Muhammad Al Thariq Fairuz, Dody Dharma',
    venue: 'Presented at IEEE ICAICTA 2026, Malaysia',
    description:
      'A multi-agent reinforcement learning system for portfolio management on the Indonesia Stock Exchange, trained and evaluated inside a market simulator that models real IDX trading rules. Developed from my undergraduate thesis.',
    points: [
      'Universe of 53 Indonesian stocks on 5-minute data.',
      'Five SAC agents blended through a PPO meta-controller.',
      'Simulator of IDX microstructure: ARA/ARB price limits, asymmetric transaction costs, and lot sizes.',
      'Ablations showed the gains come from policy diversification rather than learned regime adaptation.',
    ],
    metrics: [
      { value: '+7.23%', label: 'Return over 11 walk-forward windows, vs LQ45 at −12.89%' },
      { value: '−19.11%', label: 'Loss on a bear-market holdout, vs LQ45 at −23.22%' },
    ],
  },
  {
    kind: 'Software Copyright',
    title: 'RestoraX',
    date: 'Oct 2026',
    authors: 'M. A. Fairuz, R. Verdian, D. Dharma, F. Zukhruf, et al.',
    venue: 'Copyright holder: Institut Teknologi Bandung · Ministry of Law, Republic of Indonesia',
    description:
      'Computer vision models that detect and classify road damage from satellite and aerial imagery, supporting post-disaster road network restoration planning.',
    points: [
      'Detection and classification of road damage from satellite and aerial imagery.',
      'Built to support restoration planning of road networks after disasters.',
      'Cross-disciplinary collaboration with civil engineering researchers at ITB and ITERA.',
    ],
    metrics: [
      { value: '001514719', label: 'Computer-program copyright registration number' },
      { value: 'ITB × ITERA', label: 'Joint research with civil engineering' },
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Finalist',
    event: 'HACKaSTONE 2026',
    date: 'Oct 2026',
    description:
      'Built an agentic AI learning platform for deaf and hard-of-hearing learners, with real-time sign-language scoring, a two-way sign/speech translation bridge with a 3D signing avatar, and AI-generated accessible lessons and quizzes. Selected for the final round in Amsterdam.',
  },
  {
    title: '1st Place',
    event: 'Gunadarma Code Week 2026',
    date: 'Jun 2026',
    description:
      'Developed Tukangin, an AI-powered home service platform that connects customers with trusted skilled workers for home repair and maintenance.',
  },
  {
    title: 'Innovation Award',
    event: 'BRICS Industrial Innovation Contest 2026',
    date: 'May 2026',
    description:
      'Received the Innovation Award for developing SEAGuard, AI-driven intelligence for regional safety.',
  },
  {
    title: '1st Honorable Mention',
    event: 'Dinus Application Competition 2026',
    date: 'Jan 2026',
    description:
      'Placed 4th at the 12-hour DINACOM 2026 hackathon with SahabatGuru, a teacher assistant platform that automates exam creation, helps design learning materials and lesson plans (RPP), proctors exams, and analyzes student performance.',
  },
];

export const education: Education = {
  school: 'Institut Teknologi Bandung',
  degree: 'B.Eng. in Informatics Engineering',
  period: '2022 — 2026',
  detail: 'Cum Laude · GPA 3.6 / 4.0',
  thesis:
    'Multi-Agent Reinforcement Learning for Portfolio Management on the Indonesia Stock Exchange with Market Microstructure Modeling (Advisor: Dody Dharma)',
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Machine Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'Scikit-learn',
      'Reinforcement Learning',
      'Computer Vision',
      'Time-series Forecasting',
    ],
  },
  {
    group: 'AI Engineering',
    items: ['RAG', 'OpenAI', 'Qdrant', 'Agentic AI'],
  },
  {
    group: 'Languages & Frameworks',
    items: ['Python', 'TypeScript', 'C#', 'FastAPI', 'ASP.NET'],
  },
  {
    group: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'MinIO', 'QGIS'],
  },
  {
    group: 'Data Science Tools',
    items: ['Jupyter Notebook', 'Matplotlib', 'Seaborn'],
  },
];
