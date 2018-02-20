import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// CSS Global
import './assets/css/reset.css'
import './assets/css/container.css'
import './assets/css/btn.css'
import './assets/css/icon.css'
import './assets/css/iconHeart.css'

import './assets/css/novoTweet.css'
// import './index.css';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
// React Router
import { BrowserRouter, Switch, Route } from 'react-router-dom'


class UsuarioInterna extends Component {
    constructor() {
        super()
        this.state = {
            usuario: {
                nome: ''
            }
        }

    }

    componentWillMount() {
        fetch('http://localhost:3001/usuarios/' + this.props.match.params.usuario)
        .then(response => response.json())
        .then((usuario) => {
            this.setState({ usuario })
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.usuario.nome }</h1>
                Página Interna
            </div>
        )
    }
}


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
