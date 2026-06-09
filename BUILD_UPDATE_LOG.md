# Build and Update Log

## Git Setup

- Initialized the repository in this workspace so branch-based work can be tracked.
- Planned branch name: `feature/build-update-log`.

## Build Process

- Installed frontend dependencies with `npm install`.
- Built the React app with `npm run build` to validate changes after each major update.
- Installed PHPMailer inside `contact-mailer/` with Composer after enabling PHP `zip` support.
- Verified the PHP mail backend can be started with `php -S localhost:8000 router.php`.

## Updates Made in This Build Update

- Renamed the backend folder to `contact-mailer/` for a more meaningful structure.
- Added `contact-mailer/LEARNING_GUIDE.md` for backend-specific notes.
- Wired the contact form to `/api/contact` with a Vite proxy and PHP router.
- Added PHPMailer-based mail handling in the backend.
- Added a `web_dev_desk` 3D model loader for the hero/background experience.
- Added a responsive voxel-style hero object behind the hero section.
- Adjusted the 3D object motion to start at 35 degrees and removed the black base platform.
- Updated the site color scheme to a navy/cyan/amber palette.

## Current Validation Status

- Frontend build: passing.
- Backend Composer install: passing.
- Contact backend path: `contact-mailer/`.

## Notes

- The repository was not a git repo when this log was created, so it needed initialization before a branch could be created.
