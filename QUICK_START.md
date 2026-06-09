# 🚀 Quick Start Guide

## Installation & Running

### 1️⃣ Install Dependencies

```bash
npm install
```

### 2️⃣ Start Development Server

```bash
npm run dev
```

### 3️⃣ Open Browser

Navigate to `http://localhost:3000`

---

## 📂 Project Structure Explained

```
3d-portfolio/
├── src/
│   ├── components/
│   │   ├── ui/                  ← 🟢 UI Components (User Interface)
│   │   │   ├── Navbar.jsx       • Navigation
│   │   │   ├── HeroSection.jsx  • Landing page
│   │   │   ├── AboutSection.jsx • Bio section
│   │   │   ├── SkillsSection.jsx ⭐ Learn .map() here
│   │   │   ├── ContactSection.jsx ⭐ Learn useState here
│   │   │   └── Footer.jsx       • Footer
│   │   │
│   │   └── 3d/                  ← 🔴 3D Components (3D Graphics)
│   │       ├── ThreeDScene.jsx   • Main 3D canvas
│   │       ├── RotatingCube.jsx  • 3D object
│   │       └── SceneLights.jsx   • Lighting setup
│   │
│   ├── App.jsx                  ← Main component (imports everything)
│   ├── main.jsx                 ← Entry point
│   └── index.scss               ← Global styles
│
├── index.html                   ← HTML template
├── package.json                 ← Dependencies
├── vite.config.js              ← Build configuration
├── README.md                    ← Project info
├── LEARNING_GUIDE.md           ← 📚 Deep React explanations
└── QUICK_START.md              ← This file
```

---

## 🟢 SIMPLE COMPONENTS - For Learning React Basics

### 1. SkillsSection.jsx

**What it teaches**: `.map()` - converting arrays to React components

```jsx
// Array of data
const skills = [
  { id: 1, title: "React", description: "..." },
  { id: 2, title: "Three.js", description: "..." },
];

// Convert to JSX
{
  skills.map((skill) => <div key={skill.id}>{skill.title}</div>);
}
```

**Try this**: Add more skills to the array!

---

### 2. ContactSection.jsx

**What it teaches**: Form handling with `useState`

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

// Update state as user types
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
```

**Try this**: Add a checkbox field to the form!

---

### 3. Navbar.jsx

**What it teaches**: State + smooth scrolling

```jsx
const [menuOpen, setMenuOpen] = useState(false);

// Scroll to section smoothly
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
```

**Try this**: Add a logo image to the navbar!

---

## 🔴 3D COMPONENTS - For Learning 3D Graphics

### ThreeDScene.jsx

**What it teaches**: 3D rendering with React Three Fiber

```jsx
<Canvas camera={{ position: [0, 0, 5] }}>
  <SceneLights />
  <RotatingCube />
  <OrbitControls autoRotate />
</Canvas>
```

**Try this**: Add more 3D objects to the scene!

---

## 🎯 Learning Path

### Week 1: React Basics

1. Read `LEARNING_GUIDE.md` Chapter 1-5
2. Study `SkillsSection.jsx` (learn `.map()`)
3. Modify `SkillsSection.jsx` - add more skills

### Week 2: State & Forms

1. Read `LEARNING_GUIDE.md` Chapter 6-8
2. Study `ContactSection.jsx` (learn form handling)
3. Modify `ContactSection.jsx` - add validation

### Week 3: Component Composition

1. Read `LEARNING_GUIDE.md` Chapter 9
2. Study how `App.jsx` combines all components
3. Create a new component and add it to `App.jsx`

### Week 4: 3D Graphics

1. Study `ThreeDScene.jsx`
2. Read Three.js documentation
3. Add more 3D objects to the scene

---

## 💡 Common Tasks

### Change the Hero Title

Edit `src/components/simple/HeroSection.jsx`:

```jsx
<h1>Welcome to My 3D Portfolio</h1>
// Change to:
<h1>Hi, I'm [Your Name]!</h1>
```

### Change Colors

Edit `src/index.scss`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change hex colors to your preference */
```

### Add a New Section

1. Create `src/components/simple/NewSection.jsx`
2. Add it to `src/App.jsx`:

```jsx
import NewSection from "./components/simple/NewSection";

function App() {
  return (
    <div>
      {/* ... other components ... */}
      <NewSection />
    </div>
  );
}
```

---

## 🔧 Troubleshooting

### Error: "Cannot find module 'react'"

```bash
npm install
```

### Port 3000 already in use?

Edit `vite.config.js`:

```js
server: {
  port: 3001,  // Change to 3001
  open: true
}
```

### 3D scene not showing?

- Check browser console (F12 → Console)
- Ensure `Three.js` is installed: `npm install three`

---

## 📚 File-by-File Comments

Each component file has detailed comments explaining:

- What it does
- What React concepts it demonstrates
- How to modify it

**Read the comments!** They're your best learning resource.

---

## 🚀 Next Steps

1. ✅ Run `npm install` and `npm run dev`
2. ✅ Explore all components and read the comments
3. ✅ Read `LEARNING_GUIDE.md` chapters
4. ✅ Modify existing components (start with `src/components/ui/`)
5. ✅ Create new components
6. ✅ Deploy online (Vercel, Netlify, GitHub Pages)

---

## 📖 Recommended Reading Order

1. **This file** (Quick Start.md) - Overview
2. **README.md** - Project structure
3. **Component files** - Read comments first
4. **LEARNING_GUIDE.md** - Deep learning
5. **Official docs** - When you need details

---

## 🎓 Key Files to Study First

| File                 | Why            | Difficulty |
| -------------------- | -------------- | ---------- |
| `SkillsSection.jsx`  | Learn `.map()` | 🟢 Easy    |
| `ContactSection.jsx` | Learn forms    | 🟢 Easy    |
| `Navbar.jsx`         | Learn state    | 🟡 Medium  |
| `ThreeDScene.jsx`    | Learn 3D       | 🔴 Hard    |
| `RotatingCube.jsx`   | Advanced hooks | 🔴 Hard    |

---

**Happy Learning! 🎉**

Start with simple components, then explore complex ones. Don't worry if things don't make sense at first - that's normal!
