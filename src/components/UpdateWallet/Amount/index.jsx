import { useEffect, useContext } from "react";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import UpdateWalletContext from "./../../../context/update-wallet";

import Header from "./../../Header";

import "./styles.scss";

const WalletValue = () => {
  const { amount, setAmount } = useContext(UpdateWalletContext);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input")?.focus();
    }, 0);
  }, []);

  const onChange = () => {
    const value = document.querySelector(".update-wallet__amount-input").value;
    setAmount(value);
  };

  return (
    <div className="update-wallet">
      <Header />

      <div className="update-wallet__amount-top">
        <p className="title">Qual valor você quer guardar?</p>
        <input
          className="update-wallet__amount-input"
          value={amount}
          onChange={onChange}
        />
      </div>

      <footer className="g-bottom-button">
        <Link to="/guardar-dinheiro/carteira">
          <IonIcon icon={walletOutline} />
          <span>Confirmar</span>
        </Link>
      </footer>
    </div>
  );
};

export default WalletValue;
