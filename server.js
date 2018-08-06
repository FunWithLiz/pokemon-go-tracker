const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
// const passport = require('passport');
// const session = require('express-session');

const pokemonRouter = require('./routes/pokemonRouter');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// require('./config/passport');
app.use(methodOverride('_method'));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/pokemon', pokemonRouter);

app.get('/', (req, res)=>{
    res.render('pokemon_body');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}, in ${app.get('env')} mode.`)
})

module.exports = { app };