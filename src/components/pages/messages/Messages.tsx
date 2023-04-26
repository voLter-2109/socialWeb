import React, { useEffect, useState } from "react";
import { IMessage } from "../../../type";
import { useAuth } from "../../providers/useAuth";
import { DocumentData, QuerySnapshot, addDoc, collection, onSnapshot } from "firebase/firestore";
import {
  Alert,
  AlertTitle,
  Button,
  List,
  ListItem,
  TextField,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { reverse, sortBy, union } from "lodash";

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState("");
  const { user, db, setReload } = useAuth();

  useEffect(() => {
    let unsub = onSnapshot(collection(db, "messages"), (doc: QuerySnapshot<DocumentData>) => {
      const test: IMessage[] = [];
      doc.forEach((post: any) => {
        test.push(post.data());
      });

      // setMessages(() =>
      //   reverse(
      //     sortBy(union([...test, ...messages]), [(item) => item.createAt])
      //   )
      // );
      setMessages(sortBy(test, [(item) => item.createAt]));
    });

    return () => {
      unsub();
    };
  }, [db]);

  const addMessageHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "messages"), {
        user,
        message: message,
        createAt: new Date().getTime(),
      });
      // setReload((prev) => !prev);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      const result = (e as Error).message;
      setError(result);
    } finally {
      setMessage("");
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}

      <TextField
        id="outlined-basic"
        value={message}
        label="message"
        variant="outlined"
        onChange={(e) => {
          if (user) setMessage(e.target.value);
        }}
      />
      <Button variant="text" onClick={addMessageHandler}>
        send
      </Button>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {messages.length > 0 &&
          messages.map((item, i) => {
            return (
              <ListItem
                sx={
                  item.user.id === user?.id
                    ? {
                        border: "1px solid red",
                        borderRadius: "5px",
                        marginBottom: "5px",
                      }
                    : {
                        border: "1px solid black",
                        borderRadius: "5px",
                        marginBottom: "5px",
                      }
                }
                key={i}
              >
                <ListItemAvatar>
                  <Avatar alt="img" src={item.user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    blockSize: "fit-content",
                  }}
                  primary={item.message +"   " + item.createAt}
                  secondary={item.user.name}
                />
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default Messages;
