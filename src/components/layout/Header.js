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
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import BookIcon from "@mui/icons-material/Book";
// theme
import { appBarTheme } from "../../mui/theme";
// styles
import styles from "../../assets/css/header.module.css";

const menuItems = [
  { name: "صفحه اصلی", url: "/" },
  { name: "مقالات", url: "/" },
  { name: "نویسندگان", url: "/" },
  { name: "ثبت مقاله", url: "/" },
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
                  icon
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
                  <Stack direction="row" alignItems="center">
                    <Typography
                      component="h3"
                      variant="h6"
                      fontSize="17px"
                      ml={1}
                    >
                      Blog
                    </Typography>
                    <BookIcon sx={{ fontSize: "20px" }} />
                  </Stack>
                </Grid>
              </Grid>
              <Box component="nav">
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={toggleMobileMenu}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: "200px",
                      backgroundColor: "#0d47a1",
                    },
                  }}
                >
                  <Grid container alignItems="center" textAlign="center">
                    <Grid item xs={12} my={2} textAlign="center" p={1}>
                      icon
                    </Grid>
                    {menuItems.map((item) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          key={item.name}
                          py={1}
                          className={styles.mobileMenuItem}
                        >
                          <Link
                            to={item.url}
                            style={{
                              textDecoration: "none",
                              color: "#fff",
                              display: "inline-block",
                            }}
                          >
                            {item.name}
                          </Link>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Drawer>
              </Box>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Container>
    </Box>
  );
}

export default Header;
