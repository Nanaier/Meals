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
import { Ingredients, Measures, getYouTubeVideoId, tagsParse } from "@/utils";

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

  const meal = data!.meals[0] as GetMealDTO["meals"][0];

  let tags: string[] = tagsParse(meal.strTags);
  const ingredients: string[] = Ingredients(data!);
  const measures: string[] = Measures(data!);

  return (
    <Box>
      <Header />
      <Grid container sx={styles.textWrapper}>
        <Grid item xs={12} md={6}>
          <Paper sx={styles.paperWrapper}>
            <Typography variant="h4" gutterBottom>
              {meal.strMeal}
            </Typography>
            <Grid container spacing={1}>
              {tags.map((tag) => (
                <Grid key={tag} item>
                  <Chip key={tag} label={tag} />
                </Grid>
              ))}
            </Grid>
            <Typography variant="h6" gutterBottom>
              Category: {meal.strCategory}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {meal.strInstructions}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Recipe:
            </Typography>
            <List sx={styles.list}>
              {ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${ingredient} - ${measures[index]}`}
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h5">
              Also you can watch a video on how to make it:
            </Typography>
            <Video videoId={getYouTubeVideoId(meal.strYoutube)!} />
          </Paper>
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
