const Express = require('express');                                         //1.  import express

var app = new Express();                                                    //2. create new instance of express class

app.set('view engine','ejs');                                               //5. set up view engine

app.get('/login', (req,res)=>{
    res.render('login');
});

app.get('/register', (req,res)=>{
    res.render('register');
});

app.listen(3000,()=>{                                                       //3. set up listener
    console.log("server running at http://localhost:3000");                 //4. display message when server runs
});