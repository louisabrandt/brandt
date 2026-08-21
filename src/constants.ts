/**
 * Swappable media — one warm-cream/black footage family across the whole site.
 *
 * Both clips are AI-generated, self-hosted in /public/videos, and share the
 * same intimate, golden, out-of-focus mood (hands / water at golden hour) so
 * the hero, Features card, and bento read as one world. Drop in Louisa's own
 * footage when ready — keep it to the same warm family.
 */
export const HERO_VIDEO_URL = '/videos/hero.mp4'

export const FEATURE_VIDEO_URL = '/videos/feature.mp4'

/** Primary text color (slightly warmer than the Tailwind `primary` token). */
export const TEXT_COLOR = '#E1E0CC'

/** In-person session cities (online available worldwide). */
export const CITIES = ['Paphos', 'Vienna', 'Berlin', 'Miami'] as const

/** One-line locations phrase, reused across hero / contact / footer. */
export const LOCATIONS_LINE =
  'Online worldwide — and in person in Paphos, Vienna, Berlin & Miami.'
