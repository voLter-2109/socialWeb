import { Box, TextField, Alert, AlertTitle } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useEffect, useState } from "react";
import { IUserData } from "../../../type";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useAuth } from "../../providers/useAuth";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const { ga, user } = useAuth();
  const navigation = useNavigate();

  const [isRegForm, setIsRegForm] = useState<boolean>(false);
  const [errorMes, setErrorMes] = useState<string>("");
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
    name: "",
  } as IUserData);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isRegForm) {
      try {
        const res = await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );

        await updateProfile(res.user, {
          displayName: userData.name,
        });
      } catch (error: any) {
        const result = (error as Error).message;
        setErrorMes(result);
      }
    } else {
      try {
        await signInWithEmailAndPassword(ga, userData.email, userData.password);
      } catch (error: any) {
        const result = (error as Error).message;
        setErrorMes(result);
      }
    }

    setUserData({ email: "", password: "", name: "" });
    console.log(userData.email, userData.password);
  };

  useEffect(() => {
    if (user) navigation("/");
  }, [user]);

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
          onChange={(e) => {
            setIsRegForm(false);
            setUserData({ ...userData, password: e.target.value });
          }}
        />
        <TextField
          label="name"
          variant="outlined"
          value={userData.name}
          sx={{ width: "50%", marginTop: "10px" }}
          onChange={(e) => {
            setIsRegForm(false);
            setUserData({ ...userData, name: e.target.value });
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
