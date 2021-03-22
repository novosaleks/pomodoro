import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import CommonStyles from './index.styled';

import 'normalize.css';

ReactDOM.render(
    <React.StrictMode>
        <CommonStyles/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
