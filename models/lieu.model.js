const mongoose = require('mongoose') ; 
var schema = new mongoose.Schema({
    name: {
        type : String ,
        required : true 
    },
	type: {
        type: String,
        required : true 
    },
	address:{
        type:String,
        required : true 
    },
	phoneNumber:{
        type:String, 
        required : true 
    },
	mail:{
        type:String,
        required : true 

    },
	prix:{
        type: String
    },
    websiteUrl:{
        type:String
    },
    menuUrl:{
        type:String
    },
    avisNumber:{
        type:String
    },
    avisNote:{
        type:String
    },
    cuisines :{
        type:String
    } 

})

const lieu=mongoose.model('lieu',schema); 
module.exports=lieu