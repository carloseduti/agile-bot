const mongoose = require('mongoose')
const URI = 'mongodb+srv://root:senha_da_nasa@agilebot.22g61.mongodb.net/db02?retryWrites=true&w=majority'

const connectDB = async () =>{
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('Conectado ao Banco MongoDB')
}

module.exports = connectDB;