// Прайс-лист Mazay Stroy — единственное место, где правятся цены.
// Все цены — безналичный расчёт, с НДС 22%.
//
// Поля позиции:
//   name     — наименование
//   specs    — характеристики ('' → в таблице «—»)
//   shift    — цена за смену 8 ч: число (32000 → «32 000 ₽»),
//              строка (выводится как есть, напр. 'от 900 ₽/м³'),
//              null → «по запросу» (кнопка «Запросить цену»)
//   hour     — цена за час: число или null («—»)
//   delivery — пробег за МКАД / подача: число (120 → «120 ₽/км»), строка или null («—»)
//   request  — true: показать кнопку «Запросить цену» рядом с ценой «от …»
//   service  — true: это услуга, а не техника (не участвует в «от … ₽/смена» на карточках главной)
//
// Поле категории search — синонимы для поиска на странице прайса
// (как ещё клиенты называют эту технику), на сайте не выводится.

window.PRICE_LIST = [
  {
    key: 'ekskavatory', search: 'экскаватор копалка jcb джисиби', title: 'Экскаваторы',
    items: [
      { name: 'Экскаватор-погрузчик', specs: 'Фронтальный ковш 1,1 м³', shift: 32000, hour: 4000, delivery: 120 },
      { name: 'Экскаватор-погрузчик с гидромолотом', specs: 'Гидромолот. Дальше 20 км за МКАД не ездит, далее на трале', shift: 34000, hour: 4250, delivery: 120 },
      { name: 'Колёсный экскаватор', specs: 'Ковш 0,9–1 м³', shift: 36000, hour: 4500, delivery: 'на трале' },
      { name: 'Колёсный экскаватор с гидромолотом', specs: 'Гидромолот Delta F10, 1200 кг', shift: 38000, hour: 4750, delivery: 'на трале' },
      { name: 'Колёсный экскаватор с грейфером', specs: 'Ковш 0,6–0,7 м³, глубина до 13 м, удочка/телескоп', shift: null, hour: null, delivery: 'на трале + манипулятор' },
      { name: 'Гусеничный экскаватор', specs: 'Ковш 1 м³', shift: 30000, hour: 3750, delivery: 'на трале' },
      { name: 'Гусеничный экскаватор с гидромолотом', specs: 'Гидромолот Delta F-10, 1200 кг', shift: 33000, hour: 4125, delivery: 'на трале' },
      { name: 'Гусеничный экскаватор с грейфером', specs: 'Ковш 0,6–0,7 м³, глубина до 13 м, удочка/телескоп', shift: null, hour: null, delivery: 'на трале + манипулятор' },
      { name: 'Мини-экскаватор Takeuchi TB125', specs: '2,5 т, ковш 0,07 м³', shift: 24000, hour: 3000, delivery: 'на эвакуаторе' },
      { name: 'Мини-экскаватор Hitachi EX35', specs: '3,5 т, ковш 0,105 м³', shift: 24000, hour: 3000, delivery: 'на эвакуаторе' },
      { name: 'Мини-экскаватор Takeuchi TB145', specs: '5,0 т, ковш 0,141 м³', shift: 26000, hour: 3250, delivery: 'на эвакуаторе' },
      { name: 'Трактор МТЗ', specs: 'Отвал и щётка (колесо = габарит)', shift: 24000, hour: 3000, delivery: 120 },
    ],
  },
  {
    key: 'avtokrany', search: 'кран автокран', title: 'Автокраны',
    items: [
      { name: 'Автокран Галичанин 25 т', specs: 'Вылет 22 м', shift: 28000, hour: 3500, delivery: 120 },
      { name: 'Автокран Галичанин 25 т', specs: 'Вылет 28 м', shift: 30000, hour: 3750, delivery: 120 },
      { name: 'Автокран Галичанин 32 т', specs: 'Вылет 31 м', shift: 32000, hour: 4000, delivery: 120 },
      { name: 'Автокран Галичанин 40 т', specs: 'Вылет 34 м', shift: 40000, hour: 5000, delivery: 300 },
      { name: 'Автокран XCMG 30 т', specs: 'Вылет 40 м', shift: 42000, hour: 5250, delivery: 200 },
      { name: 'Автокран Volvo 50 т', specs: 'Вылет 34 м', shift: 46000, hour: 5750, delivery: 500 },
      { name: 'Автокран Volvo 60 т', specs: 'Вылет 42 м', shift: 48000, hour: 6000, delivery: 600 },
      { name: 'Автокран 70 т', specs: 'Вылет 42 м', shift: 60000, hour: 7500, delivery: 700 },
      { name: 'Автокран 90 т', specs: 'Вылет 52 м. Цена зависит от работ', shift: 100000, hour: 12500, delivery: 'по запросу' },
      { name: 'Автокран 100 т', specs: 'Вылет 52 м. Цена зависит от работ', shift: 130000, hour: 16250, delivery: 'по запросу' },
      { name: 'Автокран 120 т', specs: 'Вылет 56 м. Цена зависит от работ', shift: 140000, hour: 17500, delivery: 'по запросу' },
      { name: 'Автокран 150 т', specs: 'Вылет 56 м. Цена зависит от работ', shift: 150000, hour: 18750, delivery: 'по запросу' },
      { name: 'Автокраны 200 / 250 / 300 / 350 т', specs: 'Вылет 60 / 72 / 60 / 70 м. Расчёт по фото/видео или с выездом специалиста (10 000 ₽, Москва)', shift: null, hour: null, delivery: null },
    ],
  },
  {
    key: 'manipulyatory', search: 'кран-манипулятор манипулятор кму воровайка', title: 'Манипуляторы',
    items: [
      { name: 'КМУ 5/3', specs: 'Борт до 6 м, грузоподъёмность 5 т, стрела 3 т', shift: 22000, hour: 2750, delivery: 90 },
      { name: 'КМУ 10/7', specs: 'Борт до 6,3 м, 10 т, стрела 7 т', shift: 28000, hour: 3500, delivery: 100 },
      { name: 'КМУ вездеход', specs: 'Борт до 6,5 м, 10 т, стрела 7 т', shift: 32000, hour: 4000, delivery: 120 },
      { name: 'КМУ 10/10', specs: 'Борт до 7,5 м, 10 т, стрела 10 т', shift: 32000, hour: 4000, delivery: 120 },
      { name: 'КМУ длинномер 12 м', specs: '20 т, стрела 7 т', shift: 40000, hour: 5000, delivery: 150 },
      { name: 'Стропальщики (по Москве)', specs: 'Услуга', service: true, shift: 12000, hour: null, delivery: null },
    ],
  },
  {
    key: 'samosvaly', search: 'самосвал камаз', title: 'Самосвалы',
    items: [
      { name: 'Самосвал 10 м³', specs: 'Грузоподъёмность 15 т, 6х4', shift: 20000, hour: 2500, delivery: 120 },
      { name: 'Самосвал 20 м³', specs: 'Грузоподъёмность 24 т, 6х4', shift: 28000, hour: 3500, delivery: 120 },
    ],
  },
  {
    key: 'frontalnye', search: 'погрузчик фронтальный', title: 'Фронтальные погрузчики',
    items: [
      { name: 'Фронтальный погрузчик 2 м³', specs: '', shift: 28000, hour: 3500, delivery: 'на трале' },
      { name: 'Фронтальный погрузчик 3 м³', specs: '', shift: 32000, hour: 4000, delivery: 'на трале' },
    ],
  },
  {
    key: 'minipogruzchiki', search: 'погрузчик бобкэт bobcat', title: 'Минипогрузчики',
    items: [
      { name: 'Минипогрузчик колёсный', specs: 'Г/п 1 400 кг', shift: 24000, hour: 3000, delivery: 'на эвакуаторе' },
      { name: 'Минипогрузчик колёсный с навесным', specs: 'Вилы, отвал, бур, молот, щётка и др.', shift: null, hour: null, delivery: 'на эвакуаторе' },
      { name: 'Минипогрузчик гусеничный', specs: 'Г/п 1 400 кг', shift: 28000, hour: 3500, delivery: 'на эвакуаторе' },
    ],
  },
  {
    key: 'polivomoechnye', search: 'поливалка поливомоечная уборка дорог', title: 'Поливомоечные машины',
    items: [
      { name: 'Поливомоечная 6 м³', specs: 'Отвал, щётка', shift: 24000, hour: 3000, delivery: 100 },
      { name: 'Поливомоечная 9 м³', specs: 'Отвал, щётка', shift: 25000, hour: 3125, delivery: 100 },
    ],
  },
  {
    key: 'dlinnomery', search: 'бортовой грузовик шаланда фура', title: 'Длинномеры',
    items: [
      { name: 'Бортовая машина 6 м', specs: 'Г/п 10 т, длина 6 м', shift: 20000, hour: 2500, delivery: 120 },
      { name: 'Длинномер 12 м', specs: 'Г/п 20 т', shift: 26000, hour: 3250, delivery: 120 },
      { name: 'Длинномер 13,6 м', specs: 'Г/п 20 т', shift: 26000, hour: 3250, delivery: 120 },
    ],
  },
  {
    key: 'avtovyshki', search: 'вышка автовышка подъёмник автогидроподъёмник агп', title: 'Автовышки',
    items: [
      { name: 'Автовышка 16 м', specs: '', shift: 22000, hour: 2750, delivery: 100 },
      { name: 'Автовышка 18 м', specs: '', shift: 22000, hour: 2750, delivery: 100 },
      { name: 'Автовышка 22 м', specs: '', shift: 24000, hour: 3000, delivery: 100 },
      { name: 'Автовышка 28 м', specs: '', shift: 25000, hour: 3125, delivery: 100 },
      { name: 'Автовышка 35 м', specs: '', shift: 28000, hour: 3500, delivery: 110 },
      { name: 'Автовышка 40 м', specs: '', shift: 34000, hour: 4250, delivery: 120 },
      { name: 'Автовышка-вездеход 45 м', specs: 'Вездеход', shift: 70000, hour: 8750, delivery: 150 },
      { name: 'Автовышки до 63 м', specs: 'Цена зависит от вида работ', shift: null, hour: null, delivery: null },
    ],
  },
  {
    key: 'yamobury', search: 'ямобур бур бурение бурилка бкм сваи', title: 'Ямобуры',
    items: [
      { name: 'Автобуровая машина', specs: 'Укажите количество лунок, глубину, диаметр шнека', shift: null, hour: null, delivery: null },
    ],
  },
  {
    key: 'buldozery', search: 'бульдозер', title: 'Бульдозеры',
    items: [
      { name: 'Бульдозер Shantui SD16', specs: 'Вес 19 т, призма 4,5 м³', shift: 34000, hour: 4250, delivery: 'на трале' },
      { name: 'Бульдозер Komatsu D65', specs: 'Вес 20 т', shift: null, hour: null, delivery: 'на трале (негабарит)' },
      { name: 'Бульдозер Komatsu D65 болотоход', specs: '', shift: null, hour: null, delivery: 'на трале (негабарит)' },
      { name: 'Бульдозер Caterpillar D6', specs: 'Вес 20 т, призма 5,5 м³, болотоход', shift: null, hour: null, delivery: 'на трале (негабарит)' },
    ],
  },
  {
    key: 'vyvoz', search: 'вывоз мусор грунт утилизация', title: 'Вывоз мусора и грунта',
    items: [
      { name: 'Самосвал 20 м³ с утилизацией', specs: 'Нужны фото, объём, адрес загрузки', shift: 'от 900 ₽/м³', hour: null, delivery: null },
    ],
  },
  {
    key: 'perevozka', search: 'перевозка трал эвакуатор доставка', title: 'Перевозка техники',
    note: 'Москва и за МКАД',
    items: [
      { name: 'Габаритная техника', specs: 'До 20 т. Габарит: длина до 12 м, ширина 2,5 м, высота 4,05 м', shift: 26000, hour: null, delivery: 110 },
      { name: 'Негабаритная техника', specs: 'От 20 т', shift: 'от 45 000 ₽', request: true, hour: null, delivery: null },
      { name: 'Трал', specs: 'Подача и перевозка', shift: 'от 25 000 ₽', hour: null, delivery: 120 },
    ],
  },
];
