import React from "react";
import UserItems from "./UserItems";
import { List } from "@mui/material";
import MenuItems from "./MenuItems";
import User from "./User";

const Sidebar: React.FC = () => {
  return (
    <>
      <List
        sx={{
          padding: "0",
          width: "100%",
          backgroundColor: "#f5f4f6",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <User />
      </List>

      <List
        sx={{
          padding: "0",
          width: "100%",
          marginTop: 3,
          backgroundColor: "#f5f4f6",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <UserItems />
      </List>

      <List
        sx={{
          width: "100%",
          padding: "0",
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
