import { IonContent, IonPage } from "@ionic/react";

import WalletName from "./../../components/NewWallet/WalletName";

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <WalletName />
      </IonContent>
    </IonPage>
  );
};

export default Home;
