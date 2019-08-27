let express = require('express');
let app = express();

//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//Setup the static assets directories
app.use(express.static('images'));
app.use(express.static('css'));

let db = [];


app.get('/', function (req, res) {
    res.render('index.html', {
    });
});
app.get('/addnew', function (req, res) {
    res.render('addnew.html', {});
});

app.get('/listall', function (req, res) {
    res.render('listall.html',{db:db});
});



app.post('/data', function (req, res) {
    console.log(req.body);
    console.log(req.body.TaskDue);
    console.log(req.body.TaskDesc); 
    
    db.push(req.body)
    res.render('addnew.html')
})   
console.log("try github")

app.listen(8080);