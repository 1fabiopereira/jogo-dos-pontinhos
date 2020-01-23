import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import store from '../../Store';

import Grid from './Grid';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Grid component', () => {
  it('Render Grid', () => {
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <Grid />
        </Provider>,
        container
      );
    });

    const div = container.querySelector('div');

    expect(div.className).toBe('grid');
  });
});
