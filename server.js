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
/* 
app.post('/contact', (req, res) => {
  const { firstName, lastName, email, message } = req.body;
  res.render('contact', {
    firstName,
    mailSent: true
  });
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'yingcathyfan@gmail.com',
    from: 'email',
    subject: 'Contact from ${firstName} ${lastName}',
    text: message
  };
  sgMail.send(msg);
}); */

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
