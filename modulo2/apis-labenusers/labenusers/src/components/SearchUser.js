import React from "react";


export function SearchUser(props)  {
 
    return (
      <div>
       <hr />
 <h3>Procurar Usuário</h3>
 <input placeholder="Buscar nome" 
 value={props.valueSearch}
 onChange={props.updateSearch}/>
      </div>
    );
  }





