// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbwR2ttx2iGWiUe9QsC_PvYC2Uth11tHo",
  authDomain: "projectusch.firebaseapp.com",
  projectId: "projectusch",
  storageBucket: "projectusch.appspot.com",
  messagingSenderId: "827966120288",
  appId: "1:827966120288:web:cf92e570dcb020c2133e05",
  measurementId: "G-QPWX2MMSR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function consultarColeccion() {
  const db = firebase.firestore();
  const docRef = db.collection('prueba1').doc(Administrar);

docRef.get().then((doc) => {
    if (doc.exists) {
      const data = doc.data(); // Obtener todos los campos del documento
      const nombre = data.nombre; // Acceder al campo "nombre"
      console.log('Nombre:', nombre);
    } else {
      console.log('Documento no encontrado.');
    }
  }).catch((error) => {
    console.log('Error obteniendo el documento:', error);
  });
};


window.onload = function() {
  obtenerCampoNombre('ID_DEL_DOCUMENTO_A_CONSULTAR');
};
