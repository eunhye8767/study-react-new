import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import PageInput from "./pages/PageInput";
import PageTab from "./pages/PageTab";
import PageConfirm from "./pages/PageConfirm";
import PagePreventLeave from "./pages/PagePreventLeave";
import PageBeforeLeave from "./pages/PageBeforeLeave";
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
              <NavLink to={"input"}>input</NavLink>
            </li>
            <li>
              <NavLink to={"tabs"}>tabs</NavLink>
            </li>
            <li>
              <NavLink to={"confirm"}>confirm</NavLink>
            </li>
            <li>
              <NavLink to={"preventLeave"}>preventLeave</NavLink>
            </li>
            <li>
              <NavLink to={"beforeLeave"}>beforeLeave</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <div ref={title}>Title Ref</div>

        <hr />

        <Routes>
          <Route path="/input" element={<PageInput />}></Route>
          <Route path="/tabs" element={<PageTab />}></Route>
          <Route path="/confirm" element={<PageConfirm />}></Route>
          <Route path="/preventLeave" element={<PagePreventLeave />}></Route>
          <Route path="/beforeLeave" element={<PageBeforeLeave />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
