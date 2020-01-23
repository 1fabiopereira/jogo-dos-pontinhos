import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import TableGame from './TableGame';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Table component', () => {
  it('Render Table', () => {
    act(() => {
      ReactDOM.render(
        <TableGame games={[]} callback={() => null} />,
        container
      );
    });

    const table = container.querySelector('table');

    expect(table).not.toBeNull();
  });
});
