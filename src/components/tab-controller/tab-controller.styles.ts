import styled from "styled-components";

export const TabContainer = styled.div`
  border: 1px solid black;
  margin-left: 10%;
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

export const StyledTab = styled.div``;
