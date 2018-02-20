import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

class App extends Component {
  constructor() {
    super()
    this.state = {
      novoTweet: '',
      tweets: []
    }

    this.adicionaTweet = this.adicionaTweet.bind(this)
  }

  componentDidMount() {
    fetch(`http://localhost:3001/tweets`)
      .then(response => response.json())
      .then((tweets) => {
        this.setState({
          tweets
        })
      })
  }
  // pegaTextoDoTweet(event) {
  //   const novoTweet = event.target.value
  //   console.log(novoTweet)
  //   // if(novoTweet.length > 140) {
  //   //   // faça algo
  //   // } else {
  //   //   // faça outro algo..
  //   // }
  // }
  adicionaTweet(event) {
    event.preventDefault()
    const novoTweet = this.state.novoTweet
    const tweetsAntigos = this.state.tweets
    if(novoTweet) {

      fetch(`http://localhost:3001/tweets`, {
        method: 'POST',
        body: JSON.stringify({ conteudo: novoTweet, login: 'omariosouto' })
      })
      .then((response) => response.json())
      .then((novoTweet) => {
          console.log(novoTweet)
          this.setState({
            tweets: [novoTweet, ...tweetsAntigos],
            novoTweet: ''
          })
      })

    }
  }

  render() {
    return (
      <Fragment>
        <Cabecalho usuario="@omariosouto" />
        <div className="container">
            <Dashboard>
                <Widget>
                    <form className="novoTweet" onSubmit={ this.adicionaTweet }>
                        <div className="novoTweet__editorArea">
                            <span className={`novoTweet__status ${ this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : '' }`}>{ this.state.novoTweet.length }/140</span>
                            <textarea
                                      value={ this.state.novoTweet }
                                      onInput={ (event) => this.setState({ novoTweet: event.target.value }) }
                                      className="novoTweet__editor"
                                      placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" disabled={ this.state.novoTweet.length > 140 ? true : false } className="novoTweet__envia">Tweetar</button>
                    </form>
                </Widget>
                <Widget>
                    <TrendsArea />
                </Widget>
            </Dashboard>
            <Dashboard posicao="centro">
                <Widget>
                    <div className="tweetsArea">
                        { this.state.tweets.length === 0 ? 'Nenhum tweet encontrado :(' : '' }
                        { this.state.tweets.map( (tweetTexto, index) => <Tweet key={tweetTexto + index} texto={tweetTexto} /> ) }
                    </div>
                </Widget>
            </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default App;
