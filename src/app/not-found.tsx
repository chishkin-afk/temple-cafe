import Link from "next/link";
export default function NotFound(){return <main className="container section"><p className="eyebrow">Temple · 404</p><h1 className="sectionHeading">Кажется, вы свернули<br/>не на ту улицу.</h1><p style={{margin:'25px 0'}}>Но чашка кофе всё ещё ждёт на главной.</p><Link className="button" href="/">Вернуться в Temple</Link></main>}
