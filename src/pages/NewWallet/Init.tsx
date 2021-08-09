import { IonContent, IonPage } from "@ionic/react";

import SelectIncome from "./../../components/NewWallet/SelectIncome";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SelectIncome />
      </IonContent>
    </IonPage>
  );
};

export default Home;
