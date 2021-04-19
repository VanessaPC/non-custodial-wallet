import { randomBytes } from "crypto";
import Wallet from "wallet.ts";

export const createHDmasterKey = (key: Buffer) => {
  const masterKey = Wallet.HDKey.parseMasterSeed(key);
  const extendedPrivateKey = masterKey.derive("m/44'/60'/0'/0")
    .extendedPrivateKey;
  const childKey = Wallet.HDKey.parseExtendedKey(extendedPrivateKey as string);
  const wallet = childKey.derive("0");
  const walletPrivateKey = wallet.privateKey;
  const walletPublicKey = wallet.publicKey;

  return { publicKey: walletPublicKey, privateKey: walletPrivateKey };
};

export const createMnemonic = () => {
  const mnemonic = Wallet.Mnemonic.generate(randomBytes(32));
  const phrase = mnemonic.phrase;
  const seed: Buffer = mnemonic.toSeed();

  return { phrase, seed };
};

export const getETHAddress = (key: Buffer) => {
  const address = Wallet.EthereumAddress.from(key).address;

  return address;
};

export const getHDmasterKeyFromMnemonic = (phrase: string) => {
  const mnemonic = Wallet.Mnemonic.parse(phrase);
  if (!mnemonic) {
    throw new Error("Mnemonic phrase is not correct.");
  }
  const seed = mnemonic.toSeed();

  return createHDmasterKey(seed);
};
