import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Dot from './Dot';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Dot component', () => {
  it('Render dot', () => {
    act(() => {
      ReactDOM.render(<Dot />, container);
    });

    const div = container.querySelector('div');

    expect(div.className).toBe('dot');
  });
});
