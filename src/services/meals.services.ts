import instance from "./instance";
import { GetAllMealsDTO, GetMealDTO } from "@/types/service";

class Meals {
  getMeals = async (): Promise<GetAllMealsDTO> => {
    const res = await instance.get("/search.php?f=b");
    return res.data;
  };

  getMeal = async (mealId: string): Promise<GetMealDTO> => {
    const res = await instance.get(`/lookup.php?i=${mealId}`);
    return res.data;
  };
}

const MealsService = new Meals();

export default MealsService;
