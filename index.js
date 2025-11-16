console.log("DEBUG: starting server file (index.js)");

const express = require('express');
const cors = require('cors');
const resumeRouter = require('./routes/resume');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/resumes', resumeRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
