import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: name,
            link: link,
        });
    }

    React.useEffect(() => {
        setName('');
        setLink('');
      }, [isOpen]);

    return (
        <PopupWithForm
            title="Новое место"
            name="cards"
            submitText={`${isLoading ? "Сохранение..." : "Сохранить"}`}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            >
            <label className="popup__field">
                <input
                className="popup__input popup__input_type_title"
                type="text"
                id="title"
                name="name"
                value={name || ''}
                onChange={handleChangeName}
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
                value={link || ''}
                onChange={handleChangeLink}
                placeholder="Ссылка на картинку" 
                required />
                <span className="popup__input-error" id="link-error" />
            </label>
        </PopupWithForm>
    )
}

export default AddPlacePopup;