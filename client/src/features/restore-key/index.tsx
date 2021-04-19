import React, { useState } from "react";
import { useRestoreKeys } from "../../hooks/useGetHK";

import { Title, Input, Section, PrimaryButton, Error } from "./styles";

const RestoreKey = () => {
  const { address, key, restoreKeys, error } = useRestoreKeys();

  const [value, setValue] = useState("");

  return (
    <>
      <Title>Restore your wallet from your phrase.</Title>
      <Section>
        {error && !address && <Error>The mnemonic phrase was incorrect.</Error>}
        <Input
          type="text"
          value={value}
          placeholder="Input your mnemonic phrase"
          onChange={(event) => setValue(event.target.value)}
        />
        <PrimaryButton onClick={() => restoreKeys(value)}>
          Restore
        </PrimaryButton>
      </Section>
      <Section>
        <h3>Address:</h3>
        <p>{address === "" ? "" : address}</p>
      </Section>
      <Section>
        <h3>Key:</h3>
        <p>{key === "" ? "" : key}</p>
      </Section>
    </>
  );
};

export default RestoreKey;
