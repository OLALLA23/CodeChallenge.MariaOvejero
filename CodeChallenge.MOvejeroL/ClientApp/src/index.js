import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/site.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Layout } from './components/Layout';
import { ListPhoneContainer } from './components/phoneContainer/listPhoneContainer';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';


function renderApp() {
       
    const rootElement = document.getElementById('root');
    ReactDOM.render(
        <BrowserRouter>
        <AppContainer>
            <Provider store={store}>
                    <Layout children={<ListPhoneContainer />} />
            </Provider>
            </AppContainer>
        </BrowserRouter>,
        rootElement
    );
}

renderApp();

