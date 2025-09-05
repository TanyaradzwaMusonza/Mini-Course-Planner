const coursesData = [
  {
    id: "1",
    title: "Graphic Design Fundamentals",
    category: "Design",
    level: "Beginner",
    duration: 120,
    description: "Learn the basics of graphic design including colors, typography, and layout.",
    lessons: [
      { title: "Introduction to Graphic Design", duration: 15 },
      { title: "Color Theory", duration: 15 },
      { title: "Typography Basics", duration: 15 },
      { title: "Layout and Composition", duration: 15 },
      { title: "Design Tools Overview", duration: 15 },
      { title: "Creating Digital Art", duration: 15 },
      { title: "Branding Basics", duration: 15 },
      { title: "Portfolio Tips", duration: 15 }
    ],
    courseLink: "https://youtu.be/YqQx75OPRa0?si=Oo7ETO7qZjrAHNWd",
    createdAt: "2025-09-05T10:00:00Z"
  },
  {
    id: "2",
    title: "UI/UX Design Essentials",
    category: "Design",
    level: "Intermediate",
    duration: 140,
    description: "Learn UI/UX principles, wireframing, and prototyping for web and mobile apps.",
    lessons: [
      { title: "UI vs UX", duration: 15 },
      { title: "User Research", duration: 15 },
      { title: "Wireframing", duration: 15 },
      { title: "Prototyping", duration: 15 },
      { title: "Visual Design Principles", duration: 15 },
      { title: "Interaction Design", duration: 15 },
      { title: "Usability Testing", duration: 15 },
      { title: "Portfolio & Case Studies", duration: 20 }
    ],
    courseLink: "https://youtu.be/c9Wg6Cb_YlU?si=odsJkcuxyR4aBohU",
    createdAt: "2025-09-05T10:10:00Z"
  },
  {
    id: "3",
    title: "Web Development for Beginners",
    category: "Web Development",
    level: "Beginner",
    duration: 150,
    description: "Learn HTML, CSS, and JavaScript to build your first website.",
    lessons: [
      { title: "Introduction to Web Development", duration: 15 },
      { title: "HTML Basics", duration: 20 },
      { title: "CSS Fundamentals", duration: 20 },
      { title: "Responsive Design", duration: 20 },
      { title: "JavaScript Basics", duration: 20 },
      { title: "DOM Manipulation", duration: 20 },
      { title: "Simple Projects", duration: 15 },
      { title: "Publishing Your Site", duration: 20 }
    ],
    courseLink: "https://youtu.be/gQojMIhELvM?si=A2buIacrYbBwGOmR",
    createdAt: "2025-09-05T10:20:00Z"
  },
  {
    id: "4",
    title: "Advanced JavaScript",
    category: "Web Development",
    level: "Advanced",
    duration: 180,
    description: "Deep dive into JavaScript, ES6 features, and building interactive web apps.",
    lessons: [
      { title: "JS Fundamentals Review", duration: 20 },
      { title: "ES6 Syntax", duration: 20 },
      { title: "Asynchronous JS", duration: 25 },
      { title: "Promises & Async/Await", duration: 25 },
      { title: "DOM Advanced Manipulation", duration: 20 },
      { title: "Event Handling", duration: 20 },
      { title: "Projects: ToDo App", duration: 25 },
      { title: "Debugging & Best Practices", duration: 25 }
    ],
    courseLink: "https://youtu.be/R9I85RhI7Cg?si=kMP5-ZCO0XlU0uRm",
    createdAt: "2025-09-05T10:30:00Z"
  },
  {
    id: "5",
    title: "Cyber Security Basics",
    category: "Cyber Security",
    level: "Beginner",
    duration: 130,
    description: "Learn the fundamentals of cybersecurity and how to protect yourself online.",
    lessons: [
      { title: "Introduction to Cybersecurity", duration: 15 },
      { title: "Types of Cyber Threats", duration: 15 },
      { title: "Passwords & Authentication", duration: 15 },
      { title: "Network Security Basics", duration: 20 },
      { title: "Safe Browsing Practices", duration: 15 },
      { title: "Email & Phishing Awareness", duration: 15 },
      { title: "Cybersecurity Tools Overview", duration: 20 },
      { title: "Building a Security Mindset", duration: 15 }
    ],
    courseLink: "https://youtu.be/njPY7pQTRWg?si=CN3_zr79ow2S13VJ",
    createdAt: "2025-09-05T10:40:00Z"
  },
  {
    id: "6",
    title: "Intermediate Cyber Security",
    category: "Cyber Security",
    level: "Intermediate",
    duration: 150,
    description: "Learn ethical hacking, penetration testing, and common security protocols.",
    lessons: [
      { title: "Ethical Hacking Basics", duration: 20 },
      { title: "Network Attacks & Defense", duration: 20 },
      { title: "Firewalls & IDS", duration: 20 },
      { title: "Encryption Techniques", duration: 20 },
      { title: "Web Application Security", duration: 20 },
      { title: "Penetration Testing Tools", duration: 20 },
      { title: "Vulnerability Assessment", duration: 15 },
      { title: "Incident Response", duration: 15 }
    ],
    courseLink: "https://youtu.be/v7BNtpw53AA?si=3TAqTYgZAVVjxb31",
    createdAt: "2025-09-05T10:50:00Z"
  },
  {
    id: "7",
    title: "Digital Marketing Fundamentals",
    category: "Digital Marketing",
    level: "Beginner",
    duration: 140,
    description: "Learn the basics of SEO, social media, and content marketing.",
    lessons: [
      { title: "Introduction to Digital Marketing", duration: 15 },
      { title: "SEO Basics", duration: 20 },
      { title: "Social Media Marketing", duration: 20 },
      { title: "Email Marketing Basics", duration: 20 },
      { title: "Content Marketing", duration: 20 },
      { title: "Analytics Overview", duration: 15 },
      { title: "Marketing Tools", duration: 15 },
      { title: "Building Campaigns", duration: 15 }
    ],
    courseLink: "https://youtu.be/5A4D5xnrtIA?si=47Hq84IRyAZrWOX3",
    createdAt: "2025-09-05T11:00:00Z"
  },
  {
    id: "8",
    title: "Advanced Digital Marketing",
    category: "Digital Marketing",
    level: "Advanced",
    duration: 160,
    description: "Learn advanced marketing strategies, funnels, and growth hacking techniques.",
    lessons: [
      { title: "Advanced SEO", duration: 20 },
      { title: "Marketing Funnels", duration: 20 },
      { title: "Growth Hacking", duration: 20 },
      { title: "Social Media Strategy", duration: 20 },
      { title: "Email Automation", duration: 20 },
      { title: "Paid Ads Strategies", duration: 20 },
      { title: "Analytics Deep Dive", duration: 20 },
      { title: "Campaign Optimization", duration: 20 }
    ],
    courseLink: "https://youtu.be/jVgYgN0zcWs?si=SKovLTxZMdjeG-Uy",
    createdAt: "2025-09-05T11:10:00Z"
  },
  {
    id: "9",
    title: "Intermediate Web Design",
    category: "Design",
    level: "Intermediate",
    duration: 140,
    description: "Learn layout, branding, and design software for web projects.",
    lessons: [
      { title: "Advanced Layout", duration: 15 },
      { title: "Color & Branding", duration: 15 },
      { title: "Web Typography", duration: 15 },
      { title: "Responsive Design Techniques", duration: 20 },
      { title: "Figma Basics", duration: 15 },
      { title: "Adobe XD Overview", duration: 15 },
      { title: "Wireframing Practice", duration: 25 },
      { title: "Final Project", duration: 20 }
    ],
    courseLink: "https://youtu.be/j6Ule7GXaRs?si=Gf8lR4VIiD8M7eqw",
    createdAt: "2025-09-05T11:20:00Z"
  },
  {
    id: "10",
    title: "Cybersecurity Advanced Techniques",
    category: "Cyber Security",
    level: "Advanced",
    duration: 180,
    description: "Master advanced hacking and security protocols for professionals.",
    lessons: [
      { title: "Advanced Pen Testing", duration: 20 },
      { title: "Network Security Advanced", duration: 20 },
      { title: "Malware Analysis", duration: 20 },
      { title: "Incident Handling", duration: 20 },
      { title: "Forensics Techniques", duration: 20 },
      { title: "Security Automation", duration: 20 },
      { title: "Advanced Encryption", duration: 20 },
      { title: "Security Best Practices", duration: 20 }
    ],
    courseLink: "https://youtu.be/cKEf8H9cQGM?si=B3ULI6FeQ37fzrKG",
    createdAt: "2025-09-05T11:30:00Z"
  },
  
{
  id: "11",
  title: "Front-End Frameworks: React",
  category: "Web Development",
  level: "Intermediate",
  duration: 160,
  description: "Learn React basics, components, state, and building web apps.",
  lessons: [
    { title: "Introduction to React", duration: 20 },
    { title: "JSX & Components", duration: 20 },
    { title: "State & Props", duration: 20 },
    { title: "Event Handling", duration: 20 },
    { title: "React Router", duration: 20 },
    { title: "Hooks Overview", duration: 20 },
    { title: "Building Projects", duration: 20 },
    { title: "Deployment Tips", duration: 20 }
  ],
  courseLink: "https://youtu.be/SqcY0GlETPk?si=RW7jhOfsc2uyjGQY",
  createdAt: "2025-09-05T11:40:00Z"
},
{
  id: "12",
  title: "Back-End Development with Node.js",
  category: "Web Development",
  level: "Advanced",
  duration: 180,
  description: "Learn server-side programming, REST APIs, and database integration.",
  lessons: [
    { title: "Node.js Overview", duration: 20 },
    { title: "Setting up Express", duration: 20 },
    { title: "Routing & Middleware", duration: 20 },
    { title: "Connecting to Database", duration: 20 },
    { title: "REST API Basics", duration: 20 },
    { title: "Authentication & Security", duration: 20 },
    { title: "Testing APIs", duration: 20 },
    { title: "Deployment", duration: 20 }
  ],
  courseLink: "https://youtu.be/T55Kb8rrH1g?si=D0lqIIpDus39P-Ww",
  createdAt: "2025-09-05T11:50:00Z"
},
{
  id: "13",
  title: "Cybersecurity for Web Developers",
  category: "Cyber Security",
  level: "Intermediate",
  duration: 150,
  description: "Learn how to secure web applications and prevent common attacks.",
  lessons: [
    { title: "Web Security Basics", duration: 20 },
    { title: "SQL Injection", duration: 20 },
    { title: "XSS Attacks", duration: 20 },
    { title: "CSRF Protection", duration: 20 },
    { title: "HTTPS & Certificates", duration: 20 },
    { title: "Authentication Security", duration: 20 },
    { title: "Security Best Practices", duration: 15 },
    { title: "Pen Testing Basics", duration: 15 }
  ],
  courseLink: "https://youtu.be/4YOpILi9Oxs",
  createdAt: "2025-09-05T12:00:00Z"
},
{
  id: "14",
  title: "Social Media Marketing",
  category: "Digital Marketing",
  level: "Intermediate",
  duration: 140,
  description: "Learn strategies to grow your brand and engage audiences on social media.",
  lessons: [
    { title: "Platforms Overview", duration: 15 },
    { title: "Content Creation", duration: 20 },
    { title: "Posting Strategies", duration: 20 },
    { title: "Analytics & Metrics", duration: 20 },
    { title: "Paid Ads Overview", duration: 20 },
    { title: "Community Engagement", duration: 20 },
    { title: "Influencer Marketing", duration: 15 },
    { title: "Campaign Case Studies", duration: 10 }
  ],
  courseLink: "https://youtu.be/kXtZ_vyGtQI?si=f8Ff4R5ue-NgFGOX",
  createdAt: "2025-09-05T12:10:00Z"
},
{
  id: "15",
  title: "SEO Advanced Strategies",
  category: "Digital Marketing",
  level: "Advanced",
  duration: 160,
  description: "Advanced SEO techniques to rank websites higher on search engines.",
  lessons: [
    { title: "SEO Audit", duration: 20 },
    { title: "Keyword Research", duration: 20 },
    { title: "On-page SEO", duration: 20 },
    { title: "Off-page SEO", duration: 20 },
    { title: "Technical SEO", duration: 20 },
    { title: "Link Building", duration: 20 },
    { title: "SEO Tools", duration: 20 },
    { title: "SEO Case Studies", duration: 20 }
  ],
  courseLink: "https://youtu.be/B9x3IkU8eaw?list=PLKBtl5eztC2EFWZq41vYsnfKDllFKl_Qd",
  createdAt: "2025-09-05T12:20:00Z"
},
{
  id: "16",
  title: "UI/UX Beginner Projects",
  category: "Design",
  level: "Advanced",
  duration: 180,
  description: "Apply your UI/UX skills on real-world projects, from wireframes to prototypes.",
  lessons: [
    { title: "Advanced Wireframing", duration: 20 },
    { title: "Prototyping Projects", duration: 20 },
    { title: "User Testing", duration: 20 },
    { title: "Accessibility Design", duration: 20 },
    { title: "Animation Basics", duration: 20 },
    { title: "Case Studies Analysis", duration: 20 },
    { title: "Portfolio Development", duration: 30 },
    { title: "Client Presentation Tips", duration: 30 }
  ],
  courseLink: "https://www.youtube.com/shorts/k51Va6VS5Zg?feature=share",
  createdAt: "2025-09-05T12:30:00Z"
},
{
  id: "17",
  title: "WordPress Development",
  category: "Web Development",
  level: "Beginner",
  duration: 130,
  description: "Learn how to create websites using WordPress from scratch.",
  lessons: [
    { title: "WordPress Overview", duration: 15 },
    { title: "Installing WordPress", duration: 15 },
    { title: "Themes & Customization", duration: 20 },
    { title: "Plugins & Widgets", duration: 20 },
    { title: "Creating Pages & Posts", duration: 20 },
    { title: "Menus & Navigation", duration: 15 },
    { title: "User Management", duration: 15 },
    { title: "Publishing Your Site", duration: 10 }
  ],
  courseLink: "https://youtu.be/ptHe2k-5Tlg",
  createdAt: "2025-09-05T12:40:00Z"
},
{
  id: "18",
  title: "Content Marketing Advanced",
  category: "Digital Marketing",
  level: "Advanced",
  duration: 160,
  description: "Learn to create content strategies that convert and engage audiences.",
  lessons: [
    { title: "Advanced Content Planning", duration: 20 },
    { title: "Storytelling Techniques", duration: 20 },
    { title: "SEO Content Writing", duration: 20 },
    { title: "Social Media Content", duration: 20 },
    { title: "Video Content Strategy", duration: 20 },
    { title: "Analytics & Reporting", duration: 20 },
    { title: "Content Automation", duration: 20 },
    { title: "Case Study Projects", duration: 20 }
  ],
  courseLink: "https://youtu.be/0R_3iarc8IA?si=uBS6Mr-mrn9AZlMg",
  createdAt: "2025-09-05T12:50:00Z"
},
{
  id: "19",
  title: "Introduction to Ethical Hacking",
  category: "Cyber Security",
  level: "Beginner",
  duration: 140,
  description: "Learn basic hacking techniques ethically and understand cybersecurity fundamentals.",
  lessons: [
    { title: "What is Ethical Hacking?", duration: 15 },
    { title: "Setting up Lab Environment", duration: 20 },
    { title: "Reconnaissance Techniques", duration: 20 },
    { title: "Scanning & Enumeration", duration: 20 },
    { title: "Vulnerability Analysis", duration: 20 },
    { title: "Password Cracking Basics", duration: 20 },
    { title: "Social Engineering", duration: 15 },
    { title: "Reporting Findings", duration: 10 }
  ],
  courseLink: "https://youtu.be/yFC8pb2TPdc?si=cQ8sb9KQnYbLFHQ6",
  createdAt: "2025-09-05T13:00:00Z"
},
{
  id: "20",
  title: "Advanced React & Redux",
  category: "Web Development",
  level: "Advanced",
  duration: 180,
  description: "Master state management, Redux, and build complex React applications.",
  lessons: [
    { title: "React Review", duration: 20 },
    { title: "Redux Introduction", duration: 20 },
    { title: "Actions & Reducers", duration: 20 },
    { title: "Connecting Redux to React", duration: 20 },
    { title: "Middleware Overview", duration: 20 },
    { title: "Async Redux", duration: 20 },
    { title: "Building Real Projects", duration: 30 },
    { title: "Performance Optimization", duration: 30 }
  ],
  courseLink: "https://youtu.be/9rLplsL7ZG8?si=sU1_WDLBZwazTUXH",
  createdAt: "2025-09-05T13:10:00Z"
},


  
  {
    id: "21",
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    duration: 120,
    description: "Learn the basics of user interface and user experience design.",
    lessons: [
      { title: "Design Principles", duration: 15 },
      { title: "Color Theory", duration: 15 },
      { title: "Typography Basics", duration: 15 },
      { title: "Wireframing Techniques", duration: 20 },
      { title: "Prototyping with Figma", duration: 20 },
      { title: "Design Systems", duration: 20 },
      { title: "Portfolio Projects", duration: 15 }
    ],
    courseLink: "https://youtu.be/1SNZRCVNizg?si=Cr0917mUm01g96Rk",
    createdAt: "2025-09-05T14:00:00Z"
  },
  {
    id: "22",
    title: "Digital Marketing Mastery",
    category: "Digital Marketing",
    level: "Intermediate",
    duration: 150,
    description: "Develop a full digital marketing strategy including SEO, social media, and paid ads.",
    lessons: [
      { title: "Marketing Strategy Overview", duration: 20 },
      { title: "SEO Techniques", duration: 20 },
      { title: "Social Media Marketing", duration: 20 },
      { title: "Email Campaigns", duration: 20 },
      { title: "Paid Advertising", duration: 20 },
      { title: "Analytics & Tracking", duration: 25 },
      { title: "Marketing Case Studies", duration: 25 }
    ],
    courseLink: "https://youtu.be/0WNnflnKK0Y?si=EI-Mdd63-ZOMQk7D",
    createdAt: "2025-09-05T15:00:00Z"
  },
  {
    id: "23",
    title: "Cybersecurity Essentials",
    category: "Cybersecurity",
    level: "Beginner",
    duration: 140,
    description: "Learn how to protect systems, networks, and data from cyber threats.",
    lessons: [
      { title: "Introduction to Cybersecurity", duration: 15 },
      { title: "Network Security Basics", duration: 20 },
      { title: "Malware & Threat Types", duration: 20 },
      { title: "Cryptography Overview", duration: 20 },
      { title: "Security Policies & Compliance", duration: 20 },
      { title: "Incident Response", duration: 25 },
      { title: "Practical Labs", duration: 20 }
    ],
    courseLink: "https://youtu.be/GFHZrerq178?si=NAZlsx0iIyDbbqRl",
    createdAt: "2025-09-05T16:00:00Z"
  }


  
];
