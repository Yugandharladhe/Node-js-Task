const mongoose=require("mongoose");

const connectDB = async (link) => {
  const db_url = link || `mongodb://localhost:27017/task` //! local mongo db
  console.log(db_url);
   try {
    const connectionDB = await mongoose.connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    if (connectionDB) {
      console.log(
        `🚀 ~ file: mongoose.js ~ line 25 ~ connectDB ~ connectionDBConnected to MongoDB ${connectionDB.connection.host}`
      )
    } else {
      console.log('🚀 ~ file: mongoose.js ~ line 31 ~ connectDB ~ connectionDB', connectionDB)
    }
  } catch (err) {
    console.log('🚀 ~ file: mongoose.js ~ line 19 ~ connectDB ~ err', err)
  }
}
module.exports = {
  connectDB
}
