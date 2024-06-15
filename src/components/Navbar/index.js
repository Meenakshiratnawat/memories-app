import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { Link as RouterLink,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { styled } from '@mui/system';
import { deepPurple } from '@mui/material/colors';
import memories from '../../images/memories.png';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: '30px 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  [theme.breakpoints.down('sm')]: {
    padding: '10px 20px', // Reduce padding on smaller screens
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem', // Adjust font size on medium screens and above
  },
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: 'rgba(0,183,255, 1)',
  textDecoration: 'none',
}));

const StyledImage = styled('img')(({ theme }) => ({
  marginLeft: '15px',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center', 
  flexWrap: 'wrap',
}));

const StyledProfile = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap', 
  '& > *': {
    margin: theme.spacing(1.5), 
  },
}));

const StyledUserName = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding:'20px'
}));

const StyledBrandContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  color: theme.palette.primaryColor,
  backgroundColor: deepPurple[500],
}));

const Navbar = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user)
  const navigate = useNavigate();
  const location = useLocation();
  const firstName = user?.result?.name.split(' ')[0];
  console.log(firstName)
// const user = null;
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/auth');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
//     // if (token) {
//     //   const decodedToken = decode(token);
//     //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     // }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <StyledAppBar position="static" color="inherit">
      <StyledBrandContainer>
        <StyledHeading component={RouterLink} to="/" variant="h3" align="center">
          Memories
        </StyledHeading>
        <StyledImage src={memories} alt="icon" height="60" />
      </StyledBrandContainer>


      <StyledToolbar>
        {user?.result? (
          <StyledProfile>
            {/* <StyledAvatar alt={user?.result?.name} src={user?.result?.picture}>
              {user?.result?.name}
            </StyledAvatar> */}
            <StyledUserName variant="h6">
            {`Hi! ${firstName}`}
            </StyledUserName>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </StyledProfile>
        ) : (
          <Button component={RouterLink} to="/auth" variant="contained" color="primary">
            Sign In
          </Button>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
