# Northvale Mobile Detailing LLC
1. Add the 7 images to `public/images/` (exact names, no rename) — see `README-IMAGES.md`.
2. `npm install` then `npm start` (http://localhost:3000).
3. Push to GitHub.
4. Render: New Web Service > Build `npm install` > Start `npm start` > Free > add Env Vars `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`.
5. Edit phone / hours / pricing / area / services in ONE file: `public/js/config.js`.

Gmail: enable 2-Step Verification, create an App Password (Google Account > Security > App passwords), use it as `EMAIL_PASS`. Without email vars, bookings save to `bookings.json`.
