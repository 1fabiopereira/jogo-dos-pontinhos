import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import sinon from 'sinon';

import Bar from './Bar';
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

describe('Bar component', () => {
  it('Render vertical bar component', () => {
    const orientation = 'vertical';
    const type = 2;
    const click = () => null;

    act(() => {
      ReactDOM.render(<Bar orientation={orientation} onBarClick={click} type={type} />, container);
    });

    const div = container.querySelector('div');

    expect(div.className).toBe(`${orientation}-bar`);
    expect(div.style.backgroundColor).toBe(HexToRGB(Colors.SecondaryBarColor));
  });

  it('Render horizontal bar component', () => {
    const orientation = 'horizontal';
    const type = 1;
    const click = () => null;

    act(() => {
      ReactDOM.render(<Bar orientation={orientation} onBarClick={click} type={type} />, container);
    });

    const div = container.querySelector('div');

    expect(div.className).toBe(`${orientation}-bar`);
    expect(div.style.backgroundColor).toBe(HexToRGB(Colors.PrimaryBarColor));
  });

  it('Click should be called', () => {
    const orientation = 'horizontal';
    const type = 0;
    const click = sinon.spy();

    act(() => {
      ReactDOM.render(<Bar orientation={orientation} onBarClick={click} type={type} />, container);
    });

    const div = container.querySelector('div');

    act(() => {
      div.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    });

    expect(click.calledOnce).toBe(true);
    expect(div.className).toBe(`${orientation}-bar`);
    expect(div.style.backgroundColor).toBe(HexToRGB(Colors.DefaultBarColor));
  });
});
