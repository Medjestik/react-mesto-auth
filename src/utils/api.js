import {config} from './utils.js'

class Api {
    constructor(options) {
        this.url = options.baseUrl;
        this.headers = options.headers;
    }

    _handleResponse(response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response.statusText)
        }
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            method: 'GET',
            headers: this.headers
        })
        .then(this._handleResponse)
        .catch(console.error('error'))
    }

    getInitialCards() {
        return fetch(`${this.url}/cards`, {
            method: 'GET',
            headers: this.headers
        })
        .then(this._handleResponse)
        .catch(console.error('error'))  
    }

    editUserInfo(name, about) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
              })
        })
        .then(this._handleResponse)
        .catch(console.error('error'))
    }

    changeAvatar(url) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: url
                })
        })
        .then(this._handleResponse)
        .catch(console.error('error'))  
    }

    addCard(name, link) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
              })
        })
        .then(this._handleResponse)
        .catch(console.error('error'))  
    }

    deleteCard(id) {
        return fetch(`${this.url}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._handleResponse)
        .catch(console.error('error'))
    }

    putLike(id) {
        return fetch(`${this.url}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then(this._handleResponse)
        .catch(console.error('error'))
    }

    removeLike(id) {
        return fetch(`${this.url}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._handleResponse)
        .catch(console.error('error'))
    }
}

export const api = new Api(config);
