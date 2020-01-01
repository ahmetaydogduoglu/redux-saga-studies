import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { testStore } from './index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={testStore}>
      <App />
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
