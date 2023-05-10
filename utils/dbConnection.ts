const mongoose = require("mongoose");
// const {log} = require('../utils/helpers/logger')

// exports.connect = (app,database) => {
export const connect = () =>{
  const options = {
    useNewUrlParser: true,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
  };
  const connectWithRetry = () => {
    mongoose.Promise = global.Promise;
    console.log("MongoDB connection with retry");
    mongoose
      .connect('mongodb://127.0.0.1:27017/carenta', options)
      .then(() => {
        console.log("MongoDB is connected");
      })
      .catch((error: any) => {
        console.log("MongoDB connection unsuccessful, retry after 2 seconds.", error);
        setTimeout(connectWithRetry, 2000);
      });
  };
  connectWithRetry();
};
