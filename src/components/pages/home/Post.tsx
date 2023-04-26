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
import {
  DocumentData,
  QuerySnapshot,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { useAuth } from "../../providers/useAuth";
import { sortBy, reverse } from "lodash";

const Post: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { db } = useAuth();
  useEffect(() => {
    let unsub = onSnapshot(
      collection(db, "post"),
      (doc: QuerySnapshot<DocumentData>) => {
        const test: IPost[] = [];
        doc.forEach((post: any) => {
          test.push(post.data());
        });
        setPosts(reverse(sortBy(test, [(item) => item.createAt])));
      }
    );

    return () => {
      unsub();
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

            {post.image && (
              <ImageList variant="masonry" cols={3} gap={8}>
                {post.image.map((image, i) => (
                  <ImageListItem key={`PostImg-${image}+${i}`}>
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
