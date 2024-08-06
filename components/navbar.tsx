"use client";

import React, { useState } from "react";
import SelectWeekModal from "./selectweekmodal";

interface NavbarProps {
  activeWeek: keyof WeekMeals | "all";
  setActiveWeek: (week: keyof WeekMeals | "all") => void;
  onAddToWeek: (week: keyof WeekMeals) => void;
  selectedMeals: Set<number>;
}

const Navbar: React.FC<NavbarProps> = ({
  activeWeek,
  setActiveWeek,
  onAddToWeek,
  selectedMeals,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveWeek = (week: string) => {
    onAddToWeek(week);
  };

  const linkClassName = (week: string) => `
    text-black text-xs font-bold px-12 ${
      activeWeek === week ? "border-b-2 border-blue-600" : ""
    } 
    md:text-xs md:px-8 lg:text-xs lg:px-12
  `;

  return (
    <>
      <nav className="bg-white p-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row justify-between items-center md:pl-12 lg:pl-24 space-y-2 md:space-y-0 md:space-x-4 lg:ml-24">
            <div
              className={linkClassName("all")}
              onClick={() => setActiveWeek("all")}
            >
              All Meals
            </div>
            <div
              className={linkClassName("Week1")}
              onClick={() => setActiveWeek("Week1")}
            >
              Week 1
            </div>
            <div
              className={linkClassName("Week2")}
              onClick={() => setActiveWeek("Week2")}
            >
              Week 2
            </div>
            <div
              className={linkClassName("Week3")}
              onClick={() => setActiveWeek("Week3")}
            >
              Week 3
            </div>
            <div
              className={linkClassName("Week4")}
              onClick={() => setActiveWeek("Week4")}
            >
              Week 4
            </div>
          </div>
          <div>
            <button
              className="navbarButton text-xs font-bold px-8 py-2 my-6 mr-44 rounded text-white transition md:px-6 md:mr-24 lg:px-8 lg:mr-32"
              onClick={handleOpenModal}
            >
              Add to Week
            </button>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <SelectWeekModal
          onClose={handleCloseModal}
          onSave={handleSaveWeek}
          selectedMeals={selectedMeals}
        />
      )}
    </>
  );
};

export default Navbar;
