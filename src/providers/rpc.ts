import { Program, Provider, Wallet } from "@project-serum/anchor";
import { Commitment, Connection, Keypair, PublicKey } from "@solana/web3.js";
import { IDL } from "./program/SolanaShop";

class Rpc {
  provider: Provider;

  constructor(keypair?: Keypair) {
    const commitment: Commitment = "confirmed";
    const rpcUrl = process.env.RPC_URL || "http://127.0.0.1:8899";
    const connection = new Connection(rpcUrl, commitment);
    const wallet = keypair ? new Wallet(keypair) : <Wallet>{};
    const provider = new Provider(connection, wallet, {
      preflightCommitment: commitment,
      commitment,
      skipPreflight: true,
    });
    this.provider = provider;
  }

  public get program() {
    const programId = new PublicKey(process.env.PROGRAM_ID || "");
    return new Program(IDL, programId, this.provider);
  }
}

export default Rpc;
