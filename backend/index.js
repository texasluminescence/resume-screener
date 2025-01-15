// Backend (Express) example
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Configure CORS to allow requests from your frontend
app.use(cors());

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });


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

  await wait(3); 
  
  // Handle the uploaded file here
  res.json({ 
    message: 'File uploaded successfully',
    filename: req.file.filename,
    fileData: base64File,
    mimeType: req.file.mimetype
  });
});


function wait(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

app.listen(8080, () => {
  console.log('Server running on port 8080');
});