const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };

  return { enablePrevent };
};
export default usePreventLeave;
// use case~
// export default function App() {
//   const { enablePrevent } = usePreventLeave();
//   return (
//     <div className="App">
//       <button onClick={enablePrevent}>prevent close</button>
//     </div>
//   );
// }
// built-in hook 없는 custom hook : 페이지를 닫기 전에 confirm을 확인한다.
