var mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB Connected");
    console.log(`hostname: ${connect.connection.host}`)
  } catch (error) {
    console.log(error)
  }
};

module.exports = connectDB
