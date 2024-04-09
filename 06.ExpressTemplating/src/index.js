const express = require('express');
const handlebards = require('express-handlebars');
const path = require('path');
const routs = require('./routs');
const router = require('./routs');

const app = express();
const port = 5000;

app.engine('hbs', handlebards.engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port,
    ()=> console.log(`server is listening on ${port}...`)
    );