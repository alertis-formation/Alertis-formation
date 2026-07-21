/**
 * Téléchargement du programme PDF d'une formation.
 *
 * L'API back-office renvoie des URLs S3 pré-signées valables 1 h : elles ne
 * doivent JAMAIS être écrites dans une page mise en cache (elles expireraient
 * avant la revalidation). Cette route est appelée au moment du clic, récupère
 * une URL fraîchement signée et redirige le navigateur dessus.
 */
import { redirect } from "next/navigation";
import { getApiIdForSlug } from "@/lib/alertis-api-mapping";
import { getFreshProgrammePdfUrl } from "@/lib/alertis-api";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const apiId = getApiIdForSlug(slug);
  if (!apiId) {
    redirect("/formations");
  }
  const url = await getFreshProgrammePdfUrl(apiId);
  // API indisponible ou PDF retiré : retour sur la page de la formation
  // plutôt qu'une erreur brute.
  if (!url) {
    redirect(`/formations/${slug}`);
  }
  redirect(url);
}
