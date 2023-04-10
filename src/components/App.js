import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        buttonName="Сохранить"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="name-input"
          className="popup__input popup__input_field_name"
          type="text"
          name="name"
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-input-error popup__input-error"></span>
        <input
          id="feature-input"
          className="popup__input popup__input_field_feature"
          type="text"
          name="feature"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="feature-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="create-card"
        buttonName="Сохранить"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="title-input"
          className="popup__input popup__input_field_title"
          type="text"
          name="name"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="title-input-error popup__input-error"></span>
        <input
          id="link-input"
          className="popup__input popup__input_field_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="link-input-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        buttonName="Сохранить"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="avatar-link"
          className="popup__input popup__input_field_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="avatar-link-error popup__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name="delete"
        buttonName="Да"
        title="Вы уверены?"
        isOpen={false}
        onClose={closeAllPopups}
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  );
}

export default App;
