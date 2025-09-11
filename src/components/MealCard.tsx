'use client';

import { Meal } from '@/data/meals';
import Image from 'next/image';

interface MealCardProps {
  meal: Meal;
  mealType: string;
}

const mealTypeIcons: Record<string, string> = {
  breakfast: '🌅',
  lunch: '☀️',
  snack: '🍃',
  dinner: '🌙'
};

const mealTypeNames: Record<string, string> = {
  breakfast: 'Café da Manhã',
  lunch: 'Almoço',
  snack: 'Café da Tarde',
  dinner: 'Jantar'
};

export default function MealCard({ meal, mealType }: MealCardProps) {
  return (
    <div className="meal-card">
      {/* Meal Image */}
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ebec8c1f-af92-4a34-ac07-3731b7f3b674.png}+Keto+Food`;
          }}
        />
        <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 flex items-center space-x-2 shadow-md">
          <span className="text-lg">{mealTypeIcons[mealType]}</span>
          <span className="text-sm font-medium text-gray-700">
            {mealTypeNames[mealType]}
          </span>
        </div>
      </div>

      {/* Meal Header */}
      <div className="meal-header">
        <h3 className="meal-name">{meal.name}</h3>
        <div className="meal-calories">
          {meal.calories} kcal
        </div>
      </div>

      {/* Ingredients */}
      <div className="meal-ingredients">
        <h4>Ingredientes:</h4>
        <ul>
          {meal.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Preparation */}
      <div className="meal-preparation">
        <h4>Modo de Preparo:</h4>
        <p>{meal.preparation}</p>
      </div>
    </div>
  );
}