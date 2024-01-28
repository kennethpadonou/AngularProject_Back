
let User = require('../model/utilisateur');

// Récupérer tous les users (GET)
function getUsers(req, res){
    debugger;
    user.find((err, users) => {
        if(err){
            return res.send(err)
        }

        res.send(users);
    });
}

// Récupérer un user par son id (GET)
function getUser(req, res){
    let userId = req.params.id;

    User.findOne({id: userId}, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}

// Ajout d'un user (POST)
function postUser(req, res){
    let user = new User();
    user.id = req.body.id;
    user.login = req.body.login;
    user.password = req.body.password;

    console.log("POST user reçu :");
    console.log(user)

    user.save( (err) => {
        if(err){
            res.send('cant post user ', err);
        }
        res.json({ message: `${user.nom} saved!`})
    })
}

// Update d'un user (PUT)
function updateUser(req, res) {
    console.log("UPDATE recu user : ");
    console.log(req.body);
    User.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, user) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', user)
    });

}

// suppression d'un user (DELETE)
function deleteUser(req, res) {

    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${user.nom} deleted`});
    })
}

// Authentification d'un utilisateur (POST)
function authenticateUser(req, res){
    let username = req.body.username;
    let password = req.body.password;

    User.findOne({login: username, password: password}, (err, user) =>{
        if(err){
            res.send(err);
        } else if(user) {
            res.json(user);
        } else {
            res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
    })
}





module.exports = { getUsers, postUser, getUser, updateUser, deleteUser, authenticateUser };



