import trash from "../images/Trash.svg";
import React from "react";
import { CardContext } from "../context/CardContext";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function Card(props) {
  const card = React.useContext(CardContext);
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `elements__button-like ${
    isLiked && "elements__button-like_active"
  }`;
  function handleClick() {
    props.onCardClick(card);
  }
  function handleLikeClick() {
    props.onCardLike(card);
  }
  function handleDeleteClick() {
    props.onCardDelete(card);
  }
  return (
    <div className="elements__element">
      {isOwn && (
        <img
          className="elements__trash-icon"
          onClick={handleDeleteClick}
          src={trash}
          alt="Удалить"
        />
      )}
      <img
        className="elements__picture"
        onClick={handleClick}
        src={card.link}
        alt={card.name}
      />
      <div className="elements__group">
        <h3 className="elements__name">{card.name}</h3>
        <div className="elements__like-group">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="elements__like-count">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
