/*
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let matiere = require('./routes/matieres');
let users = require('./routes/utilisateurs');
const cors = require('cors');

app.use(cors());

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = 'mongodb+srv://toto:toto@cluster0.ccs6ez9.mongodb.net/assignments?retryWrites=true&w=majority';
const uri_eleve = 'mongodb+srv://toto:toto@cluster0.ccs6ez9.mongodb.net/eleves?retryWrites=true&w=majority';
const uri_user = 'mongodb+srv://toto:toto@cluster0.ccs6ez9.mongodb.net/utilisateurs?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

let connection1 = mongoose.createConnection(uri, options);
let connection2 = mongoose.createConnection(uri_eleve, options);
let connection3 = mongoose.createConnection(uri_user, options);

connection1
.then(() => {
  console.log("Connecté à la base MongoDB assignments dans le cloud !");
  console.log("at URI = " + uri);
  console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
},
err => {
  console.log('Erreur de connexion: ', err);
});

connection2
.then(() => {
  console.log("Connecté à la base MongoDB eleves dans le cloud !");
  console.log("at URI = " + uri_eleve);
  console.log("vérifiez with http://localhost:8010/api/eleves que cela fonctionne")
},
err => {
  console.log('Erreur de connexion: ', err);
});

connection3
.then(() => {
  console.log("Connecté à la base MongoDB utilisateurs dans le cloud !");
  console.log("at URI = " + uri_user);
  console.log("vérifiez with http://localhost:8010/api/utilisateurs que cela fonctionne")
},
err => {
  console.log('Erreur de connexion: ', err);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

const prefix = '/api';

app.route(prefix + '/assignments')
.get(assignment.getAssignments)
.post(assignment.postAssignment)
.put(assignment.updateAssignment);

app.route(prefix + '/assignments/:id')
.get(assignment.getAssignment)
.delete(assignment.deleteAssignment);

app.route(prefix + '/matieres')
.get(matiere.getMatieres);

app.route(prefix + '/utilisateurs/authenticate')
.post(users.authenticateUser);

app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;
*/



let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let matiere = require('./routes/matieres');
let users = require('./routes/utilisateurs');
const cors = require('cors');

app.use(cors());
/*
app.use(cors({
  origin: 'https://front-angular-m1-project-acc70a3593d1.herokuapp.com'
}));
*/
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
//const uri = 'mongodb+srv://mb:P7zM3VePm0caWA1L@cluster0.zqtee.mongodb.net/assignments?retryWrites=true&w=majority';
const uri = 'mongodb+srv://toto:toto@cluster0.ccs6ez9.mongodb.net/assignments?retryWrites=true&w=majority';
const uri_eleve = 'mongodb+srv://toto:toto@cluster0.ccs6ez9.mongodb.net/eleves?retryWrites=true&w=majority';
const uri_user = 'mongodb+srv://toto:toto@cluster0.ccs6ez9.mongodb.net/utilisateurs?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
.then(() => {
  console.log("Connecté à la base MongoDB assignments dans le cloud !");
  console.log("at URI = " + uri);
  console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
},
err => {
  console.log('Erreur de connexion: ', err);
});

mongoose.connect(uri_eleve, options)
.then(() => {
  console.log("Connecté à la base MongoDB assignments dans le cloud !");
  console.log("at URI = " + uri_eleve);
  console.log("vérifiez with http://localhost:8010/api/eleves que cela fonctionne")
},
err => {
  console.log('Erreur de connexion: ', err);
});
mongoose.connect(uri_user, options)
.then(() => {
  console.log("Connecté à la base MongoDB assignments dans le cloud !");
  console.log("at URI = " + uri_user);
  console.log("vérifiez with http://localhost:8010/api/utilisateurs que cela fonctionne")
},
err => {
  console.log('Erreur de connexion: ', err);
});

// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

app.route(prefix + '/assignments')
.get(assignment.getAssignments)
.post(assignment.postAssignment)
.put(assignment.updateAssignment);

app.route(prefix + '/assignments/:id')
.get(assignment.getAssignment)
.delete(assignment.deleteAssignment);


app.route(prefix + '/matieres')
.get(matiere.getMatieres);


app.route(prefix + '/utilisateurs/authenticate')
.post(users.authenticateUser);


// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;
