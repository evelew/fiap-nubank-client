import { IonContent, IonPage } from "@ionic/react";

import SelectIncome from "../components/NewWallet/SelectIncome";
// import Accounts from "../components/Home/Accounts";
// import Footer from "../components/Home/Footer";

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
