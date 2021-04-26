const mongoose = require('mongoose') 

const Schema = mongoose.Schema  

const evenementSchema = new Schema({       
    nom : {type: String, required : true},
    type: {type:String, required: true},
    NombreAttendu : {type: Number, required: true},
    date: {type:Date, required:true}
},{
    timestamps: true
})
const Evenement = mongoose.model('evenement',evenementSchema)

module.exports = Evenement