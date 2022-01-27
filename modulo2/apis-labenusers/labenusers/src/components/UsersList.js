import React from "react";
import styled from "styled-components";
import axios from "axios";
import deleteIcon from "../img/delete.svg"
import editIcon from "../img/edit.svg"

const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
  
`;

const ContainerTxtBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
`;

const BtnDelete = styled.button`
  border: none;
  background-color: red;
  color: white;
  
  border-radius: 4px;
  margin-left: 1rem;


  &:hover {
    cursor: pointer;
  }
`;

const BtnEdit = styled.button`
  border: none;
  background-color: blueviolet;
  color: white;
  
  border-radius: 4px;
  margin-left: 1rem;


  &:hover {
    cursor: pointer;
  }
`;




const BtnReturnPage = styled.button`
  border: none;
  background-color: #446fe9;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
  padding: 0.5rem;
  align-self: flex-start;

  &:hover {
    cursor: pointer;
    background-color: #3b559d;
  }
`;

const InputStyle = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid grey;
  margin-bottom: 2rem;

  &:focus {
    outline: none !important;
    border-color: #8715cf;
    box-shadow: 0 0 10px #719ece;
  }
`;

const UlPointer = styled.ul`
  &:hover {
    cursor: pointer;
    
  }
`



export default class UsersList extends React.Component {
  state = {
    users: [],

    query: "",
  };
  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "raquel-martins-vaughan",
          },
        }
      )
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteUser = (id) => {
    if (window.confirm(`Tem certeza que deseja deleta o usuário?`)) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "raquel-martins-vaughan",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          alert("Usuário deletado");
          this.getAllUsers();
        })
        .catch((error) => {
          console.log(error.message);
          alert("Não foi possível deletar");
        });
    }
  };

  updateQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  getUserById = (id) =>{
    axios.get(`
    https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
        headers:{
            Authorization: "raquel-martins-vaughan",
        }
    }).then((response) =>{
        console.log(response.data)
    }).catch((error) => {
        console.log(error.data)
    })
    }

  render() {
    const usersList = this.state.users
    .filter((user) => {
      return user.name.toLowerCase().includes(this.state.query.toLowerCase())
    })
    .map((user) => {
      return (
        <ContainerTxtBtn key={user.id}>
          <div>
            <UlPointer onClick={() => this.props.moreInfo(user.id)}>
              <li onClick={() => this.getUserById}>{user.name}</li>
            </UlPointer>
          </div>

          <div>
            <BtnEdit ><img src={editIcon} alt="ícone editar"/></BtnEdit>
            <BtnDelete onClick={() => this.deleteUser(user.id)}><img src={deleteIcon} alt="ícone delete"/></BtnDelete>
          </div>
        </ContainerTxtBtn>
      );
    });
    return (
      <ContainerPage>
        <BtnReturnPage onClick={this.props.goToRegister}>
          Ir para Cadastro
        </BtnReturnPage>
        <div>
          
          <h3>Procurar Usuário</h3>
          <InputStyle
            placeholder="Buscar nome"
            value={this.state.query}
            onChange={this.updateQuery}
          />
        </div>

        <h3>Usuários Cadastrados</h3>
        <div>{usersList}</div>
       
      </ContainerPage>
    );
  }
}
