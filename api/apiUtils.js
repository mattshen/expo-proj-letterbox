import cache from '../cache'

function api_call(url, method, headers = {}, body) {
  const new_headers = {
    ...headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': cache.getAuth(),
  };
  const p = fetch(url, { method, headers: new_headers, body });
  return p.then(response => {
      return response.json().catch(e => {/*do nothing */ })
    })
    .catch(e => {
      console.error('errors in rest_call', e);
    });
}

export default {
  api_call,
}