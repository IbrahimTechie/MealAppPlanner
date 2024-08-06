type Recipe = {
  id: number;
  image: string;
  name: string;
  instructions: string[];
  cuisine: string;
  rating: number;
  mealType: string[];
};

type WeekMeals = {
  Week1: Set<number>;
  Week2: Set<number>;
  Week3: Set<number>;
  Week4: Set<number>;
};
