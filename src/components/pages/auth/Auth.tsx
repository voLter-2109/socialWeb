import { Box, TextField, Alert, AlertTitle } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useState } from "react";
import { IUserData } from "../../../type";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Auth: React.FC = () => {
  const [isRegForm, setIsRegForm] = useState<boolean>(false);
  const [errorMes, setErrorMes] = useState<string>("");
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();

    if (isRegForm) {
      try {
        await createUserWithEmailAndPassword(
          auth,
          userData.email,
          userData.password
        );
      } catch (error: any) {
        const result = (error as Error).message;
        setErrorMes(result);
      }
    } else {
      console.log("войти");
    }

    setUserData({ email: "", password: "" });
    console.log(userData.email, userData.password);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleLogin}
      >
        <TextField
          type="email"
          label="email"
          variant="outlined"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          sx={{ width: "50%" }}
          required
        />
        <TextField
          type="password"
          label="password"
          variant="outlined"
          required
          value={userData.password}
          sx={{ width: "50%", marginTop: "10px" }}
          onChange={(e) =>{
            setIsRegForm(false)
            setUserData({ ...userData, password: e.target.value })
          }}
        />

        <ButtonGroup
          variant="contained"
          sx={{ width: "fit-content", marginTop: "10px" }}
        >
          <Button type="submit" onClick={() => setIsRegForm(false)}>
            войти
          </Button>
          <Button type="submit" onClick={() => setIsRegForm(true)}>
            Registration
          </Button>
        </ButtonGroup>
      </Box>

      {isRegForm && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMes}
        </Alert>
      )}
    </>
  );
};

export default Auth;
