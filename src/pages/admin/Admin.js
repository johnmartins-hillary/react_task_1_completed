import React from "react";
import Header from "../../components/Admin/Header/Header";
import MainBody from "../../components/Admin/MainBody/MainBody";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import "./Admin.css";
import { Routes, Route } from "react-router-dom";
import NewQuestion from "./AdminInnerPages/NewQuestion";
import ShortAnswer from "../../components/Admin/ShortAnswer/ShortAnswer";
import LongText from "../../components/Admin/LongText/LongText";
import MultipleChoice from "../../components/Admin/MultipleChoice/MultipleChoice";
import MultipleSelectionChoice from "../../components/Admin/MultipleSelectionChoice/MultipleSelectionChoice";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <Sidebar />
        <div className="body_pages">
          <Routes>
            <Route path="/question_type" element={<NewQuestion />}></Route>
            <Route path="/admin" exact element={<MainBody />}></Route>
            <Route path="/short_text/:id" element={<ShortAnswer />}></Route>
            <Route path="/long_text/:id" element={<LongText />}></Route>
            <Route
              path="/multiple_choice/:id"
              element={<MultipleChoice />}
            ></Route>
            <Route
              path="/multiple_selection_choice/:id"
              element={<MultipleSelectionChoice />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
