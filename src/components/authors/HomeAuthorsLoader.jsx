import { Grid } from '@mui/material';
import React from 'react';
// content loader
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const HomeAuthorsLoading = () => {
    return (
        <Grid container>
            <Grid item xs={12} mb={3}>
                <Skeleton width="150px" height="30px"/>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Skeleton height="45px" count={5}/> 
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HomeAuthorsLoading;