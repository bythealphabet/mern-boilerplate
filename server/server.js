import app from "./express";
import mongoose from "mongoose";
import config from "../config/config";

main();

async function main() {
  try {
    await mongoose.connect(config.mongoUri);
    await app.listen(config.port);
    await console.log("Server is listening on PORT:", config.port);
  } catch (error) {
    console.log("Error Mongoose Connection:", error);
  }
}
