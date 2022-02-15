import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
  }, []);
  return element;
};

export default useClick;
// Use cases~
// export default function App() {
//   const onClick = () => {
//     console.log("say hello");
//   };
//   const title = useClick(onClick);
//   return (
//     <div className="App">
//       <h1 ref={title}>hi</h1>
//     </div>
//   );
// }
// 현재 element에 click event가 발생했을 때 handler를 등록할 수 있다.
