const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    }
  };
  return confirmAction;
};
// Use case~
// export default function App() {
//   const deleteWord = () => {
//     console.log("Delete word");
//   };
//   const cofirmDelete = useConfirm("Are you sure?", deleteWord);
//   return (
//     <div className="App">
//       <button>delete word</button>
//     </div>
//   );
// }
