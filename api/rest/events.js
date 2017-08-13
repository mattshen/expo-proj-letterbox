import config from '../config';
import apiUtils from '../apiUtils';

const getEventDetails = (eventId) => {
  const header = {
    query: `select * from events where id = ${eventId}`,
  }
  return apiUtils.api_call(`${config.endpoint}/sql`, 'POST', header);
};

export default {
  getEventDetails,
}