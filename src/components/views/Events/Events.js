import React from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import TalkCard from '@constructs/TalkCard';
import Button from '@elements/Button';
import { format } from 'date-fns';

import {
  heroStyles,
  timelineContainerStyles,
  timelineMarkStyles,
  eventStyles,
  talksStyles,
  periodsStyles,
} from './Events.styles';

import Text from '@elements/Text';
import Line from '@elements/Line';
import Box from '@elements/Box';

const Events = ({ className, data }) => {
  return (
    <Box className={className}>
      {/* Hero */}
      <Box container>
        <Box
          px4
          pb4
          pt8
          my8
          backgroundColor="grey_30"
          corner="lg"
          css={heroStyles}
        >
          <Text element="h1" title scale={20} color="secondary_l">
            Events
          </Text>
          <Box>
            <Text element="h2" mt2 mb8 subheading color="white">
              Monthly gatherings of engineers of all levels. Get inspired, meet
              your peers and get connected to opportunities.
            </Text>
            <Button mb4 outline>
              Check our next event
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Timeline */}
      <Line />
      <Box container py4 css={timelineContainerStyles}>
        {Array.from(Array(6)).map((_, i) => (
          <Box css={eventStyles} key={i} mb6>
            <div css={timelineMarkStyles} />
            <Text mt2 ml2 caption>
              {format(data.date, 'do MMMM, y')}
            </Text>
            <div css={talksStyles}>
              {data.talks.map((talk) => (
                <TalkCard key={talk.id} data={talk} />
              ))}
            </div>
          </Box>
        ))}
        <Box css={eventStyles} mb6>
          <div />
          <div>
            <Text element="p" caption>
              Choose a Period
            </Text>
            <div css={periodsStyles}>
              <Button outline disabled>
                Dec ’19 – Jun’19
              </Button>
              <Button outline>Dec ’19 – Jun’19</Button>
              <Button outline>Dec ’19 – Jun’19</Button>
              <Button outline>Dec ’19 – Jun’19</Button>
              <Button outline>Dec ’19 – Jun’19</Button>
              <Button outline>Dec ’19 – Jun’19</Button>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

Events.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
};

export default withSpacing(Events);
