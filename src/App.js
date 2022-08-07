import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// apollo
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "./graphql/queries";
// components
import Layout from "./components/layout/Layout";
import Authors from "./components/pages/authors/Authors";
import CreateAuthor from "./components/pages/authors/CreateAuthor";
import Blogs from "./components/pages/blogs/Blogs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthors } from "./redux/authors/authorsSlice";
// components
import CreateBlog from "./components/pages/blogs/CreateBlog";
import Home from "./components/pages/home/Home";
import AuthorPage from "./components/pages/authors/AuthorPage";
import BlogPage from "./components/pages/blogs/BlogPage";

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  useEffect(() => {
    dispatch(getAuthors({ loading, data, error }));
  }, [loading, data, error]);
  return (
    <Layout>
      <Box component="div" mt={8} pt={3} sx={{ minHeight: "100vh" }}>
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
