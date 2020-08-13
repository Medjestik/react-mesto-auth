import React from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupWithForm from '../components/PopupWithForm.js';
import ImagePopup from '../components/ImagePopup.js';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleCardClick(name, link) {
        setSelectedCard({
            onShow: true, 
            name: name, 
            link: link
        });
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
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard((selectedCard)=> {
            return {...selectedCard, onShow: false}
        });
    }
    
    return (
        <div className="page"> 
            <Header />

            <Main
                onEditAvatar={handleEditAvatarClick} 
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />

            <Footer />

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            >
            </ImagePopup>

            <PopupWithForm
                title="Редактировать профиль"
                name="profile"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                >
                <label className="popup__field">
                    <input 
                    className="popup__input popup__input_type_name" 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Имя" 
                    minLength="2" 
                    maxLength="40" 
                    required 
                    pattern="[A-Za-zА-Яа-яЁё -]{1,}" 
                    />
                    <span className="popup__input-error" id="name-error" />
                </label>
                <label className="popup__field">
                    <input 
                    className="popup__input popup__input_type_job" 
                    type="text" 
                    id="job" 
                    name="job" 
                    placeholder="Занятие" 
                    minLength="2" 
                    maxLength="200" 
                    required 
                    />
                    <span className="popup__input-error" id="job-error" />
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Новое место"
                name="cards"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                >
                <label className="popup__field">
                    <input 
                    className="popup__input popup__input_type_title" 
                    type="text" 
                    id="title" 
                    name="name" 
                    placeholder="Название" 
                    minLength="1" 
                    maxLength="30" 
                    required 
                    />
                    <span className="popup__input-error" id="title-error" />
                </label>
                <label className="popup__field">
                    <input 
                    className="popup__input popup__input_type_link" 
                    type="url" id="link" 
                    name="link" 
                    placeholder="Ссылка на картинку" 
                    required />
                    <span className="popup__input-error" id="link-error" />
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Обновить аватар"
                name="change-avatar"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                >
                <label className="popup__field">
                    <input 
                    className="popup__input popup__input_type_avatar" 
                    type="url" 
                    id="link" 
                    name="avatar" 
                    placeholder="Ссылка на картинку" 
                    required 
                    />
                    <span className="popup__input-error" id="link-error" />
                </label>
            </PopupWithForm>

            <PopupWithForm
                title="Вы уверены?"
                name="delete-card"
                >
            </PopupWithForm>
        </div>
    )
}

export default App;
