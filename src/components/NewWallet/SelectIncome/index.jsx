import { useContext } from "react";
import {
  IonList,
  IonItem,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonIcon,
} from "@ionic/react";
import { cashOutline, calendarOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

import AppContext from "./../../../context";

import Header from "./../Header";

import "./styles.scss";

const SelectIncome = () => {
  const { setSelectedCDI } = useContext(AppContext);

  const onRadioChange = (event) => {
    const selectedCDI = event.detail.value;
    setSelectedCDI(selectedCDI);
  };

  return (
    <div className="select-income">
      <Header />

      <p className="select-income__title title">
        Quando você quer ter esse dinheiro disponível?
      </p>

      <IonList lines="none">
        <IonRadioGroup onIonChange={onRadioChange}>
          <IonItem className="select-income__item">
            <IonIcon icon={cashOutline} slot="start" />

            <div className="name">
              <IonLabel>
                <p>Qualquer momento</p>
                <small>Rendendo 100% do CDI</small>
              </IonLabel>
            </div>

            <IonRadio value="100" slot="end" />
          </IonItem>

          <IonItem className="select-income__item">
            <IonIcon icon={calendarOutline} slot="start" />

            <div className="name">
              <IonLabel>
                <p>Qualquer momento</p>
                <small>Rendendo 102% do CDI</small>
              </IonLabel>
            </div>

            <IonRadio value="102" slot="end" />
          </IonItem>
        </IonRadioGroup>
      </IonList>

      <div className="g-bottom-button">
        <Link to="/criar-nova-carteira/valor">Confirmar</Link>
      </div>
    </div>
  );
};

export default SelectIncome;
