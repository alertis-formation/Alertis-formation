import { NextResponse } from "next/server";

/**
 * Mode maintenance
 * ----------------
 * Quand il est actif, TOUTES les pages du site renvoient une page
 * « Site en maintenance » avec un statut HTTP 503 (Google comprend
 * que c'est temporaire et ne désindexe pas le site).
 *
 * Pour DÉSACTIVER la maintenance, au choix :
 *   1. Sur Vercel : ajouter la variable d'environnement
 *      MAINTENANCE_MODE = false  →  puis redéployer.
 *   2. Dans le code : passer la constante ci-dessous à `false`,
 *      puis commit + push.
 *
 * La variable Vercel a toujours la priorité sur la constante.
 */
const MAINTENANCE_MODE_DEFAULT = false;

function isMaintenanceMode(): boolean {
  const env = process.env.MAINTENANCE_MODE?.toLowerCase();
  if (env === "true" || env === "1" || env === "on") return true;
  if (env === "false" || env === "0" || env === "off") return false;
  return MAINTENANCE_MODE_DEFAULT;
}

const maintenanceHtml = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, follow" />
<title>Site en maintenance · Alertis Formation</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
<style>
  :root {
    --red: #bf000d;
    --red-dark: #8a0008;
    --cream: #f5fafa;
    --charcoal: #1a1f24;
    --gray: #656d6f;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }
  body {
    font-family: "Roboto", system-ui, -apple-system, Segoe UI, sans-serif;
    background: var(--cream);
    color: var(--charcoal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    line-height: 1.6;
  }
  .card {
    background: #fff;
    max-width: 540px;
    width: 100%;
    padding: 48px 40px;
    border-radius: 4px;
    box-shadow: 0 20px 50px -20px rgba(26, 31, 36, 0.25);
    border-top: 4px solid var(--red);
    text-align: center;
  }
  .logo { height: 56px; width: auto; margin-bottom: 28px; }
  .badge {
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--red);
    background: #fbe6e8;
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 26px;
    font-weight: 900;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }
  p { color: var(--gray); font-size: 15px; }
  .contact {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid rgba(101, 109, 111, 0.18);
  }
  .contact p { font-size: 13px; margin-bottom: 14px; }
  .links { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
  .links a {
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    padding: 11px 20px;
    border-radius: 3px;
    transition: background-color 0.15s ease, color 0.15s ease;
  }
  .btn-primary { background: var(--red); color: #fff; }
  .btn-primary:hover { background: var(--red-dark); }
  .btn-outline { border: 1px solid rgba(101, 109, 111, 0.35); color: var(--charcoal); }
  .btn-outline:hover { border-color: var(--red); color: var(--red); }
  @media (max-width: 480px) {
    .card { padding: 36px 24px; }
    h1 { font-size: 22px; }
  }
</style>
</head>
<body>
<main class="card">
  <img class="logo" src="/brand/logo-alertis.png" alt="Alertis Formation" />
  <div class="badge">Maintenance en cours</div>
  <h1>Notre site est momentanément indisponible</h1>
  <p>
    Nous effectuons actuellement une mise à jour pour améliorer votre
    expérience. Le site sera de nouveau accessible très prochainement.
    Merci de votre patience.
  </p>
  <div class="contact">
    <p>Une question ? Notre équipe reste joignable&nbsp;:</p>
    <div class="links">
      <a class="btn-primary" href="tel:+33478904630">04&nbsp;78&nbsp;90&nbsp;46&nbsp;30</a>
      <a class="btn-outline" href="mailto:contact@alertisformation.com">contact@alertisformation.com</a>
    </div>
  </div>
</main>
</body>
</html>`;

export function proxy() {
  if (!isMaintenanceMode()) {
    return NextResponse.next();
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      // Indique aux navigateurs et aux moteurs de recherche de réessayer
      // dans 1h — la maintenance est temporaire.
      "Retry-After": "3600",
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  /**
   * S'applique à toutes les requêtes SAUF les fichiers nécessaires
   * pour afficher la page de maintenance elle-même :
   *  - _next/static, _next/image : assets internes Next.js
   *  - brand/ : le logo Alertis affiché sur la page
   */
  matcher: ["/((?!_next/static|_next/image|brand/).*)"],
};
