// Backend (Express) example
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

// Configure CORS to allow requests from your frontend
app.use(cors({
    origin: '*', // For testing only - make this more specific in production
  }));

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/upload', upload.single('file'), (req, res) => {

  console.log("reached this endpoint");
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  // Handle the uploaded file here
  res.json({ 
    message: 'File uploaded successfully',
    filename: req.file.filename 
  });
});

app.listen(6000, () => {
  console.log('Server running on port 6000');
});