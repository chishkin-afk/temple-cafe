import type { Metadata, Viewport } from "next";
import { site } from "@/shared/config/site";
import "@/shared/styles/globals.scss";
export const metadata:Metadata={
 metadataBase:site.origin?new URL(site.origin):undefined,
 title:{default:site.title,template:'%s | Temple'},description:site.description,
 applicationName:'Temple',category:'food',
 ...(site.origin?{alternates:{canonical:'/'}}:{}),
 openGraph:{type:'website',locale:'ru_RU',siteName:'Temple',title:site.title,description:site.description,...(site.origin?{url:site.origin,images:[{url:'/opengraph-image',width:1200,height:630,alt:'Temple — кофейня на Фридриха Энгельса, 17 в Воронеже'}]}:{})},
 twitter:{card:'summary_large_image',title:site.title,description:site.description,...(site.origin?{images:['/opengraph-image']}:{})},
 robots:site.origin?{index:true,follow:true,'max-image-preview':'large'}:{index:false,follow:false},
 icons:{icon:'/icon.svg',apple:'/apple-touch-icon.png'},
 formatDetection:{telephone:false},
};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#ecebe6'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
