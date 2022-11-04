import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#C2A835",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
      className="main-footer"
    >
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "1rem",
          paddingTop: "1rem",
          cursor: "pointer",
          fontSize: "large",
        }}
      >
        <TwitterIcon sx={{ fontSize: "2rem" }} />{" "}
        <FacebookIcon sx={{ fontSize: "2rem  " }} />{" "}
        <LinkedInIcon sx={{ fontSize: "2rem  " }} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}
      >
        <a
          href="/"
          style={{ textDecoration: "none", fontSize: "18px", color: "white" }}
        >
          Mentions Légales
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "1 rem",
        }}
        className="row"
      >
        <p
          style={{
            fontSize: "18px",
            color: "white",
            textdecorationLine: "none",
          }}
        >
          &copy;{new Date().getFullYear()} The spices Guys
        </p>
      </div>
    </div>
  );
}

export default Footer;
