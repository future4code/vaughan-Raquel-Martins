import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/Signup/SignupPage";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={"/"} element={<LoginPage />} />

        <Route exact path={"/login"} element={<LoginPage />} />

        <Route exact path={"/signup"} element={<SignupPage />} />

        <Route exact path={"/feed"} element={<FeedPage />} />

        <Route exact path={"/post"} element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
