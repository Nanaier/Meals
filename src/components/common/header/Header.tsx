import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

import * as styles from "./Header.styles";

const Header = () => {
  return (
    <Box sx={styles.header}>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        <Typography variant="h5">Meals</Typography>
      </Link>
    </Box>
  );
};

export default Header;
