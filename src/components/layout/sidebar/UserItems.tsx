import { ListItem, ListItemButton } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ListItemText from "@mui/material/ListItemText";

import React from "react";
import { Link } from "react-router-dom";
import { users } from "./dataUsers";

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

const UserItems: React.FC = () => {
  return (
    <>
      {users.map((user, item) => {
        return (
          <Link
            to={`/friends/${user.id}`}
            style={{ textDecoration: "none" }}
            key={`User-${item}`}
          >
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
