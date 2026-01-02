const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    help: "URL-friendly name, e.g., 'web-pentest'"
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'shield',
    help: "Lucide icon name (e.g., 'bug', 'lock', 'cloud')"
  },
  features: [{
    type: String
  }],
  isVisible: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', ServiceSchema);