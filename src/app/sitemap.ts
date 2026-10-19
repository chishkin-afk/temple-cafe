import type { MetadataRoute } from "next";
import { site } from "@/shared/config/site";
export default function sitemap():MetadataRoute.Sitemap{return site.origin?[{url:site.origin,lastModified:'2026-10-19',changeFrequency:'weekly',priority:1}]:[]}
