document.addEventListener("DOMContentLoaded", function () {
  const homeTexts = {
    menu1: {
      ru: "О проекте",
      en: "About the project",
      uz: "Loyiha haqida",
    },
    menu2: {
      ru: "Преймущества",
      en: "Advantages",
      uz: "Afzalliklar",
    },
    menu3: {
      ru: "Функционал",
      en: "Functional",
      uz: "Funktsional",
    },
    menu4: {
      ru: "Тарифы",
      en: "Tariffs",
      uz: "Tariflar",
    },
    menu5: {
      ru: "Подать заявку",
      en: "Submit an application",
      uz: "Ariza yuboring",
    },
    text1: {
      ru: "Продавайте чаще автоматически 24/7/365",
      en: "deliver more often automatically 24/7/365",
      uz: "24/7/365 avtomatik ravishda tez-tez soting",
    },
    text2: {
      ru: "без ограничений на  сообщения  используя передовые Ai-технологии и внутреннюю систему управления  бронированиями  с первым легким запуском от 3 дней",
      en: "unlimited messagingusing advanced AI technology and internalbooking management system with first easy launch from 3 days",
      uz: "cheksiz xabar almashishilg'or AI texnologiyasidan foydalanish va ichkibron qilishni boshqarish tizimi 3 kundan boshlab birinchi oson ishga tushirish bilan",
    },
    text3: {
      ru: "Бесплатная демонстрация",
      en: "Free demo",
      uz: "Bepul demo",
    },
    text4: {
      ru: "Запись на консультацию",
      en: "Book a consultation",
      uz: "Konsultatsiyani bron qiling",
    },
    text5: {
      ru: "Нулевая наценка на сообщения",
      en: "Zero markup on messages",
      uz: "Xabarlarda nol belgilash",
    },
    text6: {
      ru: "Работа строго по договору",
      en: "Work strictly according to contract",
      uz: "Shartnomaga muvofiq qat'iy ishlang",
    },
    text7: {
      ru: "MVP в 20% стоимости разработки за 3 дня",
      en: "MVP at 20% of the development cost in 3 days",
      uz: "3 kun ichida ishlab chiqish narxining 20% MVP",
    },
    text8: {
      ru: "Безлимитный доступ по фикс цене",
      en: "Unlimited access at a fixed price",
      uz: "Belgilangan narxda cheksiz kirish",
    },
    text9: {
      ru: "Оплата в 2 части с безопасным выходом",
      en: "Payment in 2 parts with secure exit",
      uz: "Xavfsiz chiqish bilan 2 qismda to'lov",
    },
    text10: {
      ru: "Развиваем вашего ИИ-робота каждый месяц",
      en: "We develop your AI robot every month",
      uz: "Biz har oy sizning AI robotingizni ishlab chiqamiz",
    },
    text11: {
      ru: "Внешние",
      en: "External",
      uz: "Tashqi",
    },
    text12: {
      ru: "Внутренние",
      en: "Internal",
      uz: "Ichki",
    },
    text13: {
      ru: "Социальные сети и мессенджеры",
      en: "Social networks and messengers",
      uz: "Ijtimoiy tarmoqlar va messenjerlar",
    },
    text14: {
      ru: "Поисковая реклама",
      en: "Search advertising",
      uz: "Reklamani qidirish",
    },
    text15: {
      ru: "Внутренняя экосистема",
      en: "Internal ecosystem",
      uz: "Ichki ekotizim",
    },
    text16: {
      ru: "CRM системы",
      en: "CRM systems",
      uz: "CRM tizimlari",
    },
    text17: {
      ru: "NO-CODE платформы",
      en: "NO-CODE platforms",
      uz: "NO-CODE platformalari",
    },
    text18: {
      ru: "Режим разработчика",
      en: "developer",
      uz: "Dasturchi rejimi",
    },
    text19: {
      ru: "AI Технологии",
      en: "AI Technologies",
      uz: "AI texnologiyalari",
    },
    text20: {
      ru: "AI Технологии",
      en: "AI texnologiyalari",
      uz: "AI texnologiyalari",
    },
    text21: {
      ru: "Не бывает неподходящих:",
      en: "There are no inappropriate ones:",
      uz: "Hech qanday mos kelmaydiganlar yo'q:",
    },
    text22: {
      ru: "ниши",
      en: "niches",
      uz: "bo'shliqlar",
    },
    text23: {
      ru: "продукта",
      en: "product",
      uz: "mahsulot",
    },
    text24: {
      ru: "услуги",
      en: "services",
      uz: "xizmatlar",
    },
    text25: {
      ru: "бизнеса",
      en: "business",
      uz: "biznes",
    },
    text26: {
      ru: "аудитории",
      en: "audiences",
      uz: "tomoshabinlar",
    },
    text27: {
      ru: "Наймите себе ИИ-сотрудников, которые будут работать только на ВАС, пока есть интернет,без выходных, отпусков и увольнений",
      en: "Hire yourself AI employees who will work only for YOU, as long as there is internet, without days off, vacations and layoffs",
      uz: "Internet mavjud bo'lsa, dam olish kunlarisiz, ta'tillarsiz va ishdan bo'shatilmasdan faqat siz uchun ishlaydigan AI xodimlarini o'zingizga yollang.",
    },
    text28: {
      ru: "ресепш",
      en: "reception",
      uz: "qabul qilish",
    },
    text29: {
      ru: "менеджер",
      en: "manager",
      uz: "menejer",
    },
    text30: {
      ru: "хостес",
      en: "hostess",
      uz: "styuardessa",
    },
    text31: {
      ru: "консультант",
      en: "consultant",
      uz: "maslahatchi",
    },

    text32: {
      ru: "AI - travel менеджер забронировал тур",
      en: "AI - travel The manager booked the tour",
      uz: "AI - travel Menejer ekskursiyani bron qildi",
    },

    text33: {
      ru: "мин",
      en: "min",
      uz: "min",
    },

    text34: {
      ru: "AI - менеджер оформил заказ",
      en: "AI - менеджер менеджер оформил заказ",
      uz: "AI - менеджер Menejer buyurtma berdi",
    },
    text35: {
      ru: "только что",
      en: "just now",
      uz: "hozir",
    },

    text36: {
      ru: "AI подтвердил бронирование",
      en: "AI confirmed the booking",
      uz: "AI bron qilishni tasdiqladi",
    },

    text37: {
      ru: "“Пожизненно эксплуатируйте” ИИ-сотрудников без перерывов",
      en: "“Exploit” AI employees for life without breaks",
      uz: "AI xodimlarini tanaffuslarsiz umrbod “foydalang”",
    },

    text38: {
      ru: "С единоразовой оплатой за создание и фиксированным ежемесячным взносом",
      en: "With a one-time setup fee and a fixed monthly fee",
      uz: "Bir martalik sozlash toʻlovi va belgilangan oylik toʻlov bilan",
    },

    text39: {
      ru: "За безлимитное использование неограниченных мощностей",
      en: "For unlimited use of unlimited capacities",
      uz: "Cheksiz imkoniyatlardan cheksiz foydalanish uchun",
    },

    text40: {
      ru: "Отдыхайте без стресса, отвлекаясь,только на такие оповещения от своего “Цифрового отдела”",
      en: "Отдыхайте без стресса, отвлекаясь,только на такие оповещения от своего “Цифрового отдела”",
      uz: "Raqamli bo'lim dan faqat shu kabi bildirishnomalar bilan chalg 'ib, stresssiz dam oling.",
    },

    text41: {
      ru: "Web-platform руководителям",
      en: "Web-platform to the leaders",
      uz: "Web-platform ahbarlariga",
    },

    text42: {
      ru: "Получите в день оплаты доступ к личному кабинету на платформе Business Robots Ai,где вы можете сразу начать управлять доступами, ролями и настройками",
      en: "On the day of payment, get access to your personal account on the Business Robots Ai platform, where you can immediately start managing access, roles and settings",
      uz: "To'lov kunida Business Robots Ai platformasida shaxsiy hisobingizga kirish huquqiga ega bo'ling, u erda siz darhol kirish, rollar va sozlamalarni boshqarishni boshlashingiz mumkin.",
    },

    text43: {
      ru: "Mobile App сотрудникам",
      en: "Mobile App employees",
      uz: "Mobil ilova xodimlar",
    },

    text44: {
      ru: "Рекламного трафика может обработать один ИИ-сотрудник",
      en: "Advertising traffic can be processed by one AI employee",
      uz: "Reklama trafigini bitta AI xodimi qayta ishlashi mumkin",
    },

    text45: {
      ru: "Из любых рекламных источников в любом объеме без ограничений на языки, аудитории, количество товаров или услуг. Заберите весь трафик у всех конкурентов",
      en: "From any advertising sources in any volume without restrictions on languages, audiences, number of goods or services. Take all the traffic from all competitors",
      uz: "Tillar, auditoriyalar, tovarlar yoki xizmatlar soni bo'yicha cheklovlarsiz istalgan hajmdagi har qanday reklama manbalaridan. Barcha raqobatchilardan barcha trafikni oling",
    },

    text46: {
      ru: "Подключите роботу еще 50+ внешних интеграций и 20+ внутренних инструментов",
      en: "Connect the robot with 50+ more external integrations and 20+ internal tools",
      uz: "Podklyuchite robotu yeshche 50+ vneshnikh integratsiy i 20+ vnutrennikh instrumentov 84 / 5 000 Robotni 50 dan ortiq tashqi integratsiya va 20 dan ortiq ichki vositalar bilan ulang",
    },

    text47: {
      ru: "Подключайте готовые интеграции в 3 клика мышки",
      en: "Connect ready-made integrations in 3 mouse clicks",
      uz: "Sichqonchani 3 marta bosish bilan tayyor integratsiyalarni ulang",
    },

    text48: {
      ru: "Или создавайте новые с кодом и без него",
      en: "Or create new ones with or without code",
      uz: "Yoki yangilarini yarating kodli yoki kodsiz",
    },

    text49: {
      ru: "Соц сети и мессенджеры",
      en: "Social networks and messengers",
      uz: "Ijtimoiy tarmoqlar va messenjerlar",
    },

    text50: {
      ru: "CRM cистемы",
      en: "CRM systems",
      uz: "CRM tizimlari",
    },

    text51: {
      ru: "B2B связь",
      en: "B2B communication",
      uz: "B2B aloqa",
    },

    text52: {
      ru: "Генеративные AI-модели",
      en: "Generative AI models",
      uz: "Generativ AI modellari",
    },

    text53: {
      ru: "Голосовые  Ai-технологии",
      en: "Voice Ai-technologies",
      uz: "Voice Ai-texnologiyalari",
    },

    text54: {
      ru: "Системы аналитики",
      en: "Analytics systems",
      uz: "Analitik tizimlar",
    },

    text55: {
      ru: "Системы оплат",
      en: "Payment systems",
      uz: "To'lov tizimlari",
    },

    text56: {
      ru: "NO-CODE интеграции",
      en: "NO-CODE integrations",
      uz: "NO-CODE integratsiyalari",
    },

    text57: {
      ru: "Режим разработчика",
      en: "Developer mode",
      uz: "Dasturchi rejimi",
    },

    text58: {
      ru: "Уникальный функционал платформы Business Robots Ai",
      en: "Unique functionality of the Business Robots Ai platform",
      uz: "Business Robots Ai platformasining noyob funksionalligi",
    },

    text59: {
      ru: "Online магазин",
      en: "Online store",
      uz: "Onlayn do'kon",
    },

    text60: {
      ru: "В любой момент добавляйте или меняйте товары и категории, устанавливайте скидки, SKU и остатки. Привяжите к ним up-sell и cross-sell, укажите варианты доставки и требуемые для заказа или оплаты данные, ИИ-продавец сделает все сам - вам придет оповещение",
      en: "Add or change products and categories at any time, set discounts, SKUs and balances. Link up-sell and cross-sell to them, specify delivery options and the data required for ordering or payment, the AI seller will do everything itself - you will receive a notification",
      uz: "Istalgan vaqtda mahsulot va toifalarni qo'shing yoki o'zgartiring, chegirmalar, SKU va balanslarni o'rnating. Ularga sotish va o'zaro sotishni bog'lang, etkazib berish variantlarini va buyurtma yoki to'lov uchun zarur bo'lgan ma'lumotlarni belgilang, AI sotuvchisi hamma narsani o'zi qiladi - sizga bildirishnoma keladi",
    },

    text61: {
      ru: "Подключите самые современные модели и усильте их с помощью технологий: Ai-triggers, Ai-agents, Ai-assistance. Используйте ИИ последовательно и параллельно, внутри авто-цепочки как Ai-step или дайте ему разрешение запускать нужные авто-цепочки в нужный момент исходя из контекста.",
      en: "Connect the most modern models and enhance them with technologies: Ai-triggers, Ai-agents, Ai-assistance. Use AI sequentially and in parallel, inside the auto-chain as Ai-step or give it permission to launch the necessary auto-chains at the right time based on the context.",
      uz: "Eng zamonaviy modellarni ulang va ularni texnologiyalar bilan yaxshilang: Ai-triggers, Ai-agents, Ai-assistance. AIdan ketma-ket va parallel ravishda, avtomatik zanjir ichida Ai-step sifatida foydalaning yoki kontekstdan kelib chiqib, kerakli vaqtda kerakli avtomatik zanjirlarni ishga tushirishga ruxsat bering.",
    },

    text62: {
      ru: "Внедрите ИИ-продавца в комментарии, передавайте данные в рекламный кабинет Facebook ads, подключите ИИ-поддержку при отметки вас в Stories, пишите в direct первыми с помощью ИИ-leadmanager без блокировок и спамов - потому что мы сертифицированный Meta Business Partner",
      en: "Implement an AI seller in comments, transfer data to the Facebook ads advertising account, connect AI support when you are tagged in Stories, write in direct first with the help of AI leadmanager without blocking and spam - because we are a certified Meta Business Partner",
      uz: "Sharhlarda sun'iy intellekt sotuvchisini qo'llang, ma'lumotlarni Facebook reklama akkauntiga o'tkazing, Stories-da teglanganingizda sun'iy intellektni qo'llab-quvvatlang, blokirovkasiz va spamsiz AI boshqaruvchisi yordamida avval to'g'ridan-to'g'ri yozing - chunki biz sertifikatlangan Meta biznes hamkorimiz.",
    },

    text63: {
      ru: "Ваш ИИ-агент сможет понимать аудио-сообщения, а также отправлять аудио в ответ, готовым или вашим склонированным голосом за счет технологий Speech To Text и Text To Speech от Google Dialog Flow и Eleven Labs",
      en: "Your AI agent will be able to understand audio messages and also send audio back, either with a ready-made voice or with your cloned voice, thanks to Speech To Text and Text To Speech technologies from Google Dialog Flow and Eleven Labs",
      uz: "Sizning AI agentingiz Google Dialog Flow va Eleven Labs’ning Speech To Text va Text To Speech texnologiyalari tufayli audio xabarlarni tushuna oladi va audioni tayyor ovoz yoki klonlangan ovozingiz bilan qaytarib yubora oladi.",
    },

    text64: {
      ru: "Введите график работы, добавьте дневные и групповые лимиты на посещения, ограничьте время приема и перерыва, настройте интервалы автоматических напоминаний и в 2 клика управляйте потоком заявок на бронирование от вашего ИИ-хостеса",
      en: "Enter your work schedule, add daily and group limits on visits, limit reception and break times, set up automatic reminder intervals and manage the flow of booking requests from your AI hostess in 2 clicks",
      uz: "Ish jadvalingizni kiriting, tashriflar uchun kunlik va guruh cheklovlarini qo'shing, qabul qilish va tanaffus vaqtlarini cheklang, avtomatik eslatma oraliqlarini o'rnating va 2 marta bosish orqali AI styuardessangizdan buyurtma so'rovlari oqimini boshqaring",
    },

    text65: {
      ru: "Усильте свое ИИ доминирование в 3 клика переключив Chat GPT на  более дешевую Google Gemine, аналитический DeepSeek, креативный xAi, или более человечный Claude Ai",
      en: "Boost your AI dominance in 3 clicks by switching Chat GPT to the cheaper Google Gemine, the analytical DeepSeek, the creative xAi, or the more human Claude Ai",
      uz: "Chat GPT-ni arzonroq Google Gemine, analitik DeepSeek, kreativ xAi yoki ko'proq inson Klod Ai-ga almashtirish orqali 3 marta bosish orqali sun'iy intellektning ustunligini oshiring.",
    },
    text66: {
      ru: "Добавьте функции распознавания, анализа или генерации изображений в ваши социальные сети и мессенджеры. Или дайте эту возможность клиентам генерировать изображения в вашем боте по вашим настройкам",
      en: "Add image recognition, analysis or generation functions to your social networks and messengers. Or give this opportunity to clients to generate images in your bot according to your settings",
      uz: "Ijtimoiy tarmoqlar va messenjerlaringizga tasvirni aniqlash, tahlil qilish yoki yaratish funksiyalarini qo'shing. Yoki mijozlarga sozlamalaringizga ko'ra botingizda tasvirlarni yaratish imkoniyatini bering",
    },
    text67: {
      ru: "Наша команда создаст вашего ИИ-сотрудника с нуля: обучит на вашей информации, подключит к каналам, интегрирует в сервисы и настроит инструменты под ключ",
      en: "Our team will create your AI employee from scratch: train it on your information, connect it to channels, integrate it into services and set up turnkey tools",
      uz: "Bizning jamoamiz sizning AI xodimingizni noldan yaratadi: uni ma'lumotlaringizga o'rgating, uni kanallarga ulang, xizmatlarga integratsiya qiling va kalitlarga topshirish vositalarini sozlang.",
    },
    text68: {
      ru: "Наша команда каждый день будет развивать вашего ИИ-сотрудника персонализировано под ваш бизнес, ваших клиентов и ваши продукты",
      en: "Our team will develop your AI employee every day, personalized for your business, your customers and your products",
      uz: "Bizning jamoamiz sizning biznesingiz, mijozlaringiz va mahsulotlaringiz uchun moslashtirilgan AI xodimingizni har kuni rivojlantiradi",
    },
    text69: {
      ru: "Получите аккаунт с полным функционалом инструментов без лимитов и ограничений сразу после оплаты",
      en: "Get an account with full functionality of tools without limits and restrictions immediately after payment",
      uz: "To'lovdan so'ng darhol cheklovlarsiz va cheklovlarsiz asboblarning to'liq funksionalligi bilan hisobni oling",
    },

    text70: {
      ru: "Бриффинг и анализ ",
      en: "Briefing and analysis",
      uz: "Brifing va tahlil",
    },
    text71: {
      ru: "Формирование персоны",
      en: "Formation of a persona",
      uz: "Shaxsning shakllanishi",
    },
    text72: {
      ru: "Сценарное проектирование",
      en: "Scenario design",
      uz: "Ssenariy dizayni",
    },
    text73: {
      ru: "Сбор и структурирование данных",
      en: "Data collection and structuring",
      uz: "Ma'lumotlarni yig'ish va tizimlashtirish",
    },
    text74: {
      ru: "Промпт-дизайн и оптимизация",
      en: "Prompt design and optimization",
      uz: "Tezkor dizayn va optimallashtirish",
    },
    text75: {
      ru: "Ai-оптимизация и настройка ",
      en: "Ai optimization and customization",
      uz: "Ai optimallashtirish va moslashtirish",
    },
    text76: {
      ru: "Интеграция в каналы связи",
      en: "Integration into communication channels",
      uz: "Aloqa kanallariga integratsiya",
    },
    text77: {
      ru: "Настройка автоматизаций",
      en: "Setting up automations",
      uz: "Avtomatlashtirish vositalarini sozlash",
    },
    text78: {
      ru: "30 дней тестирования",
      en: "30 days testing",
      uz: "0 kunlik sinov",
    },
    text79: {
      ru: "5 сотрудников обучения",
      en: "5 training staff",
      uz: "5 ta o'quv xodimi",
    },
    text80: {
      ru: "200 дополнительных обновлений в месяц",
      en: "200 additional updates per month",
      uz: "Oyiga 200 ta qo'shimcha yangilanish",
    },
    text81: {
      ru: "31 экспресс-корректировок «день в день»",
      en: "31 express adjustments 'day by day'",
      uz: "31 ta tezkor tuzatishlar kunma-kun",
    },
    text82: {
      ru: "5 запущенных рассылок",
      en: "5 launched mailings",
      uz: "5 ta pochta jo'natmalari ishga tushirildi",
    },
    text83: {
      ru: "5 выстроенных авторонок",
      en: "5 built car parks",
      uz: "5 ta avtoturargoh qurilgan",
    },
    text84: {
      ru: "5 внедрённых Ai-triggers",
      en: "5 embedded Ai-triggers",
      uz: "5 ta o'rnatilgan Ai-trigger",
    },
    text85: {
      ru: "4 отчета о работе в месяц",
      en: "4 work reports per month",
      uz: "Oyiga 4 ta ish hisoboti",
    },
    text86: {
      ru: "3 обученных Ai-agents",
      en: "3 trained Ai-agents",
      uz: "3 ta o'qitilgan Ai-agentlar",
    },
    text87: {
      ru: "1 настроенная Booking System",
      en: "1 configured Booking System",
      uz: "1 sozlangan bronlash tizimi",
    },
    text88: {
      ru: "1 настроенный Online-shop",
      en: "1 configured Online-shop",
      uz: "1 sozlangan onlayn-do'kon",
    },
    text89: {
      ru: "∞ как в UNLIMITED",
      en: "∞ as in UNLIMITED",
      uz: "∞ UNLIMITED da bo'lgani kabi",
    },
    text90: {
      ru: "∞ на сообщения",
      en: "∞ on messages",
      uz: "∞ xabarlarda",
    },
    text91: {
      ru: "∞ на рассылки",
      en: "∞ to mailings",
      uz: "∞ pochta jo'natmalariga",
    },
    text92: {
      ru: "∞ на подписчиков",
      en: "∞ per subscribers",
      uz: "∞ obunachilar uchun",
    },
    text93: {
      ru: "∞ на функционал",
      en: "∞ on the functional",
      uz: "∞ funktsional bo'yicha",
    },
    text94: {
      ru: "∞ на мощности",
      en: "∞ on power",
      uz: "∞ quvvat yoqilgan",
    },
    text95: {
      ru: "0% наценка на сообщения",
      en: "0% markup on messages",
      uz: "Xabarlarda 0% belgilash",
    },
    text96: {
      ru: "0% наценка на рассылки",
      en: "0% markup on mailings",
      uz: "Pochta jo'natmalarida 0% belgilanish",
    },
    text97: {
      ru: "0$ за внутреннюю CRM",
      en: "0$ for internal CRM",
      uz: "Ichki CRM uchun 0$",
    },
    text98: {
      ru: "0$ за внутренний Online-shop",
      en: "0$ for internal Online-shop",
      uz: "Ichki onlayn-do'kon uchun 0$",
    },
    text99: {
      ru: "0$ за внутреннюю Booking-system",
      en: "0$ for internal Booking-system",
      uz: "Ichki bronlash tizimi uchun 0$",
    },
    text100: {
      ru: "Оправить заявку",
      en: "Submit request",
      uz: "So'rov yuborish",
    },
    text101: {
      ru: "Телеграмм",
      en: "Telegram",
      uz: "Telegram",
    },
    text102: {
      ru: "Почта",
      en: "Mail",
      uz: "Pochta",
    },
    text103: {
      ru: "Телефон",
      en: "Telephone",
      uz: "Telefon",
    },
    text104: {
      ru: "Адрес",
      en: "Address",
      uz: "Manzil",
    },
    text105: {
      ru: "г.Ташкент, ул. Мухбир, 3A",
      en: "Tashkent, st. Mukhbir, 3A",
      uz: "Toshkent, st. Muxbir, 3A",
    },

    text106: {
      ru: "Оставляйте заявку",
      en: "Leave a request",
      uz: "So'rov qoldiring",
    },

    text107: {
      ru: "Мы переносим все общение с клиентами вмессенджерах и социальных сетях на ИИ-платформу нового поколения с постоянной поддержкой, обслуживанием и развитием.",
      en: "We are transferring all communication with clients in messengers and social networks to a new generation AI platform with ongoing support, maintenance and development.",
      uz: "My perenosim vse obshcheniye s kliyentami v messendzherakh i sotsial'nykh setyakh na II-platformu novogo pokoleniya s postoyannoy podderzhkoy, obsluzhivaniyem i razvitiyem.190 / 5 000 Biz messenjerlar va ijtimoiy tarmoqlardagi mijozlar bilan barcha aloqalarni doimiy qo'llab-quvvatlash, texnik xizmat ko'rsatish va rivojlantirish bilan yangi avlod AI platformasiga o'tkazmoqdamiz.",
    },

    text108: {
      ru: "Нулевая наценка на сообщения",
      en: "Zero markup on messages",
      uz: "Xabarlarda nol belgilash",
    },

    text109: {
      ru: "Безлимитный доступ по фикс цене",
      en: "Unlimited access at a fixed price",
      uz: "Xabarlarda nol belgilash",
    },

    text110: {
      ru: "Работа строгопо договору",
      en: "Work strictly according to contract",
      uz: "Belgilangan narxda cheksiz kirish",
    },
    text111: {
      ru: "Оплата в 2 части с безопасным выходом",
      en: "Payment in 2 parts with secure exit",
      uz: "Shartnomaga muvofiq qat'iy ishlang",
    },
    text112: {
      ru: "MVP в  20% стоимости разработки за 3 дня",
      en: "We develop your AI robot every month",
      uz: "3 kun ichida ishlab chiqish narxining 20% MVP",
    },

    text113: {
      ru: "Развиваем вашегоИИ-робота каждый месяц",
      en: "We develop your AI robot every month",
      uz: "Biz har oy sizning AI robotingizni ishlab chiqamiz",
    },

    text114: {
      ru: "Оставить заявку",
      en: "Leave a request",
      uz: "So'rov qoldiring",
    },

    text115: {
      ru: "Глубокие Ai-технологии",
      en: "Deep Ai technologies",
      uz: "Deep Ai texnologiyalari",
    },

    text116: {
      ru: "Комментарии и stories в Instagram",
      en: "Comments and stories on Instagram",
      uz: "Instagramdagi sharhlar va hikoyalar",
    },

    text117: {
      ru: "Работа с голосом",
      en: "Working with voice",
      uz: "Ovoz bilan ishlash",
    },

    text118: {
      ru: "Расширенные Ai-технологии",
      en: "Advanced AI technologies",
      uz: "Ilg'or AI texnologiyalari",
    },

    text119: {
      ru: "Работа с изображениями",
      en: "Working with images",
      uz: "Tasvirlar bilan ishlash",
    },

    text120: {
      ru: "Оправить заявку",
      en: "Submit request",
      uz: "So'rov yuborish",
    },

        menu10: {
      ru: "О проекте",
      en: "About the project",
      uz: "Loyiha haqida",
    },
    menu11: {
      ru: "Преймущества",
      en: "Advantages",
      uz: "Afzalliklar",
    },
    menu12: {
      ru: "Функционал",
      en: "Functional",
      uz: "Funktsional",
    },
    menu13: {
      ru: "Тарифы",
      en: "Tariffs",
      uz: "Tariflar",
    },
  };
  const langButtons = document.querySelectorAll("[data-btn]");
  const currentPathName = window.location.pathname;
  const lang = document.querySelectorAll("#lang");
  let currentLang = "ru";
  let currentTexts = {};
  console.log(lang);

  lang.forEach((item) => {
    item.addEventListener("click", (event) => {
      currentLang = item.value;

      changeLang();
    });
  });

  function checkPagePathName() {
    switch (currentPathName) {
      case "/index.html":
        currentTexts = homeTexts;
        break;

      default:
        currentTexts = homeTexts;
        break;
    }
  }
  checkPagePathName();
  function changeLang() {
    for (const key in currentTexts) {
      let elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.innerHTML = currentTexts[key][currentLang];
      }
    }
  }
  changeLang();

  console.log(currentTexts);
});
