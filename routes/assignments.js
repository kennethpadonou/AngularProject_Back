
let express = require('express');
let router = express.Router();
let Assignment = require('../model/assignment');

// Récupérer tous les assignments (GET)
function getAssignments(req, res){
    Assignment.find((err, assignments) => {
        if(err){
            return res.send(err)
        }

        res.send(assignments);
    });
}

// Récupérer un assignment par son id (GET)
/*
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, assignment) =>{
        if(err){res.send(err)}
        res.json(assignment);
    })
}
*/
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, assignment) =>{
        if(err){
            return res.send(err);
        }
        res.json(assignment);
    })
}

// Ajout d'un assignment (POST)
function postAssignment(req, res){
    console.log("POST assignment reçu :");
    console.log(req.body);
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.nom = req.body.nom;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.rendu = req.body.rendu;
    assignment.idMatiere = req.body.idMatiere;
    assignment.note = req.body.note;
    assignment.auteur = req.body.auteur;
    assignment.remarques = req.body.remarques;


    console.log("POST assignment reçu :");
    console.log(assignment)

    assignment.save( (err) => {
        if(err){
            res.send('cant post assignment ', err);
        }
        res.json({ message: `${assignment.nom} saved!`})
    })
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    Assignment.findOneAndUpdate({id: req.body.id}, req.body, {new: true}, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }
    });
}

// suppression d'un assignment (DELETE)
/*
function deleteAssignment(req, res) {

    //Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        Assignment.findOneAndRemove(req.body.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${assignment.nom} deleted`});
    })
}
*/
function deleteAssignment(req, res) {
    Assignment.findOneAndRemove({ id: req.body.id }, (err, assignment) => {
        if (err) {
            res.send(err);
        } else {
            res.json({message: `${assignment.nom} deleted`});
        }
    })
}

module.exports = { getAssignments, postAssignment, getAssignment, updateAssignment, deleteAssignment };

/*
let express = require('express');
let router = express.Router();
let Assignment = require('../model/assignment');

// Récupérer tous les assignments (GET)
router.get('/', function(req, res){
    // Votre code ici
});

// Récupérer un assignment par son id (GET)
router.get('/:id', function(req, res){
    // Votre code ici
});

// Ajout d'un assignment (POST)
router.post('/', function(req, res){
    // Votre code ici
});

// Update d'un assignment (PUT)
router.put('/:id', function(req, res) {
    // Votre code ici
});

// suppression d'un assignment (DELETE)
router.delete('/:id', function(req, res) {
    // Votre code ici
});

module.exports = router;
*/