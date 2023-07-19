import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import PageInput from "./pages/PageInput";
import PageTab from "./pages/PageTab";
import useClick from "./hooks/useClick";

function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello)
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to={"/input"}>input</NavLink>
            </li>
            <li>
              <NavLink to={"tabs"}>tabs</NavLink>
            </li>
          </ul>
        </nav>

        <div ref={title}>Hi</div>

        <Routes>
          <Route path="/input" element={<PageInput />}></Route>
          <Route path="/tabs" element={<PageTab />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
