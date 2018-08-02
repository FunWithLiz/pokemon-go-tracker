const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const passport = require('passport');
// const session = require('express-session');

const pokemonRouter = require('./routes/pokemonRouter');


const app = express();

const PORT = process.env.PORT || 3000;

// app.use(express.static('public'));

app.set('view engine', 'ejs');

// require('./config/passport');
app.use(methodOverride('__method'));
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/pokemon', pokemonRouter);

app.get('/', (req, res)=>{
    res.send(`hello world`);
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}, in ${app.get('env')} mode.`)
})

module.exports = { app };