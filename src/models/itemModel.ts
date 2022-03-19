import { model, Schema } from "mongoose";

export interface Item {
  shop: string;
  item: string;
  mint: string;
  price: string;
  supply: number;
  freeze: boolean;
  sold: number;
}

const itemSchema = new Schema<Item>(
  {
    shop: String,
    item: String,
    mint: String,
    price: String,
    supply: Number,
    freeze: Boolean,
    sold: Number,
  },
  { collection: "item" },
);

const ItemModel = model<Item>("ItemModel", itemSchema);
export default ItemModel;
