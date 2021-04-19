import styled from "styled-components";
import { BLACK_10, BLUE_CTA, WHITE, WARNING } from "../../styles/colors";

export const Title = styled.h2`
  padding: 1rem 0;
`;

export const Input = styled.input`
  background-color: white;
  padding: 0.3rem 1rem;
  border-radius: 3px;
  min-width: 70%;
  margin: 0 0.2rem;
  border: 3px solid ${WHITE};
  color: ${BLACK_10};

  &:focus {
    color: ${BLACK_10};
    border: 3px solid aquamarine;
    transition: border 2s, ease-in-out;
  }
`;

export const Section = styled.div`
  margin: 1rem;
`;

export const PrimaryButton = styled.button`
  background-color: ${BLUE_CTA};
  color: ${BLACK_10};
  padding: 10px 20px;
`;

export const Error = styled.p`
  color: ${WARNING};
`;
