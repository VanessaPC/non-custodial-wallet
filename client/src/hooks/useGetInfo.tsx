import { useState, useEffect } from "react";
import axios from "axios";

function getInfo<T>() {
  const request = axios({
    method: "get",
    url: "http://localhost:5000/api/create-wallet",
  });

  return request;
}

export const useGetInfo = () => {
  const [phrase, setPhrase] = useState();
  const [ethAddress, setEthAddress] = useState("");
  const [key, setKey] = useState("");

  useEffect(() => {
    const getStuff = async () => {
      try {
        await getInfo().then((res) => {
          setPhrase(res.data.phrase);
          setEthAddress(res.data.address);
          setKey(res.data.privateKey);
        });
      } catch (err) {
        return err;
      }
    };

    getStuff();
  }, []);

  return { phrase, ethAddress, key };
};
