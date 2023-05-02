import React from "react";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Pagination, Typography } from "@mui/material";

import { GetAllMealsDTO } from "@/types/service";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import * as styles from "./MainPage.styles";
import MealsService from "@/services/meals.services";
import usePagination from "@/hooks";
import MealList from "@/components/common/meal-list";

const ITEMS_PER_PAGE = 10;

const MainPage = () => {
  const { data, isLoading, isError } = useQuery<GetAllMealsDTO>(
    "meals",
    MealsService.getMeals,
    {
      refetchOnWindowFocus: false,
    }
  );
  const [paginationCount, setPaginationCount] = usePagination();
  const pagesNumber = data ? Math.ceil(data.meals.length / ITEMS_PER_PAGE) : 0;

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>ERROR!</Typography>;

  return (
    data && (
      <Box sx={styles.mainWrapper}>
        <Header />
        <Box sx={styles.textWrapper}>
          <Typography variant="h3" sx={styles.mainText}>
            Welcome to our meals web page
          </Typography>
          <Typography>
            Where we offer a wide variety of delicious and nutritious dishes to
            satisfy your cravings and keep you healthy. Our menu features fresh,
            locally sourced ingredients that are expertly prepared to bring out
            their natural flavors and textures. Whether you're in the mood for
            something light and refreshing or hearty and satisfying, we have
            something for everyone. From classic favorites like burgers and
            fries to international specialties like sushi and pad thai, our
            meals are sure to please. We also offer vegetarian, vegan, and
            gluten-free options to accommodate all dietary needs. So sit back,
            relax, and enjoy a delicious meal from our menu today!
          </Typography>
        </Box>

        <Box sx={styles.dataWrapper}>
          {
            <MealList
              data={data.meals.slice(
                paginationCount * 10,
                (paginationCount + 1) * 10
              )}
            />
          }
        </Box>
        <Box sx={styles.paginationWrapper}>
          <Pagination
            count={pagesNumber}
            color="primary"
            size="large"
            variant="outlined"
            shape="rounded"
            onChange={setPaginationCount}
          />
        </Box>
        <Footer />
      </Box>
    )
    
  );
};

export default MainPage;
