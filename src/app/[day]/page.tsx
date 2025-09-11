import { notFound } from 'next/navigation';
import TopHeader from '@/components/TopHeader';
import MealPlanScreen from '@/components/MealPlanScreen';
import { getDayMeals } from '@/data/meals';

interface DayPageProps {
  params: Promise<{
    day: string;
  }>;
}

export default async function DayPage({ params }: DayPageProps) {
  const resolvedParams = await params;
  const dayMeals = getDayMeals(resolvedParams.day);

  if (!dayMeals) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <TopHeader />
      <MealPlanScreen dayMeals={dayMeals} />
    </main>
  );
}

// Generate static params for all days
export function generateStaticParams() {
  return [
    { day: 'monday' },
    { day: 'tuesday' },
    { day: 'wednesday' },
    { day: 'thursday' },
    { day: 'friday' },
    { day: 'saturday' },
    { day: 'sunday' }
  ];
}

// Generate metadata for each day
export async function generateMetadata({ params }: DayPageProps) {
  const resolvedParams = await params;
  const dayMeals = getDayMeals(resolvedParams.day);
  
  if (!dayMeals) {
    return {
      title: 'Dia não encontrado - MaiSaúde'
    };
  }

  return {
    title: `${dayMeals.dayName} - Cardápio Cetogênico | MaiSaúde`,
    description: `Cardápio cetogênico completo para ${dayMeals.dayName} com café da manhã, almoço, café da tarde e jantar. Receitas detalhadas com ingredientes e modo de preparo.`,
    openGraph: {
      title: `${dayMeals.dayName} - Cardápio Cetogênico`,
      description: `Cardápio cetogênico completo para ${dayMeals.dayName}`,
      images: [dayMeals.breakfast.image]
    }
  };
}