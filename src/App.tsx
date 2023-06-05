import React from "react";
import { ThemeProvider } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import { theme } from "./theme/theme";
import { store, persistor } from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "./routing/router";
import { AppContainer } from "./components/layouts/AppContainer";

import { NavLink, Header } from "./components/containers/Header";

const NavLinks: NavLink[] = [
  { label: "Home", path: "/home" },
  { label: "Account", path: "/account" },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppContainer>
              <Router NavBar={<Header navLinks={NavLinks} />} />
            </AppContainer>
          </PersistGate>
        </ReduxProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
