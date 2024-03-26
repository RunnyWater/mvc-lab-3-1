const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
  
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Request ${req.method} on path ${req.path} ${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/home.html'));
  });
  
app.get('/student', (req, res) => {
  res.sendFile(path.join(__dirname, './views/student.html'));
  });
  
app.get('/add-student', (req, res) => {
  res.sendFile(path.join(__dirname, './views/add-student.html'));
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
  
app.use(express.static('public'));


  