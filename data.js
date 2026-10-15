// Your timeline. To add an achievement, copy one block, edit it, and save.
// type: "work" | "project" | "win" | "lead" | "cert" | "edu"
// date: "YYYY-MM" (used for sorting). end: optional "YYYY-MM" or "now". when: optional text shown instead of the date.
window.TIMELINE = [
  {
    date: "2026-10", when: "2026", type: "win",
    title: "Hackathon winner",
    org: "Atria Institute of Technology, Bengaluru",
    text: "Won the hackathon at Atria Institute of Technology."
  },
  {
    date: "2026-10", type: "project",
    title: "Arogya Pharma Sentinel",
    tagline: "AI agent for pharmacy recalls and cold-chain safety", category: "Healthcare AI",
    text: "An AI agent for a pharma distributor that tracks stock by batch and expiry, traces any batch from manufacturer to customer, links cold-room temperature excursions to the batches stored there, and recommends what to block, return, move or reorder. Every action waits for a pharmacist's approval. Quantities are computed in SQL and Python; the LLM explains and drafts, and its output is validated against the database. Covered by 57 acceptance tests.",
    tags: ["FastAPI", "PostgreSQL", "React", "LLM agents", "Python"],
    link: "https://github.com/Nithish-217/arogya-pharma-sentinel", linkText: "View on GitHub"
  },
  {
    date: "2026-05", type: "cert",
    title: "Data Structures & Algorithms",
    org: "DevTown",
    text: "Completed the DevTown DSA program.",
    link: "https://cert.devtown.in/verify/pPMWuJbA", linkText: "Verify certificate"
  },
  {
    date: "2026-03", end: "now", type: "project",
    title: "AI-Enhanced Smart Inventory Management System",
    tagline: "Ask your inventory questions in plain English", category: "AI / Backend",
    text: "Asynchronous FastAPI + PostgreSQL service where LLM APIs turn plain-English questions into database queries, with automatic issue classification and inventory insights.",
    tags: ["FastAPI", "PostgreSQL", "LLM APIs"]
  },
  {
    date: "2026-01", type: "project",
    title: "CyberSecureVPN",
    tagline: "Encrypted tunneling with live monitoring", category: "Networking / Security",
    text: "A VPN built from the packet level up: Linux TUN interface, IP routing, AES-256 encryption and Diffie-Hellman key exchange, plus DNS leak protection, a kill switch, split tunneling and a live monitoring dashboard.",
    tags: ["C++", "Linux", "Networking", "Cryptography"]
  },
  {
    date: "2025-12", type: "project",
    title: "Customer Complaint Management Portal",
    tagline: "Serverless complaint tracking on AWS", category: "Cloud",
    text: "Serverless app on AWS Lambda, API Gateway and DynamoDB with real-time complaint tracking, role-based admin controls and CloudWatch monitoring.",
    tags: ["AWS Lambda", "DynamoDB", "REST"]
  },
  {
    date: "2025-11", type: "work",
    title: "Web Development Intern",
    org: "New Link Technologies, Bengaluru",
    text: "Selected for a three-month internship building a responsive web application to company specifications, with brand-consistent UI."
  },
  {
    date: "2025-11", type: "win",
    title: "1st place, Pitchathon",
    org: "21st ISTE Karnataka State Level Student Convention, YIT Mangalore",
    text: "Won the state-level start-up pitch competition."
  },
  {
    date: "2025-11", type: "project",
    title: "Air Trust: Smart Indoor Air Quality Monitor",
    tagline: "Real-time indoor air quality on ESP32", category: "IoT",
    text: "ESP32-based IoT device reading air sensors over UART, with a dashboard for AQI, CO₂, PM2.5 and historical trends.",
    tags: ["ESP32", "IoT", "Dashboards"]
  },
  {
    date: "2025-05", end: "2025-09", type: "work",
    title: "Software Development Engineer Intern",
    org: "CMTI – Central Manufacturing Technology Institute, Bengaluru",
    text: "Designed and deployed the Gauge Inventory System for the Metrology department: FastAPI + PostgreSQL REST APIs managing 1,000+ precision gauges, cutting manual tracking by 40% and used daily by 15+ staff. Received a letter of recommendation.",
    tags: ["FastAPI", "PostgreSQL", "React", "OOP"]
  },
  {
    date: "2025-03", end: "2026-02", type: "lead",
    title: "Chief Student Coordinator",
    org: "Institution's Innovation Council (IIC), SIT",
    text: "Planned and ran 25+ workshops and events on innovation, entrepreneurship and start-ups."
  },
  {
    date: "2025-01", type: "cert",
    title: "Certifications",
    text: "Foundations of Cybersecurity (Google), SQL Intermediate (HackerRank), Programming & Problem Solving using C++ (CodeChef), Data Structures & Algorithms (GeeksforGeeks)."
  },
  {
    date: "2024-10", type: "win",
    title: "1st place, Cypher 2.0 Hackathon",
    org: "AIT Bangalore",
    text: "Built Dropouts Are Never Out, an AI-based dropout prediction platform that also lets students who left college showcase their technical skills.",
    tags: ["React", "FastAPI", "ML"]
  },
  {
    date: "2023-10", end: "2026-02", type: "lead",
    title: "NCC Rank Holder",
    org: "National Cadet Corps",
    text: "Represented the college at national-level NCC camps and earned the NCC 'C' Certificate with A grade."
  },
  {
    date: "2023-08", end: "2027-06", type: "edu",
    title: "B.E. Information Science & Engineering",
    org: "Siddaganga Institute of Technology, Tumakuru",
    text: "CGPA 8.5. Graduating June 2027."
  }
];
