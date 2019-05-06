import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

const likes = 42;

class App extends Component {
  render(){
    const header = (
      <div className="wrapper__user">
        <img className="card__img" src="https://i.blogs.es/8c4b43/dark/200_200.jpg" alt="Jean Grey" />
          <div className="wrapper__name">
            <h1 className="card__name">Jean Grey</h1>
            <p className="card__date">15 de mayo de 2098</p>
          </div>
      </div>
    );

    const paragraph = (
      <p className="card__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    );

    const likesEl = (
      <div className="wrapper__info">
          <a href="/" className="card__link">Saber más...</a>
          <div className="wrapper__likes">
              <p className="card__likes">{likes}</p>
              <i className="fas fa-heart card__heart"></i>
          </div>   
      </div>
    );

    const cardEl = (
      <section className="card">
          {header}
          {paragraph}
          {likesEl}
      </section>
    );

    return cardEl;
  }
}

export default App;