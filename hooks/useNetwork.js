import "./styles.css";
import { useEffect } from "react";

const useNetwork = (handler) => {
  const handleChange = () => {
    handler(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
};
// Use case~
// export default function App() {
//   const handleNetworkChange = (online) => {
//     console.log(`we are ${online ? "Online" : "Offline"}`);
//   };
//   useNetwork(handleNetworkChange);
//   return <div className="App"></div>;
// }
// 현재 online 상태인지 offline 상태인지에 따라서 다른 로직을 부여할 수 있다~
