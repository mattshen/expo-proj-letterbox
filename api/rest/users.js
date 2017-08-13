import base64 from 'base-64';
import config from '../config';
import apiUtils from '../apiUtils';
import cache from '../../cache';

const login = (username, password) => {
  cache.setAuth('Basic ' + base64.encode(`${username}:${password}`))
  const header = {
    query: 'select 1',
  }
  return apiUtils.api_call(`${config.endpoint}/sql`, 'POST', header);
};

export default {
  login,
}