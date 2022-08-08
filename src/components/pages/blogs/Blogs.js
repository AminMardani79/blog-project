import { Grid, Pagination, PaginationItem, Stack } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../shared/BlogCard";
// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blogs = () => {
  const { loading, data, error } = useSelector((state) => state.blogsState);
  const [page, setPage] = useState(0);
  const blogsPerPage = 8;
  const visitedBlogs = page * blogsPerPage;
  const pageCounts = (posts, blogsPerPage) => {
    return Math.ceil(posts.length / blogsPerPage);
  };
  const changeHandler = (_, value) => {
    setPage(value - 1);
  };
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error ...</div>;
  return (
    <Grid container spacing={2}>
      {data.posts
        .slice(visitedBlogs, visitedBlogs + blogsPerPage)
        .map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
            <BlogCard post={post} />
          </Grid>
        ))}
      {pageCounts(data.posts, blogsPerPage) > 1 && (
        <Grid item xs={12} my={3}>
          <Stack direction="row" justifyContent="center">
            <Pagination
              color="primary"
              count={pageCounts(data.posts, blogsPerPage)}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
              onChange={changeHandler}
              sx={{ direction: "ltr" }}
            />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default Blogs;
