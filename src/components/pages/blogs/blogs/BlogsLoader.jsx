import React from 'react';
import { Grid } from '@mui/material';
// content loader
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogsLoader = () => {
    return (
        <Grid container>
            <Grid item xs={12} mb={2}>
                <Skeleton height={110}/>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Skeleton height={300}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BlogsLoader;