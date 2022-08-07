import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeAuthors = () => {
  const { loading, data, error } = useSelector((state) => state.authorsState);
  return (
    <>
      <Typography component="h2" variant="h6" fontWeight={500}>
        نویسندگان
      </Typography>
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data && !error && !loading && (
        <Box
          sx={{
            boxShadow: "2px 8px 13px 1px rgba(0,0,0,0.08)",
            marginTop: 2,
            padding: 2,
          }}
        >
          <Grid container>
            {data.authors.map((author, index) => {
              return (
                <Grid item xs={12} key={author.id}>
                  <Stack
                    sx={{ padding: 2 }}
                    direction="row"
                    alignItems="center"
                  >
                    <Link
                      to={`/author/${author.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar
                        src={author.avatar.url}
                        sx={{ marginLeft: 1, width: "50px", height: "50px" }}
                      />
                    </Link>
                    <Link
                      to={`/author/${author.slug}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Typography
                        component="h3"
                        variant="h6"
                        fontWeight={600}
                        fontSize="18px"
                      >
                        {author.name}
                      </Typography>
                      <Typography
                        component="h4"
                        variant="subtitle2"
                        fontWeight={400}
                      >
                        {author.field}
                      </Typography>
                    </Link>
                  </Stack>
                  {index !== data.authors.length - 1 && (
                    <Divider variant="middle" />
                  )}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default HomeAuthors;
