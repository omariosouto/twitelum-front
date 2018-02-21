import React, { Component } from 'react'
import Helmet from 'react-helmet'

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
        fetch('http://twitelum-api.herokuapp.com/usuarios/' + this.props.match.params.usuario)
        .then(response => response.json())
        .then((usuario) => {
            if(!usuario)
                throw new Error()
            this.setState({ usuario })
        })
    }

    render() {
        return (
            <div>
                <Helmet title={`@${this.state.usuario.login} - Twitelum`} />
                <h1>{ this.state.usuario.nome }</h1>
                Página Interna
            </div>
        )
    }
}

export default UsuarioInterna