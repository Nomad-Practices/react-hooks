import "./styles.css";
import { useEffect, useState } from "react";

const useScroll = () => {
  const [y, setY] = useState(0);
  const onScroll = () => {
    setY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return y;
};
// use Case~
// export default function App() {
//   const y = useScroll();
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
//         hello
//       </h1>
//     </div>
//   );
// }
// 다른 context 상에서 scroll을 감지하여 다양한 로직을 짤 수 있다.
