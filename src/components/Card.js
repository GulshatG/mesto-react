import trash from "../images/Trash.svg";
import React from "react";

export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="elements__element">
      <img className="elements__trash-icon" src={trash} alt="Удалить" />
      <img
        className="elements__picture"
        onClick={handleClick}
        src={props.card.link}
        alt="Картинка"
      />
      <div className="elements__group">
        <h3 className="elements__name">{props.card.name}</h3>
        <div className="elements__like-group">
          <button className="elements__button-like" type="button"></button>
          <p className="elements__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
