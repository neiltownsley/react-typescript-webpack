import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloWorld} from './components/HelloWorld';

declare let module: any

ReactDOM.render(<HelloWorld compiler="Typescript" framework="React..."/>,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
