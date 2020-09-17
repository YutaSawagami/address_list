<template>
 <div class="home">
<v-flex xs12 mt-5>
<v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
</v-flex>
</div>
</template>


<script>
import { mapActions } from "vuex";
export default {
 methods: {
 ...mapActions(["login"]),
 },
};
</script> 
