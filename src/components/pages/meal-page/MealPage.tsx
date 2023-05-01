import React from "react";
import MealsService from "@/services/meals.services";
import { useQuery } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Chip,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import { GetMealDTO } from "@/types/service";
import * as styles from "./MealPage.styles";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Video from "@/components/common/video/Video";
import {
  ingredientsData,
  measuresData,
  getYouTubeVideoId,
  tagsParse,
} from "@/utils";
import MealInfo from "@/components/common/meal-info/MealInfo";

const MealPage = () => {
  const router = useRouter();
  const mealId = router.query.mealId as string;

  const { data, isLoading, isError } = useQuery<GetMealDTO>(
    ["meal", mealId],
    () => MealsService.getMeal(mealId),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>ERROR!</Typography>;

  const meal = data!.meals[0];

  const tags = tagsParse(meal.strTags);
  const ingredients = ingredientsData(data!);
  const measures = measuresData(data!);

  return (
    <Box>
      <Header />
      <Grid container sx={styles.textWrapper}>
        <Grid item xs={12} md={6}>
          <MealInfo
            meal={data!.meals}
            tags={tags}
            ingredients={ingredients}
            measures={measures}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={styles.photoWrapper}>
          <Box
            component="img"
            sx={styles.photo}
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default MealPage;
