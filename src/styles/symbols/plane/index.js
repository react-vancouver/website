// =============================================================================
// Plane
// =============================================================================

import { rgba } from 'polished';

export const PLANE_SHADOW_0 =
  '0 0.1rem 0.2rem rgba(0,0,0,0.1), 0 0.1rem 0.6rem rgba(0,0,0,0.05)';
export const PLANE_SHADOW_2 =
  '0 0.1rem 0.2rem rgba(0,0,0,0.1), 0 0.4rem 1.6rem rgba(0,0,0,0.15)';
export const PLANE_SHADOW_4 =
  '0 0.1rem 0.2rem rgba(0,0,0,0.1), 0 0.6rem 2.4rem rgba(0,0,0,0.175)';
export const PLANE_SHADOW_6 =
  '0 0.2rem 0.2rem rgba(0,0,0,0.1), 0 0.9rem 3.6rem rgba(0,0,0,0.2)';
export const PLANE_SHADOW = PLANE_SHADOW_2;

export const PLANE_SHADOWS = {
  '0': PLANE_SHADOW_0,
  '2': PLANE_SHADOW_2,
  '4': PLANE_SHADOW_4,
  '6': PLANE_SHADOW_6,
};

export const makePlaneShadow = ({ color, plane }) => {
  const colorTransparencyUpper = 0.55;
  const colorTransparencyLower = 0.25;
  switch (plane) {
    case 0:
      return `0 0.1rem 0.2rem ${rgba(
        color,
        colorTransparencyLower
      )}, 0 0.1rem 0.6rem ${rgba(color, colorTransparencyUpper)}`;
    case 4:
      return `0 0.1rem 0.2rem ${rgba(
        color,
        colorTransparencyLower
      )}, 0 0.6rem 2.4rem ${rgba(color, colorTransparencyUpper)}`;
    case 6:
      return `0 0.1rem 0.2rem ${rgba(
        color,
        colorTransparencyLower
      )}, 0 0.9rem 3.6rem ${rgba(color, colorTransparencyUpper)}`;
    default:
      return `0 0.1rem 0.2rem ${rgba(
        color,
        colorTransparencyLower
      )}, 0 0.4rem 1.6rem  ${rgba(color, colorTransparencyUpper)}`;
  }
};
