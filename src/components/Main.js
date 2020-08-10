import React from 'react';
import {api} from '../utils/api.js';
import Card from '../components/Card.js'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then((data) => {
            const [UserData, initialCards] = data;
            setUserName(UserData.name);
            setUserDescription(UserData.about);
            setUserAvatar(UserData.avatar);
            setCards(initialCards);
        })
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar">
                    <img className="profile__avatar-img" alt="Аватар" src={userAvatar} />
                    <button className="profile__avatar-overlay" type="button" onClick={onEditAvatar} />
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile} />
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace} />
            </section>

            <section className="places">
                <ul className="place__container">
                    {cards.map((card) => 
                        <Card 
                            key={card._id} 
                            name={card.name} 
                            link={card.link} 
                            likes={card.likes.length} 
                            onCardClick={onCardClick} 
                        />
                    )}
                </ul>
            </section>
        </main>
    )
}

export default Main;