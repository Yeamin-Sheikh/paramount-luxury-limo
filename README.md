# Paramount limousine service

An executive fleet reservation platform for **Paramount Limousine Service**, a luxury chauffeured ground transportation provider based in Los Angeles, California.

## Business information

- Business name: Paramount Limousine Service
- Location: 7115 W Manchester Ave, Westchester, Los Angeles, CA 90045
- Phone: (310) 670-6656 / Toll-free: (800) 843-5466
- Regulatory permits: California Public Utilities Commission (CPUC) TCP #34891-B, LAX Commercial Ground Transport Permit
- Service areas: Los Angeles International Airport (LAX), Beverly Hills, Bel Air, Hollywood, Van Nuys Airport, Malibu, and Santa Ynez wine country

## Complete site structure (6 full pages)

1. `index.html`: Main landing page with hero, fleet overview, VIP service tiers, client reviews, and instant fare estimator.
2. `fleet.html`: Detailed vehicle showcase with seating capacities, luggage specs, starlight headliner features, and individual vehicle booking.
3. `services.html`: Executive service portfolio for LAX private tarmac transfers, wedding ceremonies, red carpet Hollywood events, Napa/Santa Ynez wine tours, and hourly charters.
4. `pricing.html`: Transparent rate matrix, hourly minimums, airport gate fees, and interactive fare calculation engine.
5. `about.html`: Chauffeur screening protocols, CPUC licensing records, safety standards, and 24/7 Westchester dispatch operations.
6. `contact.html`: 24/7 concierge contact directory, LAX dispatch phone numbers, and reservation request form.

Every page contains at least 6 high-resolution content photographs, inlined SVG icons eliminating CORS issues when loaded locally or served over HTTP, an interactive reservation form, and custom context menus.

## Image assets

- `assets/images/hero.jpg`: Black Rolls-Royce Phantom on palm-lined Los Angeles street
- `assets/images/interior.jpg`: Executive cabin with starlight headliner and leather seating
- `assets/images/fleet-rolls-royce.jpg`: Rolls-Royce Phantom VIII flagship sedan
- `assets/images/fleet-maybach.jpg`: Mercedes-Maybach S680 sedan
- `assets/images/fleet-escalade.jpg`: Cadillac Escalade ESV Platinum SUV
- `assets/images/fleet-sprinter.jpg`: Mercedes-Benz Executive Sprinter jet-van
- `assets/images/fleet-lincoln-stretch.jpg`: Lincoln Continental 120-inch stretch limousine
- `assets/images/chauffeur-service.jpg`: Uniformed professional chauffeur opening door
- `assets/images/airport-lax.jpg`: LAX Tom Bradley terminal private tarmac pickup
- `assets/images/wedding-limo.jpg`: Luxury bridal limousine arrival at ceremony
- `assets/images/red-carpet.jpg`: Hollywood gala and red carpet premiere arrival
- `assets/images/wine-tour.jpg`: Santa Ynez and Napa Valley vineyard luxury chauffeur tour

## Key features

- Fleet specifications: High-end models including Rolls-Royce Phantom VIII, Mercedes-Maybach, Cadillac Escalade ESV, Sprinter jet-vans, and Lincoln stretch limousines
- Transparent fare estimator: Computes hourly charters, airport point-to-point transfers, access permits, custom VIP add-ons, and California chauffeur gratuity (20%)
- Inlined SVG sprites: Guaranteed zero-CORS icon rendering across all browsers and file protocols
- Reservation workflow: Validated reservation form with automated booking confirmation codes (`PLX-LA-XXXX`) and localStorage persistence
- High-DPI responsive layout: Optimized for 125% and 150% Windows display scaling, tablets, and smartphones

## Project structure

```
paramount-luxury-limo/
├── assets/
│   ├── images/
│   │   ├── airport-lax.jpg
│   │   ├── chauffeur-service.jpg
│   │   ├── fleet-escalade.jpg
│   │   ├── fleet-lincoln-stretch.jpg
│   │   ├── fleet-maybach.jpg
│   │   ├── fleet-rolls-royce.jpg
│   │   ├── fleet-sprinter.jpg
│   │   ├── hero.jpg
│   │   ├── interior.jpg
│   │   ├── red-carpet.jpg
│   │   ├── wedding-limo.jpg
│   │   └── wine-tour.jpg
│   └── svgs/
│       ├── icons.svg
│       └── logo.svg
├── css/
│   ├── components.css
│   └── main.css
├── js/
│   ├── app.js
│   ├── calculator.js
│   ├── fleet.js
│   └── reservation.js
├── tests/
│   ├── runner.js
│   └── verify_pages.py
├── about.html
├── config.json
├── contact.html
├── fleet.html
├── index.html
├── package.json
├── pricing.html
├── README.md
└── services.html
```

## Running locally

Run using any static web server:

```powershell
# Using Python
python -m http.server 8000

# Or using Node
npm start
```

Open `http://localhost:8000` in Google Chrome.

## Automated verification

Execute the test suites:

```powershell
# Run business logic tests
node tests/runner.js

# Verify all 6 pages have 6+ pictures and working inlined SVG icons
python tests/verify_pages.py
```

## License

MIT License.
