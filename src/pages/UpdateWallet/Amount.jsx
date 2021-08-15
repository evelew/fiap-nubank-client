import { IonContent, IonPage } from "@ionic/react";

import UpdateWalletAmount from "./../../components/UpdateWallet/Amount";

const Amount = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <UpdateWalletAmount />
      </IonContent>
    </IonPage>
  );
};

export default Amount;
