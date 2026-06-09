# Contact Mailer Backend Learning Guide

This folder contains the PHP mail backend that powers the portfolio contact form.

## What this backend does

- Accepts JSON from the React contact form
- Validates name, email, and message fields
- Sends the message using PHPMailer and SMTP
- Returns JSON responses for success and error states

## Files in this folder

- `contact.php` - Main mail handler
- `router.php` - Routes `/api/contact` to the handler during local development
- `composer.json` - Declares PHPMailer as a dependency
- `.env.example` - Template for SMTP environment variables

## How it works

1. The React form submits a POST request to `/api/contact`.
2. Vite proxies `/api` requests to the PHP server while developing.
3. `router.php` maps `/api/contact` to `contact.php`.
4. `contact.php` loads PHPMailer from `vendor/autoload.php`.
5. The script sends the email through your SMTP provider.

## Local setup

1. Copy `.env.example` values into your PHP environment.
2. Install dependencies with `composer install`.
3. Start the PHP server from this folder:

```bash
php -S localhost:8000 router.php
```

4. Start the React app in the project root with `npm run dev`.

## SMTP variables

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USERNAME`
- `SMTP_PASSWORD`
- `SMTP_FROM_EMAIL`
- `SMTP_FROM_NAME`
- `CONTACT_TO_EMAIL`

## Notes

- Keep this folder as the backend source of truth for the contact form.
- If you swap SMTP providers, only the environment values usually change.
- Replace the example values with your real credentials before deployment.
