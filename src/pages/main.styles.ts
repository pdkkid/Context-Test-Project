import styled from "styled-components";

export const MainContainer = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
