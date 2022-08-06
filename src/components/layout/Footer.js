import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="#1565c0" py={2}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography
          component="h3"
          variant="h6"
          fontWeight={400}
          fontSize={18}
          pl={1}
          sx={{ position: "relative", top: "5px", color: "#fff" }}
        >
          By AminMardani
        </Typography>
        <Typography
          component="h2"
          variant="h4"
          fontWeight={400}
          fontSize={30}
          sx={{ color: "#fff" }}
        >
          Blog
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
