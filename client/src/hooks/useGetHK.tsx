import { useState } from "react";
import axios from "axios";

function getHDkey(phrase: string) {
  const request = axios({
    method: "post",
    url: "http://localhost:5000/api/restore-wallet",
    data: {
      mnemonic: phrase,
    },
  });

  return request;
}

export const useRestoreKeys = () => {
  const [key, setKey] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  async function restoreKeys(phrase: string) {
    try {
      await getHDkey(phrase).then((res) => {
        setKey(res.data.privateKey);
        setAddress(res.data.address);
      });
    } catch (e) {
      setAddress("");
      setKey("");
      setError(true);
    }
  }

  return { key, address, restoreKeys, error };
};
