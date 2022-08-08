import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../shared/BlogCard";

function HomeBlogs() {
  const { loading, data, error } = useSelector((state) => state.blogsState);
  return (
    <>
      <Typography component="h2" variant="h6" fontWeight={500}>
        آخرین مقالات
      </Typography>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data && !error && !loading && (
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={3}>
            {data.posts
              .filter((_, index) => index >= data.posts.length - 6)
              .map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <BlogCard post={post} />
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default HomeBlogs;
