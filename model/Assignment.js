let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    matiere: {
        id: Number,
        matiere: String,
        pathImage: String,
        prof: {
            nomProfesseur: String,
            pathProfesseur: String
        }
    },
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
<<<<<<< HEAD
    note:Number,
    remarque:String
=======
    note: Number,
    remarque: String,
    auteur: String
>>>>>>> 7738182172e41ce862e35bfee874930d86b3f6f5
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
