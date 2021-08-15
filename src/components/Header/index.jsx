import { IonHeader, IonToolbar, IonIcon, IonButton } from "@ionic/react";
import { close } from "ionicons/icons";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header = () => {
  return (
    <div className="new-wallet">
      <IonHeader className="new-wallet-header ion-no-border">
        <IonToolbar color="secondary">
          <Link to="/">
            <IonButton slot="start" fill="clear">
              <IonIcon icon={close} color="tertiary"></IonIcon>
            </IonButton>
          </Link>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};

export default Header;
