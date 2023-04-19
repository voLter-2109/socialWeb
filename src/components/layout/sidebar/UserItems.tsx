import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UserItems: React.FC = () => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        border: "1px solid black",
        borderRadius: "15px",
      }}
    >
      <Link
        to="profile"
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <img
          style={{
            objectFit: "contain",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            border: "1px solid black",
          }}
          src="https://i.etsystatic.com/26806139/r/il/7fac75/3959495651/il_570xN.3959495651_616z.jpg"
          alt="user"
        />

        <Box sx={{}}>
          <span style={{ color: "black" }}>Sidebar</span>
        </Box>
        <Box sx={{}}>online</Box>
      </Link>
    </Box>
  );
};

export default UserItems;
