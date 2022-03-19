import ShopModel from "../models/shopModel";

class ShopService {
  public getAllShops = async (): Promise<string[]> => {
    const query = await ShopModel.find();
    if(query){
      return query.map((item) => item.shop);
    }else{
      return [];
    }
  };
}

export default ShopService;
