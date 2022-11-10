import * as React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

}));
const Footer = () => {

  return ( 
    <Root>
    <div style={{backgroundColor: "#C2A835", position :  "absolute", bottom : "0", width : "100%"}} classname="main-footer">
          <div style={{color:"white", display:"flex", justifyContent:"center", paddingBottom:"1rem", paddingTop:"1rem", cursor:"pointer", fontSize: "large"}}>
              <TwitterIcon sx={{fontSize: "2rem"}}></TwitterIcon > <FacebookIcon sx={{fontSize: "2rem  "}}></FacebookIcon> <LinkedInIcon sx={{fontSize: "2rem  "}}></LinkedInIcon>
          </div>
          <div style={{display:"flex", justifyContent:"center", fontSize: "18px"}}>
              <a href="/" style={{textDecoration:"none", fontSize: "18px",color: "white"}}>Mentions Légales</a>
          </div>

          <div style={{display:"flex", justifyContent:"center", paddingTop:"1 rem"}}className="row">
            <p style={{fontSize: "18px",color: "white",textdecorationLine: "none"}}>
              &copy;{new Date().getFullYear()} The spices Guys 
            </p>
          </div>
    </div>
    </Root>
   );
}

export  default Footer; 