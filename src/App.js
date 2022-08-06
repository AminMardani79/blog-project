import { Box, Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
// components
import Layout from "./components/layout/Layout";
import Authors from "./components/pages/authors/Authors";
import CreateAuthor from "./components/pages/authors/CreateAuthor";
import Blogs from "./components/pages/blogs/Blogs";
import CreateBlog from "./components/pages/blogs/CreateBlog";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <Layout>
      <Box component="div" mt={8} sx={{ minHeight: "100vh" }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/createAuthor" element={<CreateAuthor />} />
            <Route path="/createBlog" element={<CreateBlog />} />
          </Routes>
        </Container>
      </Box>
    </Layout>
  );
}

export default App;
