import "./styles.css";
import Amplify, { apple, leet } from "./myExports";
export default function App() {
  console.log(apple);
  console.log(leet);
  console.log(Amplify());
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
