import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {
  Admin,
  AdminMembers,
  AdminMileage,
  AdminProduct,
  AdminReport,
  CompanyMain,
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
  Products,
  Protection,
  ProtectionDetail,
  ProtectionPost,
} from '../pages';

const Router = () => {
  const isLoggedIn = true; // 로그인 여부에 따라 수정
  const userType: 'admin' | 'seller' | 'user' = 'user'; // 사용자 타입에 따라 수정

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} userType={userType} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />

        <Route path="/:companyid" element={<CompanyMain />} />
        <Route path="/products" element={<Products />} />
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
        <Route path="/admin/:memberid" element={<AdminMembers />} />
        <Route path="/admin/:milegeid" element={<AdminMileage />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
