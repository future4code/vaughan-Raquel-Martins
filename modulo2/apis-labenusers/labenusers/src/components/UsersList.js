import React from "react";
import styled from "styled-components";

const ContainerTxtBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 10%;
 
`;

const BtnDelete = styled.button`
  border: none;
  background-color: red;
  color: white;
  font-weight: 700;
  border-radius: 4px;

  &:hover{
      cursor:pointer;
  }
`;
export function UsersList(props) {
  return (
    <ContainerTxtBtn>
      <ul>
        <li>{props.name}</li>
      </ul>
      <div>
        <BtnDelete onClick={props.onClickDelete}>X</BtnDelete>
      </div>
    </ContainerTxtBtn>
  );
}
