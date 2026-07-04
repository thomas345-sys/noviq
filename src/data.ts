import { Service, Project, Testimonial, Stat, FeatureCard } from './types';

export const servicesData: Service[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    category: 'Digital Systems',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Premium, secure, and blazing-fast custom websites tailored to streamline user conversion and business automation.',
    deliveryTime: '2-4 Weeks',
    overview: 'NOVIQ Digital Agency builds high-end custom web platforms, corporate portals, and complex e-commerce engines. We merge pristine visual design with responsive layouts, modern APIs, and robust server performance.',
    features: [
      'Custom React/Vite/NextJS architectures for maximum speed',
      'Advanced API integrations and custom database backends',
      'Interactive visual dashboards and real-time analytical panels',
      'Bulletproof cyber-security with SSL and edge protection',
      'Optimized with full-stack server proxy layers for secure third-party keys'
    ],
    benefits: [
      'Maximize conversion rates through intentional layout pacing',
      'Zero maintenance worries with high-availability server setups',
      'SEO audit-ready markup resulting in top organic Google rankings'
    ],
    software: ['VS Code', 'Git', 'Vite', 'Node.js', 'PostgreSQL', 'Docker'],
    timeline: 'Discovery (1 week) → UI/UX Blueprint (1 week) → Core Code & API Integration (1-2 weeks) → QA & Deploy (1 week)',
    fileFormats: ['HTML5/CSS3', 'TSX (TypeScript)', 'JSON', 'Markdown', 'Docker Compose'],
    technologies: ['React', 'TypeScript', 'NodeJS', 'TailwindCSS', 'Express', 'Vite'],
    pricing: 'Starts from $1,250'
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    category: 'Digital Systems',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Native and cross-platform mobile apps featuring rich UI, smooth animations, and fluid offline functionality.',
    deliveryTime: '4-6 Weeks',
    overview: 'We develop high-performance mobile applications that bring your brand directly to your clients’ fingertips. Built with intuitive touch targets, secure authentication, and seamless push notifications.',
    features: [
      'Cross-platform React Native & Flutter solutions',
      'Offline-first synchronization with local databases',
      'Secure biometrics login (FaceID, Fingerprint)',
      'Highly responsive state managers and custom UI wrappers'
    ],
    benefits: [
      'Elevate user loyalty with smooth, localized experiences',
      'Rapid release to Google Play and Apple App Store',
      'Optimized memory usage preventing app performance drops'
    ],
    software: ['Xcode', 'Android Studio', 'Figma', 'React Native CLI', 'VS Code'],
    timeline: 'User Flows & Wireframes (1-2 weeks) → App Shell & Styling (1-2 weeks) → API Binding & Local Storage (1 week) → Beta testing & App Store Submission (1 week)',
    fileFormats: ['IPA (Apple)', 'APK & AAB (Android)', 'TypeScript Components'],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'Tailwind Native'],
    pricing: 'Starts from $2,400'
  },
  {
    id: 'architectural-visualization',
    title: 'Architectural Visualization',
    category: 'Engineering & 3D',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Photorealistic 3D interior and exterior renders, walkthrough animations, and BIM models for real estate and design clients.',
    deliveryTime: '5-10 Days',
    overview: 'Our architectural design suite translates basic 2D floor plans and design sketches into breath-taking photorealistic 3D visual environments, complete with accurate lighting, physical material characteristics, and lush landscaping.',
    features: [
      'Interior and exterior lighting simulation at specific times of day',
      'Custom landscaping, structural finishes, and furniture integration',
      'Dynamic cinematic video walkthroughs in 4K resolution',
      'Complete BIM modeling aligned with international building codes'
    ],
    benefits: [
      'Pre-sell properties before ground-breaking ceremonies',
      'Validate construction finishes, color schemes, and layouts beforehand',
      'Create high-impact investor presentations and marketing materials'
    ],
    software: ['Archicad', 'Revit', 'SketchUp', 'Blender', 'AutoCAD', 'Lumion', 'V-Ray'],
    timeline: 'CAD Import & Scene Setup (2 days) → Materials & Furnishing (2 days) → Lighting & Pre-Render Checks (1-2 days) → Final 4K Rendering & Post-Production (2 days)',
    fileFormats: ['DWG', 'PLN', 'RVT', 'SKP', 'FBX', 'OBJ', 'PNG/MP4'],
    technologies: ['PBR Materials', 'Ray-tracing', 'BIM LOD300', 'Kinematic Cameras'],
    pricing: 'Starts from $450 / view'
  },
  {
    id: 'furniture-modeling',
    title: 'Furniture Modeling',
    category: 'Engineering & 3D',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Highly detailed 3D furniture models, parametric assemblies, and production-ready workshop fabrication drawings.',
    deliveryTime: '3-7 Days',
    overview: 'NOVIQ crafts pristine parametric and organic 3D models for furniture designers and retail stores. We provide high-fidelity renderings for catalog use as well as accurate sheet cutlists, dimensions, and material specs for craftsmen.',
    features: [
      'Parametric designs that scale dimensions dynamically',
      'Organic sculpting for upholstery, leather folds, and fabrics',
      'Exploded assembly views for manuals and manufacturing workflows',
      'Photorealistic studio background renders with customizable textures'
    ],
    benefits: [
      'Reduce physical prototyping costs to zero with virtual builds',
      'Create beautiful web catalogs without hiring a studio photographer',
      'Ensure flawless CNC machining or joinery fabrication on the shop floor'
    ],
    software: ['SolidWorks', 'Blender', 'Autodesk Inventor', 'Fusion 360', 'SketchUp'],
    timeline: 'Blueprint Analysis (1 day) → 3D Part Drafting (2 days) → Texturing & Studio Renders (1-2 days) → Fabrication Blueprints Export (1 day)',
    fileFormats: ['STEP', 'IGES', 'SLDPRT', 'OBJ', 'FBX', 'PDF Blueprints'],
    technologies: ['Subdivision Surface Modeling', 'Parametric CAD', 'Sheet Metal Design'],
    pricing: 'Starts from $180 / model'
  },
  {
    id: 'mechanical-engineering',
    title: 'Mechanical Engineering',
    category: 'Engineering & 3D',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Precision 3D machine designs, structural assemblies, tolerance analysis, and standard technical drafting.',
    deliveryTime: '7-14 Days',
    overview: 'Our mechanical engineering team designs machine elements, structural setups, and complex custom assemblies. We ensure structural honesty, physical manufacturability, and strict compliance with engineering tolerances.',
    features: [
      '3D assembly drafting and detailed structural layouts',
      'Geometric Dimensioning & Tolerancing (GD&T) to ISO standards',
      'Finite Element Analysis (FEA) to verify stress points',
      'Sheet metal design, bending parameters, and flat pattern templates'
    ],
    benefits: [
      'Avoid costly manufacturing errors through kinematic simulation',
      'Produce standardized blueprints ready for tooling, welding, or CNC milling',
      'Optimize weight-to-strength ratios through digital material stress tests'
    ],
    software: ['SolidWorks', 'Autodesk Inventor', 'Fusion 360', 'FreeCAD', 'AutoCAD'],
    timeline: 'Design Requirements Specification (2 days) → 3D Part Modeling (3-5 days) → Assembly & Collision Check (2 days) → Technical 2D Blueprints Draft (3 days)',
    fileFormats: ['STEP', 'STP', 'IGS', 'SLDASM', 'DWG', 'DXF', 'PDF'],
    technologies: ['Kinematic Analysis', 'FEA (Finite Element)', 'GD&T Drafting'],
    pricing: 'Starts from $600 / assembly'
  },
  {
    id: 'automotive-design',
    title: 'Automotive Design',
    category: 'Engineering & 3D',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'High-end automotive concept renders, body panels modeling, aerodynamics simulations, and custom detailing.',
    deliveryTime: '10-20 Days',
    overview: 'We create premium aerodynamic vehicle designs, custom body kits, aftermarket rims, and bespoke interior renders. Perfect for racing teams, restoration shops, parts manufacturers, and creative concept design companies.',
    features: [
      'Complex Class-A surface modeling for flawless light reflection',
      'Computational Fluid Dynamics (CFD) airflow visual prep',
      'High-end studio and environmental vehicle visual renders',
      'Highly detailed chassis, suspension, and body kit mockups'
    ],
    benefits: [
      'Visualize custom body adjustments before molding composite panels',
      'Create stunning marketing assets for luxury and tuning car brands',
      'Accelerate research and development for custom parts manufacturing'
    ],
    software: ['Blender', 'Autodesk Inventor', 'SolidWorks', 'Fusion 360', 'Keyshot'],
    timeline: 'Concept Sketch & Proportions (3 days) → Surface Modeling (5-8 days) → Aerodynamic Adjustments (3 days) → High-fidelity Renders & Animations (3-5 days)',
    fileFormats: ['STEP', 'OBJ', 'FBX', 'STL (3D Print Ready)', 'BLEND', 'SLDPRT'],
    technologies: ['Class-A Surface Design', 'CFD Airflow Preparation', 'PBR Studio Lighting'],
    pricing: 'Starts from $1,500'
  },
  {
    id: 'hosting-infrastructure',
    title: 'Hosting Infrastructure',
    category: 'Digital Systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Ultra-secure cloud hosting, premium VPS hosting, professional domain registration, and persistent email setups.',
    deliveryTime: '1-2 Days',
    overview: 'We handle your entire digital space, including domain acquisition, setting up highly redundant cloud hosting, and managing business emails. Our infrastructure guarantees 99.99% uptime and immediate security updates.',
    features: [
      'Robust Cloudflare-shielded web hosting plans',
      'Dedicated VPS hosting with SSD NVMe arrays for fast file reads',
      'Domain registration and automatic DNS zone configuration',
      'Immersive secure business email addresses (name@youragency.com)'
    ],
    benefits: [
      'Enjoy 99.9% uptime with scalable server-side systems',
      'Prevent slow loading with globally cached CDN edge structures',
      'Complete automated daily backup schedule for your peace of mind'
    ],
    software: ['Cloudflare Panel', 'cPanel/Plesk', 'Proxmox', 'Linux Ubuntu Server', 'Nginx'],
    timeline: 'Domain Check & DNS Setup (3 hours) → Web Server Provisioning (3 hours) → SSL/Email Security Configuration (3 hours) → Deployment & Validation (1 day)',
    fileFormats: ['DNS Zone Bind Files', 'SSL Cert Pem Key', 'Htaccess/Nginx Conf'],
    technologies: ['Global CDN Edges', 'NVMe Cloud Nodes', 'DKIM/SPF Mail Security'],
    pricing: 'Starts from $15 / month'
  },
  {
    id: 'academic-support',
    title: 'Academic Support & Solutions',
    category: 'Academic & Research',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    shortDesc: 'Expert academic consultation, thesis technical guidance, custom research simulations, and engineering project tutoring.',
    deliveryTime: '3-10 Days',
    overview: 'NOVIQ supports engineering students, corporate researchers, and startups with complex mathematical calculations, scientific simulations, thesis programming (MATLAB, Python, CAD), and rigorous research organization.',
    features: [
      'Custom MATLAB, Python, and R calculations and visualization scripts',
      'Professional engineering thesis formatting and referencing assistance',
      'Complex numerical simulations and analytical breakdowns',
      'Step-by-step tutoring on solid modeling and software architectures'
    ],
    benefits: [
      'Overcome stubborn engineering bugs with professional consulting',
      'Learn proper software methodologies used in elite international firms',
      'Ensure absolute privacy, academic rigor, and prompt, helpful explanations'
    ],
    software: ['MATLAB', 'Python', 'R-Studio', 'LaTeX', 'SolidWorks Simulation', 'Ansys'],
    timeline: 'Project Requirement Analysis (1 day) → Mathematical Modeling / Coding (2-5 days) → Compilation, Explanation & Report drafting (2-3 days) → Review & Handover (1 day)',
    fileFormats: ['MATLAB (.m)', 'Python (.py)', 'LaTeX Source', 'PDF Detailed Explanations', 'SolidWorks Assemblies'],
    technologies: ['Numerical Modeling', 'Statistical Analytics', 'Finite Element Solvers', 'LaTeX Formatting'],
    pricing: 'Starts from $150'
  }
];

export const projectsData: Project[] = [
  {
    id: 'noviq-web-1',
    title: 'Luxury Real Estate Portal',
    category: 'websites',
    thumbnail: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'A premium, fully interactive web application displaying high-end luxury listings with real-time video tours, multi-criteria filtering, and live chat integrations.',
    clientIndustry: 'Real Estate & Investment',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Mapbox API', 'Node.js', 'PostgreSQL'],
    timeline: '4 Weeks',
    deliverables: ['Responsive Web App', 'Interactive map filters', 'Broker Admin Panel', 'Database API Schema']
  },
  {
    id: 'noviq-arch-1',
    title: 'Modern Minimalist Villa Viz',
    category: 'architecture',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'Complete photorealistic 3D interior and exterior renders of a 3-story beachfront villa with dynamic daylight simulation and custom furniture placement.',
    clientIndustry: 'Architecture & Real Estate Development',
    technologies: ['Archicad', 'Blender', 'Lumion', 'V-Ray', 'Photoshop'],
    timeline: '7 Days',
    deliverables: ['6 Exterior Renders', '8 Interior Renders', '4K Cinematic Walkthrough Video'],
    hasBeforeAfter: true,
    beforeImg: 'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?auto=format&fit=crop&q=80&w=800', // Basic 2D drafting blueprint look
    afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'noviq-auto-1',
    title: 'Aerodynamic Hypercar Concept',
    category: 'automotive',
    thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'High-end 3D surface modeling of a concept electric hypercar with strict aerodynamic profiling. Rigged for CFD airflow simulation and keyframe rendering.',
    clientIndustry: 'Automotive Startup',
    technologies: ['Autodesk Inventor', 'Blender', 'Keyshot', 'SolidWorks CFD'],
    timeline: '15 Days',
    deliverables: ['Production-ready CAD files', 'Class-A surface geometries', '8 High-Resolution Environmental Studio Renders']
  },
  {
    id: 'noviq-mech-1',
    title: 'Industrial Robotic Arm Assembly',
    category: 'mechanical',
    thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'Detailed parametric design of a 6-axis mechanical robotic arm for automated sorting lines. Includes full structural integrity FEA stress maps.',
    clientIndustry: 'Automation & Robotics Manufacturing',
    technologies: ['SolidWorks', 'Autodesk Inventor', 'FEA Solvers', 'GD&T Blueprints'],
    timeline: '12 Days',
    deliverables: ['Full CAD Assembly (.step, .sldasm)', 'GD&T Fabrication Blueprints', 'Structural FEA Stress Report']
  },
  {
    id: 'noviq-furn-1',
    title: 'Luxury Parametric Lounge Armchair',
    category: 'furniture',
    thumbnail: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'Designing an organic lounge chair modeled parametrically out of laser-cut layered birch plywood with soft physical leather contours.',
    clientIndustry: 'High-end Furniture Brand',
    technologies: ['Rhino', 'Fusion 360', 'Blender', 'CNC Cutting files'],
    timeline: '5 Days',
    deliverables: ['Parametric CAD files (.3dm, .step)', 'CNC Laser cut vectors (.dxf)', 'Exploded assembly manuals', 'Studio textured renders']
  },
  {
    id: 'noviq-app-1',
    title: 'Telemedicine Consultation App',
    category: 'mobile',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'A cross-platform mobile application allowing secure end-to-end video consultations, digital prescription logs, and integrated biometric client verification.',
    clientIndustry: 'Healthcare Technologies',
    technologies: ['React Native', 'TypeScript', 'WebRTC', 'Redux Toolkit', 'Tailwind CSS'],
    timeline: '5 Weeks',
    deliverables: ['iOS App Build', 'Android App Build', 'API Server Proxies', 'Product Design Asset files']
  },
  {
    id: 'noviq-acad-1',
    title: 'Aerospace Wing Heat Transfer Model',
    category: 'academic',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'Scientific research and detailed numerical heat transfer simulation across a supersonic wing surface during atmospheric reentry.',
    clientIndustry: 'University Research Group',
    technologies: ['MATLAB', 'Ansys Fluent', 'LaTeX Document Engine', 'Numerical Solvers'],
    timeline: '8 Days',
    deliverables: ['Fully written thesis chapters (PDF & LaTeX)', 'Interactive MATLAB simulation files', 'Heat contour plots']
  },
  {
    id: 'noviq-brand-1',
    title: 'FinTech Corporate Brand Suite',
    category: 'branding',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
    ],
    overview: 'A high-impact digital branding kit and design system containing interactive brand rules, typography books, responsive logo variants, and modern pitch presentations.',
    clientIndustry: 'FinTech Startup',
    technologies: ['Figma', 'Illustrator', 'CSS Variables', 'Pitch deck frameworks'],
    timeline: '10 Days',
    deliverables: ['Interactive Brand Guidelines Portal', 'Vector files (.svg, .ai)', 'Brand Design System Figma File']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Michael Sang',
    role: 'Managing Director',
    company: 'Apex Builders Ltd',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    flag: '🇰🇪',
    countryName: 'Kenya',
    rating: 5,
    servicePurchased: 'Architectural Visualization & 3D walkthroughs',
    review: 'NOVIQ completely turned around our real estate presentations. Their Archicad models and photorealistic rendering quality are world-class, allowing us to secure multi-million shilling pre-sales easily.',
    fullReview: 'Working with NOVIQ has been an outstanding experience. We needed an exterior visualization and an indoor walkthrough for our luxury villa project in Kilifi. The architectural team didn’t just draft a simple render – they modelled custom wooden ceiling fixtures, accurate daylight angles, and realistic landscaping that perfectly matched our environment. Their response times were practically instant.',
    projectSpecs: 'Villa Viz | 14 renders | 4K Walkthrough Video'
  },
  {
    id: 'test-2',
    name: 'Sarah Dumont',
    role: 'Operations Chief',
    company: 'Veloce Auto Labs',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    flag: '🇨🇦',
    countryName: 'Canada',
    rating: 5,
    servicePurchased: 'Automotive Surface Modeling & Aerodynamics Prep',
    review: 'The surface precision in SolidWorks and Blender of our new custom body panels was impeccable. They understand aerodynamics, stress limits, and proper Class-A styling curves.',
    fullReview: 'We contracted NOVIQ to draft and render a complete aerodynamic aero kit for our tuning brand. Their level of technical expertise was incredible. The CAD files (.step and .sldasm) had perfect geometry with proper clearances, ready for CNC carbon molds. They provided unlimited revisions and kept our proprietary concept safe under non-disclosure.',
    projectSpecs: 'Carbon Fiber Aero Kit | CAD Geometries & STEP files'
  },
  {
    id: 'test-3',
    name: 'Prof. David Kamau',
    role: 'Principal Researcher',
    company: 'Nairobi Technical Institute',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    flag: '🇰🇪',
    countryName: 'Kenya',
    rating: 5,
    servicePurchased: 'Academic Support & MATLAB Simulation Coding',
    review: 'An absolute lifesaver for our mechanical wing vibration thesis. Highly rigorous mathematical formulas, flawless LaTeX rendering, and detailed comments in Python and MATLAB scripts.',
    fullReview: 'Our department required advanced FEA solver modeling and specialized MATLAB scripts to map stress vibrations across structural composites. NOVIQ provided detailed academic consultations, writing flawless equations and code modules. Their technical accuracy and detailed explanations made complex aerodynamics concepts fully understandable.',
    projectSpecs: 'Vibration Solver Scripts | LaTeX Academic Reports'
  },
  {
    id: 'test-4',
    name: 'Arthur Pendelton',
    role: 'Founder & CEO',
    company: 'Nexus Finance Corp',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    flag: '🇨🇦',
    countryName: 'Canada',
    rating: 5,
    servicePurchased: 'Website Development & Hosting Infrastructure',
    review: 'A breathtakingly premium web platform. Extremely responsive, integrated with modern SSL configurations, and optimized for load speed. Highly recommended for any serious business.',
    fullReview: 'NOVIQ designed and coded our responsive corporate portal, using custom React and Vite setups. They coupled the design with secure server-side proxies to prevent API key exposure and configured Cloudflare caching, leading to incredible load times in Toronto and Montreal. Their post-launch web hosting and security support is unmatched.',
    projectSpecs: 'Corporate Site & Cloudflare SSL deployment'
  }
];

export const statsData: Stat[] = [
  { label: 'Successful Projects', value: 240, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
  { label: 'Years of Experience', value: 8, suffix: '+' },
  { label: 'Avg. Response (Mins)', value: 4, suffix: '' }
];

export const coreValuesData: FeatureCard[] = [
  {
    iconName: 'Sparkles',
    title: '100% Original Craftsmanship',
    description: 'We believe in true architectural, engineering, and digital integrity. Every line of code, pixel, 3D model, and blueprint is generated custom from the ground up.'
  },
  {
    iconName: 'Zap',
    title: 'Industry-Leading Fast Delivery',
    description: 'Our standard workflows utilize parallel computing, optimized rendering pipelines, and agile coding sprints, ensuring prompt delivery without compromising on visual quality.'
  },
  {
    iconName: 'CheckCircle',
    title: 'Unlimited Iterative Revisions',
    description: 'Your satisfaction is our absolute priority. We refine layouts, shapes, clearances, or color themes iteratively until the design perfectly matches your vision.'
  },
  {
    iconName: 'Settings',
    title: 'Professional Technical Software',
    description: 'We use premium industry platforms including SolidWorks, Archicad, AutoCAD, Fusion 360, Blender, Revit, and modern high-fidelity React architectures.'
  },
  {
    iconName: 'ShieldAlert',
    title: 'Strict Data Confidentiality',
    description: 'Your design blueprints, proprietary source code, mechanical tolerances, and academic drafts are protected under strict NDAs and multi-layer cloud encryption.'
  },
  {
    iconName: 'Headphones',
    title: '24/7 Premium Client Support',
    description: 'Receive instant, friendly consultations and immediate replies from our local contact hubs in both Kenya and Canada via glowing direct WhatsApp connections.'
  },
  {
    iconName: 'DollarSign',
    title: 'Highly Transparent Pricing',
    description: 'No hidden setup fees or surprise licensing bills. We provide detailed pricing metrics, modular payment schedules, and tailored, affordable design tiers.'
  },
  {
    iconName: 'ThumbsUp',
    title: '100% Client Satisfaction',
    description: 'Trusted by real-estate developers, engineering students, tech startups, and automotive workshops globally to deliver flawless digital excellence.'
  }
];
