import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import {
  rootStyles,
  cardStyles,
  avatarStyles,
  talkStyles,
} from './SpeakerCard.styles';
import { withSpacing } from '@utilities/styles/spacing';
import personPropTypes from '@utilities/prop-types/person';

import Avatar from '@constructs/Avatar';
import Box from '@elements/Box';
import Link from '@elements/Link';
import Text from '@elements/Text';

const SpeakerCard = ({ className, data, onClick }) => {
  const hasShowMore = data.talks.length > 2;
  const talks = hasShowMore ? data.talks.slice(0, 2) : data.talks;

  return (
    <div css={rootStyles} className={className} onClick={onClick}>
      <Avatar
        alt={`${data.firstName} ${data.lastName} avatar photo`}
        css={avatarStyles}
        firstName={data.firstName}
        key={data.id}
        lastName={data.lastName}
        scale={20}
        {...data.avatar}
      />
      <Box ml10 pl12 pr2 py4 css={cardStyles}>
        <Text mt1 element="h3" subheading color="grey_40">
          {data.firstName} {data.lastName}
        </Text>
        <Text element="h4" color="grey_50">
          {data.title} @ {data.company.name}
        </Text>
        <Box>
          {talks.map((talk) => (
            <Text element="p" key={talk.id} css={talkStyles}>
              <Text color="grey_50">“{talk.title}”&ensp;</Text>
              <Text color="grey_70">
                {format(talk.event.date, 'MMM do, yyyy')}
              </Text>
            </Text>
          ))}
        </Box>
        {hasShowMore && <Link>+ {data.talks.length - 2} more</Link>}
      </Box>
    </div>
  );
};

SpeakerCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape(personPropTypes),
  onClick: PropTypes.func,
};

export default withSpacing(SpeakerCard);
