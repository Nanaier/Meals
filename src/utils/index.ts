import { GetMealDTO } from "@/types/service";

const tagsParse = (strTags: string) => {
  let tags: string[] = [];
  if (strTags && strTags.trim() !== "") {
    tags = strTags.replace(/,\s*$/, "").split(",");
  } else if (strTags) {
    tags.push(strTags);
  }
  return tags;
};

const Ingredients = (data: GetMealDTO) => {
  const meal = data!.meals[0] as GetMealDTO["meals"][0];
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}` as keyof typeof meal]) {
      ingredients.push(
        meal[`strIngredient${i}` as keyof typeof meal] as string
      );
    } else {
      break;
    }
  }
  return ingredients;
};

const Measures = (data: GetMealDTO) => {
  const meal = data!.meals[0] as GetMealDTO["meals"][0];
  const measures: string[] = [];

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}` as keyof typeof meal]) {
      measures.push(meal[`strMeasure${i}` as keyof typeof meal] as string);
    } else {
      break;
    }
  }
  return measures;
};

const getYouTubeVideoId = (link: string): string | null =>{
  const regex = /(?:\?v=|&v=|youtu\.be\/)(.{11})/;
  const match = link.match(regex);
  return match ? match[1] : null;
}

export {tagsParse, Ingredients, Measures, getYouTubeVideoId}; 
