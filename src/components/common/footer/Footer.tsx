import React from "react";
import { Box, Typography } from "@mui/material";

import * as styles from "./Footer.styles";

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Typography variant="h6" sx={{ pl: "2rem" }}>
        Meals app
      </Typography>
      <Typography sx={{ pr: "2rem" }}>made by Anastasiia Lysenko</Typography>
    </Box>
  );
};

export default Footer;
