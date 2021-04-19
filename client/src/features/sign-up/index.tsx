import React from "react";

import { useGetInfo } from "../../hooks/useGetInfo";

import {
  Container,
  Title,
  UserInformationContainer,
  PhraseHighlighter,
  Section,
} from "./styles";

const CreateKey = () => {
  const { phrase, ethAddress, key } = useGetInfo();

  return (
    <Container>
      <Title>This are your wallet details below:</Title>
      <UserInformationContainer>
        <Section>
          <h3>Memorable phrase:</h3>
          <p>
            Keep this memorable phrase in order to restore your wallet if you
            need to, in the future.
          </p>
          <PhraseHighlighter>{phrase}</PhraseHighlighter>
        </Section>
        <Section>
          <h3>Eth address: </h3>
          <p>{ethAddress}</p>
        </Section>
        <Section>
          <h3>Pcrivate key:</h3>
          <p>{key}</p>
        </Section>
      </UserInformationContainer>
    </Container>
  );
};

export default CreateKey;
