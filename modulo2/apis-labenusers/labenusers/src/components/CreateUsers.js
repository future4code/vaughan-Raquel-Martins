import React from "react";


export function CreateUsers(props)  {
 
    return (
      <div>
        <div>
        <button onClick={props.onClickGetAllUsers}>Trocar de tela</button>
        </div>
       <input
          placeholder="Nome"
          value={props.nameUser}
          onChange={props.onChangeName}
        />
        <input
          placeholder="Email"
          value={props.emailUser}
          onChange={props.onChangeEmail}
        />
        <button onClick={props.onClickCreateUser}>Criar Usuário</button>
      </div>
    );
  }



