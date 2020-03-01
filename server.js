const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

const Coin = require('../reactandnode/src/server/models/Coin.model');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/expressdemo', { useNewUrlParser: true, useUnifiedTopology: true });
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const CoinRouter = require('./src/server/routes/CoinRouter');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.use('/coins', CoinRouter);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});




app.listen(port, function() {
    console.log('Node js Express js Tutorial at port', port);

    // console.log(db);
});