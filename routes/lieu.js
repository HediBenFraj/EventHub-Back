const router = require('express').Router() 
let Lieu = require('../models/lieu.model') 


router.route('/').get((req,res) => {   
    const params = req.query
    console.log(params)
    Lieu.find()                         
        .then(lieu => {
            const lieus =lieu
            const filteredLieus = lieus.filter(element => element.address.toUpperCase().includes(params.address.toUpperCase()) )
            
            res.json(filteredLieus)})    
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

router.route('/hotels/add').post((req,res)=>{


    let added = 0
    let lieu
    req.body.forEach(element =>{
        lieu = new Lieu({
            name:element.title,
            address:element.address,
            avisNumber:element.note,
            prix:element.prix,
            img1:element.img1,
            type:"HOTELS"
        })

        console.log(lieu)
        lieu.save()
            .then(res=> {
                added = added +1
            })

    })
    res.status(200).json(`${added} Lieux de type HOTEL added`)

})

router.route('/hotels/number').get((req,res)=>{
    Lieu.find()
        .then(lieus => res.json(lieus.length))
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

router.route('/get/').get((req,res) => {   
    Lieu.find()                         
        .then(lieu => res.json(lieu))    
        .catch( err => res.status(400).json('Error' + err)) 
})


module.exports = router    