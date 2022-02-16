import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now);
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          response,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);
  return { state, refetch };
};
// export default useAxios;
// import useAxios from "./useAxios";

// export default function App() {
//   const {
//     state: { loading, data, error },
//     refetch
//   } = useAxios({
//     url: "https://yts.mx/api/v2/list_movies.json"
//   });
//   return (
//     <div className="App">
//       <h1>{data && data.status}</h1>
//       <h2>{loading ? "loading" : "not loading"}</h2>
//       <button onClick={refetch}>Refetch</button>
//     </div>
//   );
// }
// axios용 hook~ api를 재호출할 trigger도 함께 제공한다.
