import { IonContent, IonPage } from "@ionic/react";

import WalletValue from "./../../components/NewWallet/WalletValue";

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <WalletValue />
      </IonContent>
    </IonPage>
  );
};

export default Home;
