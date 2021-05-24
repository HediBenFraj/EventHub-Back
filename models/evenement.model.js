const mongoose = require('mongoose') 

const Schema = mongoose.Schema  

const evenementSchema = new Schema({       
    name : {type: String, required : true},
    type: {type:String, required: true},
    category : {type:String, required: true},
    organizerEmail : {type:String, required: true},
    organizerFirstName: {type:String, required: true},
    organizerLastName : {type:String, required: true},
    startDate : {type:String, required: true},
    endDate : {type:String, required: true},
    numberOfAttendees : {type:String, required: true},
    reservations : {type: Array}
},{
    timestamps: true
})
const Evenement = mongoose.model('evenement',evenementSchema)

module.exports = Evenement