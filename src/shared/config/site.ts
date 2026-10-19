const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const site = {
  name: "Temple",
  title: "Temple — кафе в Воронеже | Кофе, завтраки и сэндвичи",
  description: "Кафе Temple на улице Фридриха Энгельса, 17 в Воронеже. Кофе, завтраки, сэндвичи и десерты. Посмотрите меню, отзывы гостей и маршрут к нам.",
  origin: configuredOrigin ? new URL(configuredOrigin).origin : undefined,
  address: "ул. Фридриха Энгельса, 17",
  city: "Воронеж",
  phone: "+7 (910) 281-48-45",
  phoneHref: "tel:+79102814845",
  maps: "https://yandex.ru/maps/org/temple/43794175271/",
  reviews: "https://yandex.ru/maps/org/temple/43794175271/reviews/",
  telegram: "https://t.me/templecafe",
  route: "https://yandex.ru/maps/?rtext=~51.672169%2C39.206960&rtt=pd",
  mapEmbed: "https://yandex.ru/map-widget/v1/?oid=43794175271&ol=biz&z=17",
} as const;
