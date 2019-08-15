const Express=require('express');

var app = new Express();

app.set('view engine', 'ejs');

app.get('/home', (req,res)=>{
    res.render('home');
});

app.get('/addBooks',(req,res)=>{
    res.render('addBooks');
});

app.get('/library',(req,res)=>{
    res.render('library');
});

app.listen(3001,()=>{
    console.log("Server running at http://localhost:3001/")
});