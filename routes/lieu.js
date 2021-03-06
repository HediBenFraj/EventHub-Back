const router = require('express').Router() 
let Lieu = require('../models/lieu.model') 


router.route('/').get((req,res) => {     
    Lieu.find()                         
        .then(lieu => res.json(lieu))    
        .catch( err => res.status(400).json('Error' + err)) 
})

router.route('/add').post((req,res)=> {           
    const nom = req.body.nom
    const type = req.body.type
    const adresse = req.body.adresse
    const telephone = req.body.telephone
    const email = req.body.email
    const prix = parseFloat(req.body.prix)
    const newLieu = new User({nom,
                              type,
                              adresse,
                              telephone,
                              email,
                              prix})        

    newLieu.save()                              
        .then(()=> res.json('lieu added'))
        .catch(err => res.status(400).json('Error'+err))
})

router.route('/:id').get((req,res)=> {              
    Lieu.findById(req.params.id)                  
        .then(lieu => res.json(lieu))             
        .catch(err => res.status(400).json("Error :"+err))
})

router.route('/:id').delete((req,res) => {   
    Lieu.findByIdAndDelete(req.params.id)      
        .then(()=> res.json('lieu deleted'))         
        .catch(err => res.status(400).json("Error : "+err))
})

router.route('/update/:id').post((req,res)=> {   
    Lieu.findById(req.params.id)            
        .then(lieu => {
            lieu.nom = req.body.nom
            lieu.type = req.body.type
            lieu.adresse = req.body.adresse
            lieu.telephone = req.body.telephone
            lieu.email = req.body.email
            lieu.prix = parseFloat(req.body.prix)
 
            lieu.save()                            
                .then(()=> res.json('lieu Updated'))
                .catch(err => res.status(400).json("Error : "+err))
        })
        .catch(err => res.status(400).json('Error : ' +err))
})

module.exports = router    