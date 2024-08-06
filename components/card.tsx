import Image from "next/image";
import React from "react";

const Card = ({
  image,
  title,
  desc,
  cuisine,
  rating,
  mealType,
  onClick,
  selected,
  showRemoveButton,
  onRemove,
}: {
  image: string;
  title: string;
  desc: string;
  cuisine: string;
  rating: number;
  mealType: string;
  onClick: () => void;
  selected: boolean;
  showRemoveButton?: boolean;
  onRemove?: () => void;
}) => {
  return (
    <div
      className={`max-w-sm max-h-full mx-auto bg-white border ${
        selected ? "border-blue-500" : "border-gray-200"
      } rounded-xl shadow-lg overflow-hidden p-8 cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {mealType}
        </div>
      </div>
      <div className="py-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-700">
            <strong>Cuisine: </strong>
            {cuisine}
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-1">
              <strong>Rating: </strong>
              {rating}
            </span>
            <div className="flex items-center text-blue-900">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.round(rating)
                      ? "fill-current"
                      : "stroke-current"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.618l2.64 6.065a.75.75 0 00.694.45h6.565l-5.22 4.48a.75.75 0 00-.238.793l2.035 6.33L12 16.571l-5.926 3.944 2.035-6.33a.75.75 0 00-.238-.793l-5.22-4.48h6.565a.75.75 0 00.694-.45L12 4.618z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        {showRemoveButton && onRemove && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
