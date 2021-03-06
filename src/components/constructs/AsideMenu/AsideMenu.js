import React from 'react';
import PropTypes from 'prop-types';
import {
  brandStyles,
  homeStyles,
  iconStyles,
  linkStyles,
  logoStyles,
  rootStyles,
} from './AsideMenu.styles';
import { withSpacing } from '@utilities/styles/spacing';
import Box from '@elements/Box';
import BrandLogo from '@constructs/BrandLogo';
import Logo from '@elements/Logo';
import Link from '@elements/Link';
import Text from '@elements/Text';

const AsideMenu = ({ className, links }) => {
  return (
    <Box css={rootStyles} className={className}>
      <Link css={linkStyles} to="/">
        <Box p1 css={[logoStyles, homeStyles]}>
          <Logo css={iconStyles} type="mark-inverse" />
        </Box>
        <Text mt1 caption>
          Home
        </Text>
      </Link>
      {links &&
        links.map(({ brandName, out, to, title }) => (
          <Link css={linkStyles} key={brandName} out={out} to={to}>
            <Box css={[logoStyles, brandStyles]}>
              <BrandLogo css={iconStyles} name={brandName} />
            </Box>
            <Text mt1 caption>
              {title}
            </Text>
          </Link>
        ))}
    </Box>
  );
};

AsideMenu.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      brandName: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
      out: PropTypes.string,
    })
  ),
};

export default withSpacing(AsideMenu);
