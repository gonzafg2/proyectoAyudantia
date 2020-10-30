import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCj_nj_42tNe6EeXtNmjyPj4UfzXf8ad8Y",
  authDomain: "otto-mi-corazon.firebaseapp.com",
  databaseURL: "https://otto-mi-corazon.firebaseio.com",
  projectId: "otto-mi-corazon",
  storageBucket: "otto-mi-corazon.appspot.com",
  messagingSenderId: "818310527363",
  appId: "1:818310527363:web:d5f62a40a923b1d8a85eb6",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
