import React, { Suspense, useRef } from "react";
import { Route, Routes } from "react-router-dom";
//
import { routes } from "./list";
//
import ErrorPage from "../pages/ErrorPage";
import Layout from "../layout/Layout";
import { useAuth } from "../providers/useAuth";

const Auth = React.lazy(() => import("../pages/auth/Auth"));

const RoutesCom: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/auth" key={`route auth`} element={<Auth />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <Layout>
                  <route.component />
                </Layout>
              </Suspense>
            }
          />
        );
      })}
      ;
    </Routes>
  );
};

export default RoutesCom;

{
  /* <Route path="*" element={<ErrorPage />} /> */
}
