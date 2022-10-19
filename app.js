const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'));
const publicPath = path.resolve(__dirname, '/public')
app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/register.html'))
});

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/login.html'))
});

app.post('/login', function (req, res) {
    return res.sendFile(req.body)
})


