/*
let Eleve = require('../model/eleve');

// Récupérer tous les eleve (GET)
function getEleves(req, res){
    debugger;
    Eleve.find((err, eleves) => {
        if(err){
            return res.send(err)
        }

        res.send(eleves);
    });
}

// Récupérer un eleve par son id (GET)
function getEleve(req, res){
    let eleveId = req.params.id;

    Eleve.findOne({id: eleveId}, (err, eleve) =>{
        if(err){res.send(err)}
        res.json(eleve);
    })
}

// Ajout d'un eleve (POST)
function postEleve(req, res){
    let eleve = new Eleve();
    eleve.id = req.body.id;
    eleve.nomComplet = req.body.nomComplet;

    console.log("POST eleve reçu :");
    console.log(eleve)

    eleve.save( (err) => {
        if(err){
            res.send('cant post eleve ', err);
        }
        res.json({ message: `${eleve.nomComplet} saved!`})
    })
}

// Update d'un eleve (PUT)
function updateEleve(req, res) {
    console.log("UPDATE recu eleve : ");
    console.log(req.body);
    Eleve.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, eleve) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', eleve)
    });

}

// suppression d'un eleve (DELETE)
function deleteEleve(req, res) {

    Eleve.findByIdAndRemove(req.params.id, (err, eleve) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${eleve.nomComplet} deleted`});
    })
}

module.exports = { getEleves, postEleve, getEleve, updateEleve, deleteEleve };
*/












/*
let express = require('express');
let router = express.Router();
let Eleve = require('../model/eleve');

// Récupérer tous les eleve (GET)
router.get('/', function(req, res){
    Eleve.find((err, eleves) => {
        if(err){
            return res.send(err)
        }

        res.send(eleves);
    });
});

// Récupérer un eleve par son id (GET)
router.get('/:id', function(req, res){
    let eleveId = req.params.id;

    Eleve.findOne({id: eleveId}, (err, eleve) =>{
        if(err){res.send(err)}
        res.json(eleve);
    })
});

// Ajout d'un eleve (POST)
router.post('/', function(req, res){
    let eleve = new Eleve();
    eleve.id = req.body.id;
    eleve.nomComplet = req.body.nomComplet;

    eleve.save( (err) => {
        if(err){
            res.send('cant post eleve ', err);
        }
        res.json({ message: `${eleve.nomComplet} saved!`})
    })
});

// Update d'un eleve (PUT)
router.put('/:id', function(req, res) {
    Eleve.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, eleve) => {
        if (err) {
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }
    });
});

// suppression d'un eleve (DELETE)
router.delete('/:id', function(req, res) {
    Eleve.findByIdAndRemove(req.params.id, (err, eleve) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${eleve.nomComplet} deleted`});
    })
});

module.exports = router;
*/