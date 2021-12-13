import React from "react";
import { CardCurrency } from "./components/CardCurrency/CardCurrency";
import { Header } from "./components/Header/Header";
import './styles/global.scss';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <CardCurrency />
    </React.Fragment>
  );
}

