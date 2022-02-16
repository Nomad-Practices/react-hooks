import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
// Use cases~
// export default function App() {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("im changed"), 5000);
//   return <div className="App"></div>;
// }
// App 컴포넌트가 mounted되면서 useEffect가 한번 실행한다.
// 5초 뒤 setTitle 함수를 비동기적으로 호출하면 상위 context에 있는 title에 변화를 주고
// useEffect는 동일한 context에 위치한 dependency change에 의해서 updateTitle을 한번 더 실행한다.
