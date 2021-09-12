const mongoose = require("mongoose");

function connectDatabase() {
  mongoose.Promise = global.Promise;
  const dbMongoAtlas = `mongodb+srv://${process.env.USR_DB_ATLAS}:${process.env.PSW_DB_ATLAS}@cluster0-kzisw.gcp.mongodb.net/test?retryWrites=true&w=majority`;
  const dbUrlVPS = `mongodb://${process.env.USR_DB_VPS}:${process.env.PSW_DB_VPS}@${process.env.HOST_VPS}:${process.env.PORT_VPS_MONGO}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
  const dbUrlDev = `mongodb://${process.env.USR_DB_DEV}:${process.env.PWD_DB_DEV}@${process.env.HOST_LOCAL_MONGO}:${process.env.PORT_LOCAL_MONGO}/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
  let dbConnect = "";

  process.env.NODE_ENV = process.env.NODE_ENV || "dev";
  if (process.env.NODE_ENV == "dev") {
    dbConnect = dbUrlVPS;
  } else {
    dbConnect = dbUrlVPS;
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
