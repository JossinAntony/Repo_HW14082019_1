const Express=require('express');

var app = new Express();

app.set('view engine', 'ejs');

var library=[
    {
        "Title":"Pride & Prejudice",
        "Author":"Jane Austen",
        "Publisher": "T. Egerton, Whitehall",
        "Year": "1813"
    },
    {
        "Title":"Never Let Me Go",
        "Author":"Kazuo Ishiguro",
        "Publisher": "Faber and Faber",
        "Year": "2005"
    },
    {
        "Title":"Beloved",
        "Author":"Toni Morrison",
        "Publisher": "Alfred A. Knopf Inc.",
        "Year": "1987"
    },
    {
        "Title":"Things Fall Apart",
        "Author":"Chinua Achebe",
        "Publisher": "William Heinemann Ltd.",
        "Year": "1958"
    },
    {
        "Title":"Frankenstein",
        "Author":"Mary Shelly",
        "Publisher": "Lackington, Hughes, Harding, Mavor & Jones",
        "Year": "1818"
    },
    {
        "Title":"The God of Small things",
        "Author":"Arundhati Roy",
        "Publisher": "IndiaInk, India",
        "Year": "1997"
    },
    {
        "Title":"To Kill a Mocking Bird",
        "Author":"Harper Lee",
        "Publisher": "J. B. Lippincott & Co.",
        "Year": "1960"
    },
    {
        "Title":"The Great Gatsby",
        "Author":"F. Scott Fitzgerald",
        "Publisher": "Charles Scribner's Sons",
        "Year": "1925"
    },
    {
        "Title":"The Handmaid’s Tale",
        "Author":"Margaret Atwood",
        "Publisher": "McClelland and Stewart",
        "Year": "1985"
    },
    {
        "Title":"All About Love",
        "Author":"Bell Hooks",
        "Publisher": "Harper",
        "Year": "2000"
    }
];

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