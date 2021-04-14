let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AssignmentSchema = Schema({
    id: Number,
    idMatiere:String,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    note:Number,
    remarque:String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Assignment', AssignmentSchema);
