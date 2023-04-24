import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useAuth } from "../../providers/useAuth";

const Profile: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { user } = useAuth();
  return (
    <Box
      sx={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f5f4f6",
        marginBottom: "20px",
      }}
    >
      <span>{user?.name}</span>
    </Box>
  );
};

export default Profile;
