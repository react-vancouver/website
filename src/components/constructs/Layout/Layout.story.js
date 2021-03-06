import React from 'react';
import { EVENTS, SPEAKERS, SPONSORS, ABOUT_US } from '@constants/routes';
import { storiesOf } from '@storybook/react';
import Layout from '@constructs/Layout';
import notes from './Layout.notes.md';

const asideLinks = [
  { brandName: 'react', out: 'https://reactjs.org/', title: 'React' },
  {
    brandName: 'meetup',
    out: 'https://www.meetup.com/ReactJS-Vancouver-Meetup/',
    title: 'Meetup',
  },
  {
    brandName: 'slack',
    out: 'https://slackrv.now.sh/',
    title: 'Slack',
  },
];

const navLinks = [
  { title: 'Events', to: EVENTS },
  { title: 'Speakers', to: SPEAKERS },
  { title: 'Sponsors', to: SPONSORS },
  { title: 'About Us', to: ABOUT_US },
];

storiesOf('Constructs', module).add(
  'Layout',
  () => (
    <Layout asideLinks={asideLinks} navLinks={navLinks}>
      Children
    </Layout>
  ),
  {
    notes,
  }
);
