# LC Pressure Washing — Prospect Preview

A private, no-index prospect website for **LC Pressure Washing: Commercial and Residential** in League City, Texas.

## Current build

This preview is intentionally based only on public business information that can be verified before owner contact. Current public data used in the build includes:

- Phone: **(832) 439-8037**
- League City / Galveston County positioning
- Residential + commercial pressure washing
- Gutter cleaning
- Public hours: **9:00 AM–9:00 PM daily**
- Public rating snapshot: **4.9 / 5 from 50 reviews**
- Commonly described work: house exteriors, garages, driveways, sidewalks, curbs, patios, walkways, and commercial exterior cleaning
- Repeated public review themes: professional, punctual, responsive, thorough, fair pricing, strong visible results

## Still needs owner confirmation

Do **not** invent these before launch:

- Exact service radius
- Exact current pricing
- Whether estimates are free
- Insurance / licensing claims
- Soft-wash process details or chemical-treatment promises
- Water / power requirements
- Commercial contract terms
- Any warranties or guarantees
- Owner-preferred colors / logo / tagline
- Exact scheduling system or booking URL

## Photo pass — next step

The hero and results sections currently use custom CSS visual placeholders rather than stock photography. Replace those with LC Pressure Washing's real project photos once permission / assets are available. Real before-and-after work should be the visual centerpiece.

## Conversion flow

The site does not collect or store visitor information. The estimate builder creates a pre-filled SMS to the public business number with:

- property type
- requested service
- ZIP code
- optional notes

This keeps the prospect preview lightweight and avoids creating a backend the business did not ask for.

## Preview safety

`previewMode` is enabled in `config/site.ts`, and `app/layout.tsx` sends `noindex, nofollow` metadata while the prospect is reviewing the site.

Before a public launch, owner-verify every business fact, replace photo placeholders, confirm conversion links, and then disable preview mode.
