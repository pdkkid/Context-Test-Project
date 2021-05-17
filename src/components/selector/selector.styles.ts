import styled from "styled-components";

export const SelectorContainer = styled.div`
  width: 100%;
  color: inherit;
  box-sizing: content-box;
  margin-bottom: 50px;
  display: flex;
  padding: 10px;
  min-width: fit-content;
  max-width: 25%;
  flex-direction: row;
  justify-content: space-evenly;
  border: 3px solid rgba(1, 42, 74, 0.2);
  border-radius: 10px;
  background-color: rgba(1, 42, 74, 0.1);
`;

const Selector = styled.div`
  width: 100%;
  color: inherit;
  user-select: none;
  justify-content: space-around;
  box-sizing: content-box;
  align-items: center;
  display: flex;
  padding: 0 5px 0;
`;

export const NameSelector = styled(Selector)`
  flex: 1;
  textarea {
    color: inherit;
    font-weight: 700;
    font-family: inherit;
    font-size: 1.2em;
    appearance: none;
    background-color: transparent;
    border: 0;
    text-align: center;
    resize: none;
    overflow: hidden;
    ::placeholder {
      color: inherit;
      font-weight: 900;
      opacity: 0.5;
      border-bottom: 1.5px solid rgba(1, 42, 74, 0.3);
    }
    &:focus {
      border: none;
      outline: none;

      ::placeholder {
        opacity: 0;
      }
    }
  }
`;

export const FontSelector = styled(Selector)`
flex: 1;
justify-content: center;
  span {
    min-width: 65px;
    text-align: center;
    font-size: 1.2em;
    padding: 0 5px 0;
  }
  button {
    background-color: transparent;
    text-decoration: none;
    border: 1.5px solid rgba(1, 42, 74, 0.3);
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

export const ColorSelector = styled(Selector)`
flex: 4;
`;

export const Color = styled.button<{ fill: string; selected: boolean }>`
  height: 4em;
  width: 4em;
  border-radius: 5px;
  margin: 0 4px 0;
  background-color: ${(props) => props.fill};
  ${(props) =>
    props.selected &&
    `
        width: 5.2em;
        height: 5.2em;
    `}
`;
