import { useEffect, useContext } from "react";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import CreateWalletContext from "./../../../context/create-wallet";
import CurrencyInput from "react-currency-input";

import Header from "../../Header";

import "./styles.scss";

const WalletValue = () => {
  const { newWalletValue, setNewWalletValue } = useContext(CreateWalletContext);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input")?.focus();
    }, 0);
  }, []);

  const onChange = () => {
    const value = document.querySelector(".wallet-value__input").value;
    setNewWalletValue(value);
  };

  return (
    <div className="wallet-value">
      <Header />

      <div className="wallet-value__top">
        <p className="title">Qual o valor que quer guardar?</p>
        <CurrencyInput
          className="wallet-value__input"
          decimalSeparator=","
          thousandSeparator="."
          value={newWalletValue}
          onChangeEvent={onChange}
        />
      </div>

      <footer className="g-bottom-button">
        <Link to="/criar-nova-carteira/name">
          <IonIcon icon={walletOutline} />
          <span>Confirmar</span>
        </Link>
      </footer>
    </div>
  );
};

export default WalletValue;
