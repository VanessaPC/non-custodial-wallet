import { createMnemonic, createHDmasterKey, getETHAddress } from "./helpers";

export const CreateWallet = () => {
  const { phrase, seed } = createMnemonic();
  const { publicKey, privateKey } = createHDmasterKey(seed);

  if (privateKey === null) {
    throw new Error("User's private key is null.");
  }

  const privKey = privateKey.toString("hex");
  const address = getETHAddress(publicKey as Buffer);

  return { phrase, privKey, address };
};
