import styled from "styled-components";
import { ORANGE, BLACK } from "../../styles/colors";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  padding: 1rem 0;
`;

export const UserInformationContainer = styled.div`
  // padding: 0 2rem;
`;

export const PhraseHighlighter = styled.p`
  margin: 0.5rem 0;
  background-color: ${ORANGE};
  opacity: 0.8;
  color: ${BLACK};
  padding: 0.5rem;
  border-radius: 5px;
  font-weight: 600;
`;

export const Section = styled.div`
  margin: 1rem;
`;
