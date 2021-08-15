import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { walletOutline } from "ionicons/icons";

const Footer = () => {
  return (
    <footer className="g-bottom-button">
      <Link to="/guardar-dinheiro/valor">
        <IonIcon icon={walletOutline} />
        <span>Guardar</span>
      </Link>
      <Link to="/criar-nova-carteira">
        <IonIcon icon={walletOutline} />
        <span>Criar novo</span>
      </Link>
    </footer>
  );
};

export default Footer;
