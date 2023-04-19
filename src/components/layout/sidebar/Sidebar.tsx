import React from "react";
import UserItems from "./UserItems";
import { List } from "@mui/material";
import MenuItems from "./MenuItems";

const Sidebar: React.FC = () => {
  return (
    <>
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        alignItems: "center",
      }}
    >
      <UserItems />
      </List>

     <List
     sx={{
       width: "100%",
       marginTop: 2,
       backgroundColor: "#f5f4f6",
       borderRadius: "10px",
       alignItems: "center",
     }}
   >
      <MenuItems />
    </List>
    </>
  );
};

export default Sidebar;
