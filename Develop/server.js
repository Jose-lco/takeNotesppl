const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + 'notes.html'));
});
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname + 'db' + 'db.json')));
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    fs.appendFileSync('./db/db.json', newNote);
    console.log(newNote);
})
app.listen(PORT, () => {
    console.log(`This server is listening on port ${PORT}`)
})