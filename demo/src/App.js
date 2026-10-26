import { useEffect, useState } from "react";
import "@chemllei0304/prisma/index.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("piecewise") || "light",
  );

  useEffect(() => {
    localStorage.setItem("piecewise", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="p-3 h-75">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="btn dropdown-toggle capitalize">
        {theme}
      </button>
      <div className="mt-4 gap-x-1">
        <input className="input" />
        <div className="dropdown">
          <button className="btn red">button</button>
          <div className="dropdown-menu">
            <a className="dropdown-item">dkjvns</a>
            <a className="dropdown-item">ffklcjmdskjvcns dkjvns</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn  capitalize dropdown-toggle">button</button>
          <div className="dropdown-menu">
            <a className="dropdown-item">
              ffklcjmdskjvcns dkjvncns dkjvncns dkjvncns dkjvncns dkjvncns
              dkjvncns dkjvns
            </a>
            <a className="dropdown-item active">ffklcjmdskjvcns dkjvns</a>
            <a className="dropdown-item">ffklcjmdskjvcns dkjvns</a>
            <a className="dropdown-item">ffklcjmdskjvcns dkjvns</a>
            <a className="dropdown-item">ffklcjmdskjvcns dkjvns</a>
            <a className="dropdown-item">ffklcjmdskjvcns dkjvns</a>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <span className="badge">badge</span>
      </div>
    </div>
  );
}

export default App;
