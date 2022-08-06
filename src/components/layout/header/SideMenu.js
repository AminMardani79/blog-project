import React from "react";
import { Drawer, Grid } from "@mui/material";
import { Link } from "react-router-dom";
// styles
import styles from "../../../assets/css/header.module.css";

const SideMenu = ({ container, mobileOpen, toggleMobileMenu, menuItems }) => {
  return (
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
                  width: "100%",
                  height: "100%",
                }}
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Drawer>
  );
};

export default SideMenu;
