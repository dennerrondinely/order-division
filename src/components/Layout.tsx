import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Order Divider
          </Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
