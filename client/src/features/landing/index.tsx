import React from "react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../constants";

import { Container, Title, PrimaryButton, ButtonLink } from "./styles";

const Landing = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>Thi is a non-custodial wallet</Title>
      <PrimaryButton onClick={() => history.push(ROUTES.SIGN_UP)}>
        Create wallet
      </PrimaryButton>

      <ButtonLink onClick={() => history.push(ROUTES.RECOVERY)}>
        Recover your wallet
      </ButtonLink>
    </Container>
  );
};

export default Landing;
