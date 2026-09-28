/**
 * The six Brandt courses — the single source of truth, shared by the Courses
 * section, the Fit Finder recommender, and the per-course detail pages.
 * Own names; each grounded in a reputable framework (Gottman, EFT/attachment,
 * Perel, Terry Real, Tawwab). Every course is bookable for individuals or
 * couples.
 */

export type CourseKey =
  | 'trust'
  | 'selfworth'
  | 'boundaries'
  | 'conflict'
  | 'attachment'
  | 'desire'

export interface Course {
  key: CourseKey
  slug: string
  title: string
  tag: string
  /** Short one-liner for cards and the recommender. */
  description: string
  /** Longer opening paragraph for the detail page. */
  intro: string
  /** What you'll explore — detail-page bullets. */
  learn: string[]
  format: string
  forWhom: string
  audience: string
}

export const COURSES: Course[] = [
  {
    key: 'trust',
    slug: 'rebuilding-trust',
    title: 'Rebuilding Trust',
    tag: 'After betrayal or slow erosion',
    description:
      'How trust actually breaks — and the concrete, staged work that rebuilds it: taking responsibility, attuning, and re-earning safety.',
    intro:
      'Trust rarely breaks in a single moment — it erodes through small ruptures left unrepaired, or shatters in one, and then has to be rebuilt deliberately. This course maps how trust actually works, and walks the staged path back: taking honest responsibility, learning to attune, and slowly re-earning safety — for the one who was hurt and the one who caused the hurt.',
    learn: [
      'How trust is built, broken, and rebuilt — the mechanics beneath the feeling',
      'Taking responsibility without collapsing into shame or defensiveness',
      'Attuning to the hurt instead of rushing past it',
      'Rebuilding reliability through repeated, visible follow-through',
      'Deciding — with clarity — whether and how to stay',
    ],
    format: 'Online · guided sessions with practice between',
    forWhom:
      'After a betrayal, broken promise, or a slow loss of safety.',
    audience: 'For couples & individuals',
  },
  {
    key: 'selfworth',
    slug: 'the-ground-you-stand-on',
    title: 'The Ground You Stand On',
    tag: 'Self-worth & self-care',
    description:
      'Meeting yourself with steadiness — self-worth, self-care, and your own purpose — so you can love from a settled place.',
    intro:
      "So much of how we love is shaped by how we hold ourselves. When your worth depends on the other person's mood, approval, or presence, closeness becomes a source of anxiety rather than steadiness. This course is about building an inner ground that doesn't wash away — caring for yourself, learning to like who you are, and finding your own direction — so you can show up from a settled place and stay yourself inside intimacy.",
    learn: [
      'Where your sense of worth was shaped — and how it plays out in love',
      'Taking care of yourself, and learning to genuinely love who you are',
      "Finding your own purpose and direction — not only the couple's",
      'Staying yourself in closeness, instead of shrinking or performing',
      'Asking for what you need without apology or over-explaining',
      "Building a steadiness that doesn't depend on the relationship's weather",
    ],
    format: 'Online · reflective work at your own pace',
    forWhom:
      'Anyone who loses themselves in relationships, or whose confidence rises and falls with their partner.',
    audience: 'For individuals & couples',
  },
  {
    key: 'boundaries',
    slug: 'boundaries-without-walls',
    title: 'Boundaries Without Walls',
    tag: 'Limits & over-giving',
    description:
      'Knowing where you end and the other begins — saying no without guilt, and staying connected while protected.',
    intro:
      'Boundaries are often mistaken for walls — cold, final, distancing. In truth, a good boundary is what makes real closeness possible: it tells the other person where you are, so they can actually meet you. This course is about knowing your limits, saying them clearly and kindly, and staying connected while protected — ending the cycle of over-giving and quiet resentment.',
    learn: [
      'The difference between a boundary and a wall',
      'Spotting the over-function → resentment → withdrawal cycle',
      'Saying no without guilt, and yes without self-abandonment',
      'Holding a limit when the other person pushes back',
      'Staying connected and protected at the same time',
    ],
    format: 'Online · guided practice and real scripts',
    forWhom:
      'People who give too much, struggle to say no, or feel invisible and exhausted.',
    audience: 'For individuals & couples',
  },
  {
    key: 'conflict',
    slug: 'beneath-the-argument',
    title: 'Beneath the Argument',
    tag: 'Communication, needs & power',
    description:
      'Communicating needs, navigating power, and turning the fights that repeat into conversations that connect.',
    intro:
      "Most couples don't fight about what they're fighting about. The dishes, the lateness, the tone — these are the surface. Underneath runs something older and more tender: an unspoken need, a fear of not mattering, a struggle over power. This course helps you say what you actually need, understand the dynamics of control and giving in, and turn the arguments that repeat into conversations that bring you closer.",
    learn: [
      'The three conflict patterns couples fall into — and yours',
      'Communicating needs clearly — so they can actually be met',
      'Power and powerlessness: the dynamics of control and giving in',
      'How you each give and receive love — and the mismatches that hurt',
      'Interrupting escalation and stonewalling before they take over',
      'Finding the real need under the surface complaint, and repairing',
    ],
    format: 'Online · live practice with your patterns',
    forWhom:
      'Couples stuck in the same argument, or swinging between escalation and silence.',
    audience: 'For couples & individuals',
  },
  {
    key: 'attachment',
    slug: 'your-patterns-decoded',
    title: 'Your Patterns, Decoded',
    tag: 'Attachment & origins',
    description:
      'Your attachment style and the childhood scripts you still run — pursuing, withdrawing, bracing — and how to rewrite them.',
    intro:
      "Under stress, we each run a script we didn't choose — reaching harder, pulling away, bracing for disappointment. These patterns are learned long before this relationship, often in childhood: in how your parents loved, and the wounds that were left. This course helps you see your attachment pattern clearly, understand where it came from, and begin — deliberately — to rewrite it.",
    learn: [
      'The attachment styles, without the labels-as-verdict',
      "How childhood and your parents' relationship shaped your blueprint",
      'Understanding old wounds from childhood — and how they still speak',
      'Your go-to move under threat: pursue, withdraw, or brace',
      'Why you and your partner trigger each other so precisely',
      'Practising a new response until it becomes available',
    ],
    format: 'Online · reflection and paired practice',
    forWhom:
      'Anyone who keeps repeating the same relational dynamic and wants to understand why.',
    audience: 'For individuals & couples',
  },
  {
    key: 'desire',
    slug: 'desire-reconnected',
    title: 'Desire, Reconnected',
    tag: 'Sex & intimacy',
    description:
      'Talking about sex without shame — desire, pleasure, differences and kinks — reconnecting emotional and physical intimacy.',
    intro:
      "Desire is one of the first things to go quiet under stress, distance, or years of routine — and one of the hardest to talk about. Drawing on sex therapy and the link between emotional safety and physical intimacy, this course helps you talk about sex openly, understand and bridge differences in desire, and rebuild a sex life that feels alive — curiosity, pleasure and all — at a pace that works for both of you.",
    learn: [
      "Why desire fades — and why that's not a verdict on the relationship",
      'Talking about sex openly — desires, boundaries, and what you actually want',
      'Understanding differences in desire without pressure or blame',
      'Improving your sex life: pleasure, lust, and exploring kinks with consent',
      'Communicating about sex — before, during, and after',
      'Reconnecting emotional safety with physical closeness, step by step',
    ],
    format: 'Online · discreet, step-by-step',
    forWhom:
      'Couples or individuals where desire has gone quiet, differs, or feels stuck — at any stage.',
    audience: 'For couples & individuals',
  },
]

/** Lookup helpers. */
export const courseByKey = (key: CourseKey): Course =>
  COURSES.find((c) => c.key === key) as Course

export const courseBySlug = (slug: string): Course | undefined =>
  COURSES.find((c) => c.slug === slug)
