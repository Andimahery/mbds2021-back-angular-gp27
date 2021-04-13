let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MatiereSchema = Schema({
    id: Number,
    nom: String,
    img: {
        data: Buffer,
        contentType: String
    },
    prof: {
        id: Number,
        nom: String,
        img: {
            data: Buffer,
            contentType: String
        }
    }
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Matiere', MatiereSchema);
