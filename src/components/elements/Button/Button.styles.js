import { cssValue, cssSwitch } from '@utilities/styles';
import S from '@symbols';
import { makeOutlineModifier, makeFillModifier } from '@blocks/interactive';
const { calcSpace, calcFontSize } = S;

export const sizes = { small: 5, medium: 6, large: 8 };
export const fontSizes = { small: 4, medium: 4, large: 5 };
export const colors = { ...S.COLOR_UTILITY, ...S.COLOR_THEME };

/**
 * @todo Figure out why hasOwnProperty is not importable
 * @body hasOwnProperty should be imported from 'src/utilities/styles/styles.js'.
 * For some reason when using the imported function, it throws an error:
 * `Button.styles.js:35 Uncaught TypeError: Cannot convert undefined or null to object
    at hasOwnProperty (<anonymous>)`
 */
const hasOwnProperty = (obj, prop) => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

const base = { display: 'inline-block', width: '100%', textAlign: 'center' };

const cssButton = ({ props }) => {
  let color;
  if (
    hasOwnProperty(props, 'color') &&
    !!props.color &&
    typeof props.color === 'string'
  ) {
    const _c = props.color.toUpperCase();
    color = colors[_c];
  }

  if (hasOwnProperty(props, 'outline') && !!props.outline) {
    return makeOutlineModifier(color);
  }

  return makeFillModifier(color);
};

const makeSizeModifier = (size) => ({
  height: calcSpace(sizes[size] || sizes.medium),
  lineHeight: calcSpace(sizes[size] || sizes.medium),
  fontSize: calcFontSize(fontSizes[size] || sizes.medium),
});

const cappedModifier = { width: 'unset' };

export const constructStyles = (props) => [
  base,
  cssSwitch({ props, prop: 'capped', css: cappedModifier }),
  cssValue({ props, prop: 'size', makeCSS: makeSizeModifier }),
  cssButton({ props }),
];
