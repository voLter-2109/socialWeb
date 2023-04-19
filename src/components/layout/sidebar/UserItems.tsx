import { ListItem, ListItemButton } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";

import React from "react";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
      content: '""',
    },
  },
}));

const users = [
  {
    avatar:
      "https://i.etsystatic.com/26806139/r/il/7fac75/3959495651/il_570xN.3959495651_616z.jpg",
    name: "John",
    isNetWorker: true,
  },
  {
    avatar: "https://mpost.io/wp-content/uploads/image-74-7-1024x1024.jpg",
    name: "Sausan",
    isNetWorker: false,
  },
  {
    avatar:
      "https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI",
    name: "Alex",
    isNetWorker: true,
  },
];

const UserItems: React.FC = () => {
  return (
    <>
      {users.map((user, item) => {
        return (
          <Link to="/users" style={{ textDecoration: "none" }} key={item}>
            <ListItem
              disablePadding
              sx={{
                borderRadius: "5px",
                backgroundColor: "#f5f4f6",
              }}
            >
              <ListItemButton>
                <ListItemAvatar>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    invisible={!user.isNetWorker ? true : false}
                    variant="dot"
                  >
                    <Avatar alt="Remy Sharp" src={user.avatar} />
                  </StyledBadge>
                </ListItemAvatar>

                <ListItemText
                  primary={user.name}
                  sx={{
                    textAlign: "center",
                    color: "black",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      })}
    </>
  );
};

export default UserItems;
