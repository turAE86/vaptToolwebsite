const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

// Load environment variables
dotenv.config();

// Service Data to Insert (Based on Redscan Reference)
const services = [
  {
    title: "Managed Detection & Response",
    slug: "managed-detection-response",
    description: "Rapidly detect and respond to threats 24/7. Achieve enterprise-standard cyber security capability at a fraction of the cost.",
    icon: "shield", // Use 'shield' for MDR/Defense
    features: [
      "24/7 Threat Monitoring",
      "Endpoint Detection (EDR)",
      "Cloud Security Monitoring"
    ]
  },
  {
    title: "Penetration Testing",
    slug: "penetration-testing",
    description: "Identify and address security vulnerabilities in your networks, infrastructure, and applications before hackers exploit them.",
    icon: "bug", // Use 'bug' for finding vulnerabilities
    features: [
      "Web App Testing",
      "Network Infrastructure",
      "Mobile App Security"
    ]
  },
  {
    title: "Red Team Operations",
    slug: "red-teaming",
    description: "Simulate a sophisticated, multi-vector cyber-attack to rigorously test your people, processes, and technology defenses.",
    icon: "crosshair", // Use 'crosshair' for targeted attacks
    features: [
      "Social Engineering",
      "Physical Intrusion",
      "Network Breach Simulation"
    ]
  },
  {
    title: "Cloud Security",
    slug: "cloud-security",
    description: "Ensure your AWS, Azure, and GCP environments are secure against misconfigurations and advanced threats.",
    icon: "cloud", // Use 'cloud'
    features: [
      "Cloud Configuration Review",
      "Identity & Access Management",
      "Container Security"
    ]
  }
];

// Connect to DB and Import Data
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data to prevent duplicates
    await Service.deleteMany({});
    console.log('🗑️  Cleared existing services');

    // Insert new data
    await Service.insertMany(services);
    console.log('🌱 Database Seeded Successfully!');

    process.exit();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();