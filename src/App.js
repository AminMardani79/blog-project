import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// apollo
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO, GET_BLOGS_INFO } from "./graphql/queries";
// components
import Layout from "./components/layout/Layout";
import Authors from "./components/pages/authors/Authors";
import CreateAuthor from "./components/pages/authors/CreateAuthor";
import Blogs from "./components/pages/blogs/Blogs";
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { getAuthors } from "./redux/authors/authorsSlice";
import { getBlogs } from "./redux/blogs/blogsSlice";
// components
import CreateBlog from "./components/pages/blogs/CreateBlog";
import Home from "./components/pages/home/Home";
import AuthorPage from "./components/pages/authors/AuthorPage";
import BlogPage from "./components/pages/blogs/BlogPage";

function App() {
  const dispatch = useDispatch();
  const authors = useQuery(GET_AUTHORS_INFO);
  const blogs = useQuery(GET_BLOGS_INFO);
  useEffect(() => {
    dispatch(getAuthors(authors));
  }, [authors]);
  useEffect(() => {
    dispatch(getBlogs(blogs));
  }, [blogs]);
  return (
    <Layout>
      <Box component="div" mt={8} py={4} sx={{ minHeight: "100vh" }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/createAuthor" element={<CreateAuthor />} />
            <Route path="/createBlog" element={<CreateBlog />} />
            <Route path="/author/:slug" element={<AuthorPage />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
          </Routes>
        </Container>
      </Box>
    </Layout>
  );
}

export default App;
