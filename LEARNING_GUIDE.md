# 🎓 React Learning Guide - For Beginners

This guide explains React concepts used in this 3D Portfolio project. Read this if you're new to React!

---

## Chapter 1: What is React?

**React** is a JavaScript library for building user interfaces (UIs). Think of it as a smart toolbox for creating interactive websites.

### Key Idea: Components

Instead of writing one huge HTML file, React lets you break your UI into **reusable pieces called components**.

Example without React:

```html
<div class="card">
  <h3>React</h3>
  <p>UI Library</p>
</div>
<div class="card">
  <h3>Three.js</h3>
  <p>3D Graphics</p>
</div>
<!-- Lots of repetition! -->
```

Example with React:

```jsx
const skills = ["React", "Three.js"];
{
  skills.map((skill) => <SkillCard name={skill} />);
}
// Much cleaner!
```

---

## Chapter 2: JSX - HTML in JavaScript

JSX looks like HTML but it's actually JavaScript. Your browser can't understand it, so it gets converted to JavaScript first.

### JSX Syntax:

```jsx
// JSX (what we write)
const element = <h1 className="title">Hello</h1>;

// What it becomes (JavaScript)
const element = React.createElement("h1", { className: "title" }, "Hello");
```

### Important Rules:

1. **className** instead of class

   ```jsx
   <div className="hero">  // Correct
   <div class="hero">      // Wrong!
   ```

2. **camelCase** for attributes

   ```jsx
   (onClick, onChange, onSubmit); // Correct
   (onclick, onchange); // Wrong!
   ```

3. **Self-closing tags**
   ```jsx
   <img src="photo.jpg" />  // Correct
   <img src="photo.jpg">    // Wrong!
   ```

---

## Chapter 3: Components - The Building Blocks

A component is just a JavaScript function that returns JSX.

### Simple Component:

```jsx
function Welcome() {
  return <h1>Welcome to my portfolio!</h1>;
}
```

### Component with Props:

Props are like function parameters. They let you pass data into components.

```jsx
// Using the component
<GreetingCard name="Alice" />;

// The component definition
function GreetingCard({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### Component with Multiple Props:

```jsx
// Using it
<SkillCard title="React" description="UI Library" icon="⚛️" />;

// Definition
function SkillCard({ title, description, icon }) {
  return (
    <div className="card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

---

## Chapter 4: State - Making Things Interactive

State is data that changes. When state changes, React automatically updates the screen.

### Using useState:

```jsx
import { useState } from "react";

function Counter() {
  // Declare state with an initial value
  // count = current value
  // setCount = function to update it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
```

### What Happens:

1. Initial render: `count = 0`
2. User clicks button
3. `setCount(1)` updates state
4. React re-renders the component
5. Screen shows `Count: 1`

### Form Input Example:

```jsx
function ContactForm() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value); // Update state as user types
  };

  return (
    <input value={email} onChange={handleChange} placeholder="Enter email" />
  );
}
```

---

## Chapter 5: Rendering Lists with .map()

`.map()` converts an array into React components.

### Basic Example:

```jsx
const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
}
```

### With Objects:

```jsx
const skills = [
  { id: 1, name: "React", level: "Advanced" },
  { id: 2, name: "Three.js", level: "Intermediate" },
];

function SkillsList() {
  return (
    <div>
      {skills.map((skill) => (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p>Level: {skill.level}</p>
        </div>
      ))}
    </div>
  );
}
```

### Why the `key` prop?

The `key` helps React identify which items have changed:

- Use unique identifiers (IDs) when available
- Use index only if list never gets filtered/reordered
- Without keys, React might render wrong content

```jsx
{
  items.map((item, index) => (
    <Item key={item.id} data={item} /> // Good - unique ID
  ));
}

{
  items.map((item, index) => (
    <Item key={index} data={item} /> // Okay - only if static list
  ));
}
```

---

## Chapter 6: Event Handling

React events use camelCase and pass handler functions.

### Common Events:

```jsx
function EventDemo() {
  const handleClick = () => console.log("Clicked!");
  const handleChange = (e) => console.log(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form submitted");
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
```

### Passing Arguments:

```jsx
const handleDelete = (id) => {
  console.log('Deleting:', id);
};

// With arrow function
<button onClick={() => handleDelete(123)}>Delete</button>

// Without arrow function (passes event object)
<button onClick={handleDelete}>Delete</button>
```

---

## Chapter 7: Conditional Rendering

Show or hide elements based on conditions.

### If Statement:

```jsx
function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  } else {
    return <p>Please log in</p>;
  }
}
```

### Ternary Operator:

```jsx
function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>;
}
```

### Logical AND:

```jsx
function Notification({ hasMessages, messageCount }) {
  return <div>{hasMessages && <p>You have {messageCount} messages</p>}</div>;
}
```

---

## Chapter 8: Hooks - Advanced State Management

Hooks are special functions that let you use React features in functional components.

### useState (you've seen this)

```jsx
const [count, setCount] = useState(0);
```

### useRef (access DOM elements)

```jsx
import { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access the actual DOM element
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
```

### useEffect (run code when component mounts)

```jsx
import { useEffect, useState } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  // This runs once when component first appears
  useEffect(() => {
    console.log("Component loaded!");
    // Fetch data, setup listeners, etc.
  }, []); // Empty array = run once

  return <div>{data}</div>;
}
```

---

## Chapter 9: Component Composition

Build complex UIs by combining simple components.

```jsx
// Simple components
function Header() {
  return <h1>My Portfolio</h1>;
}

function NavBar() {
  return <nav>Home | About | Contact</nav>;
}

function Hero() {
  return <h2>Welcome to my portfolio</h2>;
}

// Combine them
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Hero />
    </>
  );
}
```

---

## Chapter 10: In This Project

### Simple Components to Learn From:

- **SkillsSection.jsx** - Great example of `.map()`
- **ContactSection.jsx** - Form handling with `useState`
- **Navbar.jsx** - State + event handling

### Complex Components:

- **ThreeDScene.jsx** - Advanced state + 3D
- **RotatingCube.jsx** - Using `useRef` + `useFrame` hook

---

## Practice Exercises

### Exercise 1: Add a new skill

Edit `src/components/simple/SkillsSection.jsx` - add a new item to the `skills` array.

### Exercise 2: Change form behavior

Edit `src/components/simple/ContactSection.jsx` - add a checkbox that the user must agree to before submitting.

### Exercise 3: Add a new section

Create a new file `src/components/simple/ProjectsSection.jsx` with a list of projects using `.map()`.

### Exercise 4: Interactive counter

Create `src/components/simple/Counter.jsx` with increment/decrement buttons using `useState`.

---

## Common Mistakes to Avoid

❌ **Wrong**: Using `class` instead of `className`

```jsx
<div class="hero">  // Wrong
```

✅ **Right**:

```jsx
<div className="hero">  // Correct
```

❌ **Wrong**: Modifying state directly

```jsx
count = count + 1; // Wrong - won't trigger re-render
```

✅ **Right**:

```jsx
setCount(count + 1); // Correct - triggers re-render
```

❌ **Wrong**: Missing key in lists

```jsx
{
  items.map((item) => <div>{item}</div>);
} // No key!
```

✅ **Right**:

```jsx
{
  items.map((item) => <div key={item.id}>{item}</div>);
}
```

---

## Resources

- [React Official Docs](https://react.dev) - Official documentation
- [React Tutorial](https://react.dev/learn) - Interactive tutorial
- [JavaScript Basics](https://javascript.info) - Learn JavaScript first
- [MDN Web Docs](https://developer.mozilla.org) - Comprehensive reference

---

## Next Steps

1. Read through the comments in each component file
2. Try the practice exercises above
3. Modify the portfolio to make it your own
4. Add new components
5. Deploy to the web!

Happy learning! 🚀
