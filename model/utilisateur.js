let mongoose = require('mongoose');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
let Schema = mongoose.Schema;

let UserSchema = Schema({
    id: Number,
    login: String,
    password: String,
    admin: Boolean
});

UserSchema.plugin(aggregatePaginate);
// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Utilisateur', UserSchema);


function getUsers(req, res) {
    debugger;
    var aggregateQuery = User.aggregate();

    User.aggregatePaginate(
        aggregateQuery,
        {
            page: parseInt(req.query.page) || 1,
            limit: parseInt(req.query.limit) || 10,
        },
        (err, users) => {
            if (err) {
                res.send(err);
            }
            console.log(users);
            res.send(users);
        }
    );

}