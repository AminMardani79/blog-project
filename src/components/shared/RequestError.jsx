import { Grid, Typography } from '@mui/material';
import React from 'react';

const RequestError = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography
                    component="h6"
                    variant="subtitle1"
                    color="error"
                    textAlign="center"
                >
                    Somthing went wrong
                </Typography>
            </Grid>
      </Grid>
    );
};

export default RequestError;