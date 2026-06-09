# Build and Update Log

## Git Setup

- Initialized the repository in this workspace so branch-based work can be tracked.
- Active working branch: `feature/previous-job-roles-page`.

## Build Process

- Installed frontend dependencies with `npm install`.
- Built the React app with `npm run build` to validate changes after each major update.
- Installed PHPMailer inside `contact-mailer/` with Composer after enabling PHP `zip` support.
- Verified the PHP mail backend can be started with `php -S localhost:8000 router.php`.

## Recent Changes (Latest Commits)

### Commit `986f6ab` - Refactor index.scss with Sass hierarchy

- Added `src/index.scss` as the main stylesheet.
- Reorganized styles into nested Sass structure by section and component area.
- Improved maintainability by grouping related selectors and responsive rules together.

### Commit `c2acc09` - Finalize Sass migration and documentation updates

- Removed legacy `src/index.css`.
- Updated app entry styling import flow in `src/main.jsx`.
- Updated docs to match the new Sass-based setup:
	- `README.md`
	- `SETUP.md`
	- `QUICK_START.md`
	- `PROJECT_OVERVIEW.md`
- Updated `package.json` and `package-lock.json` for Sass and dependency consistency.
- Updated `src/pages/PreviousRolesPage.jsx` and `index.html` as part of final integration cleanup.

## Learning Guide: How These Changes Were Done

### 1. Plan the migration

- Identified all current style entry points (`src/main.jsx`, global stylesheet files, and page/component classes).
- Chose a single global Sass entry file (`src/index.scss`) to avoid split styling sources.

### 2. Move CSS to Sass safely

- Created `src/index.scss` and ported existing rules.
- Preserved class names first, then improved structure. This avoids breaking JSX during migration.
- Used nested Sass only where hierarchy was clear (sections, containers, child blocks).

### 3. Wire Sass into React

- Confirmed the React entry file imports `./index.scss` instead of `./index.css`.
- Removed `src/index.css` after confirming all styles were present in Sass.

### 4. Verify dependency support

- Ensured `sass` is present in `devDependencies`.
- Ran install/build flow to verify compilation:
	- `npm install`
	- `npm run build`

### 5. Update docs immediately

- Updated setup and quick-start docs right after the migration so instructions match code.
- Documented backend folder naming (`contact-mailer`) and current startup flow.

### 6. Commit in logical steps

- Commit 1 (`986f6ab`): Sass hierarchy refactor only.
- Commit 2 (`c2acc09`): final migration cleanup + documentation updates.
- This split keeps history readable and makes rollback easier.

### 7. Push and verify

- Pushed branch updates to GitHub.
- Verified branch sync state and commit visibility in remote.

## Current Validation Status

- Frontend build: passing.
- Backend Composer install: passing.
- Contact backend path: `contact-mailer/`.
- Branch push status: up to date on remote after latest push.

## Notes

- If adding future style modules, keep `src/index.scss` as the global orchestrator and import partials intentionally.
- Continue using small, focused commits for UI/layout changes versus docs/config changes.
