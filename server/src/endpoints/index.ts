import e, { Request, Response } from "express";
import { CreateWallet } from "./create-wallet";
import { RestoreWallet } from "./restore-wallet";

export const CreateUserWallet = (req: Request, res: Response) => {
  try {
    const { phrase, privKey, address } = CreateWallet();
    res.status(200).send({
      phrase: phrase,
      privateKey: privKey,
      address,
    });
  } catch (e) {
    const err = "Couldn't create a wallet.";
    res.status(400).send({ err, phrase: "", privateKey: "", address: "" });
  }
};

export const RestoreUserWallet = (req: Request, res: Response) => {
  try {
    const userRecoveryPhrase: string = req.body.mnemonic;
    const { privKey, address } = RestoreWallet(userRecoveryPhrase);
    res.status(200).send({ privateKey: privKey, address });
  } catch (e) {
    if (e === null) {
      const err = "Couldn't restore a wallet.";
      res
        .status(400)
        .send({ err: err, phrase: "", privateKey: "", address: "" });
    }
    res
      .status(400)
      .send({ err: e.message, phrase: "", privateKey: "", address: "" });
  }
};
