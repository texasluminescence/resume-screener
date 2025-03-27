// Backend (Express) example
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Configure CORS to allow requests from your frontend
app.use(cors());

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

const genAI = new GoogleGenerativeAI("AIzaSyDv7AC-LZdGo_PzrkQysqgg97eqgURu2Uc");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/upload', upload.single('file'), async (req, res) => {

  console.log("reached this endpoint");
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Read the file and convert to base64
  const fileData = fs.readFileSync(req.file.path);
  const base64File = fileData.toString('base64');

  const inputString = 
  "You are a highly skilled ATS system with expertise in tech fields like software engineering, data science, " +
  "and big data. Your task is to evaluate resumes with the following rubric:\n" +

  "formatAndStyle: { " +
  '"Poor": "Multiple formatting issues, inconsistent spacing, poor organization, and numerous typos/errors. ' +
  'Length is inappropriate for experience level.", ' +
  '"Fair": "Basic formatting with some inconsistencies. Contains a few typos or grammatical errors. Layout could ' +
  'be more professional. Some sections may be too lengthy or brief.", ' +
  '"Good": "Clean, professional formatting with consistent spacing and organization. Minor formatting issues. ' +
  'Appropriate length with clear section headings.", ' +
  '"Excellent": "Exceptional formatting with perfect consistency. No errors. Outstanding use of white space and ' +
  'organization. Highly professional appearance with strategic emphasis on key information." },\n' +

  "experience: { " +
  '"Poor": "Work history is unclear or poorly described. Lacks quantifiable achievements. Job descriptions are ' +
  'vague or missing. No clear career progression.", ' +
  '"Fair": "Basic job descriptions present but lacks strong achievement metrics. Some career progression shown. ' +
  'Descriptions could be more specific and impactful.", ' +
  '"Good": "Clear work history with specific responsibilities and some quantifiable achievements. Shows career ' +
  'progression. Action verbs used effectively.", ' +
  '"Excellent": "Outstanding achievement descriptions with strong metrics. Clear progression and growth. ' +
  'Excellent use of action verbs and industry-specific language. Highly relevant experience highlighted ' +
  'strategically." },\n' +

  "skills: { " +
  '"Poor": "Skills section is missing or severely lacking. Skills mentioned don\'t align with job requirements. ' +
  'No evidence of technical or soft skills.", ' +
  '"Fair": "Basic skills listed but lacks organization. Some relevant skills included but missing key ' +
  'industry-specific skills. Limited demonstration of skill proficiency.", ' +
  '"Good": "Well-organized skills section with good mix of technical and soft skills. Most relevant skills ' +
  'included. Clear indication of proficiency levels.", ' +
  '"Excellent": "Comprehensive skills section perfectly aligned with industry requirements. Excellent balance ' +
  'of technical and soft skills. Clear expertise levels. Skills strategically placed and demonstrated ' +
  'throughout resume." },\n' +

  "education: { " +
  '"Poor": "Education section is incomplete or missing key information. Lacks relevant certifications or ' +
  'coursework. Dates missing or unclear.", ' +
  '"Fair": "Basic education information included but could be better organized. Some relevant certifications ' +
  'listed. Minimal detail about coursework or achievements.", ' +
  '"Good": "Clear education history with relevant details. Includes pertinent certifications and training. ' +
  'Academic achievements noted where relevant.", ' +
  '"Excellent": "Outstanding presentation of educational background. Highly relevant certifications and ' +
  'training highlighted. Strategic inclusion of academic honors and relevant coursework. Education section ' +
  'perfectly tailored to target role." }\n' +

  "Return a JSON response with the following format:\n" +
  "{\n" +
  '  "formatAndStyle": { "Poor", "Fair", "Good", "Excellent" },\n' +
  '  "experience": { "Poor" , "Fair", "Good", "Excellent" },\n' +
  '  "skills": { "Poor", "Fair", "Good", "Excellent" },\n' +
  '  "education": { "Poor", "Fair", "Good", "Excellent" }\n' +
  "}" +
  "Example: " +
  "{\n" +
  '  "formatAndStyle": { "Poor"},\n' +
  '  "experience": {  "Good" },\n' +
  '  "skills": {  "Fair" },\n' +
  '  "education": {"Excellent"}\n' +
  "}"; 

  const result = await model.generateContent([
    {
        inlineData: {
            data: base64File,
            mimeType: "application/pdf",
        },
    },
    inputString,
  ]);


  const cleanedString = result.response.text().replace(/```json|\n```/g, '').trim();
  // Handle the uploaded file here
  const cleanedJSON = JSON.parse(cleanedString) 

  res.json({ 
    fileData: base64File,
    mimeType: req.file.mimetype,
    results: cleanedJSON, 
  });

});


function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

app.listen(8080, () => {
  console.log('Server running on port 8080');
});