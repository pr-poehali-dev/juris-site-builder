import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-medical-light">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-medical-blue" size={32} />
              <span className="text-2xl font-bold text-medical-dark">МедАккредитация</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-medical-gray hover:text-medical-blue transition-colors">Услуги</a>
              <a href="#advantages" className="text-medical-gray hover:text-medical-blue transition-colors">Преимущества</a>
              <a href="#prices" className="text-medical-gray hover:text-medical-blue transition-colors">Цены</a>
              <a href="#reviews" className="text-medical-gray hover:text-medical-blue transition-colors">Отзывы</a>
              <a href="#contacts" className="text-medical-gray hover:text-medical-blue transition-colors">Контакты</a>
            </nav>
            <Button className="bg-medical-blue hover:bg-blue-700">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medical-blue to-medical-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Периодическая аккредитация медицинских работников
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Полное сопровождение процесса аккредитации. Гарантируем успешное прохождение или возврат средств.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
                  <Icon name="FileCheck" className="mr-2" size={20} />
                  Начать аккредитацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Бесплатная консультация
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/ba8e3c8a-da05-4759-8f17-749d41431a65.jpg" 
                alt="Медицинская команда" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">100% гарантия</h3>
              <p className="text-medical-gray">Не пройдете - вернем деньги</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Быстро</h3>
              <p className="text-medical-gray">От 3 дней до готовности</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Опытные эксперты</h3>
              <p className="text-medical-gray">Более 500 успешных аккредитаций</p>
            </div>
            <div className="text-center">
              <div className="bg-medical-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Рассрочка</h3>
              <p className="text-medical-gray">Без банка и переплат</p>
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
                <CardTitle>Повышение квалификации</CardTitle>
                <CardDescription>Удостоверение с внесением в ФИС ФРДО</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Оформляем удостоверение о повышении квалификации с официальным внесением в федеральную информационную систему.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-green text-white rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} />
                </div>
                <CardTitle>Подготовка документов</CardTitle>
                <CardDescription>Заполнение заявления и портфолио</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Подготавливаем портфолио, заполняем заявление на аккредитацию и отчет о профессиональной деятельности.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-medical-blue text-white rounded-lg flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={24} />
                </div>
                <CardTitle>Полное сопровождение</CardTitle>
                <CardDescription>От подачи до получения свидетельства</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray">Формируем полный пакет документов и решаем все возникающие вопросы в процессе аккредитации.</p>
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
                <CardTitle className="text-2xl">Полное сопровождение аккредитации</CardTitle>
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
                <CardTitle className="text-2xl">Периодическая аккредитация под ключ</CardTitle>
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
      <section className="py-20 bg-gradient-to-r from-medical-blue via-blue-600 to-medical-green text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Icon name="FileCheck" className="mx-auto text-white mb-4" size={48} />
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Приступаем к работе только после <span className="text-blue-200">бесплатного аудита</span>
            </h2>
            <h3 className="text-2xl text-blue-200 mb-8">ваших документов</h3>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение 15 минут. Обсудим ваши документы, 
              возможности и сроки рассрочки, предложим оптимальный вариант сотрудничества.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input 
                  className="flex-1 px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 text-lg" 
                  placeholder="Ваше имя" 
                />
                <input 
                  className="flex-1 px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 text-lg" 
                  placeholder="+7 (495) 888-00-00" 
                />
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-lg font-semibold">
                  Оставить заявку
                </Button>
              </div>
              <p className="text-sm text-blue-200">
                Оставляя заявку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-medical-gray">Более 500 довольных медицинских работников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
      <section id="contacts" className="py-16 bg-medical-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-medical-dark mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-medical-gray">Готовы ответить на ваши вопросы</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-medical-blue text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Телефон</h3>
                    <p className="text-medical-gray">8 (800) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-medical-green text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-medical-gray">info@medaccreditation.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-medical-blue text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">Режим работы</h3>
                    <p className="text-medical-gray">Пн-Пт: 9:00-18:00<br />Сб-Вс: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Получить бесплатную консультацию</CardTitle>
                <CardDescription>Оставьте контакты и мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Специальность</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Врач/медсестра" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="+7 (___) ___-__-__" />
                </div>
                <Button className="w-full bg-medical-blue hover:bg-blue-700">
                  Получить консультацию
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-medical-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Activity" size={24} />
                <span className="text-xl font-bold">МедАккредитация</span>
              </div>
              <p className="text-gray-300">Профессиональное сопровождение медицинской аккредитации</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Повышение квалификации</li>
                <li>Подготовка документов</li>
                <li>Портфолио</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-300">
                <li>8 (800) 123-45-67</li>
                <li>info@medaccreditation.ru</li>
                <li>Москва, ул. Медицинская, 15</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Документы</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Лицензия</li>
                <li>Политика конфиденциальности</li>
                <li>Договор оферта</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 МедАккредитация. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;