import styled from "styled-components";
import { BLACK_10, BLUE_CTA } from "../../styles/colors";

export const Container = styled.div`
  text-align: center;
  grid-column-start: 2;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const PrimaryButton = styled.button`
  background-color: ${BLUE_CTA};
  color: ${BLACK_10};
  padding: 10px 20px;
`;

export const ButtonLink = styled.button`
  color: ${BLUE_CTA};
`;
