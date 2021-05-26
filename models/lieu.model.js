const mongoose = require('mongoose') ; 
var schema = new mongoose.Schema({
    name: {
        type : String ,
    },
	type: {
        type: String,
    },
	address:{
        type:String,
    },
	phoneNumber:{
        type:String, 
    },
	mail:{
        type:String,

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
    },
    img1 :{
        type:String
    },
    img2 :{
        type:String
    },
    img3 :{
        type:String
    },
    tags : {
        type:Array
    }

})

const lieu=mongoose.model('lieu',schema); 
module.exports=lieu