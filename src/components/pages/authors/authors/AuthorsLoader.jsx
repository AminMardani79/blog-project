import React from 'react';
import { Grid } from '@mui/material';
// content loader
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const AuthorsLoader = () => {
    return (
        <Grid container mt={2}>
            <Grid item xs={12} my={2}>
                <Skeleton width="100px" />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AuthorsLoader;