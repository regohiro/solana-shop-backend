import { Controller, Get, Route, Tags } from "tsoa";
import ShopService from "../services/shopService";

@Route("/")
@Tags("Shop")
export class ShopController extends Controller {
  @Get("/shops")
  public async getAllShops(): Promise<string[]> {
    return this.service.getAllShops();
  }

  private get service() {
    return new ShopService();
  }
}
