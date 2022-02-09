import React from "react";
import ActionAreaCard from "../components/ActionAreaCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Spinner from "../components/Spinner"


const PhotoAndActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
`;

function InitialScreen(props) {
  const [profiles, setProfiles] = useState([]);
  const [id, setId] = useState("");
  const [choice, setChoice] = useState(false);

  useEffect(() => getProfileToChoose(), [id]);

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/person`
      )
      .then((response) => {
        console.log(response);
        setProfiles(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const choosePerson = (profileId) => {
    console.log(profileId);
    const body = {
      id: id,
      choice: choice,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/choose-person`,
        body
      )
      .then((response) => {
        setId(profileId);
        setChoice(true);
        console.log(choice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const dontChoosePerson = (profileId) => {
    console.log(profileId);
    const body = {
      id: id,
      choice: choice,
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/choose-person`,
        body
      )
      .then((response) => {
        setId(profileId);
        setChoice(false);
        console.log(choice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearMatches = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/clear`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Content >
      <Header
        cleanup={() => clearMatches()}
        goToHome={props.goToHome}
        goToMatches={props.goToMatches}
      />
      <PhotoAndActions>
        {profiles ? (
           <ActionAreaCard
           linkImage={profiles.photo}
           name={profiles.name}
           age={profiles.age}
           description={profiles.bio}
           dislikeBtn={() => dontChoosePerson(profiles.id)}
           likeBtn={() => choosePerson(profiles.id)}
         />
        ) : (<Spinner/>)}


        {/* // <ActionAreaCard
        //   linkImage={profiles.photo}
        //   name={profiles.name}
        //   age={profiles.age}
        //   description={profiles.bio}
        //   dislikeBtn={() => dontChoosePerson(profiles.id)}
        //   likeBtn={() => choosePerson(profiles.id)}
        // /> */}

      </PhotoAndActions>

    </Content>
  );
}

export default InitialScreen;
