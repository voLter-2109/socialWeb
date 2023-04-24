import React, { PropsWithChildren } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";
import { useAuth } from "../providers/useAuth";

type Props = {};

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <Grid
        container
        marginTop={1}
        display="flex"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        {user && (
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        )}
        <Grid item xs={7} marginLeft={2}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
