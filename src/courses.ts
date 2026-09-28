/**
 * The six Brandt courses — the single source of truth, shared by the Courses
 * section and the Fit Finder recommender. Own names; each grounded in a
 * reputable framework (Gottman, EFT/attachment, Perel, Terry Real, Tawwab).
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
  title: string
  tag: string
  description: string
}

export const COURSES: Course[] = [
  {
    key: 'trust',
    title: 'Rebuilding Trust',
    tag: 'After betrayal or slow erosion',
    description:
      'How trust actually breaks — and the concrete, staged work that rebuilds it: taking responsibility, attuning, and re-earning safety.',
  },
  {
    key: 'selfworth',
    title: 'The Ground You Stand On',
    tag: 'Self-worth',
    description:
      'Meeting yourself with steadiness — so your worth stops depending on how the relationship is going, and you can love from a settled place.',
  },
  {
    key: 'boundaries',
    title: 'Boundaries Without Walls',
    tag: 'Limits & over-giving',
    description:
      'Knowing where you end and the other begins — saying no without guilt, and staying connected while protected.',
  },
  {
    key: 'conflict',
    title: 'Beneath the Argument',
    tag: 'Communication & conflict',
    description:
      'Turning the fights that repeat into conversations that connect — finding the real issue under the surface one.',
  },
  {
    key: 'attachment',
    title: 'Your Patterns, Decoded',
    tag: 'Attachment',
    description:
      'Your attachment style and the scripts you run under stress — pursuing, withdrawing, bracing — and how to rewrite them.',
  },
  {
    key: 'desire',
    title: 'Desire, Reconnected',
    tag: 'Intimacy & desire',
    description:
      'Bringing closeness and desire back into the same room — reconnecting emotional safety with physical intimacy, without pressure.',
  },
]

/** Lookup helper. */
export const courseByKey = (key: CourseKey): Course =>
  COURSES.find((c) => c.key === key) as Course
