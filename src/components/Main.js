import defaultAvatar from "../images/Жак-Ив-Кусто.png";
import editButton from "../images/Edit-Button.svg";
import addButton from "../images/Add-Button.svg";
import React from "react";
import UserApi from "../utils/UserApi";
import CardApi from "../utils/CardApi";
import Card from './Card';

export default function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [cards, setCards] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState(defaultAvatar);
  React.useEffect(() => {
    Promise.all([UserApi.getUserInfo(), CardApi.getCards()])
      .then(([userRes, cardsRes]) => {
        setUserName(userRes.name);
        setUserDescription(userRes.about);
        setUserAvatar(userRes.avatar);

        setCards([...cardsRes]);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__person">
            <div className="profile__avatar-group">
              <img
                className="profile__avatar"
                src={`${userAvatar}`}
                alt="Жак-Ив Кусто"
              />
              <button
                className="profile__avatar-edit"
                onClick={props.onEditAvatar}
              ></button>
            </div>
            <div className="profile__info">
              <div className="profile__text">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__feature">{userDescription}</p>
              </div>
              <button
                className="profile__button-edit"
                onClick={props.onEditProfile}
                type="button"
              >
                <img
                  className="profile__icon-edit"
                  src={editButton}
                  alt="Кнопка редактирования"
                />
              </button>
            </div>
          </div>
          <button
            className="profile__button-add"
            onClick={props.onAddPlace}
            type="button"
          >
            <img
              className="profile__button-icon"
              src={addButton}
              alt="Кнопка"
            />
          </button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick}/>
          ))}
        </section>
      </main>
    </>
  );
}
