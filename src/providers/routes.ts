import { Application } from "express";
import { RegisterRoutes } from "../../build/routes";

class Routes {
  public init(app: Application) {
    RegisterRoutes(app);
  }
}

export const routes = new Routes();
