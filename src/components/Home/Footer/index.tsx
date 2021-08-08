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
      <button>
        <IonIcon icon={walletOutline} />
        <span>Criar novo</span>
      </button>
    </footer>
  );
};

export default Accounts;
