import React from "react";
import { Card, Typography } from "@mui/material/";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  const Userstyle = {
    color: "black",
    border: "solid",
    borderRadius: "20px",
    margin: "10px",
    width: "50%",
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#fff79b",
        color:"black",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <Typography variant="h2">The spices guys</Typography>
      <Card className="users" style={Userstyle}>
        <Typography
          variant="body1"
          sx={{ color: "black " }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          Josué ROBLIN-BLONDEEL
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.linkedin.com/in/josueroblinblondeel/"
          >
            <LinkedInIcon sx={{ color: "black", marginRight:"1rem"}}/> https://www.linkedin.com/in/josueroblinblondeel/
          </a>
          <a href="https://github.com/Roblin-Blondeel-Josue">
            <GitHubIcon sx={{ color: "black", marginRight:"1rem"}}/> https://github.com/Roblin-Blondeel-Josue
          </a>
          <Typography variant="body1">
            {" "}
            <EmailIcon sx={{ color: "black", marginRight:"1rem"}} /> rblondeeljosue@gmail.com{" "}
          </Typography>
        </Typography>
      </Card>
      <Card className="users" style={Userstyle}>
        <Typography variant="body1"> Cédric PIERSON</Typography>
        <a href="https://www.linkedin.com/in/cedricpierson01/">
          <LinkedInIcon sx={{ color: "black", marginRight:"1rem"}}/> https://www.linkedin.com/in/cedricpierson01/
        </a>
        <br />
        <a href="https://github.com/cedricpierson">
          <GitHubIcon sx={{ color: "black", marginRight:"1rem"}}/> https://github.com/cedricpierson
        </a>
        <Typography variant="body1"> <EmailIcon sx={{ color: "black", marginRight:"1rem"}}/> cdric.pierson@gmail.com </Typography>
      </Card>

      <Card className="users" style={Userstyle}>
        <Typography variant="body1"> Locquet Thibault</Typography>

        <a href="https://www.linkedin.com/in/thibault-locquet-086944194/">
        <LinkedInIcon sx={{ color: "black", marginRight:"1rem"}}/>  https://www.linkedin.com/in/thibault-locquet-086944194/
        </a>
        <br />
        <a href="https://github.com/ThibaultLocquet">
        <GitHubIcon sx={{ color: "black", marginRight:"1rem"}}/> https://github.com/ThibaultLocquet
        </a>
        <Typography variant="body1">
          {" "}
          <EmailIcon sx={{ color: "black", marginRight:"1rem"}}/> thibault.locquetpro@gmail.com{" "}
        </Typography>
      </Card>

      <Card className="users" style={Userstyle}>
        <Typography variant="body1"> Romain Cuvelier </Typography>
        <a href="https://www.linkedin.com/in/thibault-locquet-086944194/">
        <LinkedInIcon sx={{ color: "black", marginRight:"1rem"}}/>  https://www.linkedin.com/in/cedricpierson01/
        </a>
        <br />
        <a href="https://github.com/Rom1Cuv"><GitHubIcon/>https://github.com/Rom1Cuv</a>
        <Typography variant="body1">
          {" "}
          <EmailIcon sx={{ color: "black", marginRight:"1rem"}}/> cuvelier.romain.81@gmail.com{" "}
        </Typography>
      </Card>

      <Card className="users" style={Userstyle}>
        <Typography variant="body1"> Fouad Boutouil </Typography>
        <a href="https://www.linkedin.com/in/dark-undefined-3220ba246/">
        <LinkedInIcon sx={{ color: "black", marginRight:"1rem"}}/>  https://www.linkedin.com/in/dark-undefined-3220ba246/
        </a>
        <br />
        <a href="https://github.com/Nemesis-DarK">
        <GitHubIcon sx={{ color: "black", marginRight:"1rem"}}/> https://github.com/Nemesis-DarK
        </a>
        <Typography variant="body1"> <EmailIcon sx={{ color: "black", marginRight:"1rem"}}/>nemesis68200@outlook.fr </Typography>
      </Card>
    </div>
  );
}

export default Contact;
