import React from "react";
import RoutesCom from "./components/routes/RoutesCom";
import { AuthProvider } from "./components/providers/AuthProviders";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RoutesCom />
    </AuthProvider>
  );
};

export default App;
