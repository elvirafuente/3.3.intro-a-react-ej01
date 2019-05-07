import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class MediaCard extends Component {
  render(){
    const header = (
      <div className="wrapper__user">
        <img className="card__img" src={this.props.image} alt="Jean Grey" />
          <div className="wrapper__name">
            <h1 className="card__name">{this.props.name}</h1>
            <p className="card__date">{this.props.date}</p>
          </div>
      </div>
    );

    const paragraph = (
      <p className="card__content">{this.props.content}</p>
    );
    //  
    let classHeart;
    const likes = this.props.likes;
    if(likes > 0) {
      classHeart = 'fas fa-heart card__heart';
    } else {
      classHeart = 'far fa-heart card__heart '
    }


    const likesEl = (
      <div className="wrapper__info">
          <a href="/" className="card__link">Saber más...</a>
          <div className="wrapper__likes">
              <p className="card__likes">{likes}</p>
              <i className={classHeart}></i>
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

export default MediaCard;