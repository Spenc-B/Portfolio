# 📋 Setup Instructions

Follow these steps to get your 3D Portfolio running:

## Step 1: Open Terminal in Project Folder

Make sure you're in the `3d-portfolio` directory:

```
d:\KIRATRON\REACT\3d-portfolio>
```

## Step 2: Install All Dependencies

Run this command:

```bash
npm install
```

**What this does**: Downloads and installs:

- React
- Three.js
- React Three Fiber
- Vite
- All other dependencies from `package.json`

**This may take 2-5 minutes.** You'll see a lot of text - that's normal!

## Step 3: Start Development Server

Run this command:

```bash
npm run dev
```

**Expected output**:

```
VITE v4.x.x  ready in 123 ms

➜  Local:   http://localhost:3000/
➜  press h to show help
```

## Step 4: Open in Browser

The browser should open automatically to `http://localhost:3000/`

If it doesn't, manually navigate to that URL.

## Step 5: Explore the Portfolio!

You should see:

- ✅ Navigation bar at the top
- ✅ Hero section with welcome message
- ✅ About section
- ✅ Skills grid
- ✅ Interactive 3D scene with rotating cube
- ✅ Contact form
- ✅ Footer

---

## Congratulations! 🎉

Your 3D Portfolio is now running!

### Next Steps:

1. **Read the Comments** in component files to understand the code
2. **Start with Simple Components** (`src/components/simple/`)
3. **Read LEARNING_GUIDE.md** to understand React concepts
4. **Customize** colors, text, and content
5. **Experiment** - try modifying components!

---

## If You Get Errors

### ❌ "npm is not recognized"

- Install Node.js from https://nodejs.org/
- Restart your terminal

### ❌ "Cannot find module 'react'"

```bash
npm install
```

### ❌ "Port 3000 already in use"

Edit `vite.config.js` and change port to 3001:

```js
server: {
  port: 3001,
}
```

### ❌ "Module not found: @react-three/fiber"

```bash
npm install three @react-three/fiber @react-three/drei
```

### ❌ Terminal shows errors but 3D scene appears

- This is okay! Check browser console (F12 → Console)
- Most errors are warnings and won't affect display

---

## Development Tips

### See File Changes Automatically

Your browser will refresh when you save files. No need to restart!

### Stop the Development Server

Press `Ctrl+C` in the terminal

### Restart the Server

```bash
npm run dev
```

### Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

---

## File Editing Tips

### Easy Things to Change

**1. Hero Title** - Edit `src/components/simple/HeroSection.jsx`

```jsx
<h1>Welcome to My 3D Portfolio</h1>
// Change to your name/title
```

**2. Skills** - Edit `src/components/simple/SkillsSection.jsx`

```jsx
const skills = [
  // Add more skills here
];
```

**3. Colors** - Edit `src/index.css`

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
// Change hex colors
```

**4. About Text** - Edit `src/components/simple/AboutSection.jsx`

```jsx
<p>Your bio here...</p>
```

---

## Deployment (Optional)

Once you're happy with your portfolio:

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Deploy! (It's that easy)

### Option 2: GitHub Pages

```bash
npm run build
git add -A
git commit -m "Deploy"
git push
```

### Option 3: Netlify

1. Build the project: `npm run build`
2. Drag `dist/` folder to https://app.netlify.com/drop

### Contact Mailer Backend

The form backend is in `contact-mailer/`.

```bash
cd contact-mailer
composer install
php -S localhost:8000 router.php
```

---

## Getting Help

- **Errors?** Check browser console (F12 → Console tab)
- **Stuck?** Read `LEARNING_GUIDE.md`
- **React questions?** Visit https://react.dev
- **Three.js questions?** Visit https://threejs.org

---

## You're Ready! 🚀

Run `npm install` and `npm run dev` to start!
