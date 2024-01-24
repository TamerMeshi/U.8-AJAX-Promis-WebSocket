# Базовые знания. Запросы к сервисам

## Цель

Изучить работу удаленными сервисами получения и отправки данных

## Темы для изучения

1. Ajax запросы к внешним сервисам, типы запросо и RESTfull модель.
2. Promises и асинхронное выполнение - отложенное выполнение удаленных запросов
3. WebSocket - работа с потоками данных

## Задание

В заданиях https://my-json-server.typicode.com/typicode/demo/posts - можно заменить на любой другой

1. Выполнить запрос к серверу https://my-json-server.typicode.com/typicode/demo/posts результат вывести в DOM использую XMLHttpRequest
2. Выполнить Post запрос на обновление данных https://my-json-server.typicode.com/typicode/demo/posts  использую XMLHttpRequest
3. Написать обработчик ошибок для запроса https://my-json-server.typicode.com/typicode/demo/posts использую XMLHttpRequest
4. Переписать запросы 1 - 3 используя fetch
5. Написать цепочку обращений через промисы к трём разным адресам: https://ya.ru, https://google.com, https://my-json-server.typicode.com/typicode/demo/posts
6. Написать обработчик ошибки к несуществующему адресу, обработать ошибку и вывести на экран корректное описание ошибки текстом соответствующим ошибке например 404 : Страница не найдена
7. Изучить технологию WebSocket и области её применения. Рассказать как её можно применять и что для этого нужно на серверной части и на клиентской части.

## Результат

На демонстрации показать, в режи отладки что выведено в консоль и также работу с DOM страницы

## Материалы для изучения

В порядке изучения

1. [Получение данных с сервера](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
2. [Основы JavaScript #27 Введение в AJAX](https://youtu.be/MSz83YWCecM?list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh) - начальные знания по Ajax
3. [Основы JavaScript #28 Введение в AJAX. POST запросы.](https://youtu.be/Ev11gcBmK6M?list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh)
4. [Основы JavaScript #29 Отладка AJAX](https://youtu.be/2XQRX6EumzA?list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh)
5. [Основы JavaScript #30 Обработка ошибок AJAX](https://youtu.be/thdjmwyb6SQ?list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh)
6. [Основы JavaScript #31 Promises. Часть №1](https://youtu.be/a1TwvuXhzUQ?list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh) - Промисы
7. [Основы JavaScript #32 Promises. Часть №2](https://youtu.be/qbt82iXh6Ts?list=PLlwtdxQXoJAtV52YQ4wZIqEg4-Q0vIgzh)
8. [JavaScript - Полный Курс JavaScript Для Начинающих 11 ЧАСОВ](https://youtu.be/CxgOKJh4zWE?t=34675) - от промисов и до конца
9. [053 Обработка ошибок в Fetch API](https://youtu.be/8bjiemC7vlo)
10. [JavaScript для начинающих 2023. Полный курс за 6 часов. Уроки. Теория + практика](https://youtu.be/maPRR_jjyOE) начиная с call-back hell и дальше
11. [Все про WebSockets (веб-сокеты) простыми словами](https://youtu.be/19d4AXt3dSI)
12. [Real Time КЛИЕНТ-СЕРВЕР на JavaScript. Long polling, event sourcing, websockets & комнаты](https://youtu.be/o43iiH4kGqg)
13. [Пишем простой чат на WebSocket](https://youtu.be/uAMt7cDV7lU) - ознакомительное видео