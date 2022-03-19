import express from "express";
import { cors, docs, errorHandler, http, logger } from "./middlewares";
import { database } from "./providers/database";
import { routes } from "./providers/routes";
import TrackerService from "./services/trackerService";

const app = express();

//Init database
database.init();

//Configure CORS
cors.mount(app);

//Configure http
http.mount(app);

//Configure logger
logger.mount(app);

//Configure swagger
docs.mount(app);

//Configure routes
routes.init(app);

//Configure error handlers
errorHandler.mount(app);

TrackerService.initTrackers();

//Configure port
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log("server start");
});
