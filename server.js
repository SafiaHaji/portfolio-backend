const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Explaining CORS: This allows your frontend website to securely talk to this backend
app.use(cors());
app.use(express.json());

// Your structural data
const portfolioData = {
  profile: {
    name: "Safia Ghulam Haji",
    title: "Data Scientist & ICT Professional",
    bio: "Final-year university student specializing in data analytics, cloud tracking, and machine learning architectures."
  },
  skills: [
    "Data Analysis & Programming (R)",
    "Cloud Deployments & Infrastructure",
    "Machine Learning",
    "API Development"
  ],
  qualifications: [
    "Bachelor's Degree of Data Science(Final Academic Year(2026))",
    "Foundational Cloud Computing Architectures"
  ],
  projects: [
    {
      title: "Predictive Economic Trajectory Model",
      description: "Implemented Machine Learning pipelines to forecast structural indicators, leveraging XAI frameworks for transparent outputs."
    },
    {
      title: "Cloud Infrastructure Architecture",
      description: "Deployed a decoupled web application leveraging distributed cloud platforms for decoupled data hosting."
    }
  ],
  contact: {
    email: "safiahaji98@gmail.com",
    location: "Zanzibar, Tanzania",
    github: "https://github.com/SafiaHaji/SafiaHaji"
  }
};

// This defines the web address where your data lives
app.get('/api/portfolio', (req, res) => {
  res.json(portfolioData);
});

app.get('/', (req, res) => {
  res.send('API running perfectly.');
});

app.listen(PORT, () => {
  console.log(`Server active on port ${PORT}`);
});
