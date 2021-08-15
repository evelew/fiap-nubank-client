import { IonContent, IonPage } from "@ionic/react";

import UpdateWalletWallet from "./../../components/UpdateWallet/Wallet";

const Wallet = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <UpdateWalletWallet />
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
