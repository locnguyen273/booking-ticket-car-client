import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utils/history";
import UserTemplate from "./templates/user";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route element={<UserTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/lich-trinh" element={<Home />} />
            <Route path="/tin-tuc" element={<Home />} />
            <Route path="/tuyen-dung" element={<Home />} />
            <Route path="/lien-he" element={<Home />} />
            <Route path="/ve-chung-toi" element={<Home />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
