import "./styles.css";
import { useRef } from "react";

const useFullScreen = (onFullCb) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (onFullCb && typeof onFullCb === "function") onFullCb(isFull);
  };
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
export default useFullScreen;
// Use case~
// export default function App() {
//   const onFullCb = (isFull) => {
//     console.log(isFull ? "full" : "small");
//   };
//   const { element, triggerFull, exitFull } = useFullScreen(onFullCb);
//   return (
//     <div className="App">
//       <div ref={element}>
//         <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4QDxAQEA4PDRAQEBIPDw8QDw8NDQ8QFREWFxUSFRYYHSggGBolHRUTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi8lICUrKystLS4tLS0uKy0tLS0tLS0tKy0vLS0tLS8tLS0tLS0tLS0tLS0tLS0tLSstLS0tK//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBAYFB//EAD8QAAIBAgIGBgcFBgcAAAAAAAABAgMRBCEFBhIxQVEiUmFxgZETMkJyobHBI0NTgtEHFmKS4fAUM2NzorLC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EADIRAQACAQIFAgUEAQMFAAAAAAABAgMEEQUSITFBMlEiYXGR0RNCobGBYsHhFBUjM0P/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKsRiadNbU5xgucpKJnky0xxveYiPmtWlrztWN3j4rWvCw9Vyqv+FWXmzm5eM6enbefo9lOH5bd+jzauucvZw6XvVG/kjw24/P7afz/AMPTXhkebfw16muddJv0VOyz9r9TOOOZpnaKwvPDccR3lZS1yq5N0YPulKP6kxx7JE9aQj/tlJ7Wlu4fXCk/XpTh2xamvoenFx7HPrrMfz+GN+GXj023/h6+D0xhquUKsb9WT2ZeT3nTw6/T5ulbRv7dnkyaXLj9VW+et5wAAAAAAAAAAAAAAAAAAAAACnFYmnSi51JKEVxfyM8uWmKvNedoWpS152rDkdK63zleOHjsL8SSTm+5bkfParjVp+HDG3znu6uHh8R1ydfk5ieMnVk/SSlKXOTvdc0cXLa9/itO7oUitfhiNkmLVKRApxnq25tLzZpi9W6t+y+KyMpXTYJLAeno7TuIo5Ke3DqT6S8HvR0NNxPPg7TvHtLyZtHiyd42n3h12idPUcRaP+XU6kuPuvifS6PieHUdO1vaf9nH1GjyYuvePd6x0nkAAAAAAAAAAAAAAAAAAB5um9MU8LC8ulNp7FNb2+b5I8Ws1tNNTee/iHo0+ntmnp293z7SWkauInt1JX6sVlCK5JHyOp1WTUW5rz+IdzDhrijarWR5myqtS4rJrNMvS23SUTCyhU2uxreit68v0TWd1kppb2kViJnstvENTF4iPRtd9Jbk+Ztixz139md7x0XqtLhDzaRnyV8y05p9j0lTlFebHLT5m9i9Tml+X+o+D2PiRs1Ot/xQ3p7I2t7mzU678kTFqx4Np93Wat6xzjaliZ7SyUarWa7Jdnad7QcX6xjzdvE/n8uXqdB05sf2/DsU79p9J3chIAAAAAAAAAAAAAAADztOaVhhaTm+lJ5Qhezk/wBDyazV102Pmnv4hvgwTlttHby+ZY3HzqVZTqNycndy3pdluCPj8t75rTe07zLu0rXHHLEdCLvuzPPMbNYZIqlFSolv8FxZatZnsTMQ1Kqm3tR6PZ7TXJm9ZpEbT1ZzFp6w2KFKLV1n35syva0Ts0rET1WVKCasUreYndaa7wjDy9mW9bn1kTeP3QVnxLZ2TJpsmxAiwEEoQyUOk1X05sNUKr6Dypzb9V9V9h3+E8S5JjDknp4n2+X0cvXaTm/8lO/l2R9Q4oAAAAAAAAAAAAADCtVjCMpSdoxTbfJIre0UrNp7QmsTadofMNM6TliarqO6juhHqx4eJ8TrNVbUZJvPbxHtD6DBhjFTlhoONzy7t1ew45xy7ODL80T0lG23ZP8Aib5RXS433RH6W3W3b+zn36QzpUeLzfFveVtfxC0VXqKMt11PqSv7L9ZfU1j4428q+md22jBqwqUUy1bzCJruwjOcd/TXlL+paYrb5I3mFsK0Xxs+TyZSaTC0WiVhVZiwhDJQxZKHc6qaVdam6c3epT48ZQ4Pv4H2HCdbOfHyX9UfzDga7T/p25q9p/t7x13gAAAAAAAAAAAAA5HXvSVoxw8XnLp1Pd4LxefgcLjWp2rGGs9+suloMW8zef8ADjEfNOqlEJVVZtvZj4vl/U0rWIjmlEzv0hj6HYs48OHNFufm6Sjl26w24STSa3MwmNp2lrE7rEUWRKNyYnYV0JbL2Hu9n9C945o5o/yis7Ts2kYtE7NxulhOgn295MXmETXdV6OS3Nrs3o054nvCvLMdkemkt8U+7J+THLWe0o5pZRrReV7Pk8mRNLQmLRLJlRs6NxjoVoVF7LzXOLya8j06TPODLXJHj+mObFGSk1l9LpVFKMZRd4ySknzTV0feUvF6xavaXzFqzWZiWZZAAAAAAAAAAARJ2Tb3LNiZ2HynS+M9NiKtXhKXR91ZL4I+H1eb9bNa/vL6HDTkpFWojzNmFao1ZL1n8O0tSu/WeyJnxDOjTsv7zK3tvK1Y2WtXKLKsM7OUfzLu4mmTrEWVr0nZsoxaMkQsrr07r4p8mWpbaUWjdnh6u0s96yaIvXaenZNbbrjNdNwlDCGMootEomFNSin2l63mFJruq6Ud2a6r+jL/AA27q9Y7LIVFJZeK4opas1TE7u81Nxm3QdNvOk7flea+vkfW8F1H6mDknvX+vDhcQxcuTm93vnYeAAAAAAAAAAAPM1kxPo8JWksm4OC75ZfU8muyfp6e8/Lb7t9NXmy1h8uR8U7xOaSbfARG87JmdmGHg/We9/BcEWvPiEVjzLYRk0ZIhKmplOL7beZpXrWYVnpMS2kYtEohLIJa9ToS2lu3S7jWvxRyqT8M7tpMw2asrhKAIYQglDCSJRLWrRcXtLhv7VyNqTzfDLK0bdYdNqRibV3HhUh8VmvqdbgmTkzzSfMf08XEa82KLezuz6twwAAAAAAAAAA5rX2rbCxj16sV5Jv6HJ4zfbBEe8vboY3yb/J8/R8q7Cqp0pKPBZvv4I0r8Nd1Z6zs2YmMtGSISlELKcXuvyafxNMXfZW/ZspmS7JEJZEJRNXQjolVhpWew+Gce7kaZI3jmVpO3RsmTQAgIQ2EIJQwmrloRLY1WrbGLpLlUUV7s8vqdHR35dTjv7zt9+jyaiN8N6/J9SPtHzwAAAAAAAAAAcl+0N/ZUf8Acl/1OJxv/wBdfq9+g9U/RwspWTfI+biN52dXfZhho5Xe95stknrtCKthGbRkiEpRCVeK9SXcXx+qEX7LqbyXcZ27rR2ZkLJTISyIFGIi963rNfoa458SraPMLqc00muJnau07LxO8bsrlRFyQCEMkYhCME9nFYeX+tTi/wCdWPbo53yVj/VE/wAvPn9Mz8pfWkz7l82kAAAAAAAAAA5b9oNO+Hpy6tX5xZx+NV3wxPtL3aCfjmPk+d4h3tHm8+5HzmPpvLqW9mxEyleGSISyRCUohLGv6r7n8i1PVBbsyw76Me5EXj4pTXstKLJCU3ICQgUUZbMnHg8138Ua3jmrurXpOzYMVy4EXJQgCCUNrRNHbxNCO/7WD8pX+h69DWbaikR7ww1M7YrT8n1CKsj7qHzaQAAAAAAAAADxtb6G3g6tt8Uqn8ru/hc8HEqc+mt8uv2ejS22yw+VLOb7El9T5SelHZ8tgxXZIJZIhKUQlFTc+4mvcnsjCvoR7icnqkp2hdczXTchKQJCVGIjxW9Zo0xz4lS0Lac7pPmUtXadloneN2RVISICENge3qdQ2sXF8IRlJ+Vl8zrcHx82pifaJl4dffbDMe76CfXuEAAAAAAAAAAFeIpKcJQe6cXF9zVmVvWL1ms+eiaztMS+O18JKlUqQl60ZyT8HkfE56zS80nx0d/HPNXm90IwXZIhZKCWSZAS3CO6WGEfQX98S2X1SinZfczXSQlNwFyEokTCFOHlaTj+ZfU0v1iLK16Ts2LmS6LgRclAB2eomEap1Kz9tqEe6O9+b+B9PwPDy0tknz0j/Dj8Ryb2ins6o7rmgAAAAAAAAAAA4DX3RuxVjXiujV6MuyaX1S+B83xjT8t4yx57/V1NFl3ryT4cscR72SCUohKUQlLArwjya5SfzL5e+6Kdl5mum5Am4SECbhLXr5NS5O/hxNcfX4VLdOq9My2XAFyUM6FKU5xhFXlJqK72Xx0m9orXvKtrRWJmX1LR2EVGlCkt0IpX5vi/O591p8MYcdaR4h85lyTe82ny2TZmAAAAAAAAAAADT0tgIYijOlL2lk+MZLczDUYK5sc0s0xZJx2i0Pk+Jw86U5U5rZlB2kj4vJjtjtNbd4dytotG8K0ZrskwlJCUgU0H0prtT+BpfrWJRXvLYuYrpuBISm5AXAxqK6JjoSrw0srdV28OBfJHXf3VrPTZdczWRcDrtSNFXbxM1uvGlfi+Mvp5n0PBtH1/XtH0/Lma/P8A/OP8uyPonKAAAAAAAAAAAAAAc1rhoD08fTUl9tBZpb6keXejlcS0P61eenqj+YezS6jknlt2fPN2TytvXFHy8xs6wVSyTCUkJU3tUXareJp3or2s2LmS5cCbhKbkBcABRF2n7yt4o170+ivay+5ks9XV/Q8sVUtmqUc6k/8Ayu1nv0Gitqb/AOmO8/7PPqdRGKvz8PpNKnGMVGKUYxVklkkkfY1rFYite0ODMzM7yzLIAAAAAAAAAAAAAAAOT1p1X9LtVqCSqZucNyqdq5S+ZxuIcN/U3yYu/mPf/l7tNquX4b9nByi02mmmnZp5NPkfNzExO0unE7hCyUyBViVldb1maY567It2XQldJ8zOY2nZaJZXISm4SEAAApxO6/LM0x99lbdnt6A0LUxck10aSttVHy5R5s9ej0F9Rb2r5n8Mc+prij5vo2BwdOjTjTpx2Yx82+Lb4s+tw4aYaRSkdHEyZLXtzWbBqoAAAAAAAAAAAAAAAAAHjad1do4rpP7OrwqRSz7JLijw6vQY9R1npPv+Xow6i2Pp4cDpXQeJwzfpINw4VI9KD/TxPmtRosuCfijp7+HUxZ6ZO0vOPI2GEqaD2W4+Me7kaXjmjmVr0nZsXMl0kBcJLgWUaU5yUYRc5PcoptlqUtedqxvKLWisby6vQ+prlaeJeyt6pRau/ef0R3dHwefVm+35c/Pro7Y/u7KhSjCKhGKjGKsklZJHfrWKxFax0cyZmZ3lYWQAAAAAAAAAAACHJcwK5V4LfJeYFM9I0VvnHzA16mnsNHfUj5gatTWvBr7xAa89dsEvbuBRLX3BrmwKan7QMG004SknvTs0yJjfuOe0lpjRVW7jRnRk+NOyjf3dxz83C8GTtG0/L8PVj1eSvfq8Spi6KfRm2u2Oyzl5OC5Y9Fon+HrprqT6o2V1K1OW6aTWae48v/Q6mnek7fdr/wBRit+5ZSxMWs5RT45owtpM0T0pP2lpGak/uj7sniafXj5oV0Wot2pP2Jz44/dDH/G0+t8z1Y+E6m3eNvqytrMUed2/gcZgE71p1J/wxWwvF7zoYeCUjrktv8o6PNfX2n0xs6fR+t+jaKtSpej5tLpPve9nWxafHijaldnivkvf1S9CGvOCftNGyjYp634N/eIDZp6x4SW6ovMDZp6VoS3VI+aA2I4qm90l5gWKonxQE3AkAAAAAMXECmphr8QNKvoly9pgeXitWJS3VPiB5OJ1KrPdP4sDza2omJ4ST8WBp1NRcZwSfiBrz1Lxy+7v4gVS1Qxy+6YGD1Vx34LAwerGN/AkBH7tY38CXkA/drG/gS8gJWrON/AkBktVsd+DIDOOqWOf3LAsjqbjn93bxAvhqPjX7KXiBtUdRMXxaXiB6GH1GrrfNebA9XDapTjvqfFgerh9BuPtsD0KWCtxYGzGnYDKwEgAAAAAAAAAAAAAAAAABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" />
//         <button onClick={exitFull}>Exit fullScreen</button>
//       </div>
//       <button onClick={triggerFull}>Make fullScreen</button>
//     </div>
//   );
// }
// 콜백함수를 전달하면 전제화면을 만드는 함수와 해제하는 함수에 적용하여 사용할 수 있다~
