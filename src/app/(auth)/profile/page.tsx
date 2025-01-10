import React from "react";
import PopupChat from "./Popup";
import Header from "@/components/core/Header";
import Content from "./Content";
const page = () => {
  return (
    <>
      <Header />
      <Content />
      <PopupChat />
    </>
  );
};

export default page;
