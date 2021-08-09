import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import Header from "./../Header";

import "./styles.scss";

const SelectIncome: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input")?.focus();
    }, 0);
  });

  return (
    <div className="wallet-name">
      <Header />

      <div className="wallet-name__top">
        <p>Qual o nome do novo porquinho?</p>
        <input />
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
