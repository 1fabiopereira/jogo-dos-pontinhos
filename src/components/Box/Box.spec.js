import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Box from './Box';
import Colors from '../../modules/Colors';
import HexToRGB from '../../utils/HexToRGB';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Box component', () => {
  it('Render box inative', () => {
    const type = 0;
    const text = null;

    act(() => {
      ReactDOM.render(<Box type={type} text={text} />, container);
    });

    const div = container.querySelector('div');

    expect(div.style.backgroundColor).toBe(HexToRGB(Colors.DefaultBoxColor));
  });

  it('Render box active user M', () => {
    const type = 1;
    const text = 'M';

    act(() => {
      ReactDOM.render(<Box type={type} text={text} />, container);
    });

    const div = container.querySelector('div');

    expect(div.style.backgroundColor).toBe(HexToRGB(Colors.PrimaryBoxColor));
    expect(div.textContent).toBe(text);
  });
});
