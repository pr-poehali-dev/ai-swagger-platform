import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [prompt, setPrompt] = useState('');

  const features = [
    {
      icon: 'Sparkles',
      title: 'AI-генерация',
      description: 'Создавайте уникальный свага за секунды с помощью нейросетей'
    },
    {
      icon: 'Code2',
      title: 'API доступ',
      description: 'Интегрируйте генерацию в ваш рабочий процесс через REST API'
    },
    {
      icon: 'Palette',
      title: 'Кастомизация',
      description: 'Полный контроль над стилем, цветами и композицией'
    },
    {
      icon: 'Zap',
      title: 'Мгновенно',
      description: 'Результат за 3-5 секунд, без ожидания'
    },
    {
      icon: 'Download',
      title: 'Высокое качество',
      description: 'Экспорт в 4K разрешении для печати'
    },
    {
      icon: 'Users',
      title: 'Команды',
      description: 'Совместная работа над брендом в реальном времени'
    }
  ];

  const examples = [
    {
      image: 'https://cdn.poehali.dev/projects/0f1d0e18-be64-4075-910a-d685ae43927e/files/01383b1c-afeb-4ad3-9ac2-a08c8dda69a5.jpg',
      title: 'Футболка Gradient Tech',
      prompt: 'Modern tech t-shirt with holographic gradient'
    },
    {
      image: 'https://cdn.poehali.dev/projects/0f1d0e18-be64-4075-910a-d685ae43927e/files/c3828641-6e2c-4fa1-8c1d-3a95f040a233.jpg',
      title: 'Стикер-пак Neon',
      prompt: 'Laptop sticker pack with neon patterns'
    },
    {
      image: 'https://cdn.poehali.dev/projects/0f1d0e18-be64-4075-910a-d685ae43927e/files/6c05fd63-ed28-4252-b842-c63a4cb4cc9d.jpg',
      title: 'Худи Premium',
      prompt: 'Sleek hoodie with abstract gradient design'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg animate-gradient rounded-lg" />
            <span className="text-xl font-bold">SwagAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Возможности</a>
            <a href="#examples" className="text-sm text-muted-foreground hover:text-foreground transition">Примеры</a>
            <a href="#api" className="text-sm text-muted-foreground hover:text-foreground transition">API</a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition">Документация</a>
            <Button size="sm" className="gradient-bg animate-gradient">Начать</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Создавай свага с помощью
              <br />
              <span className="gradient-text animate-gradient">ИИ-платформы</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Превращай идеи в уникальный мерч за секунды. Нейросети, API, безлимитные возможности.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
              <div className="space-y-4">
                <label className="text-sm font-medium">Опиши свой свага</label>
                <div className="flex gap-3">
                  <Input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Modern tech hoodie with neon accents..."
                    className="flex-1 bg-background/50 border-border focus:border-primary"
                  />
                  <Button className="gradient-bg animate-gradient px-8">
                    <Icon name="Sparkles" size={20} className="mr-2" />
                    Создать
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Футболка', 'Худи', 'Стикеры', 'Кепка', 'Носки'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setPrompt(tag)}
                      className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20" id="examples">
            {examples.map((example, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover-lift bg-card/30 backdrop-blur-sm border-border group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.prompt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё для создания <span className="gradient-text">идеального свага</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Платформа нового поколения для дизайнеров и брендов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover-lift group"
              >
                <div className="w-14 h-14 gradient-bg animate-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="gradient-bg animate-gradient rounded-3xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готов создать свой свага?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Присоединяйся к тысячам дизайнеров, которые уже используют ИИ для создания мерча
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="FileText" size={20} className="mr-2" />
                API документация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition">Примеры</a></li>
                <li><a href="#" className="hover:text-foreground transition">Цены</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разработчикам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">API</a></li>
                <li><a href="#" className="hover:text-foreground transition">Документация</a></li>
                <li><a href="#" className="hover:text-foreground transition">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition">Сообщество</a></li>
                <li><a href="#" className="hover:text-foreground transition">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 gradient-bg animate-gradient rounded-md" />
              <span className="font-semibold">SwagAI</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 SwagAI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
