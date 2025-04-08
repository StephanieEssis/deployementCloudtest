const mongoose = require('mongoose')
const mongoDbconnexion = async() => {
    
        try {
            await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
            console.log("✅ Connexion réussie à MongoDB Atlas");
        } catch (error) {
            console.error("❌ Erreur lors de la connexion à MongoDB :", error.message);
        }
        };

module.exports= mongoDbconnexion