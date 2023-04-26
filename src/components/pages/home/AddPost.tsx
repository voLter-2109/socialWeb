import React, { useState } from "react";
import { Alert, AlertTitle, Box, TextField } from "@mui/material";
import { useAuth } from "../../providers/useAuth";
import { collection, addDoc } from "firebase/firestore";

const AddPost: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputValueImg, setInputValueImg] = useState<string[]>([]);
  const { user, db, setReload } = useAuth();
  const [error, setError] = useState("");

  const addPostHandler = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && user) {
      e.preventDefault();

      try {
        const docRef = await addDoc(collection(db, "post"), {
          author: user,
          content: inputValue,
          createAt: new Date().getTime(),
          image: inputValueImg,
        });
        // setReload((prev) => !prev);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        const result = (e as Error).message;
        setError(result);
      }

      setInputValue("");
      setInputValueImg([]);
    }
  };
  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };
  const onChangeInputImg = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValueImg([e.target.value]);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { width: "100%", marginBottom: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="write new post"
        variant="outlined"
        InputProps={{
          sx: { borderRadius: "15px" },
        }}
        onKeyDown={(e) => addPostHandler(e)}
        onChange={(e) => onChangeInput(e)}
        value={inputValue}
      />
      <TextField
        id="outlined-basic"
        label="write url img"
        variant="outlined"
        type="text"
        InputProps={{
          sx: { borderRadius: "15px" },
        }}
        onKeyDown={(e) => addPostHandler(e)}
        onChange={(e) => onChangeInputImg(e)}
        value={inputValueImg}
      />
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default AddPost;
