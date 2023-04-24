import React, { useEffect, useState } from "react";
import { IPost } from "../../../type";
import {
  Avatar,
  Box,
  ImageList,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ImageListItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { useAuth } from "../../providers/useAuth";
import { initialPosts } from "./initialPosts";
import { union, sortBy } from "lodash";

const Post: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  const { db, reload } = useAuth();
  // Promise javacript fetch ?
  useEffect(() => {
    const unsub = new Promise((resolve, reject) => {
      onSnapshot(collection(db, "post"), (doc: any) => {
        resolve(doc);
      });
    });

    return () => {
      unsub
        .then((res: any) => {
          console.log("1" + res);
          const test: any[] = [];
          res.forEach((post: any) => {
            test.push(post.data());
          });
          return test;
        })
        .then((res: any) => {
          console.log("2" + res);
          setPosts(() =>
            sortBy(union([...res, ...posts]), [(item) => item.createAt])
          );
        });
    };
  }, [db]);

  return (
    <>
      {posts.map((post, i) => {
        return (
          <Box
            key={`Post-${i}`}
            sx={{
              border: "1px solid black",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#f5f4f6",
              marginBottom: "20px",
            }}
          >
            <Link
              to={`/profile/${post.author.id}`}
              style={{ textDecoration: "none" }}
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
                    <Avatar alt="Remy Sharp" src={post.author.avatar} />
                  </ListItemAvatar>

                  <ListItemText
                    primary={post.author.name}
                    secondary={post.createAt}
                    sx={{
                      textAlign: "center",
                      color: "black",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <ListItemText primary={post.content} />
            {post.image?.length && (
              <ImageList variant="masonry" cols={3} gap={8}>
                {post.image.map((image) => (
                  <ImageListItem key={`PostImg-${image}`}>
                    <img
                      src={`${image}`}
                      srcSet={`${image}`}
                      alt="foto"
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </Box>
        );
      })}
    </>
  );
};

export default Post;
