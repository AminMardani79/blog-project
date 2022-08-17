import React, { useState } from "react";
// components
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  ThemeProvider,
  IconButton,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import BookIcon from "@mui/icons-material/Book";
// theme
import { appBarTheme } from "../../../mui/theme";
// styles
import styles from "../../../assets/css/header.module.css";
import SideMenu from "./SideMenu";

const menuItems = [
  { name: "صفحه اصلی", url: "/" },
  { name: "مقالات", url: "/blogs" },
  { name: "نویسندگان", url: "/authors" },
];

function Header({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  const container =
    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box component="div">
      <Container maxWidth="lg">
        <ThemeProvider theme={appBarTheme}>
          <AppBar component="nav">
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item sx={{ display: { sm: "none" } }}>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={toggleMobileMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
                <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
                  <Box>
                    <Stack direction="row">
                      {menuItems.map((item) => {
                        return (
                          <Link
                            key={item.name}
                            to={item.url}
                            style={{
                              marginLeft: "10px",
                              marginRight: "10px",
                              textDecoration: "none",
                              color: "#fff",
                              display: "inline-block",
                            }}
                            className={styles.menuItem}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </Stack>
                  </Box>
                </Grid>
                <Grid item>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Stack direction="row" alignItems="center">
                      <Typography
                        component="h3"
                        variant="h6"
                        fontSize="17px"
                        ml={1}
                        sx={{ color: "#fff" }}
                      >
                        Blog
                      </Typography>
                      <BookIcon sx={{ fontSize: "20px", color: "#fff" }} />
                    </Stack>
                  </Link>
                </Grid>
              </Grid>
              <Box component="nav">
                <SideMenu
                  container={container}
                  mobileOpen={mobileOpen}
                  toggleMobileMenu={toggleMobileMenu}
                  menuItems={menuItems}
                />
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Container>
    </Box>
  );
}

export default Header;
