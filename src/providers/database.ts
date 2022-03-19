import mongoose from "mongoose";

class Database {
  public init() {
    this.initMongodb()
      .then(() => {
        console.log("Database connected");
      })
      .catch((error) => {
        console.error(error);
        process.exit(1);
      });
  }

  private async initMongodb() {
    mongoose.Promise = global.Promise;
    await mongoose.connect(this.mongoUrl, this.mongoAuth);
  }

  private get mongoUrl() {
    const mongoUrl =
      process.env.DB_LOCALHOST === "true"
        ? process.env.MONGO_URL || ""
        : "mongodb://" +
          process.env.COSMOSDB_HOST +
          ":" +
          process.env.COSMOSDB_PORT +
          "/" +
          process.env.COSMOSDB_DBNAME +
          "?ssl=true&replicaSet=globaldb&retrywrites=false";
    return mongoUrl;
  }

  private get mongoAuth() {
    const mongoAuth =
      process.env.DB_LOCALHOST === "true"
        ? undefined
        : {
            auth: {
              username: process.env.COSMOSDB_USER,
              password: process.env.COSMOSDB_PASSWORD,
            },
          };
    return mongoAuth;
  }
}

export const database = new Database();
