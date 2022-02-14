const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
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
