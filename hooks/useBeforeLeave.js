import "./styles.css";
import { useEffect } from "react";

const useBeforeLeave = (cb) => {
  const handler = (event) => {
    const { clientY } = event;
    if (clientY < 0) {
      cb();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseout", handler);
    return () => {
      document.removeEventListener("mouseout", handler);
    };
  }, []);
};
// Use cases~
// export default function App() {
//   const cb = () => {
//     console.log("hello world");
//   };
//   useBeforeLeave(cb);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }
