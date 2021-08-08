import { IonContent, IonPage } from "@ionic/react";

import Top from "../components/Home/Top";
import Accounts from "../components/Home/Accounts";
import Footer from "../components/Home/Footer";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Top />
        <Accounts />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
