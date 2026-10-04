/**
 * Central booking configuration.
 *
 * Paste your Cal.com event URLs here to switch on instant booking + payment.
 * Leave a value empty ('') to fall back to the contact form for that action.
 *
 * Recommended Cal.com events:
 *  - intro:            free 30-min "Kennenlernen" (no payment)
 *  - courseIndividual: 50-min themed course, individual  (Stripe, 110 €)
 *  - courseCouple:     50-min themed course, couple       (Stripe, 160 €)
 */
export const BOOKING = {
  intro: 'https://cal.com/louisabrandt/kennenlernen',
  courseIndividual: 'https://cal.com/louisabrandt/kurs-einzel',
  courseCouple: 'https://cal.com/louisabrandt/kurs-paar',
}

export const hasUrl = (u: string) => u.trim().length > 0
