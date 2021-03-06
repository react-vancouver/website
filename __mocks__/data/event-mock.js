import faker from 'faker';
import fakeCompany from './company-mock';
import fakeTalk from './talk-mock';

const fakeEvent = (options = {}) => {
  const { withTalks } = options;
  const _event = {
    id: faker.datatype.uuid(),
    date: faker.date.recent(),
    host: fakeCompany(),
    photos: [],
    sponsors: [fakeCompany(), fakeCompany()],
    eventUrl: 'https://eventbrite.ca',
  };
  if (withTalks) {
    _event.talks = [
      fakeTalk({ withSpeaker: true }),
      fakeTalk({ withSpeaker: true }),
      // fakeTalk({ withSpeaker: true }),
    ];
  }
  return _event;
};

export default fakeEvent;
