import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import Score from './Score';
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

describe('Score component', () => {
  it('Render score component', () => {
    const color = '#f00';
    const title = 'Player 1';
    const value = 2;

    act(() => {
      ReactDOM.render(<Score color={color} title={title} value={value} />, container);
    });

    const div = container.querySelector('div');
    const titleDiv = container.getElementsByClassName('title')[0];
    const valueDiv = container.getElementsByClassName('value')[0];

    expect(div.className).toBe('score-container');
    expect(titleDiv.style.color).toBe(HexToRGB(color));
    expect(titleDiv.textContent).toBe(title);
    expect(Number(valueDiv.textContent)).toBe(value);
  });
});
