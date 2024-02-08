
import connectDB from "./db/index.js";

connectDB();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("err:",error);
//         throw error
//     })
// } catch (error) {
//     console.error("Error", error);
//     throw error;
//   }
// })();
