import React, { FC } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

import * as styles from "./MealCard.styles";
import { tagsParse } from "@/utils";

interface MealCardProps {
  idMeal: number;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strTags: string;
}

const MealCard: FC<MealCardProps> = ({
  idMeal,
  strMeal,
  strCategory,
  strMealThumb,
  strTags,
}) => {
  let tags: string[] = tagsParse(strTags);
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.wrapper}>
        <Box
          component="img"
          sx={styles.photo}
          src={strMealThumb}
          alt="photo-card"
        />
        <Box sx={styles.contentWrapper}>
          <Grid container spacing={1}>
            {tags.map((tag) => (
              <Grid key={tag} item>
                <Chip key={tag} label={tag} />
              </Grid>
            ))}
          </Grid>
          <Box sx={styles.textWrapper}>
            <Typography variant="body2">Category: {strCategory}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>{strMeal}</Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Link href={`/${idMeal}`}>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MealCard;
