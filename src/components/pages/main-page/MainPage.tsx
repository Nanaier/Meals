import React from "react";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

import { GetAllMealsDTO } from "@/types/service";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import * as styles from "./MainPage.styles";
import Pagination from "@/components/common/pagination/Pagination";
import MealsService from "@/services/meals.services";

const MainPage = () => {
  const { data, isLoading, isError } = useQuery<GetAllMealsDTO>(
    "meals",
    MealsService.getMeals,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>ERROR!</Typography>;

  return (
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
          something for everyone. From classic favorites like burgers and fries
          to international specialties like sushi and pad thai, our meals are
          sure to please. We also offer vegetarian, vegan, and gluten-free
          options to accommodate all dietary needs. So sit back, relax, and
          enjoy a delicious meal from our menu today!
        </Typography>
      </Box>
      <Pagination data={data!} />
      <Footer />
    </Box>
  );
};

export default MainPage;
