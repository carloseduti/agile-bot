const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI;

const connectDB = async () =>{
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Conectado ao Banco MongoDB')
}

module.exports = connectDB;