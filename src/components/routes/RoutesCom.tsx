import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./list";
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";

const RoutesCom: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {routes.map((route) => {
        if (route.auth && !user) {
          return false;
        }

        return (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={
              <Layout>
                <route.component />
              </Layout>
            }
          />
        );
      })}
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutesCom;
