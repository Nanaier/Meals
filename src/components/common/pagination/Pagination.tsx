import React from "react";
import { Box, IconButton, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import * as styles from "./Pagination.styles";
import { GetAllMealsDTO } from "@/types/service";
import usePagination from "@/hooks";
import MealList from "../meal-list/MealList";

const ITEMS_PER_PAGE = 10;

const Pagination = (props: { data: GetAllMealsDTO }) => {
  const {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    goToNextPage,
    goToPrevPage,
  } = usePagination(ITEMS_PER_PAGE, props.data!);
  return (
    <Box sx={styles.dataWrapper}>
      {<MealList data={currentItems} />}
      <Box sx={styles.paginationWrapper}>
        <IconButton onClick={() => goToPrevPage()}>
          <ArrowBackIosNewIcon color="primary" />
        </IconButton>
        {Array.from({ length: totalPages }).map((_, i) => (
          <Button key={i} onClick={() => goToPage(i + 1)}>
            {i + 1}
          </Button>
        ))}
        <IconButton onClick={() => goToNextPage()}>
          <ArrowForwardIosIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Pagination;
