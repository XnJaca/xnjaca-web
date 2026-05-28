/**
 * Feature flags leídos desde variables de entorno.
 *
 * Para esconder la sección Paquetes (precios visibles) sin tocar código,
 * setear en `.env` o en las env vars de Render:
 *
 *   PUBLIC_SHOW_PACKAGES=false
 *
 * Cuando está oculto, también se ocultan los links a #paquetes en
 * Nav, Footer, Hero y ProjectPage, y la card #02 de QuestionCTAs
 * redirige a WhatsApp en lugar de al paquete.
 *
 * Default: mostrar paquetes.
 */

export const showPackages =
  import.meta.env.PUBLIC_SHOW_PACKAGES !== 'false';
