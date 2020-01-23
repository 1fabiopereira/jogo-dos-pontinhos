import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Provider } from 'react-redux';
import GridBlock from './GridBlock';
import store from '../../Store';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('GridBlock component', () => {
  it('Render GridBlock', () => {
    const params = {
      row: 3,
      column: 3,
      top: 0,
      left: 0,
      completedBy: 'Fábio'
    };


    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <GridBlock key="0-0" block={params} />
        </Provider>,
        container
      );
    });

    const div = container.querySelector('div');

    expect(div.className).toBe('grid__basic-block');
  });
});
