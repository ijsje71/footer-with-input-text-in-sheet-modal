import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonModal,
  IonPage,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => setShowModal(true)}>OPEN MODAL</IonButton>

        <IonModal
          initialBreakpoint={0.6}
          breakpoints={[0.6, 1]}
          isOpen={showModal}
          expandToScroll={false}
          onDidDismiss={() => setShowModal(false)}
        >
          <IonContent>
            <IonText>
              <p>This is a modal!!</p>
            </IonText>
          </IonContent>
          <IonFooter>
            <IonToolbar>
              <IonTextarea placeholder="This is a textarea" />
              {/* <IonInput placeholder="This is an INPUT" /> */}
              <IonButtons>
                <IonButton onClick={() => setShowModal(false)} />
              </IonButtons>
            </IonToolbar>
          </IonFooter>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
