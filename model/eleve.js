/*
let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let EleveSchema = Schema({
    id: Number,
    nomComplet: String,
    idEleve: Number,
});

EleveSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Eleve', EleveSchema);

function getEleves(req, res) {
    debugger;
    var aggregateQuery = Eleve.aggregate();

    Eleve.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, eleves) => {
            if (err) {
                res.send(err);
            }
            console.log(eleves);
            res.send(eleves);
        }
    );

}
*/















/*
let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;
let express = require('express');
let router = express.Router();

let EleveSchema = Schema({
    id: Number,
    nomComplet: String,
    idEleve: Number,
});

EleveSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
let Eleve = mongoose.model('Eleve', EleveSchema);

router.get('/', function(req, res) {
    var aggregateQuery = Eleve.aggregate();

    Eleve.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, eleves) => {
            if (err) {
                res.send(err);
            }
            console.log(eleves);
            res.send(eleves);
        }
    );
});

module.exports = router;
*/