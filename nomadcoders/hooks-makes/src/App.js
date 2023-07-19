import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import PageInput from "./pages/PageInput";
import PageTab from "./pages/PageTab";

function App() {
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

        <Routes>
          <Route path="/input" element={<PageInput />}></Route>
          <Route path="/tabs" element={<PageTab />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
