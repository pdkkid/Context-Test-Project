import styled from "styled-components";

export const SelectorContainer = styled.div``;

export const FontSelector = styled.div``;

export const Color = styled.button<{ fill: string; selected: boolean }>`
  padding: 1em;
  margin: 0 5px 0 0;
  border-radius: 5px;
  background-color: ${(props) => props.fill};
  ${(props) =>
    props.selected &&
    `
        padding: 1.5em;
    `}
`;
