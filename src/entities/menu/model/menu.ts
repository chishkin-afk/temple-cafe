import data from "./menu-data.json";
export type MenuItem={id:string;name:string;category:string;description:string|null;price:number;volume:string|null;image:string;imageKind:"dish"|"category";imageAlt:string};
function categoryImage(item: typeof data[number]): { image: string; label: string } {
  if (item.name.includes('Матча')) return { image: '/images/category-matcha.webp', label: 'Напитки с матчей' };
  if (item.category === 'Чай') return { image: '/images/category-tea.webp', label: 'Чай' };
  if (item.category === 'Десерты') return { image: '/images/category-desserts.webp', label: 'Десерты' };
  if (item.category === 'Сэндвичи') return { image: '/images/category-sandwiches.webp', label: 'Сэндвичи' };
  if (item.category === 'Салаты') return { image: '/images/category-salad.webp', label: 'Салаты' };
  if (item.category === 'Боулы') return { image: '/images/category-bowls.webp', label: 'Боулы' };
  if (item.id === 'menu-006' || item.category === 'Завтрак') return { image: '/images/category-breakfast.webp', label: 'Завтраки' };
  if (['menu-035', 'menu-037', 'menu-039'].includes(item.id)) return { image: '/images/category-cold-coffee.webp', label: 'Холодные кофейные напитки' };
  if (item.category === 'Холодные напитки') return { image: '/images/category-cold-drinks.webp', label: 'Холодные напитки' };
  if (item.name === 'Какао' || item.name === 'Мокко') return { image: '/images/category-cocoa.webp', label: 'Какао и шоколадные напитки' };
  return { image: '/images/hero-coffee.webp', label: 'Кофе и горячие напитки' };
}
export const menuItems: MenuItem[] = data.map(item => {
  const fallback = categoryImage(item);
  return {
    ...item,
    image: item.image ?? fallback.image,
    imageKind: item.image ? 'dish' : 'category',
    imageAlt: item.image ? item.name : `${fallback.label} в Temple — фото категории`,
  };
});
export const favoriteIds=['menu-001','menu-064','menu-030','menu-024','menu-033','menu-031'];
export const menuFilters=[{id:'favorites',label:'Наш выбор'},{id:'breakfast',label:'Завтраки'},{id:'sandwiches',label:'Сэндвичи'},{id:'bowls',label:'Боулы и салаты'},{id:'drinks',label:'Кофе и напитки'},{id:'desserts',label:'Десерты'},{id:'all',label:'Всё меню'}] as const;
export type MenuFilter=typeof menuFilters[number]['id'];
export function matchesFilter(item:MenuItem,filter:MenuFilter){switch(filter){case'favorites':return favoriteIds.includes(item.id);case'breakfast':return item.category==='Завтрак'||['menu-001','menu-006','menu-007'].includes(item.id);case'sandwiches':return item.category==='Сэндвичи'||item.id==='menu-004';case'bowls':return ['Боулы','Салаты'].includes(item.category);case'drinks':return ['Горячие напитки','Холодные напитки','Чай'].includes(item.category)||['menu-002','menu-003','menu-005'].includes(item.id);case'desserts':return item.category==='Десерты';case'all':return true}}
export function formatPrice(price:number){return new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(price)+' ₽'}
