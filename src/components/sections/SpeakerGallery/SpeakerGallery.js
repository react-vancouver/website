import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { withSpacing } from '@utilities/styles/spacing';
import {
  carouselItemStyles,
  carouselStyles,
  carouselContentStyles,
  footerStyles,
} from './SpeakerGallery.styles';
import eventPropTypes from '@utilities/prop-types/event';
import useCarousel, { next } from '@utilities/hooks/use-carousel';
import { link } from '@blocks/interactive';

import Box from '@elements/Box';
import SpeakerCard from '@constructs/SpeakerCard';
import Pips from '@constructs/Pips';
import PlaceholderItem from './partials/PlaceholderItem';

const SpeakerGallery = ({ className, data }) => {
  const length = data?.length + 1 ?? 1;

  const [active, setActive, style, carouselRef, carouselItemRef] = useCarousel(
    length
  );

  const onNext = useCallback(() => {
    const _next = next(length, active);
    setActive(_next);
  }, [active]);

  return (
    <div className={className}>
      <div ref={carouselRef} css={carouselStyles}>
        <div style={style} css={carouselContentStyles}>
          {data &&
            data.map((event) => (
              <div css={carouselItemStyles} key={event.id}>
                <SpeakerCard data={event} />
              </div>
            ))}
          <PlaceholderItem ref={carouselItemRef} />
        </div>
      </div>

      <Box mt3 container element="footer" css={footerStyles}>
        <Pips length={length} active={active} setActive={setActive} />
        <div role="button" css={link} onClick={onNext}>
          Next ››
        </div>
      </Box>
    </div>
  );
};

SpeakerGallery.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(eventPropTypes)),
};

export default withSpacing(SpeakerGallery);
