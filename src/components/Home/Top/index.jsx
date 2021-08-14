import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { close, helpCircleOutline } from "ionicons/icons";

import "./styles.scss";

const HomeTop = () => {
  return (
    <div className="home__top">
      <IonHeader className="home__top-header ion-no-border">
        <IonToolbar color="primary">
          <IonButton slot="start" fill="clear">
            <IonIcon icon={close} color="secondary"></IonIcon>
          </IonButton>

          <IonTitle size="small">Dinheiro guardado</IonTitle>

          <IonButton slot="end" fill="clear">
            <IonIcon icon={helpCircleOutline} color="secondary"></IonIcon>
          </IonButton>
        </IonToolbar>

        <div className="home__top-value ion-text-center ion-padding-vertical">
          <p>R$ 9.213,04</p>
        </div>
      </IonHeader>
    </div>
  );
};

export default HomeTop;
