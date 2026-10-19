import { reviews } from "@/entities/review/model/reviews";
import { ReviewCard } from "@/entities/review/ui/review-card/review-card";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { Icon } from "@/shared/ui/icon/icon";
import { site } from "@/shared/config/site";
import styles from "./reviews.module.scss";
export function Reviews(){return <section id="reviews" className="section" aria-labelledby="reviews-title"><div className="container"><Reveal className={styles.top}><div><p className="eyebrow">Тепло, которое возвращается</p><h2 id="reviews-title" className="sectionHeading">Словами наших гостей.</h2></div><a href={site.reviews} target="_blank" rel="noreferrer" className={styles.rating}><span>4,6<Icon name="star" size={21}/></span><span>на Яндекс Картах</span></a></Reveal><div className={styles.grid}>{reviews.map((review,i)=><Reveal key={review.id} delay={i*70}><ReviewCard review={review}/></Reveal>)}</div><div className={styles.bottom}><a className="textLink" href={site.reviews} target="_blank" rel="noreferrer">Все отзывы на Яндекс Картах <Icon name="diagonal" size={16}/></a></div></div></section>}
