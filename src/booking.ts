/**
 * Central booking configuration.
 *
 * Paste your Cal.com event URLs here to switch on instant booking + payment.
 * Leave a value empty ('') to fall back to the contact form for that action.
 *
 * Recommended Cal.com events:
 *  - intro:            free 30-min "Kennenlernen" (no payment)
 *  - courseIndividual: 60-min themed course, individual  (Stripe, 90 €)
 *  - courseCouple:     60-min themed course, couple       (Stripe, 140 €)
 */
export const BOOKING = {
  intro: '',
  courseIndividual: '',
  courseCouple: '',
}

export const hasUrl = (u: string) => u.trim().length > 0
