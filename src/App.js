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
import HireDetail from "./pages/hireDetail";
import ForgotPassword from "./pages/forgotPassword";
import HistoryOrder from "./pages/historyOrder";
import AdminTemplate from "./templates/admin";
import ManageCar from "./pages/Admin/ManageCar/index";
import ManageTicket from "./pages/Admin/ManageTicket/index";
import ManageBusStation from "./pages/Admin/ManageBusStation";
import ManageBusInformation from "./pages/Admin/ManageBusInformation/index";
import ManageUser from "./pages/Admin/ManageUser/index";
import ManageStatistical from "./pages/Admin/ManageStatistical/index";
import ManageHire from "./pages/Admin/ManageHire/index";
import ViewDetailCar from "./pages/Admin/ViewDetailCar";
import ViewDetailTicket from "./pages/Admin/ViewDetailTicket/index";

function App() {
  return (
    <div>
      <HistoryRouter history={history}>
        <Routes>
          <Route element={<UserTemplate />}>
            <Route path="/" element={<Home />} />
            <Route path="/lich-trinh" element={<Schedule />} />
            <Route path="/tin-tuc" element={<News />} />
            <Route path="/tuyen-dung" element={<Hire />} />
            <Route path="/tuyen-dung/:id" element={<HireDetail />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/ve-chung-toi" element={<AboutUs />} />
            <Route
              path="/dat-ve-xe"
              element={
                <ProtectedRoute>
                  <BookingTicket />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lich-su-dat-ve"
              element={
                <ProtectedRoute>
                  <HistoryOrder />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Home />} />
          </Route>

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route element={<AdminTemplate />}>
            <Route path="/admin/manage-car" element={<ManageCar />} />
            <Route path="/admin/manage-car/:id" element={<ViewDetailCar />} />
            <Route path="/admin/manage-ticket" element={<ManageTicket />} />
            <Route
              path="/admin/manage-ticket/:id"
              element={<ViewDetailTicket />}
            />
            <Route
              path="/admin/manage-bus-station"
              element={<ManageBusStation />}
            />
            <Route
              path="/admin/manage-bus-information"
              element={<ManageBusInformation />}
            />
            <Route path="/admin/manage-user" element={<ManageUser />} />
            <Route
              path="/admin/manage-statistical"
              element={<ManageStatistical />}
            />
            <Route path="/admin/manage-hire" element={<ManageHire />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </div>
  );
}

export default App;
