import React from 'react';
import { Grid } from '@mui/material';
// content loader
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HomeBlogsLoader = () => {
    return (
        <Grid container>
            <Grid item={12} mb={3}>
                <Skeleton width="150px" height="30px"/>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Skeleton height="300px"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Skeleton height="300px"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Skeleton height="300px"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Skeleton height="300px"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Skeleton height="300px"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Skeleton height="300px"/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomeBlogsLoader;