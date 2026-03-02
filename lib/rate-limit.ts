// lib/rate-limit.ts
// Rate limiter simple en memoire (reset au redemarrage du serveur)
// Suffisant pour un site vitrine, pas besoin de Redis.

const store = new Map<string, { count: number; resetAt: number }>();

// Nettoyage periodique des entrees expirees (toutes les 5 min)
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of store) {
    if (now > val.resetAt) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000);

/**
 * Verifie si une IP a depasse la limite de requetes.
 * @param ip - Adresse IP du client
 * @param maxRequests - Nombre max de requetes autorisees (defaut: 5)
 * @param windowMs - Fenetre de temps en ms (defaut: 1h = 3600000)
 * @returns true si la requete est autorisee, false si bloquee
 */
export function rateLimit(
  ip: string,
  maxRequests = 5,
  windowMs = 60 * 60 * 1000
): boolean {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}
