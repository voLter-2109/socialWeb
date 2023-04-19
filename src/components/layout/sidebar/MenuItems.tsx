import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { dataMenu } from "./dataMenu";

const MenuItems: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <>
      {dataMenu.map((item, index) => {
        return (
          <ListItem
            disablePadding
            onClick={() => handleClick(item.link)}
            key={index}
          >
            <ListItemButton>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};

export default MenuItems;
