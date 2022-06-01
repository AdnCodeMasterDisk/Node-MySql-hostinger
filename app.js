const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const con = require('./models/conection')

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.get('/', async (req, res) => {
    let query = "SELECT * FROM Todo";
    let items = []
    con.query(query, (err, result) => {
        if (err) throw err;
        items = result
        //console.log(items)
        res.render('index', {
            items: items
        })
    })
});

app.get('/:id', (req, res) => {
    //console.log(req.params)
    let query = "DELETE FROM Todo WHERE task_id=" + req.params.id
    con.query(query, (err, result) => {
        if (err) throw err;
        //console.log(result)
        res.redirect('/')
    })
});



app.post("/", (req, res) => {
    //console.log(req.body)
    let query = "INSERT INTO Todo (task, status) VALUES ?";
    data = [
        [req.body.task, "ongoing"]
    ]
    con.query(query, [data], (err, result) => {
        if (err) throw err;
        //console.log(result)
        res.redirect('/')
    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});