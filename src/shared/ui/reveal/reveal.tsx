"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function Reveal({children,className,delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el||!('IntersectionObserver' in window))return;const preference=matchMedia('(prefers-reduced-motion: reduce)');if(preference.matches)return;
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){el.animate([{opacity:.25,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:750,delay,easing:'cubic-bezier(.23,1,.32,1)'});observer.unobserve(el)}}},{threshold:.13});observer.observe(el);return()=>observer.disconnect();},[delay]);
 return <div ref={ref} className={className}>{children}</div>;
}
