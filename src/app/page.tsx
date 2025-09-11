'use client';

import TopHeader from '@/components/TopHeader';
import DayBannerGrid from '@/components/DayBannerGrid';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <TopHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-hero mb-4" style={{ color: '#1B5E20' }}>
            Sua Jornada Cetogênica
          </h1>
          <p className="text-subtitle text-gray-700 mb-8 max-w-2xl mx-auto">
            Descubra cardápios semanais completos para uma alimentação cetogênica equilibrada. 
            Pratos deliciosos, nutritivos e fáceis de preparar para cada dia da semana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span>Low Carb</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span>Alto em Gorduras</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span>Proteína Moderada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Menu Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-title mb-4" style={{ color: '#1B5E20' }}>
              Cardápios da Semana
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Clique em qualquer dia para ver o cardápio completo com café da manhã, 
              almoço, café da tarde e jantar. Cada refeição inclui lista de ingredientes 
              e modo de preparo detalhado.
            </p>
          </div>

          {/* Day Banners Grid */}
          <DayBannerGrid />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-title mb-4" style={{ color: '#1B5E20' }}>
              Benefícios da Dieta Cetogênica
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#1B5E20' }}>
                Mais Energia
              </h3>
              <p className="text-gray-600 text-sm">
                Queima de gordura como fonte primária de energia, 
                proporcionando energia mais estável ao longo do dia.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#1B5E20' }}>
                Foco Mental
              </h3>
              <p className="text-gray-600 text-sm">
                Cetonas fornecem energia eficiente para o cérebro, 
                melhorando clareza mental e concentração.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#1B5E20' }}>
                Controle de Peso
              </h3>
              <p className="text-gray-600 text-sm">
                Redução natural do apetite e queima eficiente de gordura 
                corporal armazenada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-title mb-4" style={{ color: '#1B5E20' }}>
            Comece Sua Transformação Hoje
          </h2>
          <p className="text-body text-gray-600 mb-8 max-w-2xl mx-auto">
            Escolha um dia da semana acima e comece sua jornada cetogênica com receitas 
            testadas e balanceadas nutricionalmente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#cardapios" 
              className="btn-base btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('.day-grid')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              Ver Cardápios
            </a>
            <a 
              href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações sobre a dieta cetogênica." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-base btn-secondary"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#1B5E20' }}
            >
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <h3 className="text-lg font-semibold">MaiSaúde</h3>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Transformando vidas através da alimentação cetogênica
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="https://instagram.com/maisaude" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a 
              href="https://maisaude.com.br" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Site
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-800 text-xs text-gray-500">
            © 2024 MaiSaúde. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}