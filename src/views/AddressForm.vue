 <template>
 <v-container text-xs-center>
 <v-layout row wrap justify-center>
 <v-flex xs12 class="text-center">
 <h1>連絡先編集</h1>
 </v-flex>

 <v-flex xs5 mt-5>
 <v-card>
 <v-card-text>
 <v-form>
 <v-text-field v-model="address.name" label="名前"></v-text-field>
 <v-text-field v-model="address.tel" label="電話番号"></v-text-field>
 <v-text-field v-model="address.email" label="メールアドレス"></v-text-field>
 <v-text-field v-model="address.address" label="住所"></v-text-field>
 <div class="text-center">
 <v-btn @click="$router.push({ name: 'addresses' })">キャンセル</v-btn>
 <v-btn color="info" class="ml-2" @click="submit">保存</v-btn>
 </div>
 </v-form>
 </v-card-text>
 </v-card>
 </v-flex>
 </v-layout>
 </v-container>
</template>

<script>
export default {
 created() {
    const address = this.$store.getters.getAddressById(this.$route.params.address_id);
    console.log(this.$route.params.address_id + "でgetter呼ばれた");
    console.log(address);
    if (address) {
        this.address = address;
    }
 }, 
 data () {
    return {
        address: {},
    }
 },
 methods: {
  submit() {
    if (this.$route.params.address_id) {
        this.updateAddress({id: this.$route.params.address_id, address: this.address,});
    } else {
        this.addAddress(this.address);
    }
    this.$router.push({ name: "addresses" });
    this.address = {};
 },
 updateAddresses: function(){
     this.$store.dispatch("updateAddresses",{id: this.$route.params.address_id, address: this.address,});
   },
 addAddress: function() {
     this.$store.dispatch('addAddress',this.address);
 } 
}
}
</script>