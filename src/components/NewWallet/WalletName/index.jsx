import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import AppContext from "./../../../context";

import Header from "./../Header";

import "./styles.scss";

const SelectIncome = () => {
  const { setNewWalletName } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input")?.focus();
    }, 0);
  }, []);

  const onChange = () => {
    const name = document.querySelector("input").value
    setNewWalletName(name)
  }

  return (
    <div className="wallet-name">
      <Header />

      <div className="wallet-name__top">
        <p className="title">Qual o nome do novo porquinho?</p>
        <input onChange={onChange} />
      </div>

      <footer className="g-bottom-button">
        <Link to="/">
          <IonIcon icon={walletOutline} />
          <span>Confirmar</span>
        </Link>
      </footer>
    </div>
  );
};

export default SelectIncome;
