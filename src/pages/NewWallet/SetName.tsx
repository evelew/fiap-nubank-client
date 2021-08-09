import { IonContent, IonPage } from "@ionic/react";

import WalletName from "./../../components/NewWallet/WalletName";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <WalletName />
      </IonContent>
    </IonPage>
  );
};

export default Home;
