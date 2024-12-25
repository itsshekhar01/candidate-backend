const express = require('express');
const cors = require('cors');
const app = express();

// Use the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Hardcoded list of 10 candidates
const candidates = [
  { id: 1, name: 'Shubham', skills: 'JavaScript, React', experience: 3 },
  { id: 2, name: 'Shashank', skills: 'Node.js, Express', experience: 4 },
  { id: 3, name: 'Shivam', skills: 'Python, Django', experience: 2 },
  { id: 4, name: 'David', skills: 'Java, Spring', experience: 5 },
  { id: 5, name: 'Deepak', skills: 'JavaScript, Node.js', experience: 3 },
  { id: 6, name: 'Frank', skills: 'C++, Python', experience: 6 },
  { id: 7, name: 'Gaurav', skills: 'Java, Android', experience: 4 },
  { id: 8, name: 'Hari', skills: 'React, Redux', experience: 2 },
  { id: 9, name: 'Ira', skills: 'Go, Docker', experience: 5 },
  { id: 10, name: 'John', skills: 'Ruby, Rails', experience: 7 },
];

// Middleware to prettify JSON responses
app.set('json spaces', 2);

// Route for serving HTML content
app.get('/', (req, res) => {
  const tableRows = candidates
    .map(
      (candidate) => `
      <tr>
        <td>${candidate.name}</td>
        <td>${candidate.skills}</td>
        <td>${candidate.experience}</td>
      </tr>
    `
    )
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Candidate List</title>
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
        }
      </style>
    </head>
    <body>
      <h1>Candidate List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </body>
    </html>
  `;

  res.send(html);
});

// Endpoint to get candidates data in JSON format
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
