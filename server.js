//npm install all the necessary dependencies

const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const pokemonRouter = require('./routes/pokemonRouter');

const app = express();

//setup PORT
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

//Set up VIEWS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//method-override so we can delete
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/pokemon', pokemonRouter);

//homepage
app.get('/', (req, res)=>{
    res.render('pokemon_body');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}, in ${app.get('env')} mode.`)
})

module.exports = { app };