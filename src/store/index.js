import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: []
  },
  mutations: {
    setLoginUser(state, user){
      state.login_user = user;
    },
    deleteLoginUser(state){
      state.login_user = null;
    },
    toggleSideMenu(state) {
       state.drawer = !state.drawer;
       },
    addAddress(state, address){
      state.addresses.push(address);
    } 
  },
  actions: {
    setLoginUser ({ commit }, user) {
     commit('setLoginUser', user)//mutationのログイン情報登録を呼び出し
    },
    login () {//先ほど説明したので割愛
     const google_auth_provider = new firebase.auth.GoogleAuthProvider()
     firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout () { //ログアウト処理(公式参照)
     firebase.auth().signOut()
    },
     deleteLoginUser ({ commit }) {
     commit('deleteLoginUser') //mutaionのログインユーザー情報削除の呼び出し
    }, 
    toggleSideMenu({ commit }) {
       commit("toggleSideMenu");
    }, 
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    },
    fetchAddresses ({ getters, commit }) {
     firebase.firestore().collection(`users/${getters.uid}/addresses`).get().then(snapshot => {
     snapshot.forEach(doc => commit('addAddress', { id: doc.id, address: doc.data() }))
     })
    },
  },
  getters: {
   userName: state => state.login_user ? state.login_user.displayName : '',
   photoURL: state => state.login_user ? state.login_user.photoURL : ''
  }, 
  modules: {
  }
})
