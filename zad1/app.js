const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>HOME</title>
        </head>
        <body>
          <p>HOME</p>
        </body>
      </html>
    `);
  });
  
  app.get('/student', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>STUDENT</title>
        </head>
        <body>
          <p>STUDENT</p>
        </body>
      </html>
    `);
  });
  
  app.get('/add-student', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>ADD STUDENT</title>
        </head>
        <body>
          <p>ADD STUDENT</p>
        </body>
      </html>
    `);
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  