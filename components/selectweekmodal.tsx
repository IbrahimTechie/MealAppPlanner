import React, { useState } from "react";

interface SelectWeekModalProps {
  onClose: () => void;
  onSave: (week: string) => void;
  selectedMeals: Set<number>;
}

const SelectWeekModal: React.FC<SelectWeekModalProps> = ({
  onClose,
  onSave,
  selectedMeals,
}) => {
  const [selectedWeek, setSelectedWeek] = useState("Week1");

  const handleWeekClick = (week: string) => {
    setSelectedWeek(week);
  };

  const handleSave = () => {
    onSave(selectedWeek);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-full">
        <h2 className="text-xl font-bold mb-6 text-center">Select Week</h2>
        <div className="flex justify-center mb-6 space-x-4">
          {["Week1", "Week2", "Week3", "Week4"].map((week) => (
            <button
              key={week}
              className={`px-4 py-2 rounded ${
                selectedWeek === week
                  ? "bg-blue-100 text-blue-600"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => handleWeekClick(week)}
            >
              {week}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectWeekModal;
