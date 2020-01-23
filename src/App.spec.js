import ReactDOM from 'react-dom';
import App from './modules/Navigation';

it('Render container', () => {
  const div = document.createElement('div');
  ReactDOM.render(App(), div);
  ReactDOM.unmountComponentAtNode(div);
});
