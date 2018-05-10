const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

var port = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('views', './views/pages');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/references/:project', (req, res) => {
  res.render(`references/${req.params.project}`);
});

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
