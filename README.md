[![Статус тестов](../../actions/workflows/tests.yml/badge.svg)](../../actions/workflows/tests.yml)

<h1>Учебный frontend-проект "Mesto"</h1>

<a href="https://github.com/AlexandrGer/react-mesto-api-full-gha" target="blank">
<img src='./src/images/скрин-проекта.png'>
</a>

<h2>Описание проекта</h2>

Данная [проектная](https://github.com/AlexandrGer/react-mesto-api-full-gha) работа - итоговая в рамках образовательной программы [Яндекс.Практикума.](https://practicum.yandex.ru/) Проект представляет собой адаптивное приложение (SPA), написанное на "React" (часть frontend) и "Node" (часть backend), с возможностью регистрации личного кабинета пользователя, редактированием данных и добавлением фотокарточек в общую галерею.<br>
[Изначально](https://github.com/AlexandrGer/mesto) приложение было написано на нативных технологиях: JavaScript, CSS3 и HTML5. [Затем](https://github.com/AlexandrGer/react-mesto-auth) проект был перенесен на "React" с добавлением функционала регистрации и авторизации пользователей, [отдельно](https://github.com/AlexandrGer/express-mesto-gha) написана логика серверной части с фреймворком "Express" и в завершение обе части объединены и сохранены на виртуальной машине, размещенной на Яндекс Облаке.

**Ссылки на проект**
IP 84.201.157.231

Frontend https://alexandrger.nomoredomainsicu.ru/
Backend https://api.alexandrger.nomoredomainsicu.ru/

<h2>Макеты Figma</h2>

1. [Базовый макет](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?type=design&node-id=0-1&mode=design&t=KS6PDlsHSVdsALkG-0)
2. [Добавление новых модальных окон](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?type=design&node-id=0-1&mode=design&t=3ODPkVGCiQjIZPTx-0)
3. [Валидация форм](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?type=design&node-id=0-1&mode=design&t=bouugJIsLNyWI0nV-0)
4. [Количество лайков](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript.-Sprint-9?type=design&node-id=0-1&mode=design&t=BpbidFSVEiMAIFnV-0)
5. [Регистрация/Авторизация](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/JavaScript.-Sprint-12?type=design&node-id=0-1&mode=design&t=bhAZfU4uQmsFuc1g-0)

<h2>Стек технологий</h2>

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

<h2>Инструкция по установке</h2>

1. ```git clone https://github.com/AlexandrGer/react-mesto-api-full-gha.git``` - клонируем репозиторий
2. ```npm i``` - устанавливаем зависиимости (в каждой папке: `frontend` и `backend`)
3. ```npm run dev``` - запускаем проект в режиме разработчика в папке `backend`
4. ```npm run start``` - запускаем проект в режиме разработчика в папке `frontend`


<h2>Методология и процесс создания</h2>
Работа была выполнена в 1 этап:

* Реализовано логирование запросов и ошибок
* Объединены frontend и backend части приложения
* Создан облачный сервер и развернут API
* Создан .env-файл
* Создан домен и прикреплен к серверу
* Выпущены и подключены SSL-сертификаты


<h2>Планы по доработке</h2>

1. Реализовать периодическое автоматическое обновление фотогалереи
2. Оптимизировать страницу для людей с ограниченными возможностями
3. Сделать код более кроссбраузерным
4. Добавить валидацию форм
5. Добавить прелоадер
6. Оптимизировать лишние ререндеры
7. Адаптировать под различные устройства
8. Вывовдить в модальные окна ошибки с сервера("Пользователь с таким электронным адресом уже зарегистрирован", "Неправильный электронный адрес/пароль" и т.п.)