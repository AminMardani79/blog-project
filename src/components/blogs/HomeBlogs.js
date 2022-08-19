import { Grid, Typography, Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../shared/BlogCard";
import RequestError from "../shared/RequestError";
import HomeBlogsLoader from "./HomeBlogsLoader";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function HomeBlogs() {
  const { blogsLoading, blogs, blogsError } = useSelector(
    (state) => state.blogsState
  );
  if (blogsLoading) return <HomeBlogsLoader />;
  if (blogsError) return <RequestError />;
  return (
    blogs && (
      <>
        <Stack direction="row" alignItems="center">
          <ArrowLeftIcon color="primary" sx={{ fontSize: 30 }} />
          <Typography component="h2" variant="h6" fontWeight={500}>
            مقالات
          </Typography>
        </Stack>
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
      </>
    )
  );
}

export default HomeBlogs;
