const mongoose = require('mongoose')

//connecting to database
mongoose.set('strictQuery', true);
async function connectdb() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is connected");
    } catch (err) {
        console.log(`Error in connecting database and error is ${err}`);
    }
}
module.exports = connectdb