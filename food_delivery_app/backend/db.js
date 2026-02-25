const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const mongoDB = async()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log('COnnected Successfully');
        
    } catch (error) {
        console.log('error in connecting',error.message);
        
    }
}
 module.exports = mongoDB;