 <template>
 <v-app>
 <v-app-bar app color="primary" dark>
 <v-app-bar-nav-icon @click.stop="toggleSideMenu">
 </v-app-bar-nav-icon>
 <v-toolbar-title>マイアドレス帳</v-toolbar-title>
 <v-spacer></v-spacer>
 <v-toolbar-items>
<v-toolbar-items v-if="$store.state.login_user"> 
 <v-btn text @click="logout">ログアウト</v-btn>//ログアウトボタンを追加
</v-toolbar-items>
 </v-toolbar-items> 

 <v-spacer></v-spacer>
 </v-app-bar>

 <SideNav/>
 <v-content>
 <v-container fluid fill-height align-start>
 <router-view/>
</v-container>
 </v-content>
 </v-app>
</template>

<script>
//SideNav単一ファイルコンポーネントのインポート
import SideNav from "./components/SideNav";
import firebase from 'firebase';

export default {
 name: "App",
 components: {
 SideNav //使用する為にコンポーネントに追加
 },

 created () {//onAuthStateChangedはsignInWithRedirectの後にトリガされる
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      this.setLoginUser(user);//ログインユーザー情報をセット
      this.fetchAddresses();
        if (this.$router.currentRoute.name === 'home'){
          this.$router.push({ name: "addresses" }, () => {}); 
        }
    } else {
      this.deleteLoginUser();//ログインユーザー情報を削除
      this.$router.push({ name: "home" }, () => {}); 
    }
  });
 }, 

 data: () => ({
 //
 }),
 methods:{
   toggleSideMenu: function () {
    this.$store.commit("toggleSideMenu"); 
   },
   setLoginUser: function(){
     this.$store.commit("setLoginUser");
   },
   deleteLoginUser: function(){
     this.$store.commit("deleteLoginUser");
   },
   logout: function() {
     this.$store.commit("logout");
   },
   fetchAddresses: function(){
     this.$store.commit("fetchAddresses");
   }
 }
};
</script>