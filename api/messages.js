import config from './config';
import apiUtils from './apiUtils';

const findAllMessages = (userId) => {
  const header = {
    query: 'select * from messages',
  }
  return apiUtils.api_call(`${config.endpoint}/sql`, 'POST', header);
};

export default {
  findAllMessages,
}