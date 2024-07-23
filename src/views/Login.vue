<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Login with Aliyun</button>
  </div>
</template>

<script>
import { generateAuthUrl } from '../utils/auth';

export default {
  name: 'LoginView', // 修改组件名称
  methods: {
    async login() {
      const codeVerifier = this.generateRandomString(128);
      localStorage.setItem('code_verifier', codeVerifier);
      const codeChallenge = await this.generateCodeChallenge(codeVerifier);
      const authUrl = generateAuthUrl(codeChallenge);
      window.location.href = authUrl;
    },
    generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },
    async generateCodeChallenge(verifier) {
      const encoder = new TextEncoder();
      const data = encoder.encode(verifier);
      const hash = await crypto.subtle.digest('SHA-256', data);
      return btoa(String.fromCharCode(...new Uint8Array(hash)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #36a372;
}
</style>