import { utils, BN, Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import ItemModel from "../models/itemModel";
import ShopModel from "../models/shopModel";
import { SolanaShop } from "../providers/program/SolanaShop";
import Rpc from "../providers/rpc";

/*eslint-disable @typescript-eslint/no-unsafe-member-access*/
class TrackerService {
  public trackOpenShop = (program: Program<SolanaShop>) => {
    program.addEventListener("OpenShopEvent", async (event) => {
      console.log("OpenShopEvent");
      const shop = (event.shop as PublicKey).toBase58();
      const authority = (event.authority as PublicKey).toBase58();
      const shopToken = (event.shopToken as PublicKey).toBase58();
      const signerAddress = utils.bytes.hex.encode(Buffer.from(event.signerAddress as number[]));
      await ShopModel.create({ shop, authority, shopToken, signerAddress });
    });
  };

  public trackListItem = (program: Program<SolanaShop>) => {
    program.addEventListener("ListItemEvent", async (event) => {
      console.log("ListItemEvent");
      const shop = (event.shop as PublicKey).toBase58();
      const item = (event.item as PublicKey).toBase58();
      const mint = (event.mint as PublicKey).toBase58();
      const price = (event.price as BN).toString();
      const supply = event.supply as number;
      const freeze = event.freeze as boolean;
      const sold = 0;
      await ItemModel.create({ shop, item, mint, price, supply, freeze, sold });
    });
  };

  public trackUpdateItem = (program: Program<SolanaShop>) => {
    program.addEventListener("UpdateItemEvent", async (event) => {
      console.log("UpdateItemEvent");
      const item = (event.item as PublicKey).toBase58();
      const price = (event.price as BN).toString();
      const supply = event.supply as number;
      await ItemModel.findOneAndUpdate({ item }, { price, supply });
    });
  };

  public trackBuyItem = (program: Program<SolanaShop>) => {
    program.addEventListener("BuyItemEvent", async (event) => {
      console.log("BuyItemEvent");
      const item = (event.item as PublicKey).toBase58();
      const amount = event.amount as number;
      await ItemModel.findOneAndUpdate({ item }, { $inc: { sold: amount } });
    });
  };

  static initTrackers = () => {
    const { program } = new Rpc();
    const tracker = new TrackerService();

    program.addEventListener("InitAdminEvent", () => {
      console.log("InitAdminEvent");
    })

    tracker.trackOpenShop(program);
    tracker.trackListItem(program);
    tracker.trackUpdateItem(program);
    tracker.trackBuyItem(program);
  };
}

export default TrackerService;
