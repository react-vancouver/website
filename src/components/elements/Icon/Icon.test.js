import React from 'react';
import { render } from '@testing-library/react';

import Icon from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = render(<Icon />);

    expect(tree).toBeTruthy();
  });
});
