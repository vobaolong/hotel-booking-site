const mongoose = require("mongoose");

const DBConnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(err => {
        console.log(`For some reason we couldn't connect to the DB`.red, err)
    })
    console.log(`MongoDb Connected: ${conn.connection.host}`)
}

module.exports = DBConnection