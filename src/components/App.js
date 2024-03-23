import React, { useContext, useEffect } from "react";
import "../styles/App.css";

// Theme context
const ThemeContext = React.createContext();

// Theme provider component
function ThemeProvider({ children }) {
  return <></>;
}

// Button component
function ThemeButton() {
  return <button></button>;
}

// App component
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Toggler</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
