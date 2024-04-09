const express = require('express');
const handlebards = require('express-handlebards');
const path = require('path');

const app = express();
const port = 5000;

app.engine('hbs', handlebards.engine({
    extname: 'hbs',
})).set('views',path.join(__dirname, 'views'));

app.get('/',(req, res) => {
    res.render('home',{layout: false});
});

app.listen(port,
    ()=> console.log(`server is listening on ${port}...`)
    );