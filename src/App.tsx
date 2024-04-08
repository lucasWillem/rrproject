import React from "react";
import { ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "./theme/theme";
import { store, persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "./routing/router";
import AppLayout from "./components/layouts/AppLayout";

import { NavLink, Header } from "./components/containers/Header";

const NavLinks: NavLink[] = [
  { label: "Countries", path: "/countries" },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppLayout>
              <Router NavBar={<Header navLinks={NavLinks} />} />
            </AppLayout>
          </PersistGate>
        </ReduxProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
