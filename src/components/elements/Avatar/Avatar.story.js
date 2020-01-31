import React from 'react';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from '@elements/Avatar';
import notes from './Avatar.notes.md';

const src = 'https://placehold.co/600x400';

const srcSets = [
    { srcSet: 'https://placehold.co/82x82', media: '(min-width: 620px)' },
    { srcSet: 'https://placehold.co/112x112', media: '(max-width: 820px)' },
    { srcSet: 'https://placehold.co/200x200', media: '(max-width: 1120px)' },
];

storiesOf('Elements', module).add(
    'Avatar',
    () => (
        <Avatar
            alt={text('alt', 'Ria’s photo')}
            src={src}
            srcSets={srcSets}
            scale={number('scale', 12)}
        />
    ),
    { notes }
);