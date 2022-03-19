import configureCors, { CorsOptions } from "cors";
import { Application } from "express";

class CORS {
  public mount(app: Application): Application {
    const allowedOrigins = (process.env.ALLOWED_ORIGINS || "").split(",");
    const options: CorsOptions = {
      origin: allowedOrigins,
    };
    app.use(configureCors());
    return app;
  }
}

export const cors = new CORS();
