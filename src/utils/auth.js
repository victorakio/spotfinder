export function getAccessToken() {
  const queryString = window.location.hash.substring(1).split('&');
  const token = queryString[0].split('=')[1];
  
  sessionStorage.setItem("@Spotfinder:access_token", token);
}

export function loginUrl() {

  const endpoint = 'https://accounts.spotify.com/authorize';
  const clientId =  '09f276ee3a464f4b9eb53304648f6426';
  const redirectUri = 'http://localhost:3000/search';
  const scope = [
    'user-read-private',
    'user-read-email'
  ];
  const responseType = 'token';
  const state = '123'

      
  const loginUrl = `${endpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope.join(' '))}&response_type=${responseType}&state=${state}`;

  return loginUrl;
}