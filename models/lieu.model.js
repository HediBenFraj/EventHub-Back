const mongoose = require('mongoose') ; 
var schema = new mongoose.Schema({
    nom: {
        type : String ,
        required : true 
    },
	type: {
        type: String,
        required : true 
    },
	adresse:{
        type:String,
        required : true 
    },
	telephone:{
        type:String, 
        required : true 
    },
	email:{
        type:String,
        required : true 

    },
	prix: Number  

})

const lieu=mongoose.model('lieu',schema); 
module.exports=lieu