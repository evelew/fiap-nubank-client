import { useEffect, useContext } from "react";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import AppContext from "./../../../context";

import Header from "./../Header";

import "./styles.scss";

const WalletValue = () => {
  const { setNewWalletValue } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input")?.focus();
    }, 0);
  }, []);

  const onChangeRoute = () => {
    const value = document.querySelector("input").value
    setNewWalletValue(value)
  }

  return (
    <div className="wallet-value">
      <Header />

      <div className="wallet-value__top">
        <p className="title">Qual o valor que quer guardar?</p>
        <input />
      </div>

      <footer className="g-bottom-button">
        <Link to="/criar-nova-carteira/name" onClick={onChangeRoute}>
          <IonIcon icon={walletOutline} />
          <span>Confirmar</span>
        </Link>
      </footer>
    </div>
  );
};

export default WalletValue;
