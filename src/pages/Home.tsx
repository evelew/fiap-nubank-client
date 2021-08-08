import { IonContent, IonPage } from "@ionic/react";

import Top from "../components/Home/Top";
import Accounts from "../components/Home/Accounts";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Top />
        <Accounts />
      </IonContent>
    </IonPage>
  );
};

export default Home;
