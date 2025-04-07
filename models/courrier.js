// backend/models/Courrier.js
const mongoose = require('mongoose');

const courrierSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  expediteur: { type: String, required: true },
  destinataire: { type: String, required: true },
  sujet: { type: String, required: true },
  contenu: { type: String, required: true },
  statut: { type: String, default: 'Non lu' } // 'Non lu', 'Lu', 'Archivé'
});

module.exports = mongoose.model('Courrier', courrierSchema);