import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCaxFEV3NJlQYk31hkfU8duT-rz_Y21u4U",
    authDomain: "my-vue-project-2589e.firebaseapp.com",
    databaseURL: "https://my-vue-project-2589e.firebaseio.com",
    projectId: "my-vue-project-2589e",
    storageBucket: "my-vue-project-2589e.appspot.com",
    messagingSenderId: "658966401187",
    appId: "1:658966401187:web:765e90057b575f30312f16",
    measurementId: "G-DMTGXKPCGW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
