console.log('hello world!');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/desserts', (req,res) => {
    console.log(req.query);
    res.json(data);
});

app.get('/desserts/:id', (req, res) => {
    console.log(req.params.id);
    const dessertsID = Number(req.params.id);
    const desserts = data.find((item)=> item.id ===dessertsID);
    console.log(desserts);
    res.json(desserts);
});
module.exports = app; 