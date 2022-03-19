import { Metadata } from "@metaplex-foundation/mpl-token-metadata";
import axios from "axios";
import ItemModel, { Item } from "../models/itemModel";
import Rpc from "../providers/rpc";

export interface ItemRes {
  item: string;
  mint: string;
  price: string;
  supply: number;
  freeze: boolean;
  sold: number;
  name: string;
  symbol: string;
  image: string;
  shop: string;
}

interface JsonMetadata {
  name: string;
  symbol: string;
  description: string;
  image: string;
}

class ItemService {
  public getAllItems = async (): Promise<ItemRes[]> => {
    const itemsQuery = await ItemModel.find();
    if (!itemsQuery) {
      return [];
    }
    return await this.formatItems(itemsQuery);
  };

  public getItemsByShop = async (shop: string): Promise<ItemRes[]> => {
    const itemsQuery = await ItemModel.find({ shop });
    if (!itemsQuery) {
      return [];
    }
    return await this.formatItems(itemsQuery);
  };

  private formatItems = async (items: Item[]): Promise<ItemRes[]> => {
    const { provider } = new Rpc();
    return await Promise.all(
      items.map(async ({ item, mint, price, supply, freeze, sold, shop }) => {
        const metadataAccount = await Metadata.getPDA(mint);
        const {
          data: {
            data: { name, symbol, uri },
          },
        } = await Metadata.load(provider.connection, metadataAccount);

        const {
          data: { image },
        } = await axios.get<JsonMetadata>(uri);

        return { item, mint, price, supply, freeze, sold, name, symbol, image, shop };
      }),
    );
  };
}

export default ItemService;
