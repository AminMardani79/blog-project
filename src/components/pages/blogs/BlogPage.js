import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../../graphql/queries";
import sanitizeHtml from "sanitize-html";

// components
import { Box } from "@mui/system";
import { Avatar, Grid, Stack, Typography } from "@mui/material";
import CommentsForm from "./CommentsForm";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error ...</div>;
  const { post } = data;
  return (
    <Grid container spacing={1}>
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
        <img src={post.coverImage.url} alt={slug} width="100%" height="600px" />
      </Grid>
      <Grid item xs={12}>
        <Typography component="h2" variant="h5" fontWeight={700}>
          {post.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(post.content.html),
          }}
        ></div>
      </Grid>
      <Grid item xs={12} my={1}>
        <Typography component="h2" variant="h5" fontWeight={700}>
          افزودن کامنت
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CommentsForm slug={slug} />
      </Grid>
    </Grid>
  );
}

export default BlogPage;
