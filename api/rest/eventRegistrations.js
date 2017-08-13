import config from '../config';
import apiUtils from '../apiUtils';

const findAllRegistrations= (userId) => {
  const header = {
    query: 'select e.*, er.status from events e join event_registrations er on e.id = er.event_id',
  }
  return apiUtils.api_call(`${config.endpoint}/sql`, 'POST', header);
};

const registerEvent = (userId, eventId) => {
  const header = {
    query: `insert into event_registrations (event_id, user_id, status) values ('${eventId}', '${userId}', 'REGISTERED')`,
  }
  return apiUtils.api_call(`${config.endpoint}/sql`, 'POST', header);
}

export default {
  findAllRegistrations,
  registerEvent,
}