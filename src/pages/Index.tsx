import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';

interface Request {
  id: number;
  title: string;
  budget: string;
  category: string;
  author: string;
  authorAvatar: string;
  rating: number;
  responses: number;
}

const categories = [
  { name: 'Электроника', icon: 'Smartphone', gradient: 'from-[#FF6B6B] to-[#6C5CE7]' },
  { name: 'Недвижимость', icon: 'Home', gradient: 'from-[#4ECDC4] to-[#6C5CE7]' },
  { name: 'Услуги', icon: 'Briefcase', gradient: 'from-[#FFE66D] to-[#FF6B6B]' },
  { name: 'Транспорт', icon: 'Car', gradient: 'from-[#6C5CE7] to-[#4ECDC4]' },
  { name: 'Разное', icon: 'Package', gradient: 'from-[#FF6B6B] to-[#FFE66D]' }
];

const mockRequests: Request[] = [
  {
    id: 1,
    title: 'Ищу iPhone 15 Pro',
    budget: 'до 120 000 ₽',
    category: 'Электроника',
    author: 'Анна Смирнова',
    authorAvatar: 'AS',
    rating: 4.8,
    responses: 12
  },
  {
    id: 2,
    title: 'Нужен мастер по ремонту квартир',
    budget: 'договорная',
    category: 'Услуги',
    author: 'Дмитрий Козлов',
    authorAvatar: 'ДК',
    rating: 4.9,
    responses: 8
  },
  {
    id: 3,
    title: 'Куплю MacBook Air M2',
    budget: 'до 90 000 ₽',
    category: 'Электроника',
    author: 'Елена Волкова',
    authorAvatar: 'ЕВ',
    rating: 5.0,
    responses: 15
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('feed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B6B] via-[#6C5CE7] to-[#4ECDC4] flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] bg-clip-text text-transparent">
                Маркетплейс Запросов
              </h1>
            </div>
            <Button className="bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] hover:opacity-90 text-white shadow-lg">
              Создать запрос
            </Button>
          </div>
        </div>
      </header>

      <nav className="border-b border-gray-200 bg-white/60 backdrop-blur-lg sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            {[
              { id: 'feed', label: 'Лента', icon: 'LayoutGrid' },
              { id: 'requests', label: 'Запросы', icon: 'MessageSquare' },
              { id: 'categories', label: 'Категории', icon: 'Grid3x3' },
              { id: 'profile', label: 'Профиль', icon: 'User' },
              { id: 'notifications', label: 'Уведомления', icon: 'Bell' },
              { id: 'help', label: 'Помощь', icon: 'HelpCircle' },
              { id: 'about', label: 'О проекте', icon: 'Info' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon name={tab.icon as any} size={18} />
                <span className="font-medium text-sm">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <Input
              placeholder="Поиск запросов..."
              className="pl-12 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-[#6C5CE7] transition-colors"
            />
          </div>
        </div>

        <section className="mb-12 animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] bg-clip-text text-transparent">
              Категории
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Card
                key={category.name}
                className="group cursor-pointer border-2 border-transparent hover:border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-32 bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center text-white p-4 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                  <Icon name={category.icon as any} size={40} className="mb-2 relative z-10" />
                  <span className="font-bold text-center relative z-10">{category.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#4ECDC4] to-[#6C5CE7] bg-clip-text text-transparent">
                Актуальные запросы
              </span>
            </h2>
            <Button variant="outline" className="gap-2 border-2 hover:border-[#6C5CE7]">
              <Icon name="SlidersHorizontal" size={18} />
              Фильтры
            </Button>
          </div>

          <div className="grid gap-6">
            {mockRequests.map((request, index) => (
              <Card
                key={request.id}
                className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#6C5CE7] group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <Avatar className="w-14 h-14 border-2 border-gray-200">
                    <AvatarFallback className="bg-gradient-to-br from-[#FF6B6B] to-[#6C5CE7] text-white font-bold">
                      {request.authorAvatar}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-[#6C5CE7] transition-colors">
                          {request.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{request.author}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-[#FFE66D] to-[#FF6B6B] text-gray-900 border-0 font-bold whitespace-nowrap">
                        {request.category}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Icon name="Wallet" size={16} className="text-[#4ECDC4]" />
                        <span className="font-semibold">{request.budget}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon name="Star" size={16} className="text-[#FFE66D] fill-[#FFE66D]" />
                        <span className="font-semibold">{request.rating}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon name="MessageCircle" size={16} className="text-[#6C5CE7]" />
                        <span className="font-semibold">{request.responses} откликов</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-gradient-to-r from-[#4ECDC4] to-[#6C5CE7] hover:opacity-90 text-white shadow-lg gap-2">
                        <Icon name="Send" size={16} />
                        Откликнуться
                      </Button>
                      <Button variant="outline" className="gap-2 border-2 hover:border-[#6C5CE7]">
                        <Icon name="Eye" size={16} />
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-gray-200 bg-white/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#6C5CE7] bg-clip-text text-transparent">
                О проекте
              </h3>
              <p className="text-gray-600">
                Маркетплейс запросов — платформа для быстрого поиска товаров и услуг напрямую от частных продавцов.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#4ECDC4] to-[#6C5CE7] bg-clip-text text-transparent">
                Помощь
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-[#6C5CE7] cursor-pointer transition-colors">Как создать запрос</li>
                <li className="hover:text-[#6C5CE7] cursor-pointer transition-colors">Как откликнуться</li>
                <li className="hover:text-[#6C5CE7] cursor-pointer transition-colors">Правила платформы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-[#FFE66D] to-[#FF6B6B] bg-clip-text text-transparent">
                Контакты
              </h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full hover:border-[#6C5CE7]">
                  <Icon name="Send" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full hover:border-[#6C5CE7]">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-200">
            © 2024 Маркетплейс Запросов. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
