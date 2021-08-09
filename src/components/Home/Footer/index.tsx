import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

import "./styles.scss";

const Accounts: React.FC = () => {
  return (
    <footer className="home__footer">
      <button>
        <IonIcon icon={walletOutline} />
        <span>Guardar</span>
      </button>
      <Link to="/criar-nova-carteira">
        <IonIcon icon={walletOutline} />
        <span>Criar novo</span>
      </Link>
    </footer>
  );
};

export default Accounts;
