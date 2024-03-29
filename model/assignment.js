let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    idMatiere: Schema.Types.ObjectId,
    auteur: String,
    note: Number,
    remarques: String,

});

AssignmentSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);


function getAssignments(req, res) {
    debugger;
    var aggregateQuery = Assignment.aggregate();

    Assignment.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, assignments) => {
            if (err) {
                res.send(err);
            }
            console.log(assignments);
            res.send(assignments);
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