import styled from "@emotion/styled";

const color = "blue";

export const BtnRewie = styled.button`
  width: 50px;
  margin: 5px;
  padding: 5px;
  text-align: center;
  background-color: white;
  color: black;
  font-size: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px 1px #a9a9a9;
  &:hover {
    color: white;
    background-color: ${color};
    cursor: pointer;
  }
`;
