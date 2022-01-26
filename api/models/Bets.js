const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BetSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    betDescription: {
        type: String,
        required: false
    },
    bettor1: {
        type: String,
        required: false
    },
    bettor2: {
        type: String,
        required: false
    },
    winner: {
        type: String,
        required: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})

const Bet = mongoose.model('Bet', BetSchema);

module.exports = Bet;