import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

const Footer = () => {
  return (
    <footer className="g-bottom-button">
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

export default Footer;
