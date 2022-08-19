import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../../../../graphql/queries";
import sanitizeHtml from "sanitize-html";
// components
import BlogCard from "../../../shared/BlogCard";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AuthorPageLoader from "./AuthorPageLoader";
import RequestError from "../../../shared/RequestError";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function AuthorPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <AuthorPageLoader />;
  if (error) return <RequestError />;
  const { author } = data;
  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item xs={12} alignSelf="flex-end">
        <IconButton onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Avatar
          src={author.avatar.url}
          sx={{ width: { xs: 250, sm: 400 }, height: { xs: 250, sm: 400 } }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography component="h3" variant="h5">
          {author.name}
        </Typography>
        <Typography component="h6" variant="subtitle1" fontWeight={400}>
          {author.field}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="p"
          variant="subtitle1"
          textAlign="center"
          fontSize={15}
          fontWeight={400}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center" mb={3}>
          <ArrowLeftIcon color="primary" sx={{ fontSize: 30 }} />
          <Typography component="h2" variant="h5" fontWeight={500}>
            مقالات نویسنده
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          {author.posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AuthorPage;
