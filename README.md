## Тестовое задание от Kaspi

Выполнить проект на Vue3, в соотвествие с макетом в [фигма](https://www.figma.com/design/cjPfiqw6fovoXNtQs1MOdB/Mobile-UI-kit-(Community)?node-id=0-1&t=UHH0RQtBQkPTEJdY-0).

В корне находятся два проекта 
1. Фронтенд - kaspi_hr
2. Бэкенд - kaspi_hr

Перед запуском проекта необходима заполнить базу данных. В корне проекта находится postman коллекция с роутами для создания(KASPI_API.postman_collection), дополнительно есть та база с которой работал я (kaspi_data.posts), также находится в корне проекта.

Пользователей можно создать самостоятельно вручную 

1. 
```json
{
  "email": "hr@kaspi.kz",
  "username": "Testoviy User",
  "password": "test1234"
}
```

2. 
```json
{
  "email": "test@gmail.com",
  "username": "Test Test",
  "password": "test1234"
}
```




## Бэкенд
Реализация Express, MongoDB, Docker

Есть 6 роутов для работы с API:

1. `http://localhost:3500/user/signup` - **Регистрация пользователя (метод: POST)** 

***Request***
```json
{
  "email": "hr@kaspi.kz",
  "username": "Testoviy User",
  "password": "test1234"
}
```

***Response***
```json
{
  "email": "hr@kaspi.kz",
  "username": "Aliya",
  "password": "$2a$10$zL7DB5SljmaVqJVt4uZyk.xTbD8bRfjW/zBrOvgOuW6avZDPwSL62",
  "_id": "66a38fc02ff6d4e81f3b7e0d",
  "__v": 0
}
```


2. ` http://localhost:3500/user/login` - **Вход пользователя (метод: POST)**

***Request***
```json
{
  "email": "hr@kaspi.kz",
  "password": "test1234"
}
```

***Response***
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhyQGthc3BpLmt6IiwiaWF0IjoxNzIxOTgyNjg4LCJleHAiOjE3MjE5ODYyODh9.lfsXokNq6iCHxcvzFnXtkCb8jwNkuiTMt3X3gtx90Gc",
  "user": {
      "email": "hr@kaspi.kz",
      "username": "Victoria Robertson"
  }
}
```


3. `http://localhost:3500/posts` - **Создание поста (метод: POST)**

***Request***
```json
{
  "title": "HR Test Header",
  "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s"
}
```

***Response***
```json
{
  "post": {
    "email": "hr@kaspi.kz",
    "title": "HR Test Header",
    "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
    "_id": "66a337ceb9d88424e54dac07",
    "__v": 0
  }
}
```


4. ` http://localhost:3500/posts` - **Получения всех постов, от всех пользователей (метод: GET)**

***Request***
При запросе используется Bearer token 

***Response***
```json
[
    {
        "_id": "66a26268472a93eeafb26411",
        "email": "test@gmail.com",
        "title": "First Header",
        "body": "My first body",
        "image": "https://i.pinimg.com/236x/5b/6e/ca/5b6eca63605bea0eeb48db43f77fa0ce.jpg"
    },
    {
        "_id": "66a264ec472a93eeafb26413",
        "email": "test@gmail.com",
        "title": "Second Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s"
    },
    {
        "_id": "66a2659d472a93eeafb26415",
        "email": "test@gmail.com",
        "title": "Header",
        "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://media.istockphoto.com/id/1142841058/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B0-%D0%BD%D1%83%D1%80-%D1%81%D1%83%D0%BB%D1%82%D0%B0%D0%BD-%D0%BA%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD-%D1%86%D0%B5%D0%BD%D1%82%D1%80-%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%BD%D0%B5%D0%B1%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D0%B1-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%B1%D0%B0%D0%B9%D1%82%D0%B5%D1%80%D0%B5%D0%BA.jpg?s=1024x1024&w=is&k=20&c=fvsNdf7qmsmvA1FZDvWOYnmK_xUt3xvFfYKT8Cfsec8="
    },
    {
        "_id": "66a278ca472a93eeafb26418",
        "email": "hr@kaspi.kz",
        "title": "First HR Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s"
    },
    {
        "_id": "66a32326415626144440edc7",
        "email": "hr@kaspi.kz",
        "title": "Second Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a328dfb9d88424e54dabc8",
        "email": "hr@kaspi.kz",
        "title": "HR Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a328e4b9d88424e54dabca",
        "email": "hr@kaspi.kz",
        "title": "HR Test Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a328efb9d88424e54dabcd",
        "email": "hr@kaspi.kz",
        "title": "HR Test Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a337ceb9d88424e54dac07",
        "email": "hr@kaspi.kz",
        "title": "HR Test Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    }
]
```


5. `http://localhost:3500/posts/user-posts` - **Получения постов, от пользователя который авторизован (метод: GET)**

***Request***
При запросе используется Bearer token 

***Response***
```json
[
    {
        "_id": "66a278ca472a93eeafb26418",
        "email": "hr@kaspi.kz",
        "title": "First HR Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s"
    },
    {
        "_id": "66a32326415626144440edc7",
        "email": "hr@kaspi.kz",
        "title": "Second Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a328dfb9d88424e54dabc8",
        "email": "hr@kaspi.kz",
        "title": "HR Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a328e4b9d88424e54dabca",
        "email": "hr@kaspi.kz",
        "title": "HR Test Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a328efb9d88424e54dabcd",
        "email": "hr@kaspi.kz",
        "title": "HR Test Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    },
    {
        "_id": "66a337ceb9d88424e54dac07",
        "email": "hr@kaspi.kz",
        "title": "HR Test Header",
        "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
        "__v": 0
    }
]
```

6. `http://localhost:3500/posts/:id` - **Получения поста (метод: GET)**

***Request***
При запросе используется Bearer token 

***Response***
```json
{
  "_id": "66a32326415626144440edc7",
  "email": "hr@kaspi.kz",
  "title": "Second Header",
  "body": " Lorem ipsum dolor sit amet consectetur adipisicing elit. A, soluta, quam quo quasi quod totam nam tempore tenetur reiciendis impedit dolorem necessitatibus et? Recusandae vel eos fuga. Dolorum, voluptas aperiam.",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s",
  "__v": 0
}
```

## Использование Docker Compose

Docker Compose применяется для управления жизненным циклом приложения и для поддержания одинаковости окружений в разработке и продакшене. Убедитесь, что Docker и Docker Compose установлены на вашем компьютере перед началом работы.

## Конфигурация Локальной Среды

* `docker-compose.yml` подготовлен для немедленного использования и обеспечивает среду с горячей перезагрузкой для разработки.

* Для сборки и запуска вашей локальной среды с использованием Docker Compose введите:

```bash
docker-compose up --build
```

## Конфигурация `docker-compose.yml`

**Порты**: 

* Сервис проксирует порт 3500 контейнера на порт 3500 локальной машины.

### Остановка и Удаление Контейнеров

Используйте следующее для остановки приложения и удаления контейнеров:

```bash
docker-compose down
```
### Конфигурация и Скрипты
* `Dockerfile`: Содержит многоэтапную конфигурацию сборки как для сред разработки, так и для продуктивной среды.
* `docker-compose.yml`: Используется для конфигурации и оркестрации Docker контейнеров.


## Фронтенд
Реализация Vue3, TS, Pinia

Была реалзовано только мобильная версия, так как в макете была только она. Реализованно 5 страницы:
1. sign up
2. log in
3. feed
4. content
5. profile

Команда запуска проекта: 
```bash
 $ npm install 
 $ npm run dev
```

После этого приложение станет доступно в браузере по адресу http://localhost:5173.

**Переменные окружения**:

* VITE_USER: URL для запросов к API бэкенда(создание пользователя).
* VITE_POSTS: URL для получения и работы с постами.



## При возникновении проблем с проектом обращайтесь в [телеграмм](https://t.me/TDD_Green)

