import { IonList, IonItem } from "@ionic/react";

import "./styles.scss";

const Accounts = () => {
  return (
    <div className="home__accounts">
      <IonList lines="full">
        <IonItem className="home__accounts-item">
          <div className="name">
            <p>Disponível a qualquer momento</p>
          </div>
          <p className="value">R$ 9.042,00</p>
        </IonItem>

        <IonItem className="home__accounts-item">
          <div className="name">
            <strong>Viagem Paris</strong>
            <p>Disponível em 25 SET 2025</p>
          </div>
          <p className="value">R$ 9.042,00</p>
        </IonItem>
      </IonList>
    </div>
  );
};

export default Accounts;
