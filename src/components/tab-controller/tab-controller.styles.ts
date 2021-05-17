import styled from "styled-components";

export const TabContainer = styled.div<{fontSize: string}>`
  font-size: ${props => props.fontSize};
  border: 1px solid black;
  height: 75vh;
  width: 80%;
`;

export const TabHeader = styled.button<{ selected: boolean }>`
  user-select: none;
  float: left;
  ${(props) =>
    props.selected &&
    `
        background-color: red;
    `}
`;
