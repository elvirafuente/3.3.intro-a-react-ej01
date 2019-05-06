import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render(){
    const cardEl = (
      <section className="card">
        <div className="wrapper__user">
          <img className="card__img" src="https://via.placeholder.com/80x80"/>
            <div className="wrapper__name">
              <h1 className="card__name">Alex Guerrero</h1>
              <p className="card__date">15 de jlsfkdj de 2098</p>
            </div>
        </div>
          <p className="card__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className="wrapper__info">
              <a href="#" className="card__link">Saber más...</a>
              <div className="wrapper__likes">
                  <p className="card__likes">37</p>
                  <i className="fas fa-heart card__heart"></i>
              </div>   
          </div>
      </section>
    );

    return cardEl;
  }
}

export default App;
