import { Grid, Stack } from '@mui/material';
import React from 'react';
// content loader
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AuthorPageLoader = () => {
    return (
        <Grid container mt={4} justifyContent="center">
            <Grid xs={12} mb={2}>
                <Stack direction="column" alignItems="center">
                    <Skeleton circle height={280} width={280}/>
                    <Skeleton width={200}/>
                    <Skeleton width={140}/>
                </Stack>
            </Grid>
            <Grid xs={12}>
                <Skeleton count={20}/>
            </Grid>
        </Grid>
    );
};

export default AuthorPageLoader;