import React from "react";
import "./App.css";
import axios from "axios";
import { UsersList } from "./components/UsersList";
import { CreateUsers } from "./components/CreateUsers";
import { SearchUser } from "./components/SearchUser";
import styled from "styled-components";


const Container = styled.div`

background-color: #f5f5f5;
padding:1rem;


`

class App extends React.Component {
  state = {
    users: [],
    nameInput: "",
    emailInput: "",
    showUsers: false,
    query: "",
  };

  updateQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
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
          showUsers: !this.state.showUsers,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deleteUser = (id) => {
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
  };

  createUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "raquel-martins-vaughan",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ nameInput: "", emailInput: "" });
        alert("Usuário foi criado");
        this.getAllUsers();
      })
      .catch((error) => {
        alert("Erro ao criar usuário");
        console.log(error.message);
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  render() {
    let componentAllUsersList;

    const componentCreateUser = (
      <CreateUsers
        onClickGetAllUsers={this.getAllUsers}
        nameUser={this.state.nameInput}
        onChangeName={this.onChangeNameValue}
        emailUser={this.state.emailInput}
        onChangeEmail={this.onChangeEmailValue}
        onClickCreateUser={this.createUser}
      />
    );

    if (this.state.showUsers) {
      componentAllUsersList = this.state.users
        .filter((user) => {
          return user.name
            .toLowerCase()
            .includes(this.state.query.toLowerCase());
        })
        .map((user) => {
          return (
            <UsersList
              key={user.id}
              name={user.name}
              onClickDelete={() => this.deleteUser(user.id)}
            />
          );
        });
    } else {
      return componentCreateUser;
    }

    return (
      <Container>
        <div>
          <button onClick={this.getAllUsers}>Trocar de tela</button>
        </div>

        {componentAllUsersList}

        <SearchUser
          valueSearch={this.state.query}
          updateSearch={this.updateQuery}
        />
      </Container>
    );
  }
}

export default App;
