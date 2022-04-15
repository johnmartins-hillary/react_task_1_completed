import React from "react";
import Header from "../../components/Admin/Header/Header";
import MainBody from "../../components/Admin/MainBody/MainBody";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
import NewQuestion from "./AdminInnerPages/NewQuestion";
import ShortAnswer from "../../components/Admin/ShortAnswer/ShortAnswer";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Sidebar />
        <div className="body_pages">
          <Routes>
            <Route path="/question_type" element={<NewQuestion />}></Route>
            <Route path="/" exact element={<MainBody />}></Route>
            <Route path="/short_text" exact element={<ShortAnswer />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
