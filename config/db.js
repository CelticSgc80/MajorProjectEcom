import mongoose from "mongoose";
import colors from "colors";
const MONGO_URL='mongodb://0.0.0.0:27017/bekery'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;
