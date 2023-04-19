import React from "react";
import Box from "@mui/material/Box";
import UserItems from "./UserItems";

const Sidebar: React.FC = () => {
  return (
    <Box
      style={{ border: "1px solid red" }}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        flexDirection: "column",
        minHeight: "300px",
      }}
    >
      <UserItems />
    </Box>
  );
};

export default Sidebar;
