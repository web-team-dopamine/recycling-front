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
  ProtectionPost,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />

        <Route path="/product/:productid" element={<ProductDetail />} />
        <Route path="/product/post" element={<ProductPost />} />

        <Route path="/protection" element={<Protection />} />
        <Route path="/protection/:protectionid" element={<ProductDetail />} />
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

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
