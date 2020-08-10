import React from 'react';

function PopupWithForm({ title, name, isOpen, onClose, children }) {
    return (
        <div className={`popup popup__${name} ${isOpen ? "popup_opened" : ""}`}>
              <form className="popup__container container" name={name} action="#" noValidate>
                  <button className="popup__close-button" onClick={onClose} type="button" />
                  <h2 className="popup__title">{title}</h2>
                  {children}
                  <button className={`popup__submit-button popup__${name}_type_submit-button`} type="submit">Сохранить</button>
              </form>
          </div>
    )
}

export default PopupWithForm;