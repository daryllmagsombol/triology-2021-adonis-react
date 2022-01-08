# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds


### Setup

Clone the repo, install dependencies, and copy the .env.

```js
git clone https://github.com/daryllmagsombol/triology-2021-adonis-react.git && cd triology-2021-adonis-react
npm install && npm install -g cross-env @adonisjs/cli
cp .env.example .env
```

### Credentials DB

Create adonis_book_demo database in MySQL. Open the project in VS Code or any code editor. Rename .env.example to .env and modify it based on your database credentials.


### Migrations/Seed

Run the following commands to run startup migrations.

```js
adonis migration:run
adonis seed
```
### Run the app

Use 2 seperate terminals for running Node server and Webpack server.

For Adonis
```js
adonis serve --dev
```

For React

```js
npm run watch
```
