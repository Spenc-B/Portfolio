# 3D Portfolio - React & Three.js Learning Project

Welcome! This is a comprehensive 3D portfolio built with **React** and **Three.js**. It's designed to teach you both **beginner-friendly** and **advanced** React concepts.

## 📚 Project Structure

```
src/
├── components/
│   ├── ui/              # User Interface components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   └── 3d/              # 3D Graphics components
│       ├── ThreeDScene.jsx
│       ├── RotatingCube.jsx
│       └── SceneLights.jsx
├── App.jsx              # Main component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

---

## 🎯 Learning Path

### **UI COMPONENTS** (Great for Beginners)

1. **Navbar.jsx** - Navigation component
   - Uses `useState` for menu management
   - Shows how to handle click events
   - Demonstrates smooth scrolling

2. **HeroSection.jsx** - Landing section
   - Simple functional component
   - Button click handling
   - Basic styling

3. **AboutSection.jsx** - About content
   - No state management needed
   - Pure presentation component
   - Easy to customize

4. **SkillsSection.jsx** - Skills showcase
   - **Important Pattern**: `.map()` to render lists
   - Converting arrays to JSX elements
   - Key prop explanation

5. **ContactSection.jsx** - Contact form
   - Form handling with `useState`
   - Input value management
   - Form submission handling

6. **Footer.jsx** - Footer component
   - Simplest component type
   - Good example of a "dumb" component

### **COMPLEX COMPONENTS** (For Learning Advanced Concepts)

1. **ThreeDScene.jsx** - Main 3D canvas
   - Uses `Canvas` from react-three-fiber
   - Sets up camera and rendering
   - Includes `OrbitControls` for interaction

2. **RotatingCube.jsx** - 3D Object
   - Uses `useRef` and `useFrame` hooks
   - Real-time animation with Three.js
   - 3D geometry and materials

3. **SceneLights.jsx** - 3D Lighting
   - Multiple light types
   - Understanding 3D illumination
   - Rendering realistic scenes

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

This installs:

- **React** - UI library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful 3D helpers
- **Vite** - Fast bundler

### 2. Start Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

---

## 📖 React Concepts Explained

### **Concept 1: Components**

A component is just a JavaScript function that returns JSX (HTML-like code).

```jsx
function HelloComponent() {
  return <h1>Hello World!</h1>;
}
```

### **Concept 2: JSX**

JSX looks like HTML but it's actually JavaScript. It gets compiled to function calls.

```jsx
// JSX
<div className="hero">
  <h1>Welcome</h1>
</div>;

// Compiles to:
React.createElement(
  "div",
  { className: "hero" },
  React.createElement("h1", null, "Welcome"),
);
```

### **Concept 3: State (useState)**

State is data that can change. When it changes, React re-renders the component.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // [current value, function to update]

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### **Concept 4: Props**

Props are inputs to components. They let parent components pass data to child components.

```jsx
// Parent
<SkillCard title="React" description="UI Library" />;

// Child
function SkillCard({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### **Concept 5: Rendering Lists with .map()**

Convert an array of data into JSX elements.

```jsx
const skills = ["React", "Three.js", "JavaScript"];

function SkillList() {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
```

### **Concept 6: Hooks (useRef, useFrame)**

Hooks are functions that let you use React features in functional components.

- **useRef**: Access DOM elements or store mutable values
- **useFrame**: In Three.js, runs every animation frame
- **useState**: Manage component state

---

## 🎨 Customization Guide

### Change Colors

Edit `src/index.css` - look for color values like `#667eea`

### Add More Skills

Edit `src/components/simple/SkillsSection.jsx` - add items to the `skills` array

### Modify 3D Scene

Edit `src/components/complex/ThreeDScene.jsx` - adjust camera, lighting, or add new 3D objects

### Update Personal Info

Edit `src/components/simple/HeroSection.jsx` and `AboutSection.jsx`

---

## 🔍 What Each Technology Does

| Technology            | Purpose                | Example               |
| --------------------- | ---------------------- | --------------------- |
| **React**             | Build UI components    | `<Navbar />`          |
| **Three.js**          | 3D graphics            | `<boxGeometry>`       |
| **React Three Fiber** | Use Three.js in React  | `<Canvas>`            |
| **CSS**               | Styling                | `background: #667eea` |
| **Vite**              | Development & building | `npm run dev`         |

---

## 💡 Key Learning Points

1. **Components are functions** - They return JSX
2. **State triggers re-renders** - When state changes, React updates the UI
3. **Props are inputs** - Pass data from parent to child components
4. **Keys are important** - Use unique keys when rendering lists with `.map()`
5. **Hooks are powerful** - `useState`, `useRef`, `useEffect` are essential
6. **3D is complex but fun** - Start with basic concepts and build up

---

## 🐛 Troubleshooting

### Issue: "Module not found"

**Solution**: Run `npm install` to install all dependencies

### Issue: Page won't load

**Solution**: Check browser console for errors (F12 → Console tab)

### Issue: 3D scene is black

**Solution**: Check if lights are enabled in `SceneLights.jsx`

---

## 📝 Next Steps to Learn More

1. **Add more 3D objects** - Try spheres, pyramids, or imported models
2. **Add animations** - Use `useFrame` to create complex animations
3. **Add interactivity** - Make objects respond to mouse movements
4. **Connect to backend** - Learn to fetch data from a server
5. **Deploy online** - Use Vercel, Netlify, or GitHub Pages

### Contact Mailer Backend

The PHP mailer backend lives in `contact-mailer/`.

```bash
cd contact-mailer
composer install
php -S localhost:8000 router.php
```

---

## 🤝 Contributing & Customization

This is YOUR portfolio! Feel free to:

- Change colors and styling
- Add more components
- Modify the 3D scene
- Add your own content
- Experiment and break things (that's how we learn!)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [JavaScript Basics](https://javascript.info)
- [CSS Tricks](https://css-tricks.com)

---

## 🎓 Have Fun Learning!

This project combines simple and complex concepts so you can:

1. **Learn React fundamentals** with simple components
2. **Explore advanced topics** with 3D graphics
3. **Build something impressive** for your portfolio
4. **Understand real-world code** patterns

Happy coding! 🚀✨
