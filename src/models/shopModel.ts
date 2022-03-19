import { model, Schema } from "mongoose";

export interface Shop {
  shop: string;
  authority: string;
  shopToken: string;
  signerAddress: string;
}

const shopSchema = new Schema<Shop>(
  {
    shop: String,
    authority: String,
    shopToken: String,
    signerAddress: String
  },
  { collection: "shop" },
);

const ShopModel = model<Shop>("ShopModel", shopSchema);
export default ShopModel;
