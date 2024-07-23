import axios from 'axios';

const clientId = process.env.VUE_APP_CLIENT_ID;
const redirectUri = process.env.VUE_APP_REDIRECT_URI;

export function generateAuthUrl(codeChallenge) {
  return `https://openapi.alipan.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user:base,file:all:read,file:all:write&response_type=code&code_challenge=${codeChallenge}&code_challenge_method=S256`;
}

export function exchangeToken(code, codeVerifier) {
  return axios.post('https://openapi.alipan.com/oauth/access_token', {
    client_id: clientId,
    grant_type: 'authorization_code',
    code: code,
    code_verifier: codeVerifier,
    redirect_uri: redirectUri
  });
}