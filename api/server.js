const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/burrito-bets", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));

// grab the bet model in models/Bets.js
const Bet = require('./models/Bets');

app.get('/bets', async (req, res) => {
    const bets = await Bet.find();
    res.json(bets);
});

app.post('/bets/new', (req, res) => {
    const newBet = new Bet({
        id: req.body.id,
        betDescription: req.body.betDescription,
        bettor1: req.body.bettor1,
        bettor2: req.body.bettor2,
        winner: req.body.winner
    });
    newBet.save()
    // .then(() => res.json('Bet added!'))
    res.json(newBet)
})

app.delete('/bets/delete/:id', async (req, res) => {
    const deleteBet = await Bet.findByIdAndDelete(req.params.id);

    res.json(deleteBet);
})

app.listen(3001, () => console.log("Server is running on port 3001..."));