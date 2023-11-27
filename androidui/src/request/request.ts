const baseURL = 'http://172.21.246.114:3000';
export default function request(url: string, option: any) {
  const fullURL = baseURL + url;
  return fetch(fullURL, option);
}
