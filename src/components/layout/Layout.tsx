import React, { PropsWithChildren } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import { Grid } from "@mui/material";

type Props = {};

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={2}
        marginTop={1}
        display="flex"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
