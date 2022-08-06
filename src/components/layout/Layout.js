import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <>
      <Box>
        <Header />
        {children}
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
