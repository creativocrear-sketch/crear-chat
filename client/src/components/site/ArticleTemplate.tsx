import { Calendar, Clock, UserRound } from "lucide-react";
import PageLayout from "./PageLayout";
import Seo from "./Seo";
import Breadcrumbs, { breadcrumbJsonLd } from "./Breadcrumbs";
import Faq, { faqJsonLd } from "./Faq";
import ArticleRelated from "./ArticleRelated";
import { COMPANY, SITE_URL } from "@/lib/site";
import { formatDate, type BlogPost } from "@/lib/blog";
import type { Article } from "@/content/blog/types";

/** Página de artículo del blog con el diseño del sitio, índice, respuesta directa y preguntas frecuentes. */
export default function ArticleTemplate({ article, post }: { article: Article; post: BlogPost }) {
  const url = `${SITE_URL}/blog/${article.slug}`;
  const breadcrumbs = [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title, href: `/blog/${article.slug}` },
  ];

  return (
    <PageLayout>
      <Seo
        title={article.seo.title}
        description={article.seo.description}
        path={`/blog/${article.slug}`}
        type="article"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.seo.description,
            url,
            mainEntityOfPage: url,
            datePublished: post.date,
            dateModified: post.date,
            inLanguage: "es-CO",
            articleSection: post.category,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: COMPANY.legalName,
              logo: { "@type": "ImageObject", url: `${SITE_URL}${COMPANY.logoLarge}` },
            },
            image: `${SITE_URL}/og-crear-chat.png`,
          },
          faqJsonLd(article.faqs),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />

      <article>
        <header className="bg-gradient-to-b from-brand-50 to-white">
          <div className="container py-12 md:py-16">
            <div className="mx-auto max-w-3xl">
              <Breadcrumbs items={breadcrumbs} className="mb-6" />
              <p className="eyebrow mb-4">{post.category}</p>
              <h1 className="font-display text-3xl leading-tight tracking-tight text-ink md:text-5xl">{article.title}</h1>
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
                <span className="inline-flex items-center gap-1.5">
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {post.readTime} de lectura
                </span>
              </p>
            </div>
          </div>
        </header>

        <div className="container pb-8">
          <div className="mx-auto max-w-3xl">
            {/* Respuesta directa */}
            <div className="rounded-2xl border-l-4 border-brand-600 bg-brand-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Respuesta corta</p>
              <p className="mt-2 text-lg leading-relaxed text-ink">{article.answer}</p>
            </div>

            {article.intro.map((p) => (
              <p key={p} className="mt-6 text-lg leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}

            {/* Índice */}
            <nav aria-label="Contenido del artículo" className="mt-8 rounded-2xl border border-slate-200 p-6">
              <p className="font-semibold text-ink">En este artículo</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-brand-700">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="hover:underline">
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#preguntas-frecuentes" className="hover:underline">
                    Preguntas frecuentes
                  </a>
                </li>
              </ol>
            </nav>

            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-12 scroll-mt-24">
                <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">{section.title}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
                {section.subsections?.map((sub) => (
                  <div key={sub.title} className="mt-6">
                    <h3 className="font-display text-xl text-ink">{sub.title}</h3>
                    {sub.paragraphs.map((p) => (
                      <p key={p} className="mt-2 text-lg leading-relaxed text-ink-muted">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-ink-muted marker:text-brand-600">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-ink-muted marker:font-semibold marker:text-brand-600">
                    {section.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                )}
                {section.table && (
                  <div className="relative mt-6 overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full min-w-[560px] text-left text-[15px]">
                      <thead className="bg-slate-50">
                        <tr>
                          {section.table.headers.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold text-ink">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, i) =>
                              i === 0 ? (
                                <th key={i} scope="row" className="px-4 py-3 font-medium text-ink">
                                  {cell}
                                </th>
                              ) : (
                                <td key={i} className="px-4 py-3 text-ink-muted">
                                  {cell}
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {section.closing?.map((p) => (
                  <p key={p} className="mt-4 text-lg leading-relaxed text-ink-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <section id="preguntas-frecuentes" className="mt-14 scroll-mt-24">
              <h2 className="mb-6 font-display text-2xl text-ink md:text-3xl">Preguntas frecuentes</h2>
              <Faq items={article.faqs} />
            </section>
          </div>
        </div>
      </article>

      <ArticleRelated slug={article.slug} />
    </PageLayout>
  );
}
