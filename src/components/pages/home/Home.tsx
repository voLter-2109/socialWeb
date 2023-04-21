import { Box } from "@mui/material";
import React, { useState } from "react";
import AddPost from "./AddPost";
import { IPost } from "../../../type";
import Post from "./Post";
import { initialPosts } from "./initialPosts";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Box >
        <Post posts={posts} />
      </Box>
    </Box>
  );
};

export default Home;
