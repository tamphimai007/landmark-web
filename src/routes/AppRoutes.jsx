// rafce
import Layout from "@/layouts/Layout";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import About from "@/pages/About";
import Camping from "@/pages/admin/Camping";
import Dashboard from "@/pages/admin/Dashboard";
import Manage from "@/pages/admin/Manage";
import Home from "@/pages/Home";
import Notfound from "@/pages/Notfound";
import Profile from "@/pages/user/Profile";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import ProtectRoute from "./ProtectRoute";
import CampingDetail from "@/pages/user/CampingDetail";
import Checkout from "@/pages/user/Checkout";
import CheckoutComplete from "@/pages/user/CheckoutComplete";
import MyOrders from "@/pages/user/MyOrders";
import MyFavorites from "@/pages/user/MyFavorites";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Private User */}
        <Route path="user" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="camping/:id" element={<CampingDetail />} />
          <Route path="checkout/:id" element={<Checkout />} />
          <Route path="complete/:session" element={<CheckoutComplete />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="my-favorites" element={<MyFavorites />} />
        </Route>

        {/* Private Admin*/}
        <Route path="admin" element={<ProtectRoute el={<LayoutAdmin />} />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="camping" element={<Camping />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
