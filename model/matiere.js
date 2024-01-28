let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    idMatiere: Number,
});

MatiereSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Matiere', MatiereSchema);


function getMatieres(req, res) {
    debugger;
    var aggregateQuery = Matiere.aggregate();

    Matiere.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, matieres) => {
            if (err) {
                res.send(err);
            }
            console.log(matieres);
            res.send(matieres);
            //res.status(200).json(result);
           /* res.status(200).json({
                assignments: result.docs,  
                totalDocs: result.totalDocs,
                totalPages: result.totalPages,
            });
            */
        }
    );

}