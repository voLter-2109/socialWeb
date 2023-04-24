import { Box } from "@mui/material";
import React from "react";
import AddPost from "./AddPost";
import Post from "./Post";
const Home: React.FC = () => {


  return (
    <Box>
      <AddPost />
      <Box >
        <Post />
      </Box>
    </Box>
  );
};

export default Home;
