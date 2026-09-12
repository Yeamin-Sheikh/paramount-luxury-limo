# Paramount limousine service

An executive fleet reservation platform for **Paramount Limousine Service**, a luxury chauffeured ground transportation provider based in Los Angeles, California.

## Business information

- **Business name:** Paramount Limousine Service
- **Location:** 7115 W Manchester Ave, Westchester, Los Angeles, CA 90045
- **Phone:** (310) 670-6656 / Toll-free: (800) 843-5466
- **Regulatory permits:** California Public Utilities Commission (CPUC) TCP #34891-B, LAX Commercial Ground Transport Permit
- **Service areas:** Los Angeles International Airport (LAX), Beverly Hills, Bel Air, Hollywood, Van Nuys Airport, Malibu, and Orange County

## Key features

- **Fleet specifications:** High-end models including Rolls-Royce Phantom VIII, Mercedes-Maybach S580, Cadillac Escalade ESV Platinum, Mercedes-Benz Executive Sprinter, and Hummer H2 Mega Stretch.
- **Transparent fare estimator:** Computes hourly charters, airport point-to-point transfers, access permits, custom VIP add-ons, and California chauffeur gratuity (20%).
- **Interior virtual display:** Starlight fiber-optic headliner and wet bar console preview.
- **Reservation workflow:** Validated reservation form with automated booking confirmation codes (`PLX-LA-XXXX`) and localStorage persistence.
- **Bespoke visual assets:** High-resolution fleet photography and custom luxury SVG icon set.
- **High-DPI responsive design:** Tuned for desktop monitors with 125% and 150% scaling, tablets, and smartphones.

## Project structure

```
paramount-luxury-limo/
├── assets/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── interior.jpg
│   │   ├── fleet-rolls-royce.jpg
│   │   ├── fleet-maybach.jpg
│   │   ├── fleet-escalade.jpg
│   │   ├── fleet-sprinter.jpg
│   │   └── fleet-lincoln-stretch.jpg
│   └── svgs/
│       ├── logo.svg
│       └── icons.svg
├── css/
│   ├── main.css
│   └── components.css
├── js/
│   ├── app.js
│   ├── calculator.js
│   ├── fleet.js
│   └── reservation.js
├── tests/
│   └── runner.js
├── config.json
├── index.html
├── package.json
└── README.md
```

## Running locally

Run using any static web server:

```powershell
# Using Python
python -m http.server 8000

# Or using Node
npm start
```

Open `http://localhost:8000` in your web browser.

## Running tests

Execute the test suite with Node:

```powershell
npm test
# or
node tests/runner.js
```

## License

MIT License.
