import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { history } from "./utils/history";
import UserTemplate from "./templates/user";
import Home from "./pages/home";
import News from "./pages/news";
import Contact from "./pages/contact";
import AboutUs from "./pages/aboutUs";
import Login from "./pages/login";
import Register from "./pages/register/index";
import Hire from "./pages/hire";
import Schedule from "./pages/schedule";
import BookingTicket from "./pages/bookingTicket/index";
import Profile from "./pages/profile";
import ProtectedRoute from "./templates/protectedRoute/index";
import { getStringLocal } from "./utils/config";

function App() {
  const user = getStringLocal("token");
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route element={<UserTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/lich-trinh" element={<Schedule />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/tuyen-dung" element={<Hire />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/ve-chung-toi" element={<AboutUs />} />
            <Route
              path="/dat-ve-xe"
              element={
                <ProtectedRoute user={user}>
                  <BookingTicket />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute user={user}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
