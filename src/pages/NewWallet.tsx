import { IonContent, IonPage } from "@ionic/react";

// import SelectIncome from "../components/NewWallet/SelectIncome";
import WalletName from "../components/NewWallet/WalletName";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <SelectIncome /> */}
        <WalletName />
      </IonContent>
    </IonPage>
  );
};

export default Home;
