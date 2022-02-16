const useConfirm = (message = "", onConfirm, onReject) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onReject && typeof onReject !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onReject();
    }
  };
  return confirmAction;
};
return useConfirm;
// Use case~
// export default function App() {
//   const deleteWord = () => {
//     console.log("Delete word");
//   };
//   const abort = () => {
//     console.log("aborted");
//   };
//   const cofirmDelete = useConfirm("Are you sure?", deleteWord, abort);
//   return (
//     <div className="App">
//       <button>delete word</button>
//     </div>
//   );
// }
// built-in hook을 사용하지 않은 custom hook
// 확인창을 만들 때 유용해보인다.
