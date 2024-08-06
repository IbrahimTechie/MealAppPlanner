"use client";

import Card from "@/components/card";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";

async function fetchData() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return data;
}

export default function Home() {
  const [data, setData] = useState<{ recipes: Recipe[] }>({ recipes: [] });
  const [selectedMeals, setSelectedMeals] = useState(new Set<number>());
  const [weekMeals, setWeekMeals] = useState<WeekMeals>({
    Week1: new Set(),
    Week2: new Set(),
    Week3: new Set(),
    Week4: new Set(),
  });
  const [allSelectedMeals, setAllSelectedMeals] = useState(new Set<number>());
  const [activeWeek, setActiveWeek] = useState<keyof WeekMeals | "all">("all");
  const [duplicateAlert, setDuplicateAlert] = useState<string | null>(null);

  useEffect(() => {
    console.log(weekMeals, "Week Meals");
  }, [weekMeals]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    getData();
  }, []);

  const handleCardSelection = (id: number) => {
    setSelectedMeals((prev) =>
      prev.has(id)
        ? new Set([...prev].filter((mealId) => mealId !== id))
        : new Set(prev).add(id)
    );
  };

  const handleAddToWeek = (week: keyof WeekMeals) => {
    let hasDuplicate = false;
    const updatedWeekMeals = new Set(weekMeals[week]);

    selectedMeals.forEach((mealId) => {
      if (!updatedWeekMeals.has(mealId) && !allSelectedMeals.has(mealId)) {
        updatedWeekMeals.add(mealId);
      } else {
        hasDuplicate = true;
      }
    });

    if (hasDuplicate) {
      setDuplicateAlert(
        `Some recipes are already present in the selected week or another week.`
      );
      setTimeout(() => setDuplicateAlert(null), 3000); // Dismiss after 3 seconds
    }

    const newAllSelectedMeals = new Set(allSelectedMeals);
    selectedMeals.forEach((mealId) => {
      if (!newAllSelectedMeals.has(mealId)) {
        newAllSelectedMeals.add(mealId);
      }
    });

    setWeekMeals((prev) => ({ ...prev, [week]: updatedWeekMeals }));
    setAllSelectedMeals(newAllSelectedMeals);
    setSelectedMeals(new Set());
  };

  const handleRemoveFromWeek = (week: keyof WeekMeals, id: number) => {
    setWeekMeals((prev) => {
      const updatedWeekMeals = new Set(
        [...prev[week]].filter((mealId) => mealId !== id)
      );
      const newAllSelectedMeals = new Set(allSelectedMeals);
      if (newAllSelectedMeals.has(id)) {
        newAllSelectedMeals.delete(id);
      }
      setAllSelectedMeals(newAllSelectedMeals);
      return { ...prev, [week]: updatedWeekMeals };
    });
  };

  const filteredRecipes =
    activeWeek === "all"
      ? data.recipes
      : activeWeek in weekMeals
      ? data.recipes.filter((recipe: Recipe) =>
          weekMeals[activeWeek].has(recipe.id)
        )
      : [];

  return (
    <>
      <div>
        <div>
          <Header />
        </div>
        <h2 className="ml-4 sm:ml-12 lg:ml-48 text-xl sm:text-2xl font-bold my-4">
          Week Orders
        </h2>
        <div>
          <Navbar
            activeWeek={activeWeek}
            setActiveWeek={setActiveWeek}
            onAddToWeek={handleAddToWeek}
            selectedMeals={selectedMeals}
          />
        </div>
      </div>
      <div className="container mx-auto px-4">
        {duplicateAlert && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Warning! </strong>
            <span className="block sm:inline">{duplicateAlert}</span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setDuplicateAlert(null)}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 5.652a1 1 0 10-1.414-1.414L10 7.172 7.066 4.238a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 101.414 1.414L10 12.828l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934z" />
              </svg>
            </span>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 mx-4 sm:my-24 sm:mx-24">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe: Recipe) => (
              <Card
                key={recipe.id}
                image={recipe.image}
                title={recipe.name}
                desc={recipe.instructions.join(", ")}
                cuisine={recipe.cuisine}
                rating={recipe.rating}
                mealType={recipe.mealType[0]}
                onClick={() => handleCardSelection(recipe.id)}
                selected={selectedMeals.has(recipe.id)}
                showRemoveButton={activeWeek !== "all"}
                onRemove={() =>
                  handleRemoveFromWeek(activeWeek as keyof WeekMeals, recipe.id)
                }
              />
            ))
          ) : (
            <div>No meals to show</div>
          )}
        </div>
      </div>
    </>
  );
}
