import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  Admin,
  AdminProduct,
  AdminReport,
  Join,
  Login,
  Main,
  MyBasket,
  MyBookMark,
  MyComment,
  MyPage,
  NotFound,
  Pay,
  PayEnd,
  ProductDetail,
  ProductPost,
  Protection,
  ProtectionDetail,
  ProtectionPost,
  SellProductPost,
} from "../pages";

const Router = () => {
  const isLoggedIn = true; // 로그인 여부에 따라 수정
  const userType: "admin" | "seller" | "user" = "admin"; // 사용자 타입에 따라 수정

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userType={userType} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />

        <Route path="/product/:productid" element={<ProductDetail />} />
        <Route path="/product/post" element={<ProductPost />} />

        <Route path="/protection" element={<Protection />} />
        <Route
          path="/protection/:protectionid"
          element={<ProtectionDetail />}
        />
        <Route path="/protection/post" element={<ProtectionPost />} />

        <Route path="/user/:id" element={<MyPage />} />
        <Route path="/user/:id/comment" element={<MyComment />} />
        <Route path="/user/:id/bookmark" element={<MyBookMark />} />
        <Route path="/user/:id/basket" element={<MyBasket />} />
        <Route path="/user/:id/pay" element={<Pay />} />
        <Route path="/user/:id/payend" element={<PayEnd />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/:productid" element={<AdminProduct />} />
        <Route path="/admin/:reportid" element={<AdminReport />} />

        <Route path="/seller/post" element={<SellProductPost />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
