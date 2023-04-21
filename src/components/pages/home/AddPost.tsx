import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
// import TextField from "@mui/material/TextField";
import { IPost, TypeSetState } from "../../../type";
import { users } from "../../layout/sidebar/dataUsers";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: React.FC<IAddPost> = ({ setPosts }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const addPostHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setPosts((prev) => [
        {
          author: users[0],
          content: inputValue,
          createAt: String(new Date()),
        },
        ...prev,
      ]);
      setInputValue("");
    }
  };
  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
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
    </Box>
  );
};

export default AddPost;
