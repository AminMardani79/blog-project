import React from 'react';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
// content loader
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogPageLoader = () => {
    return (
        <Grid container>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ marginBottom: 2 }}
          >
            <Skeleton circle width="100px" height="100px" />
            <Box sx={{ marginLeft: 1 }}>
              <Skeleton width="100px" height="20px" count={2} />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} mb={2}>
          <Skeleton height="400px" />
        </Grid>
        <Grid item xs={12}>
          <Skeleton count={10} />
        </Grid>
      </Grid>
    );
};

export default BlogPageLoader;