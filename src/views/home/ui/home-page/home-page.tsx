import { Header } from "@/widgets/header/ui/header/header";
import { Hero } from "@/widgets/hero/ui/hero/hero";
import { About } from "@/widgets/about/ui/about/about";
import { Menu } from "@/widgets/menu/ui/menu/menu";
import { Reviews } from "@/widgets/reviews/ui/reviews/reviews";
import { Contact } from "@/widgets/contact/ui/contact/contact";
import { Footer } from "@/widgets/footer/ui/footer/footer";
export function HomePage(){return <><a className="skipLink" href="#main">Перейти к содержимому</a><Header/><main id="main"><Hero/><About/><Menu/><Reviews/><Contact/></main><Footer/></>}
