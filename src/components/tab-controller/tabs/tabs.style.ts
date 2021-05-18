import styled from "styled-components";

export const TabBase = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 10px 10px;
  min-height: fit-content;
  hr {
    width: 100%;
    height: 4px;
    background: rgba(1, 42, 74, 0.25);
    margin: .25em 0 .25em;
    border-radius: 10px;
    border-style: none;
    border-width: 0;
  }
`;

export const StyledContent = styled(TabBase)`
  h2,
  h3 {
    margin: 0;
    margin-top: 0.5em;
    text-align: center;
  }
  h3 {
    margin-bottom: 0.75em;
  }
  div {
    margin: 0.75em;
    span {
      margin-bottom: 0.75em;
      display: block;
    }
    img {
      border-radius: 10px;
      min-width: 20vh;
      max-width: 20%;
      height: auto;
    }
  }
  .right {
    margin-left: 0.75em;
    float: right;
  }
  .left {
    margin-right: 0.75em;
    float: left;
  }
`;

export const StyledForm = styled(TabBase)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%

    label {

    }

    input, select, textarea {
      min-width: 25%;
      max-width: em;
    }
  }
`;
