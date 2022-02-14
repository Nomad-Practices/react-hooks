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
