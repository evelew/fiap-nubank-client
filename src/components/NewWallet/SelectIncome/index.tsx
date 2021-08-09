import {
  IonList,
  IonItem,
  IonRadioGroup,
  IonLabel,
  IonRadio,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { cashOutline, calendarOutline } from "ionicons/icons";

import "./styles.scss";

const SelectIncome: React.FC = () => {
  return (
    <div className="select-income">
      <p>Quando você quer ter esse dinheiro disponível?</p>

      <IonList lines="none">
        <IonRadioGroup>
          <IonItem className="select-income__item">
            <IonIcon icon={cashOutline} />

            <div className="name">
              <IonLabel>
                <p>Qualquer momento</p>
                <small>Rendendo 100% do CDI</small>
              </IonLabel>
            </div>

            <IonRadio value="cdi-100" />
          </IonItem>

          <IonItem className="select-income__item">
            <IonIcon icon={calendarOutline} />

            <div className="name">
              <IonLabel>
                <p>Qualquer momento</p>
                <small>Rendendo 102% do CDI</small>
              </IonLabel>
            </div>

            <IonRadio value="cdi-102" />
          </IonItem>
        </IonRadioGroup>
      </IonList>

      <div className="select-income__button">
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default SelectIncome;
