import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import HomePage from './containers/HomePage.jsx';
import App from './App';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
                <Component />
        </AppContainer>,
        document.getElementById('react-app')
    );
}

render(HomePage);

if(module.hot) {
    module.hot.accept('./containers/HomePage.jsx', () => {
        render(HomePage);
    });
}