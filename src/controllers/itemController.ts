import { Controller, Get, Query, Route, Tags } from "tsoa";
import ItemService, { ItemRes } from "../services/itemService";

@Route("/")
@Tags("Item")
export class ItemController extends Controller {
  @Get("/items")
  public async getItems(@Query() shop: string): Promise<ItemRes[]> {
    return this.service.getItemsByShop(shop);
  }

  @Get("/items/all")
  public async getAllItems(): Promise<ItemRes[]> {
    return this.service.getAllItems();
  }

  private get service() {
    return new ItemService();
  }
}
