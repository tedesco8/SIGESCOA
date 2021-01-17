import mongoose from 'mongoose';
function connectDatabase() {
    mongoose.Promise = global.Promise;
    const dbUrl = `mongodb+srv://${process.env.USR_DB}:${process.env.PSW_DB}@cluster0-kzisw.gcp.mongodb.net/test?retryWrites=true&w=majority`
    let dbConnect = "";
  
    process.env.NODE_ENV = process.env.NODE_ENV || "dev";
    if (process.env.NODE_ENV == "dev") {
      dbConnect = dbUrl;
    } else {
      dbConnect = dbUrl;
    }
  
    mongoose
      .connect(dbConnect, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then((mongoose) => console.log("Conectado a la base de datos"))
      .catch((err) => console.log(err));
  }
  
  module.exports = {
    connectDatabase,
  };