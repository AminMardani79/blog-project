import { Avatar, Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RequestError from "../shared/RequestError";
import HomeAuthorsLoading from "./HomeAuthorsLoader";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeAuthors = () => {
  const { authorsLoading, authors, authorError } = useSelector(
    (state) => state.authorsState
  );
  if (authorsLoading) return <HomeAuthorsLoading />;
  if (authorError) return <RequestError />;
  return (
    authors && (
      <>
        <Stack direction="row" alignItems="center">
          <ArrowLeftIcon color="primary" sx={{ fontSize: 30 }} />
          <Typography component="h2" variant="h6" fontWeight={500}>
            نویسندگان
          </Typography>
        </Stack>
        <Box
          sx={{
            boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.45)",
            marginTop: 2,
            padding: 2,
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
        >
          <Grid container>
            {authors.authors.map((author, index) => {
              return (
                <Grid item xs={12} key={author.id}>
                  <Stack
                    sx={{ padding: 2 }}
                    direction="row"
                    alignItems="center"
                  >
                    <Link
                      to={`/authors/${author.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Avatar
                        src={author.avatar.url}
                        sx={{ marginRight: 1, width: "50px", height: "50px" }}
                      />
                    </Link>
                    <Link
                      to={`/authors/${author.slug}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Typography
                        component="h3"
                        variant="h6"
                        fontWeight={600}
                        fontSize="15px"
                      >
                        {author.name}
                      </Typography>
                      <Typography
                        component="h4"
                        variant="subtitle2"
                        fontWeight={400}
                        fontSize="14px"
                      >
                        {author.field}
                      </Typography>
                    </Link>
                  </Stack>
                  {index !== authors.authors.length - 1 && (
                    <Divider variant="middle" />
                  )}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </>
    )
  );
};

export default HomeAuthors;
