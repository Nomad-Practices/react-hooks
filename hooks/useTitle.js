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
