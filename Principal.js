import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function consultarColeccion() {
  const db = getFirestore();
  const docRef = doc(db, 'prueba1', 'ID_DEL_DOCUMENTO_A_CONSULTAR'); // Reemplaza 'ID_DEL_DOCUMENTO_A_CONSULTAR' con el ID real

  docRef.get().then((doc) => {
    if (doc.exists()) {
      const data = doc.data();
      const nombre = data.nombre;
      console.log('Nombre:', nombre);
    } else {
      console.log('Documento no encontrado.');
    }
  }).catch((error) => {
    console.log('Error obteniendo el documento:', error);
  });
}

window.onload = function() {
  consultarColeccion();
};
