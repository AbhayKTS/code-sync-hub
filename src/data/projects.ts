import { Rocket, Globe, Shield, Zap, Code, Bot, TrendingUp, Users, HeartPulse, Search } from 'lucide-react';

export interface Project {
    title: string;
    description: string;
    longDescription?: string[];
    tech: string[];
    image?: string;
    github?: string;
    live?: string;
    status?: string;
    icon: any;
    rank: string;
    rankLabel: string;
    category: 'startup' | 'project';
    date: string;
}

export const projects: Project[] = [
    {
        title: 'ALMADOX',
        description: 'Founder - Early-stage Education × Web3 Startup. Architected a Polygon-based SBT identity system.',
        longDescription: [
            'Architected a Polygon-based SBT identity system to securely store and verify 100% of students academic records, eliminating credential fraud.',
            'Engineered smart-contract workflows automating 40–60% of credential validation, reducing manual review time by 3+ hours per student.',
            'Designed a student ecosystem with MicroGigs platform supporting 10+ task categories and marketplace planned for 50–100 peer exchanges, enabling peer-to-peer skill monetization.'
        ],
        tech: ['Polygon', 'SBT', 'Solidity', 'Web3'],
        image: '/almadox.png',
        status: 'Active',
        icon: Zap,
        rank: 'SSS',
        rankLabel: 'SSS-RANK',
        category: 'startup',
        date: 'Feb 2026 - Present'
    },
    {
        title: 'FITHIVE',
        description: 'AI-powered fitness web & PWA platform. 20+ active users with AI-driven workouts and real-time tracking.',
        longDescription: [
            'Engineered a responsive AI-powered fitness web app and installable PWA using React and Firebase.',
            'Integrated multi-provider authentication (Google, GitHub, email), reducing signup friction by 40%.',
            'Designed interactive UI modules including streak tracking, leaderboard, and real-time updates.',
            'Integrated API-based AI assistant handling 100+ user queries.',
            'Enabled offline support and real-time Firestore synchronization.'
        ],
        tech: ['React', 'Firebase', 'Gemini AI', 'PWA'],
        image: '/fithive.png',
        github: 'https://github.com/AbhayKTS',
        status: 'Live',
        icon: Rocket,
        rank: 'B',
        rankLabel: 'B-RANK',
        category: 'project',
        date: 'Jan 2026 - Feb 2026'
    },
    {
        title: 'LUNA',
        description: 'Personal AI Voice Assistant with 94% command recognition accuracy.',
        longDescription: [
            'Built a desktop AI assistant supporting 20+ voice commands and handling 1000+ user queries.',
            'Capabilities include app launch, web search, weather, notes, reminders, and music.',
            'Trained an ML-based intent classifier on 1,000+ queries with retrieval-based response model.',
            'Designed an overlay GUI with system tray integration and secure local data encryption.'
        ],
        tech: ['Python', 'Scikit-learn', 'Tkinter', 'Speech_Rec'],
        image: '/luna.png',
        github: 'https://github.com/AbhayKTS',
        status: 'Stable',
        icon: Bot,
        rank: 'A',
        rankLabel: 'A-RANK',
        category: 'project',
        date: 'Dec 2025 - Jan 2026'
    },
    {
        title: 'ORACLE',
        description: 'Decentralized Risk Analysis Platform assessing smart contracts with ML and IPFS.',
        longDescription: [
            'Developed a full-stack platform assessing 50–100 smart contracts with low-latency API responses.',
            'Integrated MetaMask authentication using a custom Oracle Solidity contract.',
            'Created an AI-powered FastAPI backend with an ML model trained on 1,500+ contract samples.',
            'Engineered contract submission, oracle consensus, and IPFS-based evidence workflows.',
            'Deployed frontend on Netlify and backend on Render with <200ms API response times.'
        ],
        tech: ['Next.js', 'Solidity', 'FastAPI', 'ML', 'IPFS'],
        image: '/oracle.png',
        github: 'https://github.com/AbhayKTS',
        live: 'https://oracle-network.netlify.app',
        status: 'Production',
        icon: Shield,
        rank: 'SS',
        rankLabel: 'SS-RANK',
        category: 'project',
        date: 'Nov 2025 - Dec 2025'
    },
    {
        title: 'ShadowMesh',
        description: 'Autonomous Network Defense System deploying deceptive services to trap and analyze unseen threats.',
        longDescription: [
            'Engineered a federated intelligence security layer that autonomously detects and traps network intrusions.',
            'Developed deceptive service modules to divert attacker attention while logging real-time telemetry.',
            'Integrated blockchain-based Z-score verification for immutable threat reporting.',
            'Deployed as a browser extension and backend-orchestrated mesh for global defense coverage.'
        ],
        tech: ['Python', 'Cybersecurity', 'Blockchain', 'Network Defense'],
        image: '/shadowmesh.png',
        github: 'https://github.com/AbhayKTS/shadowmesh',
        status: 'Secure',
        icon: Shield,
        rank: 'SS',
        rankLabel: 'SS-RANK',
        category: 'project',
        date: 'Aug 2025'
    },
    {
        title: 'ShadoWar',
        description: 'Federated Phishing Intelligence System utilizing decentralized AI for privacy-first threat detection.',
        longDescription: [
            'Federated Intelligence: Collaborative AI model training on distributed nodes without centralizing private telemetry.',
            'Real-Time Detection: Locally-hosted SGD Linear Classifier for rapid, low-latency identification of malicious URLs.',
            'Dual-Engine Scanning: Hybrid verification integrating VirusTotal API with proprietary federated heuristic engines.',
            'Global Threat Sync: Automated synchronization of local knowledge packets for zero-day protection across the mesh.'
        ],
        tech: ['Federated Learning', 'AI Security', 'React', 'Extension'],
        image: '/ShadoWar.png',
        github: 'https://github.com/AbhayKTS/Shadowar',
        status: 'Active',
        icon: Shield,
        rank: 'S',
        rankLabel: 'S-RANK',
        category: 'project',
        date: 'Sept 2025'
    },
    {
        title: 'Campaign Sales Bot',
        description: 'Sales Prediction ML workflow delivering full-stack campaign budget planning and ROI optimization.',
        longDescription: [
            'ML training pipeline (scripts/train_and_save.py) that cleans advertising data and tunes multiple regressors for peak accuracy.',
            'FastAPI backend (server/app.py) exposing high-performance /predict and /predict/roi endpoints.',
            'React SPA built with Vite + Tailwind for interactive coefficient visualization and ROI scenario exploration.',
            'Integrated model-coefs metadata system for real-time diagnostic reporting and model versioning.'
        ],
        tech: ['Python', 'Scikit-learn', 'FastAPI', 'React', 'Tailwind'],
        image: '/sales-pred.png',
        github: 'https://github.com/AbhayKTS/sales_prediction',
        status: 'Stable',
        icon: TrendingUp,
        rank: 'B',
        rankLabel: 'B-RANK',
        category: 'project',
        date: 'Oct 2025'
    },
    {
        title: 'Divine Physician',
        description: 'Transform healthcare decision-making with AI-powered forecasting for health trends and outbreak management.',
        longDescription: [
            'AI-Powered Forecasting: Advanced machine learning algorithms predict health trends with high accuracy.',
            'Real-time Analytics: Monitor health metrics and trends with live data visualization and alerts.',
            'Secure Data Handling: Enterprise-grade security ensures your health data remains protected and compliant.',
            'Multi-metric Support: Track COVID-19, flu cases, hospital capacity, and custom health indicators.'
        ],
        tech: ['AI', 'React', 'Data Viz', 'Healthcare'],
        image: '/divine.png',
        status: 'Live',
        icon: HeartPulse,
        rank: 'A',
        rankLabel: 'A-RANK',
        category: 'project',
        date: 'Nov 2025'
    },
    {
        title: 'Climate Explorer',
        description: 'Advanced AI-powered climate visualization and analysis platform for real-time environmental tracking.',
        longDescription: [
            'Interactive Climate Maps: Real-time weather data visualization with multiple dynamic environment layers.',
            'AI Analysis (Gemini): Natural language data interrogation in 12+ languages for global accessibility.',
            'Real-time Intelligence: Live satellite data ingestion and climate anomaly detection engines.',
            'Advanced Metrics: Temperature trends, precipitation patterns, and air quality monitoring logs.'
        ],
        tech: ['Gemini AI', 'Data Viz', 'Maps API', 'Climate Analysis'],
        image: '/climate explorer.png',
        github: 'https://github.com/AbhayKTS/data-climate-whisperer',
        live: 'https://climate-explorer.netlify.app',
        icon: Globe,
        rank: 'A',
        rankLabel: 'A-RANK',
        category: 'project',
        date: 'Sept 2025'
    },
    {
        title: 'Merchant Alliance',
        description: 'Modern SEO content generation platform featuring a holographic 3D interactive interface.',
        longDescription: [
            'Smart Content Generation: Generate SEO-optimized titles, descriptions, and features autonomously.',
            '3D Interactive Interface: Modern holographic design with engaging 3D elements for a premium UX.',
            'Real-time Analytics: Track user engagement and content performance across all SEO metrics.',
            'User Authentication: Secure user accounts and content saving with automated backup workflows.'
        ],
        tech: ['React', 'TypeScript', 'SEO', '3D Design'],
        image: '/merchant.png',
        status: 'Production',
        icon: Search,
        rank: 'B',
        rankLabel: 'B-RANK',
        category: 'project',
        date: 'Dec 2025'
    },
    {
        title: 'Mini CRM',
        description: 'Production-ready Client Lead Management System for business tracking and administrative analytics.',
        longDescription: [
            'Lead Management: Robust system to track leads, update statuses, and add follow-up notes synchronously.',
            'Secure Admin Dashboard: Enterprise-grade authentication and permission control for lead oversight.',
            'Business Analytics: Integrated analytics engine to view engagement metrics and conversion rates.',
            'Scalable Architecture: Built for performance with real-time synchronization across client databases.'
        ],
        tech: ['React', 'Management', 'Analytics', 'Enterprise'],
        image: '/crm.png',
        github: 'https://github.com/AbhayKTS/CRM',
        status: 'Stable',
        icon: Users,
        rank: 'C',
        rankLabel: 'C-RANK',
        category: 'project',
        date: 'Jan 2026'
    },
    {
        title: 'Adversarial AI',
        description: 'Cyber-security platform exposing AI model vulnerabilities to invisible adversarial perturbations.',
        longDescription: [
            'End-to-End Workflow: Upload -> Predict -> Attack -> Compare -> Defend pipeline to secure ML models.',
            'Vulnerability Discovery: Identifies tiny, invisible changes that lead to model misclassification.',
            'Real-time Analysis: Visual + metric analysis of adversarial impact on classification confidence.',
            'Defensive Hardening: Integrated mechanisms to simulate and mitigate adversarial attacks in production.'
        ],
        tech: ['AI Security', 'Adversarial Attacks', 'Visualization', 'Defense'],
        github: 'https://github.com/AbhayKTS',
        icon: Code,
        rank: 'A',
        rankLabel: 'A-RANK',
        category: 'project',
        date: 'Oct 2025'
    }
];
