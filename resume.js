const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs-extra');

const router = express.Router();

// store uploads in /server/uploads
const upload = multer({ dest: path.join(__dirname, '..', 'uploads') });

router.post('/upload', upload.single('resume'), async (req, res) => {
  try {
    const file = req.file;
    const role_target = req.body.role_target || 'Software Engineer';

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 🔥 Always return a fake analysis for now so your frontend works
    const canned = {
      sections: {
        education: "B.Tech CSE — XYZ University (2024)",
        experience: "Intern at ABC Corp",
        skills: "React, Node.js, MongoDB, Python"
      },
      score: 78,
      improvements: [
        "Add metrics to your project descriptions.",
        "Make skills section more structured.",
        "Reduce resume length to 1 page."
      ],
      tailored_bullets: [
        "Built and deployed REST APIs using Node.js",
        "Optimized backend queries improving performance by 30%",
        "Designed UI components using React and CSS"
      ],
      keywords: ["Node.js", "React", "API", "JavaScript", "MongoDB"]
    };

    return res.json({
      ok: true,
      analysis: canned,
      filename: file.originalname,
      role_target
    });

  } catch (err) {
    console.error("resume upload error", err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;

