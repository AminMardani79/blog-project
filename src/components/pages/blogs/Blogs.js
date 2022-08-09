import {
  Grid,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// functions
import { filterPosts, pagesCount } from "../../../helper/functions";
// components
import AutoComplete from "../../blogs/AutoComplete";
import BlogCard from "../../shared/BlogCard";

const Blogs = () => {
  const { blogsLoading, blogs, blogsError } = useSelector(
    (state) => state.blogsState
  );
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [field, setField] = useState("");
  const [page, setPage] = useState(0);
  const blogsPerPage = 8;
  const visitedBlogs = page * blogsPerPage;
  const changeHandler = (_, value) => {
    setPage(value - 1);
  };
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const fieldChange = (event) => {
    setField(event.target.value);
  };
  if (blogsLoading) return <div>Loading ...</div>;
  if (blogsError) return <div>Error ...</div>;
  return (
    <Grid container spacing={2} mt={2}>
      <Grid
        item
        xs={12}
        ml={2}
        p={2}
        sx={{
          boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.45)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Typography
              color="#fff"
              py={1}
              sx={{
                backgroundColor: "#1565c0",
                width: "80px",
                textAlign: "center",
                borderRadius: "50%",
              }}
            >
              فیلتر ها
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <AutoComplete
              setAuthorName={setAuthorName}
              authorName={authorName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="نام مقاله"
              variant="outlined"
              value={title}
              onChange={titleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="فیلد کاری"
              variant="outlined"
              value={field}
              onChange={fieldChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      {filterPosts(blogs.posts, authorName, title, field)
        .slice(visitedBlogs, visitedBlogs + blogsPerPage)
        .map((post) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
            <BlogCard post={post} />
          </Grid>
        ))}
      {pagesCount(
        filterPosts(blogs.posts, authorName, title, field),
        blogsPerPage
      ) > 1 && (
        <Grid item xs={12} my={3}>
          <Stack direction="row" justifyContent="center">
            <Pagination
              color="primary"
              count={pagesCount(
                filterPosts(blogs.posts, authorName, title, field),
                blogsPerPage
              )}
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
            />
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};
export default Blogs;
