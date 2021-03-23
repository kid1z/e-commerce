import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Modal from './components/pages/Modal.vue'
import ModalDelete from './components/pages/ModalDelete.vue'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCQShXw8634ZKdpD2nLloKoTJH7_lfCyFY",
  authDomain: "ecommerce-415a1.firebaseapp.com",
  databaseURL: "https://ecommerce-415a1-default-rtdb.firebaseio.com",
  projectId: "ecommerce-415a1",
  storageBucket: "ecommerce-415a1.appspot.com",
  messagingSenderId: "365036045970",
  appId: "1:365036045970:web:41ab248ced13ae25ad484b",
  measurementId: "G-HLPGJ0406Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


Vue.component('Modal',Modal)
Vue.component('ModalDelete',ModalDelete)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
