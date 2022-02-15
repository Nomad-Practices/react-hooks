import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(event.target.value);
    }
  };
  return {
    value,
    onChange,
  };
};

export default useInput;
// Use Case~
// export default function App() {
//   const maxLen = (value) => !value.includes("@");
//   const name = useInput("Mr.", maxLen);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// }
// input elemenftfh
