import { HomePage } from "@/views/home/ui/home-page/home-page";
import { site } from "@/shared/config/site";
import { menuItems } from "@/entities/menu/model/menu";
const schema={
 '@context':'https://schema.org','@type':'CafeOrCoffeeShop',name:'Temple',description:site.description,
 ...(site.origin?{'@id':site.origin+'/#cafe',url:site.origin,image:site.origin+'/images/hero-interior.webp',logo:site.origin+'/images/temple-logo.png'}:{}),
 telephone:'+79102814845',priceRange:'₽₽',servesCuisine:['Европейская','Кофе','Завтраки'],
 address:{'@type':'PostalAddress',streetAddress:'улица Фридриха Энгельса, 17',addressLocality:'Воронеж',postalCode:'394036',addressCountry:'RU'},
 geo:{'@type':'GeoCoordinates',latitude:51.672169,longitude:39.20696},hasMap:site.maps,sameAs:[site.maps,site.telegram],
 openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'08:00',closes:'23:00'},{'@type':'OpeningHoursSpecification',dayOfWeek:['Saturday','Sunday'],opens:'09:00',closes:'23:00'}],
 hasMenu:{'@type':'Menu',name:'Меню Temple',...(site.origin?{url:site.origin+'/#menu'}:{}),hasMenuSection:[...new Set(menuItems.map(i=>i.category))].map(category=>({'@type':'MenuSection',name:category,hasMenuItem:menuItems.filter(i=>i.category===category).map(item=>({'@type':'MenuItem',name:item.name,...(item.description?{description:item.description}:{}),...(item.imageKind==='dish'&&site.origin?{image:site.origin+item.image}:{}),offers:{'@type':'Offer',price:item.price,priceCurrency:'RUB'}}))}))}
};
export default function Page(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><HomePage/></>}
