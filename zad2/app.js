const express = require('express');
const bodyParser = require('body-parser');

const app = express();
  
app.use(bodyParser.urlencoded({ extended: true }));


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
          <form action="/add-student" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="surname">Surname:</label><br>
            <input type="text" id="surname" name="surname"><br>
            <label for="course">Kierunek:</label><br>
            <input type="text" id="kierunek" name="kierunek"><br>
            <input type="submit" value="Submit">
          </form>

        </body>
      </html>
    `);
  });
  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

app.post('/student', (req, res) => {
    const { name, surname, kierunek } = req.body;
    students.push({ name, surname, kierunek });
    res.send(`Hello, ${name} ${surname} on ${kierunek} studies!`);
  });

app.post('/add-student', (req, res) => {
    const { name, surname, kierunek } = req.body;
    students.push({ name, surname, kierunek });
    res.send(`Hello, ${name} ${surname} on ${kierunek} studies!`);
  });



let students = [];


app.get('/students', (req, res) => {
    let studentsList = students.map(student => `<p>${student.name} ${student.surname} - ${student.kierunek}</p>`).join('');
    res.send(`<ul>${studentsList}</ul>`);
  });
  