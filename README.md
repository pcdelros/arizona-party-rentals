# Desert Pop Party Rentals Website

A lightweight static website for an Arizona-based party rental business. It is designed to run locally, upload to GitHub, and deploy through GitHub Pages.

## What is included

- `index.html` - Main website page
- `assets/css/styles.css` - Website styling and responsive layout
- `assets/js/main.js` - Mobile navigation, scroll reveal, and demo form validation
- `README.md` - Setup and deployment notes

## How to run locally

1. Open the project folder.
2. Double-click `index.html` to preview it in your browser.
3. For the best local preview, open it with a local server such as the VS Code Live Server extension.

## Before publishing

Replace the placeholder business details:

- Business name, if needed
- Phone number
- Email address
- Business hours
- Service areas
- Real rental categories and pricing
- Real photos, if available

## Contact form note

The quote form currently validates entries in the browser but does not send messages anywhere. This is intentional so no private email credentials, API keys, or insecure endpoints are exposed in frontend code.

For a real public form, connect it to a secure form service or backend such as:

- Formspree
- Netlify Forms
- Basin
- A custom serverless function

Do not place email passwords, private API keys, or tokens in frontend JavaScript.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload all files from this folder.
3. In GitHub, go to **Settings** > **Pages**.
4. Under **Build and deployment**, select:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save the settings.
6. GitHub will provide a public Pages URL after deployment finishes.

## Security notes

This is a static site, so it does not include login, admin pages, databases, hidden dashboards, or server-side code. GitHub Pages has limited support for custom security headers. If you need advanced headers such as Content-Security-Policy or Strict-Transport-Security, use a host that supports custom headers or place the site behind a service that can add them.

Recommended production headers when supported by your host:

```txt
Content-Security-Policy: default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; script-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'; upgrade-insecure-requests
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-Frame-Options: DENY
```

## Editing tips

- Keep the site static unless you truly need a backend.
- Use real photos for trust, but compress them before uploading.
- Keep rental policies clear and specific.
- Avoid adding tracking scripts unless you actually need analytics.
