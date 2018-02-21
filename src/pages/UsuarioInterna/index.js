import React, { Component } from 'react'

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
            if(!usuario)
                throw new Error()
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

export default UsuarioInterna