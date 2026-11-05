import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import PageHero from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import CtaBanner from "@/components/site/CtaBanner";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { cn } from "@/lib/utils";
import { COMPANY, SITE_URL } from "@/lib/site";
import { BLOG_AUTHOR, BLOG_CATEGORIES, BLOG_POSTS, formatDate, type BlogPost } from "@/lib/blog";

const BREADCRUMBS = [
  { label: "Inicio", href: "/" },
  { label: "Blog", href: "/blog" },
];

/** Solo se muestran como filtro las categorías que ya tienen artículos. */
const CATEGORIES_WITH_POSTS = BLOG_CATEGORIES.filter((category) =>
  BLOG_POSTS.some((post) => post.category === category),
);

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-muted">
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-4 w-4" aria-hidden="true" />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4" aria-hidden="true" />
        {post.readTime} de lectura
      </span>
    </p>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5">
      <p className="text-xs font-semibold uppercase tracking-wide text-cta-700">{post.category}</p>
      <h2 className="mt-3 font-display text-lg leading-snug text-ink">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <PostMeta post={post} />
        <ArrowRight
          className="h-5 w-5 flex-shrink-0 text-brand-600 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default function Blog() {
  const [category, setCategory] = useState<string>("Todos");
  const posts = category === "Todos" ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === category);

  return (
    <PageLayout>
      <Seo
        title="Blog de WhatsApp Business API, CRM e IA para empresas | crear.chat"
        description="Guías y artículos sobre WhatsApp Business API, CRM, inteligencia artificial, chatbots, integraciones y atención al cliente para empresas en Colombia."
        path="/blog"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog de crear.chat",
            url: `${SITE_URL}/blog`,
            inLanguage: "es-CO",
            publisher: { "@type": "Organization", name: COMPANY.legalName, url: SITE_URL },
            blogPost: BLOG_POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `${SITE_URL}/blog/${post.slug}`,
              datePublished: post.date,
              author: { "@type": post.author === BLOG_AUTHOR ? "Person" : "Organization", name: post.author },
              articleSection: post.category,
            })),
          },
          breadcrumbJsonLd(BREADCRUMBS),
        ]}
      />

      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Blog"
        title="Guías sobre WhatsApp Business API, CRM e inteligencia artificial para empresas"
        intro={
          <p>
            Artículos para entender cómo usar WhatsApp, la automatización y la IA en la atención y las ventas de tu
            empresa. Escritos por {BLOG_AUTHOR} y el equipo de {COMPANY.legalName}.
          </p>
        }
      />

      <Section className="pt-6 md:pt-8">
        <div role="group" aria-label="Filtrar artículos por categoría" className="mb-10 flex flex-wrap gap-2">
          {["Todos", ...CATEGORIES_WITH_POSTS].map((item) => {
            const count =
              item === "Todos" ? BLOG_POSTS.length : BLOG_POSTS.filter((post) => post.category === item).length;
            const active = category === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(item)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-slate-200 bg-white text-ink hover:border-brand-200 hover:bg-brand-50",
                )}
              >
                {item} <span className={active ? "text-brand-100" : "text-ink-muted"}>({count})</span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <CtaBanner
        title="¿Prefieres que te lo expliquemos para tu caso?"
        text="Cuéntanos cómo atiende tu empresa a sus clientes y te orientamos sobre WhatsApp Business API, CRM e inteligencia artificial."
      />
    </PageLayout>
  );
}
