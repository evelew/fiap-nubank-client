import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import "./styles.scss";

const SelectIncome: React.FC = () => {
  return (
    <div className="wallet-name">
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
