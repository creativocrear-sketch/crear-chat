import PageLayout from "@/components/site/PageLayout";
import Seo from "@/components/site/Seo";
import ButtonLink from "@/components/site/ButtonLink";
import { CTA } from "@/lib/site";

export default function NotFound() {
  return (
    <PageLayout>
      <Seo
        title="Página no encontrada | crear.chat"
        description="La página que buscas no existe o cambió de dirección."
        path="/404"
        noindex
      />
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container flex flex-col items-center py-24 text-center md:py-32">
          <p className="font-display text-6xl text-brand-600">404</p>
          <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">No encontramos esta página</h1>
          <p className="mt-4 max-w-md text-lg text-ink-muted">
            Es posible que la dirección haya cambiado o que la página ya no exista.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Ir al inicio</ButtonLink>
            <ButtonLink href="/modulos" variant="outline">
              Ver módulos
            </ButtonLink>
            <ButtonLink href={CTA.advisor.href} variant="cta">
              {CTA.advisor.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
