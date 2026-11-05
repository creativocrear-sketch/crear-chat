import ArticleTemplate from "@/components/site/ArticleTemplate";
import { ARTICLES } from "@/content/blog";
import { BLOG_POSTS } from "@/lib/blog";
import NotFound from "./NotFound";

/** Artículo del blog con el diseño nuevo (/blog/:slug). */
export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = ARTICLES[params.slug];
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!article || !post) return <NotFound />;
  return <ArticleTemplate article={article} post={post} />;
}
