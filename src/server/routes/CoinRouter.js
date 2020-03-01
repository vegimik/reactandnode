const express = require('express');
const appRoute = express();
const CoinRouter = express.Router();
const Coin = require('../models/Coin.model');



// CoinRouter.route('/').get(function(req, res) {
//     Coin.find(function(err, coins) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('index', { coins: coins });
//             res.json({'coins':coins})
//         }
//     });
// });

appRoute.get('/', function (req, res) {
    Coin.find(function(err, coins) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({'coins':coins})
                }
            });
});

// CoinRouter.route('/create').get(function(req, res) {
//     debugger;
//     res.render('create');
// });

// CoinRouter.route('/post').post(function(req, res) {
//     debugger;
//     const coin = new Coin(req.body);
//     console.log(req.body);
//     console.log(coin);
//     coin.save()
//         .then(coin => {
//             res.redirect('/coins');
//             res.json({'coin':coin});
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
// });


appRoute.post('/post', function (req, res) {
    debugger;
    const coin = new Coin(req.body);
    console.log(req.body);
    console.log(coin);
    coin.save()
        .then(coin => {
            res.json({ 'coin': coin });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// CoinRouter.route('/edit/:id').get(function(req, res) {
//     const id = req.params.id;
//     Coin.findById(id, function(err, coin) {
//         res.render('edit', { coin: coin });
//         res.json(coin);
//     });
// });


// CoinRouter.route('/edit/:id').get(function(req, res) {
//     const id = req.params.id;
//     Coin.findById(id, function(err, coin) {
//         res.render('edit', { coin: coin });
//         res.json(coin);
//     });
// });


appRoute.get('/edit/:id', function (req, res) {
    const id = req.params.id;
    Coin.findById(id, function (err, coin) {
        res.json(coin);
    });
});


// CoinRouter.route('/update/:id').post(function(req, res) {
//     Coin.findById(req.params.id, function(err, coin) {
//         if (!coin)
//             return next(new Error('Could not load Document'));
//             console.log('error');
//         else {
//             do your updates here
//             coin.name = req.body.name;
//             coin.price = req.body.price;

//             coin.save().then(coin => {
//                     res.redirect('/coins');
//                 })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });


appRoute.post('/update/:id', function (req, res) {
    Coin.findById(req.params.id, function (err, coin) {
        if (!coin) {
            return console.error();
        }
        else {
            // do your updates here
            coin.name = req.body.name;
            coin.price = req.body.price;

            coin.save().then(coin => {
                res.json('/coins');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});


// CoinRouter.route('/delete/:id').get(function(req, res) {
//     Coin.findByIdAndRemove({ _id: req.params.id },
//         function(err, coin) {
//             if (err) res.json(err);
//             else res.redirect('/coins');
//         });
// });

appRoute.get('/delete/:id', function(req, res) {
    Coin.findByIdAndRemove({ _id: req.params.id },
        function(err, coin) {
            if (err) res.json(err);
            else res.json('/coins');
        });
});




module.exports = appRoute;