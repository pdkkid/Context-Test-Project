import styled from "styled-components";

const Base = styled.div`
  width: 80%;
  min-width: 40vh;
`;
export const TabContainer = styled(Base)<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  background-color: rgba(1, 42, 74, 0.1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderContainer = styled(Base)`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  user-select: none;
  button {
    font-size: 1.5em;
    width: 100%;
    height: 2em;
    border: none;
  }
`;

export const TabHeader = styled.button<{ selected: boolean }>`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  ${(props) =>
    props.selected &&
    `
      background-color: rgba(1, 42, 74, 0.1);
    `}
`;
