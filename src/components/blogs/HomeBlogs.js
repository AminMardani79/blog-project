import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../shared/BlogCard";
import HomeBlogsLoader from "./HomeBlogsLoader";

function HomeBlogs() {
  const { blogsLoading, blogs, blogsError } = useSelector(
    (state) => state.blogsState
  );
  if (blogsLoading) return <HomeBlogsLoader />;
  if (blogsError) return <div>Error</div>;
  return (
    <>
      <Typography component="h2" variant="h6" fontWeight={500}>
        آخرین مقالات
      </Typography>
      {blogs && !blogsError && !blogsLoading && (
        <Box sx={{ marginTop: 2 }}>
          <Grid container spacing={3}>
            {blogs.posts
              .filter((_, index) => index >= blogs.posts.length - 6)
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
