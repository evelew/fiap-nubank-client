import { IonContent, IonPage } from "@ionic/react";

import Top from "../components/Home/Top";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Top />
      </IonContent>
    </IonPage>
  );
};

export default Home;
