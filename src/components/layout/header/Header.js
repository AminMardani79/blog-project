import React, { useEffect, useRef, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
// icons
import MenuIcon from "@mui/icons-material/Menu";
import BookIcon from "@mui/icons-material/Book";
// theme
import { appBarTheme } from "../../../mui/theme";
// styles
import styles from "../../../assets/css/header.module.css";
import SideMenu from "./SideMenu";

function Header({ window }) {
  const home = useRef();
  const blogs = useRef();
  const authors = useRef();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeStyles, setActiveStyles] = useState({
    width: "80px",
    right: "187px",
  });
  const { pathname } = useLocation();
  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  const menuItems = [
    { name: "صفحه اصلی", url: "/home", ref: home },
    { name: "مقالات", url: "/blogs", ref: blogs },
    { name: "نویسندگان", url: "/authors", ref: authors },
  ];
  useEffect(() => {
    switch (pathname) {
      case "/home":
        setActiveStyles((prev) => ({
          ...prev,
          width: `${home.current?.offsetWidth + 18}px`,
          right: `${home.current?.offsetLeft - 9}px`,
        }));
        break;
      case "/blogs":
        setActiveStyles((prev) => ({
          ...prev,
          width: `${blogs.current?.offsetWidth + 18}px`,
          right: `${blogs.current?.offsetLeft - 9}px`,
        }));
        break;
      case "/authors":
        setActiveStyles((prev) => ({
          ...prev,
          width: `${authors.current?.offsetWidth + 18}px`,
          right: `${authors.current?.offsetLeft - 9}px`,
        }));
        break;
      default:
        if (pathname.includes("/blogs")) {
          setActiveStyles((prev) => ({
            ...prev,
            width: `${blogs.current?.offsetWidth + 18}px`,
            right: `${blogs.current?.offsetLeft - 9}px`,
          }));
        } else if (pathname.includes("/authors")) {
          setActiveStyles((prev) => ({
            ...prev,
            width: `${authors.current?.offsetWidth + 18}px`,
            right: `${authors.current?.offsetLeft - 9}px`,
          }));
        } else {
          setActiveStyles((prev) => ({
            ...prev,
          }));
        }
    }
  }, [pathname]);
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
                  <Box sx={{ position: "relative" }}>
                    <Stack direction="row">
                      <Box
                        component="span"
                        sx={{
                          position: "absolute",
                          right: activeStyles.right,
                          top: "50%",
                          width: activeStyles.width,
                          height: "30px",
                          backgroundColor: "#fff",
                          transform: "translateY(-50%)",
                          borderRadius: "0 15px 0 15px",
                          transition: "all .2s ease-in-out",
                        }}
                      ></Box>
                      {menuItems.map((item) => {
                        return (
                          <Link
                            ref={item.ref}
                            key={item.name}
                            to={item.url}
                            style={{
                              marginLeft: "14px",
                              marginRight: "14px",
                              textDecoration: "none",
                              color: `${
                                pathname.includes(item.url) ? "#1565c0" : "#fff"
                              }`,
                              display: "inline-block",
                              zIndex: 100,
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
                  <Link to="/home" style={{ textDecoration: "none" }}>
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
