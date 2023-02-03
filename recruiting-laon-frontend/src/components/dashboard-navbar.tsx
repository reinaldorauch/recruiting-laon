import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Logo } from "./logo";
import { User } from "@/lib/api";
import { useState, MouseEvent } from "react";

export interface DashboardNavbarProps {
  user?: User;
}

const DashboardNavbar = ({ user }: DashboardNavbarProps) => {
  const [anchorUserNav, setAnchorUserNav] = useState<HTMLElement | null>(null);
  const handleOpenUserMenu = (e: MouseEvent<HTMLElement>) => {
    setAnchorUserNav(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorUserNav(null);
  };

  const settings = ["shit", "logout"];
  const pages = ["populares"];

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Logo></Logo>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.name} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorUserNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorUserNav)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
          {!user && <Button href="/login">Login</Button>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { DashboardNavbar };
