import { Grid } from "@mui/material";
import React from "react";
import HomeAuthors from "../../authors/HomeAuthors";
import HomeBlogs from "../../blogs/HomeBlogs";

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <HomeAuthors />
      </Grid>
      <Grid item xs={12} md={9}>
        <HomeBlogs />
      </Grid>
    </Grid>
  );
};

export default Home;
