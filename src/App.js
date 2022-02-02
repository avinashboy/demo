import { useEffect } from "react";
import Index from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function isFunction(obj) {
  return typeof obj == "function" || false;
}

function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}

function disableReactDevTools() {
  if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
    return;
  }

  for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    if (prop === "renderers") {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
      continue;
    }
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop]
    )
      ? Function.prototype
      : null;
  }
}

// const disableReactDevTools = () => {
//   const noop = () => undefined;
//   const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

//   if (typeof DEV_TOOLS === "object") {
//     for (const [key, value] of Object.entries(DEV_TOOLS)) {
//       DEV_TOOLS[key] = typeof value === "function" ? noop : null;
//     }
//   }
// };


function App() {
  useEffect(() => {
    document.title = "Flights | Ticket";
    disableReactDevTools();
  }, []);
  return <Index />;
}

export default App;
