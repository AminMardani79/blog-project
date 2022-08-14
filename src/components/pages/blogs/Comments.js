import { useQuery } from "@apollo/client";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { GET_COMMENTS_INFO } from "../../../graphql/queries";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_COMMENTS_INFO, {
    variables: { slug },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error ...</div>;
  const { comments } = data;
  return (
    <Box p={3} sx={{ boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.45)" }}>
      <Grid container>
        <Grid item xs={12} mb={2}>
          <Typography component="h1" variant="h5" fontWeight={700}>
            پیام ها
          </Typography>
        </Grid>
        {comments.map((comment) => {
          const avatarName = comment.name.split("").slice(0, 2).join("");
          return (
            <Grid
              key={comment.id}
              item
              xs={12}
              mb={2}
              p={2}
              sx={{ border: "1px solid #c7c7c7", borderRadius: "3px" }}
            >
              <Stack direction="row" alignItems="center">
                <Avatar sx={{ marginRight: 1 }}>{avatarName}</Avatar>
                <Typography component="h1" variant="h6" fontWeight={600}>
                  {comment.name}
                </Typography>
              </Stack>
              <Typography
                component="h3"
                variant="subtitle1"
                fontWeight={400}
                mt={1}
              >
                {comment.text}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Comments;
