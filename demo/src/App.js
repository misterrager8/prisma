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
    <div className="gap-1">
      <div className="border-bottom py-2">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="btn capitalize">
          {theme}
        </button>
      </div>
      <div className="flex">
        <div className="w-25 gap-1 h-75 border-right">
          <div className="font-sm">small</div>
          <div className="">normal</div>
          <div className="font-lg">large</div>
          <div className="font-xl">x-large</div>
          <div className="font-xl bold">bold</div>
          <div className="font-xl italic">italic</div>
          <div className="special">special</div>
        </div>

        <div className="gap-3 w-75 capitalize">
          <div className="special flex gap-2">
            <div className="font-red">red</div>
            <div className="font-orange">orange</div>
            <div className="font-yellow">yellow</div>
            <div className="font-green">green</div>
            <div className="font-blue">blue</div>
            <div className="font-purple">purple</div>
            <div className="font-pink">pink</div>
          </div>
          <div className="special flex gap-1">
            <div className="px-4 py-1 rounded bg-red">red</div>
            <div className="px-4 py-1 rounded bg-orange">orange</div>
            <div className="px-4 py-1 rounded bg-yellow">yellow</div>
            <div className="px-4 py-1 rounded bg-green">green</div>
            <div className="px-4 py-1 rounded bg-blue">blue</div>
            <div className="px-4 py-1 rounded bg-purple font-white">purple</div>
            <div className="px-4 py-1 rounded bg-pink">pink</div>
          </div>
          <div className="gap-2">
            <button className="btn">button</button>
            <button className="btn red">red</button>
            <button className="btn orange">orange</button>
            <button className="btn yellow">yellow</button>
            <button className="btn green">green</button>
            <button className="btn blue">blue</button>
            <button className="btn purple">purple</button>
            <button className="btn pink">pink</button>
          </div>
          <div className="gap-1">
            <input className="input" autoComplete="off" placeholder="Input" />
            <button className="btn">kmkm</button>
          </div>
          <div className="dropdown">
            <button className="btn m-1">Dropdown</button>
            <div className="dropdown-menu">
              <div className="dropdown-item flex between">
                <div>item1</div>
                <div className="font-red">o</div>
              </div>
              <div className="dropdown-item">item2</div>
              <div className="dropdown-item">item3</div>
              <div className="dropdown-item">item4</div>
            </div>
          </div>
          <div className="gap-1">
            <div className="card flex between active">
              <div>column 1</div>
              <div>column 2</div>
            </div>
            <div className="card flex between">
              <div>column 1</div>
              <div>column 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
