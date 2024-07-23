<template>
  <div>Processing OAuth Callback...</div>
</template>

<script>
import { exchangeToken } from '../utils/auth';
import { mapMutations } from 'vuex';

export default {
  created() {
    const code = new URL(window.location.href).searchParams.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');
    if (code && codeVerifier) {
      exchangeToken(code, codeVerifier)
        .then(response => {
          this.setAccessToken(response.data.access_token);
          this.$router.push('/');
        })
        .catch(error => {
          console.error(error);
          this.$router.push('/login');
        });
    } else {
      this.$router.push('/login');
    }
  },
  methods: {
    ...mapMutations(['setAccessToken'])
  }
};
</script>