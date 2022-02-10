import HeaderMatches from "../components/HeaderMatches";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const Content = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1% 0.5% 1%;
`;

const ContentInputBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items:center;
`;

function ChatScreen(props) {
  const toSendMsg = () => {};

  return (
    <Content>
      <HeaderMatches goToHome={props.goToHome} />

      <ContentInputBtn>
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          placeholder="Mensagem"
          variant="filled"
          size="small"
        />
        <IconButton
          aria-label="dislike"
          color="success"
          size="large"
          onClick={toSendMsg()}
        >
          <SendIcon />
        </IconButton>
      </ContentInputBtn>
    </Content>
  );
}

export default ChatScreen;
