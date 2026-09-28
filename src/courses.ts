/**
 * The Brandt courses: single source of truth, shared by the Courses section,
 * the Fit Finder recommender, and the per-course detail pages. Own names, each
 * grounded in a reputable framework (Gottman, EFT and attachment, Perel, Terry
 * Real, Tawwab). Every course works for individuals or couples, online.
 *
 * `key` groups a course under one of six themes; `primary` marks the lead
 * course the Fit Finder recommends for that theme (the others are deepenings,
 * discoverable in the grid and individually).
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
  description: string
  intro: string
  learn: string[]
  format: string
  forWhom: string
  audience: string
  primary?: boolean
  /** Dominant warm background tone of the course illustration (for tinting). */
  accent: string
}

/** Path to a course's hand-drawn thread illustration. */
export const courseIllustration = (slug: string): string =>
  `/illustrations/${slug}.webp`

export const COURSES: Course[] = [
  {
    key: 'trust',
    primary: true,
    slug: 'rebuilding-trust',
    accent: '#643948',
    title: 'Rebuilding Trust',
    tag: 'After betrayal or slow erosion',
    description:
      'How trust actually breaks, and the concrete, staged work that rebuilds it: taking responsibility, attuning, and re-earning safety.',
    intro:
      'Trust rarely breaks in a single moment. Sometimes it wears away through small ruptures left unrepaired, sometimes it shatters at once, and either way it has to be rebuilt on purpose. This course maps how trust actually works, and walks the path back: taking honest responsibility, learning to attune, and slowly re-earning safety, for the one who was hurt and the one who caused the hurt.',
    learn: [
      'How trust is built, broken, and rebuilt, and the mechanics beneath the feeling',
      'Taking responsibility without collapsing into shame or defensiveness',
      'Attuning to the hurt instead of rushing past it',
      'Rebuilding reliability through repeated, visible follow-through',
      'Deciding, with clarity, whether and how to stay',
    ],
    format: 'Online · guided sessions with practice between',
    forWhom: 'After a betrayal, broken promise, or a slow loss of safety.',
    audience: 'For couples & individuals',
  },
  {
    key: 'selfworth',
    primary: true,
    slug: 'the-ground-you-stand-on',
    accent: '#d48f7e',
    title: 'The Ground You Stand On',
    tag: 'Self-worth & self-care',
    description:
      'Meeting yourself with steadiness: self-worth, self-care, and your own purpose, so you can love from a settled place.',
    intro:
      "So much of how we love is shaped by how we hold ourselves. When your worth rises and falls with the other person's mood, approval or presence, closeness starts to feel like anxiety rather than steadiness. This course is about building an inner ground that doesn't wash away. You care for yourself, learn to like who you are, and find your own direction, so you can show up from a settled place and stay yourself inside intimacy.",
    learn: [
      'Where your sense of worth was shaped, and how it plays out in love',
      'Taking care of yourself, and learning to genuinely love who you are',
      "Finding your own purpose and direction, not only the couple's",
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
    key: 'selfworth',
    slug: 'finding-your-purpose',
    accent: '#e39e25',
    title: 'Finding Your Purpose',
    tag: 'Purpose & direction',
    description:
      'Discovering who you are and what you want the relationship to be for, moving from drifting to choosing.',
    intro:
      "It's easy to lose your sense of direction inside a long relationship. You organise around the other person, or around keeping the peace, until you're not quite sure what you want any more. This course is about reconnecting with your own purpose: what you value, what you're building, and what you want this relationship to serve, so it becomes something you actively choose rather than something that simply happens to you.",
    learn: [
      'Reconnecting with what you actually value and want',
      "Telling the difference between the relationship's needs and your own",
      'Moving from drifting to consciously choosing',
      'Bringing your direction into the relationship without losing it',
      'Building a shared sense of purpose, together',
    ],
    format: 'Online · reflective work at your own pace',
    forWhom: "Anyone who feels they've lost their direction inside the relationship.",
    audience: 'For individuals & couples',
  },
  {
    key: 'boundaries',
    primary: true,
    slug: 'boundaries-without-walls',
    accent: '#67673d',
    title: 'Boundaries Without Walls',
    tag: 'Limits & over-giving',
    description:
      'Knowing where you end and the other begins: saying no without guilt, and staying connected while protected.',
    intro:
      'Boundaries get mistaken for walls: cold, final, distancing. In truth, a good boundary is what makes real closeness possible. It tells the other person where you are, so they can actually meet you. This course is about knowing your limits, saying them clearly and kindly, and staying connected while protected, so the cycle of over-giving and quiet resentment can finally ease.',
    learn: [
      'The difference between a boundary and a wall',
      'Spotting the cycle of over-functioning, resentment and withdrawal',
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
    primary: true,
    slug: 'beneath-the-argument',
    accent: '#be5b2e',
    title: 'Beneath the Argument',
    tag: 'Communication & conflict',
    description:
      'Turning the fights that repeat into conversations that connect, by finding the real issue under the surface one.',
    intro:
      "Most couples don't fight about what they're fighting about. The dishes, the lateness, the tone: that's the surface. Underneath runs something older and more tender, an unspoken need, a fear of not mattering, a quiet struggle over power. This course helps you find the real issue beneath the recurring one, and turn the arguments that keep repeating into conversations that bring you closer.",
    learn: [
      'The three conflict patterns couples fall into, and yours',
      'Finding the real need under the surface complaint',
      'Interrupting escalation and stonewalling before they take over',
      'Repairing mid-conflict, not days later',
      'Turning a recurring fight into a conversation that connects',
    ],
    format: 'Online · live practice with your patterns',
    forWhom:
      'Couples stuck in the same argument, or swinging between escalation and silence.',
    audience: 'For couples & individuals',
  },
  {
    key: 'conflict',
    slug: 'say-what-you-need',
    accent: '#df9513',
    title: 'Say What You Need',
    tag: 'Needs & love languages',
    description:
      'Learning to name what you need, and to hear it, so love actually lands across your different languages.',
    intro:
      "Most of us were never taught to say clearly what we need, so we hint, withhold, or hope the other person will simply know. And we each give and receive love differently, which means care can be offered and still not land. This course is about naming your needs without apology, hearing your partner's beneath their words, and closing the gap between the love that's given and the love that's felt.",
    learn: [
      'Naming what you need, clearly and without apology',
      'Why hinting and hoping quietly erodes closeness',
      'How you each give and receive love, and where you miss each other',
      "Hearing the need beneath your partner's words",
      'Asking in a way the other person can actually respond to',
    ],
    format: 'Online · guided practice and real scripts',
    forWhom:
      "Anyone who struggles to ask for what they need, or feels unseen despite their partner's efforts.",
    audience: 'For couples & individuals',
  },
  {
    key: 'conflict',
    slug: 'power-and-powerlessness',
    accent: '#401a34',
    title: 'Power & Powerlessness',
    tag: 'Power & control',
    description:
      'The quiet dynamics of control and giving in, and how to build a relationship of equals.',
    intro:
      'Every relationship carries power: who decides, who defers, who pursues, who withdraws. Often it runs invisibly. One person over-functions and quietly controls; the other gives in and quietly resents. This course brings those dynamics into the light, so you can see where you reach for control or hand it away, and build a relationship that feels like two equals rather than one leading and one following.',
    learn: [
      'Seeing the invisible power dynamics you both live inside',
      'Where you reach for control, and where you give it away',
      'The link between powerlessness, resentment and withdrawal',
      'Sharing decisions and influence more evenly',
      'Moving from one-up and one-down to a partnership of equals',
    ],
    format: 'Online · guided reflection and paired practice',
    forWhom:
      'Couples where one leads and the other follows, or where control and resentment quietly build.',
    audience: 'For couples & individuals',
  },
  {
    key: 'conflict',
    slug: 'into-their-world',
    accent: '#78744a',
    title: 'Into Their World',
    tag: 'Empathy & attunement',
    description:
      'The practice of truly understanding the other: reading beneath their words, and assuming good intent.',
    intro:
      "Empathy isn't agreeing, and it isn't fixing. It's the willingness to step, for a moment, into the other person's world and see why what they do makes sense to them. It's one of the most powerful things you can bring to a relationship, and one of the easiest to lose under stress. This course is a practice: reading beneath the words, checking your assumptions, and meeting your partner where they actually are.",
    learn: [
      "What empathy is, and what it isn't (agreeing, fixing, absorbing)",
      "Reading beneath your partner's words to the feeling underneath",
      'Catching the assumptions and stories you quietly fill in',
      'Assuming good intent without abandoning yourself',
      'Staying empathic in conflict, when it matters most',
    ],
    format: 'Online · guided practice, solo or as a pair',
    forWhom:
      'Anyone who wants to understand their partner more deeply, especially when it is hard.',
    audience: 'For couples & individuals',
  },
  {
    key: 'attachment',
    primary: true,
    slug: 'your-patterns-decoded',
    accent: '#c55222',
    title: 'Your Patterns, Decoded',
    tag: 'Attachment',
    description:
      'Your attachment style and the scripts you run under stress (pursuing, withdrawing, bracing), and how to rewrite them.',
    intro:
      "Under stress, we each run a script we didn't choose: reaching harder, pulling away, bracing for disappointment. These are attachment patterns, learned long before this relationship, and they shape how you connect far more than intention does. This course helps you see your pattern clearly, understand where it came from, and begin, deliberately, to rewrite it.",
    learn: [
      'The attachment styles, without the labels-as-verdict',
      'Your go-to move under threat: pursue, withdraw, or brace',
      'Why you and your partner trigger each other so precisely',
      'Meeting the need beneath the pattern, in yourself and them',
      'Practising a new response until it becomes available',
    ],
    format: 'Online · reflection and paired practice',
    forWhom:
      'Anyone who keeps repeating the same relational dynamic and wants to understand why.',
    audience: 'For individuals & couples',
  },
  {
    key: 'attachment',
    slug: 'where-it-began',
    accent: '#fdf1dc',
    title: 'Where It Began',
    tag: 'Childhood & origins',
    description:
      'Understanding the childhood and family patterns you carry, and gently loosening their grip.',
    intro:
      'The way you love was rehearsed long before this relationship: in your family, in how your parents related, in the moments you learned what closeness cost and what it was safe to need. This course helps you trace those origins with compassion rather than blame. You name old wounds, see how they still shape you, and begin to respond from the present instead of the past.',
    learn: [
      'How your family and parents shaped your template for love',
      'Naming old wounds without blame or endless excavation',
      "Recognising when you're reacting to the past, not the present",
      'Understanding the needs that went unmet, and meeting them now',
      'Loosening the grip of patterns you never chose',
    ],
    format: 'Online · reflective, at your own pace',
    forWhom:
      'Anyone whose childhood or family still echoes in their relationships today.',
    audience: 'For individuals & couples',
  },
  {
    key: 'desire',
    primary: true,
    slug: 'desire-reconnected',
    accent: '#cd7b67',
    title: 'Desire, Reconnected',
    tag: 'Intimacy & desire',
    description:
      'Bringing closeness and desire back into the same room, reconnecting emotional safety with physical intimacy.',
    intro:
      'Desire is one of the first things to go quiet under stress, distance, or years of routine, and one of the hardest to talk about. Drawing on sex therapy and the link between emotional safety and physical intimacy, this course helps you understand what dampened desire, bridge differences without blame, and reconnect closeness and wanting, at a pace that works for both of you.',
    learn: [
      "Why desire fades, and why that's not a verdict on the relationship",
      'Understanding differences in desire without pressure or blame',
      'Rebuilding presence and pleasure with structured, low-pressure steps',
      'Reconnecting emotional safety with physical closeness',
      'Keeping desire alive through the seasons of a relationship',
    ],
    format: 'Online · discreet, step-by-step',
    forWhom:
      'Couples or individuals where desire has gone quiet, differs, or feels stuck, at any stage.',
    audience: 'For couples & individuals',
  },
  {
    key: 'desire',
    slug: 'lets-talk-about-sex',
    accent: '#2e1925',
    title: "Let's Talk About Sex",
    tag: 'Sex, pleasure & communication',
    description:
      'An honest, shame-free space for sex: desire, pleasure, kinks, and learning to talk about all of it.',
    intro:
      "Sex is where many couples go quiet, not because it doesn't matter, but because it's the hardest thing to talk about. This course opens an honest, shame-free space to explore your sex life: understanding desire and pleasure, naming what you want and what you're curious about (kinks included), and building the language to talk about sex before, during and after, so it stays a shared, living part of the relationship rather than something avoided.",
    learn: [
      'Building the language to talk about sex, without shame',
      'Understanding your own desire, pleasure and turn-ons',
      'Exploring curiosity and kinks, safely and with consent',
      'Bridging differences in what you each want',
      'Keeping sex a shared, spoken part of the relationship',
    ],
    format: 'Online · discreet, step-by-step',
    forWhom:
      'Couples or individuals who want a richer, more open sexual connection.',
    audience: 'For couples & individuals',
  },
]

/** Lookup helpers. */
export const courseBySlug = (slug: string): Course | undefined =>
  COURSES.find((c) => c.slug === slug)

/** The lead course the Fit Finder recommends for a theme. */
export const primaryCourseByKey = (key: CourseKey): Course =>
  (COURSES.find((c) => c.key === key && c.primary) ??
    COURSES.find((c) => c.key === key)) as Course
