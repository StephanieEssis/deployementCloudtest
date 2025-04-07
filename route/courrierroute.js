// backend/routes/courrierRoutes.js
const express = require('express');
const Courrier = require('../models/courrier');
const router = express.Router();


// Route pour obtenir tous les courriers
router.get( '/', async (req, res) => {
try {
const courriers = await Courrier.find();
res.json(courriers);
} catch (err) {
res.status(400).send(err);
}
});

// Route pour ajouter un courrier
router.post('/', async (req, res) => {

const { expediteur, destinataire, sujet, contenu } = req.body;
const courrier = new Courrier({ expediteur, destinataire, sujet, contenu });

try {
await courrier.save();
res.status(201).json(courrier);
} catch (err) {
res.status(400).send(err);
}
});

// Route pour modifier un courrier
router.put('/', async (req, res)  =>  {
try {
const courrier = await Courrier.findByIdAndUpdate(req.params.id, req.body, { new: true });
res.json(courrier);
} catch (err) {
res.status(400).send(err);
}
});

// Route pour supprimer un courrier
router.delete('/', async (req, res)  =>  {
try {
await Courrier.findByIdAndDelete(req.params.id);
res.status(204).send();
} catch (err) {
res.status(400).send(err);
}
});

module.exports = router;