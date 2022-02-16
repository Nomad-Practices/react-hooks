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
export default useBeforeLeave;
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
// 마우스가 화면 가장자리에 가까워질 때 event handler를 등록할 수 있다.
