import { Grid, Typography, Card, CardMedia, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Authors = () => {
  const { authorsLoading, authors, authorError } = useSelector(
    (state) => state.authorsState
  );
  if (authorsLoading) return <div>Loading ...</div>;
  if (authorError) return <div>Error</div>;
  return (
    <Grid
      container
      mt={{ sm: 2 }}
      spacing={2}
      justifyContent={{ xs: "center", sm: "flex-start" }}
    >
      <Grid item xs={12}>
        <Typography component="h2" variant="h6" fontWeight={500} mb={2}>
          نویسندگان
        </Typography>
      </Grid>
      {authors.authors.map((author) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={author.id}>
          <Link to={`/authors/${author.slug}`}>
            <Card
              sx={{
                boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.45)",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={author.avatar.url}
                alt={author.slug}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#1565c0",
                  opacity: "0",
                  cursor: "pointer",
                  transition: "all .2s ease-in-out",
                  "&:hover": {
                    opacity: "0.7",
                    visibility: "visible",
                  },
                }}
              >
                <Stack
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%, -50%)",
                    width: "100%",
                  }}
                  direction="column"
                  alignItems="center"
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={{
                      color: "#fff",
                      zIndex: 10,
                    }}
                  >
                    {author.name}
                  </Typography>
                  <Typography
                    component="h5"
                    variant="subtitle1"
                    sx={{
                      color: "#fff",
                      zIndex: 10,
                    }}
                  >
                    {author.field}
                  </Typography>
                </Stack>
              </Box>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Authors;
