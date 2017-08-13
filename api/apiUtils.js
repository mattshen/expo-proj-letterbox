function api_call(url, method, headers = {}, body) {
  const p = fetch(url, { method, headers, body });
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