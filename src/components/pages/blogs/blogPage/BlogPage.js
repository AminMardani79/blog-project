import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../../../graphql/queries";
import sanitizeHtml from "sanitize-html";

// components
import { Box } from "@mui/system";
import { Avatar, Grid, IconButton, Stack, Typography } from "@mui/material";
import CommentsForm from "../comments/CommentsForm";
import Comments from "../comments/Comments";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BlogPageLoader from "./BlogPageLoader";
import RequestError from "../../../shared/RequestError";

function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <BlogPageLoader />;
  if (error) return <RequestError />;
  const { post } = data;
  return (
    <Grid container spacing={1} direction="column">
      <Grid item xs={12} alignSelf="flex-end">
        <IconButton onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Stack direction="row" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            sx={{ width: 70, height: 70, marginRight: "16px" }}
          />
          <Box>
            <Typography component="h2" variant="h6" fontWeight={600}>
              {post.author.name}
            </Typography>
            <Typography component="h5" variant="subtitle1" fontWeight={400}>
              {post.author.field}
            </Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <img
          className="blogPoster"
          src={post.coverImage.url}
          alt={slug}
          width="100%"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h2"
          variant="h5"
          sx={{ fontSize: { xs: 20, sm: 22 } }}
          fontWeight={700}
        >
          {post.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="p"
          variant="subtitle1"
          fontSize={15}
          fontWeight={400}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Typography>
      </Grid>
      <Grid item xs={12} mb={3}>
        <CommentsForm slug={slug} />
      </Grid>
      <Grid item xs={12}>
        <Comments slug={slug} />
      </Grid>
    </Grid>
  );
}

export default BlogPage;
