import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolBar } from  "./styled"
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../../routes/coordinator'

const Header = () => {
    const navigate = useNavigate()

  return (

      <AppBar position="static">
        <StyledToolBar>
          <Button color="inherit" >
            LabEddit
          </Button>
          <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>
  
  );
}


export default Header