'use client';

import { useRouter } from 'next/navigation';
import { getAllDays } from '@/data/meals';
import Image from 'next/image';

export default function DayBannerGrid() {
  const router = useRouter();
  const days = getAllDays();

  const handleDayClick = (day: string) => {
    router.push(`/${day}`);
  };

  return (
    <div className="day-grid">
      {days.map((dayData) => (
        <div
          key={dayData.day}
          className="day-banner card-clickable"
          onClick={() => handleDayClick(dayData.day)}
          role="button"
          tabIndex={0}
          aria-label={`Ver cardápio de ${dayData.dayName}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleDayClick(dayData.day);
            }
          }}
        >
          <Image
            src={dayData.image}
            alt={`Prato representativo para ${dayData.dayName}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={dayData.day === 'monday'} // Priority for first day
            onError={(e) => {
              // Fallback for broken images
              const target = e.target as HTMLImageElement;
              target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/da2a434c-bd61-4fc7-9383-77c685c2339b.png}+Cetogenico`;
            }}
          />
          <div className="day-banner-content">
            <h3 className="day-banner-title">{dayData.dayName}</h3>
            <p className="text-sm opacity-90 mt-1">
              Clique para ver o cardápio completo
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}