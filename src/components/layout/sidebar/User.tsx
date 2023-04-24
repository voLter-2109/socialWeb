import React from "react";
import { useAuth } from "../../providers/useAuth";
import { signOut } from "firebase/auth";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const User = () => {
  const { user, ga } = useAuth();
  return (
    <ListItem
      disablePadding
      sx={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",

        borderRadius: "5px",
        backgroundColor: "#f5f4f6",
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={user?.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={user?.name}
        sx={{
          textAlign: "center",
          marginTop: "10px",
          color: "black",
        }}
      />
      <ListItemButton
        sx={{
          marginTop: "10px",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        onClick={() => signOut(ga)}
      >
        exit
      </ListItemButton>
    </ListItem>
  );
};

export default User;
