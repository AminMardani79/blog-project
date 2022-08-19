import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// apollo
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO, GET_BLOGS_INFO } from "./graphql/queries";
// redux
import { useDispatch } from "react-redux";
import { getAuthors } from "./redux/authors/authorsSlice";
import { getBlogs } from "./redux/blogs/blogsSlice";
// components
import Layout from "./components/layout/Layout";
import Authors from "./components/pages/authors/authors/Authors";
import Blogs from "./components/pages/blogs/blogs/Blogs";
import Home from "./components/pages/home/Home";
import AuthorPage from "./components/pages/authors/authorPage/AuthorPage";
import BlogPage from "./components/pages/blogs/blogPage/BlogPage";
import ScrollToTop from "./components/shared/ScrollToTop";
import { Box, Container } from "@mui/material";
import NotFound from "./components/shared/NotFound";

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
    <>
      <Layout>
        <ScrollToTop />
        <Box component="div" mt={8} py={4} sx={{ minHeight: "100vh" }}>
          <Container>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/authors/:slug" element={<AuthorPage />} />
              <Route path="/blogs/:slug" element={<BlogPage />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default App;
