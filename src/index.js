import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'

import './assets/css/novoTweet.css'
// import './index.css';

// Componentes que são páginas
import App from './App';
import UsuarioInterna from './pages/UsuarioInterna'

import registerServiceWorker from './registerServiceWorker';
// React Router
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/:usuario" exact component={UsuarioInterna}/>
            {/* <App />
            <UsuarioInterna /> */}
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
