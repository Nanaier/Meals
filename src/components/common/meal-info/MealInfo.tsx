import React, { FC } from "react";
import {
  Chip,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

import * as styles from "./MealInfo.styles";
import { MealInfoProps } from "@/types/service";
import Video from "../video";
import { getYouTubeVideoId } from "@/utils";


const MealInfo: FC<MealInfoProps> = ({ meal, tags, ingredients, measures }) => {
  return (
    <Paper sx={styles.paperWrapper}>
      <Typography variant="h4" gutterBottom>
        {meal[0].strMeal}
      </Typography>
      <Grid container spacing={1}>
        {tags.map((tag) => (
          <Grid key={tag} item>
            <Chip key={tag} label={tag} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" gutterBottom>
        Category: {meal[0].strCategory}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {meal[0].strInstructions}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Recipe:
      </Typography>
      <List sx={styles.list}>
        {ingredients.map((ingredient, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${ingredient} - ${measures[index]}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h5">
        Also you can watch a video on how to make it:
      </Typography>
      {meal[0].strYoutube && (
        <Video videoId={getYouTubeVideoId(meal[0].strYoutube)} />
      )}
    </Paper>
  );
};

export default MealInfo;
