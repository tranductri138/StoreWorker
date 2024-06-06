const mongoose = require('mongoose')

const connectDB = async () => {
  try{
   await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
