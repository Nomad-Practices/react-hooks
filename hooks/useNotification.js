const useNotification = (title, options) => {
  if (!"Notification" in window) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
export default useNotification;
// 브라우저에 내장된 알림기능을 hook을 통해 구현할 수 있다.
// export default function App() {
//   const triggerNotif = useNotification("say hello~", {
//     body: "i love it",
//   });
//   return (
//     <div className="App">
//       <button onClick={triggerNotif}>noti</button>
//     </div>
//   );
// }
