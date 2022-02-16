import "./styles.css";
import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [duration, delay]);
  return {
    ref: element,
    style: { opacity: 0 },
  };
};
export default useFadeIn;
// Use Case~
// export default function App() {
//   const fadeInH1 = useFadeIn(1, 2);
//   const fadeInP = useFadeIn(5, 10);
//   return (
//     <div className="App">
//       <h1 {...fadeInH1}>Hello</h1>
//       <p {...fadeInP}>lalalalala</p>
//     </div>
//   );
// }
// ==> useImageLazy hook도 한번 만들어보자~
