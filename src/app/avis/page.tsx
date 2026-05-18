import { PageShell } from "@/components/site/page-shell";
import { AvisFlow } from "./avis-flow";

export const metadata = {
  title: "Laissez-nous un avis Google",
  description:
    "Vous avez suivi une formation chez Alertis ? Sélectionnez le domaine pour être redirigé vers la fiche Google de l'établissement à noter.",
  alternates: { canonical: "/avis" },
  robots: { index: false, follow: false },
};

export default function AvisPage() {
  return (
    <PageShell
      title="Laissez-nous un avis Google"
      subtitle="Votre retour aide d'autres entreprises à choisir leur organisme de formation. Sélectionnez le domaine de votre formation pour ouvrir la fiche Google correspondante."
      breadcrumbs={[{ label: "Avis" }]}
    >
      <section className="py-16 bg-[color:var(--brand-cream)]/40">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <AvisFlow />
        </div>
      </section>
    </PageShell>
  );
}
