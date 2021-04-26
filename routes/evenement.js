const router = require('express').Router()
let Evenement = require('../models/evenement.model')

router.route('/').get((req,res) => {
    Evenement.find()
        .then(evenement => res.json(evenement))
        .catch( err => res.status(400).json('Error' + err))
})

router.route('/add').post((req,res)=> {
    const nom = req.body.nom
    const type = req.body.type
    const NombreAttendu = Number(req.body.NombreAttendu)
    const date = Date.parse(req.body.date)

    const newEvenement = new Evenement({nom,
                                        type,
                                        NombreAttendu,
                                        date})

    newEvenement.save()
        .then(()=> res.json('Exercice added'))
        .catch(err => res.status(400).json('Error'+err))
})

router.route('/:id').get((req,res) => {
    Evenement.findById(req.params.id)
        .then(evenement => res.json(evenement))
        .catch(err => res.status(400).json('Error' + err))
})

router.route('/:id').delete((req,res) => {
    Evenement.findByIdAndDelete(req.params.id)
        .then(() => res.json('Evenement : '+req.params.id + "deleted"))
        .catch(err => res.status(400).json("Error: " +err))
})

router.route('/update/:id').post((req,res)=> {
    Evenement.findById(req.params.id)
        .then(evenement => {
            evenement.nom= req.body.nom
            evenement.type= req.body.type
            evenement.NombreAttendu= Number(req.body.NombreAttendu)
            evenement.date= Date.parse(req.body.date)
        
    evenement.save()
        .then(()=> res.json('evenement updated'))
        .catch(err => res.status(400).json("evenement save did not work"))
    })
    .catch(err => res.status(400).json('Error: '+err ))
})

module.exports = router
