import React from "react";
import { Grid } from "@mui/material";

import MealCard from "../meal-card/MealCard";
import * as styles from "./MealList.styles";
import { GetAllMealsDTO } from "@/types/service";

const MealList = (props: { data: GetAllMealsDTO["meals"] }) => {
  return (
    <Grid container spacing={2} sx={styles.list}>
      {props.data.map((meal) => (
        <Grid key={meal.idMeal} item xs={12} sm={6} md={3}>
          <MealCard
            {...meal}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MealList;
