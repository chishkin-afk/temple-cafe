"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/shared/ui/icon/icon";
import { site } from "@/shared/config/site";
import styles from "./header.module.scss";
const links=[{href:'#about',label:'О нас'},{href:'#menu',label:'Меню'},{href:'#reviews',label:'Отзывы'},{href:'#contacts',label:'Контакты'}];
export function Header(){const[open,setOpen]=useState(false);const button=useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(!open)return;function close(event:KeyboardEvent){if(event.key==='Escape'){setOpen(false);button.current?.focus()}}document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close)},[open]);
 return <header className={styles.header}><div className={`container ${styles.inner}`}><a className={styles.logo} href="#home" aria-label="Temple — на главную"><img src="/images/temple-logo.png" alt="Temple" width={154} height={53} loading="eager" decoding="async" fetchPriority="high"/></a><nav className={styles.desktop} aria-label="Основная навигация">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</nav><a href={site.route} target="_blank" rel="noreferrer" className={styles.route}><span>Заглянуть к нам</span><Icon name="diagonal" size={17}/></a><button ref={button} className={styles.toggle} onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Закрыть навигацию':'Открыть навигацию'}><Icon name={open?'close':'menu'} size={25}/></button></div><nav id="mobile-navigation" hidden={!open} className={styles.mobile} aria-label="Мобильная навигация">{links.map(link=><a href={link.href} key={link.href} onClick={()=>setOpen(false)}>{link.label}<Icon name="diagonal"/></a>)}<a href={site.phoneHref}>{site.phone}</a></nav></header>;
}
