import React, { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { clearUser } from "../../../redux/userSlice";

import { useCheckIfLoggedIn } from "../../../hooks/useCheckIfLoggedIn";
import { NavLink } from "./types";
import { StyledTitle } from "./styles";

interface HeaderProps {
  navLinks: NavLink[];
}

export const Header: FC<HeaderProps> = ({ navLinks }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isAuthenticated = useCheckIfLoggedIn();

  const navigate = useNavigate();

  const location = useLocation();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/login");
  };

  const dispatch = useDispatch();

  const showHeader =
    location.pathname !== "/login" && location.pathname !== "/unauthorized";

  return showHeader ? (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <StyledTitle variant="h6">R & R Tech</StyledTitle>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          {navLinks.map(({ label, path }, index) => {
            return (
              path !== location.pathname && (
                <ListItem
                  key={`${label}-${index}`}
                  button
                  onClick={() => navigate(path)}
                >
                  <ListItemText primary={label} />
                </ListItem>
              )
            );
          })}

          {isAuthenticated && (
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Log out" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  ) : null;
};
