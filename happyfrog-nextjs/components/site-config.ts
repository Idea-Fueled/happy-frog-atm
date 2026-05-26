/**
 * SITE CONFIG — single source of truth.
 *
 * To update phone, email, scheduling, or social URLs anywhere on the site,
 * edit this file. Nothing else needs to change.
 */
export const siteConfig = {
  phone: {
    display: '(833) 818-8778',
    tel: 'tel:8338188778',
  },
  email: {
    display: 'kmckinley@happyfrogatm.com',
    mailto: 'mailto:kmckinley@happyfrogatm.com',
  },
  // Replace with the real booking URL (Calendly, Cal.com, Google Calendar, HubSpot, etc.)
  scheduleUrl: 'https://calendly.com/happyfrog-atm/intro-call',
} as const;
