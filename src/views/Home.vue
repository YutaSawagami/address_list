<template>
 <div class="home">
<v-flex xs12 mt-5>
<v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
</v-flex>
</div>
</template>


<script>
export default {
 methods: {
  login: function() {
    this.$store.dispatch('login');
    } 
 },
};
</script> 
