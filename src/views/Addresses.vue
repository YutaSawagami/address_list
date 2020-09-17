 <template>

 <v-container text-xs-center justify-center>
 <v-layout row wrap>
 <v-flex xs12>
 <h1>連絡先一覧</h1>
 </v-flex>

<v-flex xs12 mt-5 justify-center>
   <router-link :to="{name: 'address_edit'}">
      <v-btn color="info">連絡先追加</v-btn>
   </router-link> 
</v-flex>

<v-flex xs12 mt-3 justify-center>
<v-data-table :headers="headers" :items="addresses">
   <template v-slot:[`item.actions`]="{ item }">
      <router-link :to="{ name: 'address_edit', params: { address_id: item.id } }">
         <v-icon small class="mr-2">mdi-pencil</v-icon>
      </router-link>
      <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-delete</v-icon>
   </template>
</v-data-table>
</v-flex>
</v-layout>
</v-container>

</template>
<script>
export default {
 data() {
 return {
 headers: [
    {text: 'action', value:'action'},
    { text: "名前", value: "name" },
    { text: "電話番号", value: "tel" },
    { text: "メールアドレス", value: "email" },
    { text: "住所", value: "address" },
 ],
 addresses: [],
 };
 },
 created(){
    this.addresses =  this.$store.state.addresses;
    console.log(this.addresses);
 },
 methods: {
    deleteConfirm: function(id) {
        if (confirm("削除してよろしいですか？")) {
         this.deleteAddress({ id });
         }
      },
    deleteAddress: function(id){
         this.$store.dispatch('deleteAddress', {id});
   } 
}
};
</script>

<style scoped lang="scss">
</style>