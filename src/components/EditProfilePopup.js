import React, { useContext } from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = useContext(CurrentUserContext);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: name,
            about: description,
        });
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    return (
        <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            submitText={`${isLoading ? "Сохранение..." : "Сохранить"}`}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
        <label className="popup__field">
            <input 
            className="popup__input popup__input_type_name" 
            type="text" 
            id="name"
            value={name || ''}
            onChange={handleChangeName}
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
            value={description || ''}
            onChange={handleChangeDescription}
            name="job" 
            placeholder="Занятие" 
            minLength="2" 
            maxLength="200" 
            required 
            />
            <span className="popup__input-error" id="job-error" />
        </label>
        </PopupWithForm>
    )
}

export default EditProfilePopup;