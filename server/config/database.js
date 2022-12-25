import mongoose from "mongoose";
mongoose.set('strictQuery', true);
export const connectDB = async () => {
  const { connection }= await mongoose.connect(process.env.MONGO_URI)
  // .then(()=>console.log(`mongoDb is Connected ${connection.host}`))
  // .catch(()=>console.log(`MongoDb is NOT Connected!`))
  console.log(`Mongodb is CONNECTED with ${connection.host}`);
  
};
