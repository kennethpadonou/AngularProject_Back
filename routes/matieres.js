
let Matiere = require('../model/matiere');

// Récupérer tous les matiere (GET)
function getMatieres(req, res){
    debugger;
    Matiere.find((err, matieres) => {
        if(err){
            return res.send(err)
        }

        res.send(matieres);
    });
}

// Récupérer un matiere par son id (GET)
function getMatiere(req, res){
    let matiereId = req.params.id;

    Matiere.findOne({id: matiereId}, (err, matiere) =>{
        if(err){res.send(err)}
        res.json(matiere);
    })
}

// Ajout d'un matiere (POST)
function postMatiere(req, res){
    let matiere = new Matiere();
    matiere.id = req.body.id;
    matiere.nom = req.body.nom;
    matiere.dateDeRendu = req.body.dateDeRendu;
    matiere.rendu = req.body.rendu;

    console.log("POST matiere reçu :");
    console.log(matiere)

    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere.nom} saved!`})
    })
}

// Update d'un matiere (PUT)
function updateMatiere(req, res) {
    console.log("UPDATE recu matiere : ");
    console.log(req.body);
    Matiere.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, matiere) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', matiere)
    });

}

// suppression d'un matiere (DELETE)
function deleteMatiere(req, res) {

    Matiere.findByIdAndRemove(req.params.id, (err, matiere) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${matiere.nom} deleted`});
    })
}



module.exports = { getMatieres, postMatiere, getMatiere, updateMatiere, deleteMatiere };



/*
let express = require('express');
let router = express.Router();
let Matiere = require('../model/matiere');

// Récupérer tous les matiere (GET)
router.get('/', function(req, res){
    Matiere.find((err, matieres) => {
        if(err){
            return res.send(err)
        }

        res.send(matieres);
    });
});

// Récupérer un matiere par son id (GET)
router.get('/:id', function(req, res){
    let matiereId = req.params.id;

    Matiere.findOne({id: matiereId}, (err, matiere) =>{
        if(err){res.send(err)}
        res.json(matiere);
    })
});

// Ajout d'un matiere (POST)
router.post('/', function(req, res){
    let matiere = new Matiere();
    matiere.id = req.body.id;
    matiere.nom = req.body.nom;
    matiere.dateDeRendu = req.body.dateDeRendu;
    matiere.rendu = req.body.rendu;

    matiere.save( (err) => {
        if(err){
            res.send('cant post matiere ', err);
        }
        res.json({ message: `${matiere.nom} saved!`})
    })
});

// Update d'un matiere (PUT)
router.put('/:id', function(req, res) {
    Matiere.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, matiere) => {
        if (err) {
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }
    });
});

// suppression d'un matiere (DELETE)
router.delete('/:id', function(req, res) {
    Matiere.findByIdAndRemove(req.params.id, (err, matiere) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${matiere.nom} deleted`});
    })
});

module.exports = router;
*/