'use client';

import { useRouter } from 'next/navigation';
import { DayMeals } from '@/data/meals';
import MealCard from './MealCard';

interface MealPlanScreenProps {
  dayMeals: DayMeals;
}

export default function MealPlanScreen({ dayMeals }: MealPlanScreenProps) {
  const router = useRouter();

  const totalCalories = dayMeals.breakfast.calories + 
                       dayMeals.lunch.calories + 
                       dayMeals.snack.calories + 
                       dayMeals.dinner.calories;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors mb-4 focus-visible"
          aria-label="Voltar para página anterior"
        >
          <span className="mr-2 text-lg">←</span>
          <span className="font-medium">Voltar</span>
        </button>
        
        <div className="text-center">
          <h1 className="text-hero mb-2" style={{ color: '#1B5E20' }}>
            {dayMeals.dayName}
          </h1>
          <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2">
            <span className="text-green-800 font-semibold">
              Total do dia: {totalCalories} kcal
            </span>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Cardápio cetogênico completo com quatro refeições balanceadas, 
            ricas em gorduras saudáveis e pobres em carboidratos.
          </p>
        </div>
      </div>

      {/* Meals Grid */}
      <div className="space-y-8">
        {/* Breakfast */}
        <section>
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <h2 className="px-4 text-title text-green-700 bg-white">
              Café da Manhã
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>
          <MealCard meal={dayMeals.breakfast} mealType="breakfast" />
        </section>

        {/* Lunch */}
        <section>
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <h2 className="px-4 text-title text-green-700 bg-white">
              Almoço
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>
          <MealCard meal={dayMeals.lunch} mealType="lunch" />
        </section>

        {/* Snack */}
        <section>
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <h2 className="px-4 text-title text-green-700 bg-white">
              Café da Tarde
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>
          <MealCard meal={dayMeals.snack} mealType="snack" />
        </section>

        {/* Dinner */}
        <section>
          <div className="flex items-center mb-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
            <h2 className="px-4 text-title text-green-700 bg-white">
              Jantar
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
          </div>
          <MealCard meal={dayMeals.dinner} mealType="dinner" />
        </section>
      </div>

      {/* Bottom Actions */}
      <div className="mt-12 text-center">
        <button
          onClick={() => router.push('/')}
          className="btn-base btn-primary"
        >
          Ver Outros Dias
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Dica: Mantenha-se hidratado e consuma pelo menos 2 litros de água por dia.
        </p>
      </div>
    </div>
  );
}