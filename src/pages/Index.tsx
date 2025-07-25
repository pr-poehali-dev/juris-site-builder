import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description dynamically
    document.title = "Аккредитация медицинских работников под ключ с гарантией - МедАккредитация";
    
    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МедАккредитация",
      "description": "Периодическая аккредитация медработников под ключ с гарантией прохождения. Помощь врачам и фармацевтам в аккредитации.",
      "url": "https://medaccreditation.ru",
      "telephone": "+7 (800) 123-45-67",
      "email": "info@medaccreditation.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Медицинская, 15",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "55.755814",
        "longitude": "37.617635"
      },
      "openingHours": "Mo-Fr 09:00-18:00, Sa-Su 10:00-16:00",
      "priceRange": "от 15000₽",
      "sameAs": [
        "https://t.me/medaccreditation"
      ],
      "serviceType": "Медицинская аккредитация",
      "areaServed": "Россия"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-medical-light">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-medical-blue" size={24} />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-medical-dark">МедАккредитация</span>
            </div>
            <nav className="hidden lg:flex space-x-6">
              <a href="#services" className="text-medical-gray hover:text-medical-blue transition-colors text-sm">Услуги</a>
              <a href="#advantages" className="text-medical-gray hover:text-medical-blue transition-colors text-sm">Преимущества</a>
              <a href="#prices" className="text-medical-gray hover:text-medical-blue transition-colors text-sm">Цены</a>
              <a href="#reviews" className="text-medical-gray hover:text-medical-blue transition-colors text-sm">Отзывы</a>
              <a href="#contacts" className="text-medical-gray hover:text-medical-blue transition-colors text-sm">Контакты</a>
            </nav>
            <Button className="bg-medical-blue hover:bg-blue-700 text-xs sm:text-sm px-3 py-2">
              <span className="hidden sm:inline">Получить консультацию</span>
              <span className="sm:hidden">Звонок</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-br from-medical-blue to-medical-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-medical-blue">Аккредитация медицинских работников под ключ</span> с гарантией прохождения 2025
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">
                Периодическая аккредитация медработников под ключ для врачей, фармацевтов, провизоров и медсестер. Помощь в подготовке документов и сопровождении. Не пройдете - вернем деньги.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100 w-full sm:w-auto">
                  <Icon name="FileCheck" className="mr-2" size={18} />
                  <span className="text-sm sm:text-base">Начать аккредитацию</span>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue w-full sm:w-auto">
                  <Icon name="Phone" className="mr-2" size={18} />
                  <span className="text-sm sm:text-base">Бесплатная консультация</span>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in mt-8 lg:mt-0">
              <img 
                src="/img/ba8e3c8a-da05-4759-8f17-749d41431a65.jpg" 
                alt="Медицинская команда" 
                className="w-full max-w-md mx-auto lg:max-w-none rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="Shield" size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">100% гарантия</h3>
              <p className="text-medical-gray text-xs sm:text-sm">Не пройдете - вернем деньги</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-green text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="Clock" size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Быстро</h3>
              <p className="text-medical-gray text-xs sm:text-sm">От 3 дней до готовности</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-blue text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="Users" size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Опытные эксперты</h3>
              <p className="text-medical-gray text-xs sm:text-sm">Более 500 успешных аккредитаций</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-green text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Icon name="CreditCard" size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">Рассрочка</h3>
              <p className="text-medical-gray text-xs sm:text-sm">Без банка и переплат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Наши услуги</h2>
            <p className="text-xl text-medical-gray">Полный комплекс услуг для прохождения аккредитации</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-blue text-white rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={24} />
                </div>
                <CardTitle>Непрерывное медицинское обучение</CardTitle>
                <CardDescription>Повышение квалификации врачей и среднего медперсонала</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Обучение по специальностям: лечебное дело, сестринское дело, фармция с официальным удостоверением.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-green text-white rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} />
                </div>
                <CardTitle>Помощь в подготовке документов</CardTitle>
                <CardDescription>Оформление портфолио для аккредитации медработников</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Помощь в подготовке документов для аккредитации медицинских работников: портфолио, заявление, отчет о профдеятельности.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-blue text-white rounded-lg flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={24} />
                </div>
                <CardTitle>Сопровождение аккредитации медработников</CardTitle>
                <CardDescription>От подачи до получения свидетельства об аккредитации</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Полное сопровождение аккредитации медработников: помощь в периодической аккредитации врачей, фармацевтов и медсестер.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-medical-gray">Более 500 довольных медицинских работников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-medical-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Официальная лицензия</h3>
              <p className="text-medical-gray">Работаем на основании образовательной лицензии. Все документы имеют юридическую силу.</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Персональный менеджер</h3>
              <p className="text-medical-gray">За каждым клиентом закрепляется персональный менеджер, который ведет процесс от начала до конца.</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Поддержка 24/7</h3>
              <p className="text-medical-gray">Консультируем и отвечаем на вопросы в любое время. Решаем проблемы оперативно.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-16 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Наши цены</h2>
            <p className="text-xl text-medical-gray">Никаких скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Курс повышения квалификации</CardTitle>
                <div className="text-4xl font-bold text-medical-blue mt-4">8 000 ₽</div>
                <CardDescription>144 часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Удостоверение о повышении квалификации</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Внесение в ФИС ФРДО</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Дистанционное обучение</span>
                </div>
                <Button className="w-full mt-6 bg-medical-blue hover:bg-blue-700">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="border-medical-blue border-2 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-medical-blue">Популярный</Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Аккредитация медработников цена</CardTitle>
                <div className="text-4xl font-bold text-medical-blue mt-4">8 000 ₽</div>
                <CardDescription>Все документы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Заполнение заявления</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Подготовка портфолио</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Отчет о профессиональной деятельности</span>
                </div>
                <Button className="w-full mt-6 bg-medical-blue hover:bg-blue-700">Выбрать</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Аккредитация врачей под ключ стоимость</CardTitle>
                <div className="text-4xl font-bold text-medical-blue mt-4">15 000 ₽</div>
                <CardDescription>От А до Я</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Удостоверение о повышении квалификации</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Полное сопровождение аккредитации</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-medical-green" size={16} />
                  <span>Персональный менеджер</span>
                </div>
                <Button className="w-full mt-6 bg-medical-blue hover:bg-blue-700">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Отчетность для регулирующих органов</h2>
            <p className="text-xl text-medical-gray">Автоматизированная система учета и формирования отчетов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="mb-4">
                <Icon name="Users" className="text-medical-blue mx-auto mb-2" size={32} />
                <h3 className="text-lg font-semibold text-medical-gray mb-2">Всего специалистов</h3>
              </div>
              <div className="text-4xl font-bold text-medical-blue mb-2">2,847</div>
              <div className="text-sm text-green-600">+12% за квартал</div>
            </Card>
            
            <Card className="text-center p-8">
              <div className="mb-4">
                <Icon name="CheckCircle" className="text-medical-green mx-auto mb-2" size={32} />
                <h3 className="text-lg font-semibold text-medical-gray mb-2">Аккредитовано</h3>
              </div>
              <div className="text-4xl font-bold text-medical-green mb-2">2,614</div>
              <div className="text-sm text-medical-gray">91.8% от общего числа</div>
            </Card>
            
            <Card className="text-center p-8">
              <div className="mb-4">
                <Icon name="Clock" className="text-orange-500 mx-auto mb-2" size={32} />
                <h3 className="text-lg font-semibold text-medical-gray mb-2">В процессе</h3>
              </div>
              <div className="text-4xl font-bold text-orange-500 mb-2">233</div>
              <div className="text-sm text-medical-gray">Завершение до 31.12.2024</div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Audit Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-medical-blue via-blue-600 to-medical-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 sm:mb-6">
              <Icon name="FileCheck" className="mx-auto text-white mb-3 sm:mb-4" size={32} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Приступаем к работе только после <span className="text-blue-200">бесплатного аудита</span>
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-6 sm:mb-8">ваших документов</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-8 sm:mb-12 text-blue-100 max-w-3xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут. Обсудим ваши документы, 
              возможности и сроки рассрочки, предложим оптимальный вариант сотрудничества.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <input 
                    className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-gray-800 placeholder-gray-500 text-base sm:text-lg" 
                    placeholder="Ваше имя" 
                  />
                  <input 
                    className="flex-1 px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-gray-800 placeholder-gray-500 text-base sm:text-lg" 
                    placeholder="+7 (495) 888-00-00" 
                  />
                </div>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
                  Оставить заявку
                </Button>
              </div>
              <p className="text-xs sm:text-sm text-blue-200">
                Оставляя заявку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medical-dark mb-3 sm:mb-4">Отзывы клиентов</h2>
            <p className="text-base sm:text-lg lg:text-xl text-medical-gray">Более 500 довольных медицинских работников</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center">
                    <span className="font-bold">АП</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Петрова</CardTitle>
                    <CardDescription>Врач-терапевт</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-yellow-400 mb-4">
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                </div>
                <p className="text-medical-gray">"Очень довольна сервисом! Быстро, качественно, без лишних хлопот. Рекомендую всем коллегам."</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-medical-green text-white rounded-full flex items-center justify-center">
                    <span className="font-bold">МС</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Михаил Смирнов</CardTitle>
                    <CardDescription>Медсестра</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-yellow-400 mb-4">
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                </div>
                <p className="text-medical-gray">"Отличная работа менеджеров. Все объяснили, помогли с документами. Прошел аккредитацию с первой попытки!"</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-medical-blue text-white rounded-full flex items-center justify-center">
                    <span className="font-bold">ЕК</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Козлова</CardTitle>
                    <CardDescription>Врач-хирург</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex text-yellow-400 mb-4">
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                  <Icon name="Star" size={16} fill="currentColor" />
                </div>
                <p className="text-medical-gray">"Профессиональный подход и внимание к деталям. Стоимость полностью оправдана качеством услуг."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-12 sm:py-16 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medical-dark mb-3 sm:mb-4">Свяжитесь с нами</h2>
            <p className="text-base sm:text-lg lg:text-xl text-medical-gray">Готовы ответить на ваши вопросы</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-medical-blue text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Телефон</h3>
                    <p className="text-medical-gray text-sm sm:text-base">8 (800) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-medical-green text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Email</h3>
                    <p className="text-medical-gray text-sm sm:text-base">info@medaccreditation.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-medical-blue text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={16} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Режим работы</h3>
                    <p className="text-medical-gray text-sm sm:text-base">Пн-Пт: 9:00-18:00<br />Сб-Вс: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="mt-8 lg:mt-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Получить бесплатную консультацию</CardTitle>
                <CardDescription className="text-sm sm:text-base">Оставьте контакты и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Специальность</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" placeholder="Врач/медсестра" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" placeholder="+7 (___) ___-__-__" />
                </div>
                <Button className="w-full bg-medical-blue hover:bg-blue-700 text-sm sm:text-base">
                  Получить консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section with SEO Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-medical-dark mb-3 sm:mb-4">Часто задаваемые вопросы</h2>
            <p className="text-base sm:text-lg lg:text-xl text-medical-gray">Ответы на основные вопросы по аккредитации медработников</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-medical-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-medical-dark">Сколько стоит аккредитация медицинских работников 2025?</h3>
              <p className="text-medical-gray">Цена на аккредитацию медработников под ключ составляет от 15 000 рублей. Стоимость аккредитации врачей и цена на периодическую аккредитацию медицинских работников зависит от объема услуг.</p>
            </div>
            
            <div className="bg-medical-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-medical-dark">Как получить помощь в аккредитации фармацевтов?</h3>
              <p className="text-medical-gray">Помощь в аккредитации фармацевтов включает подготовку документов, обучение и сопровождение. Аккредитация фармацевтов под ключ 2025 обеспечивает 100% гарантию прохождения.</p>
            </div>
            
            <div className="bg-medical-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-medical-dark">Особенности аккредитации по сестринскому делу?</h3>
              <p className="text-medical-gray">Аккредитация по сестринскому делу и аккредитация медицинских сестер под ключ требует специальной подготовки. Помощь в аккредитации медицинских работников в Москве включает полное сопровождение.</p>
            </div>
            
            <div className="bg-medical-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-medical-dark">Можно ли купить аккредитацию медсестры?</h3>
              <p className="text-medical-gray">Купить аккредитацию медсестры невозможно, но можно получить профессиональную помощь в подготовке. Помощь в получении аккредитации медицинских работников включает легальное сопровождение процесса.</p>
            </div>
            
            <div className="bg-medical-light p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3 text-medical-dark">Особенности аккредитации фельдшера по лечебному делу 2025?</h3>
              <p className="text-medical-gray">Аккредитация фельдшера лечебное дело 2025 и аккредитация фельдшера включает подготовку по специальности. Помощь в периодической аккредитации медработников обеспечивает успешное прохождение.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-dark text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Icon name="Activity" size={20} className="sm:w-6 sm:h-6" />
                <span className="text-lg sm:text-xl font-bold">МедАккредитация</span>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">Профессиональное сопровождение медицинской аккредитации</p>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Аккредитация медработников</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Периодическая аккредитация врачей</li>
                <li>Аккредитация фармацевтов</li>
                <li>Аккредитация медсестер</li>
                <li>Помощь в аккредитации</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Контакты</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>8 (800) 123-45-67</li>
                <li>info@medaccreditation.ru</li>
                <li>Москва, ул. Медицинская, 15</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Документы</h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Лицензия</li>
                <li>Политика конфиденциальности</li>
                <li>Договор оферта</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
            <p className="text-sm sm:text-base">&copy; 2024 МедАккредитация. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;