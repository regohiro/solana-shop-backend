import { Application } from "express";
import morgan from "morgan";

class Logger {
  public mount(app: Application): Application {
    switch (process.env.MODE) {
      case "DEV":
        app.use(morgan("dev"));
        break;
      case "PROD":
        app.use(morgan("common"));
        break;
      default:
        app.use(morgan("tiny"));
    }
    return app;
  }
}

export const logger = new Logger();
