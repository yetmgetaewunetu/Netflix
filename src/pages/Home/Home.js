import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Main from "../../Components/Main/Main";
import RowList from "../../Components/RowList/RowList/RowList";
export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <RowList />
      <Footer />
    </div>
  );
}
