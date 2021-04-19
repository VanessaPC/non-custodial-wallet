import { getHDmasterKeyFromMnemonic, getETHAddress } from "./helpers";

export const RestoreWallet = (phrase: string) => {
  try {
    const { publicKey, privateKey } = getHDmasterKeyFromMnemonic(phrase);
    const privKey = privateKey?.toString("hex");
    const address = getETHAddress(publicKey as Buffer);
    return { privKey, address };
  } catch (e) {
    throw e;
  }
};
