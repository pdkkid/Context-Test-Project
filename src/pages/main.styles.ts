import styled from "styled-components";

export const MainContainer = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  h1 {
    font-size: 2.5em;
    user-select: none;
  }
`;
