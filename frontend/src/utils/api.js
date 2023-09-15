const getHeaders = () => {
	const jwt = localStorage.getItem("jwt");
	if (jwt) {
		return {
			Authorization: `Bearer ${jwt}`
		}
	}
	return {}
}

const apiOptions = {
	url: 'http://api.alexandrger.nomoredomainsicu.ru',
	headers: {
		getHeaders,
		'Content-Type': 'application/json'
	}
}

class Api {
	constructor(config) {
		this._url = config.url;
		this._headers = config.headers;
	}

	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} else {
			return Promise.reject(`Возникла ошибка: ${res.status}`)
		}
	}

	_request(url, options) {
		return fetch(url, options).then(this._handleResponse)
	}

	// Получение данных о пользователе с сервера
	getUserData() {
		return this._request(`${this._url}/users/me`, {
			headers: this._headers,
		})
	}

	// Отправка полученных данных о пользователе на сервер
	sendUserData(userData) {
		return this._request(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: userData.name,
				about: userData.about
			})
		})
	}

	// Смена аватара пользователя
	sendAvatarData(userAvatar) {
		return this._request(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: userAvatar.avatar
			})
		})
	}

	// Добавление новой карточки на сервер
	addNewCard({ name, link }) {
		return this._request(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({ name, link })
		})
	}

	// Загрузка карточек с сервера
	getCards() {
		return this._request(`${this._url}/cards`, {
			headers: this._headers,
		})
	}

	// Удаление карточки
	deleteCard(cardId) {
		return this._request(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
	}

	// Постановка лайка
	putLike(cardId) {
		return this._request(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
	}

	// Удаление лайка
	deleteLike(cardId) {
		return this._request(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
	}

	changeLikeCardStatus(cardId, isLiked) {
		if (isLiked) {
			return this.deleteLike(cardId);
		} else {
			return this.putLike(cardId);
		}
	}
}

export const api = new Api(apiOptions);