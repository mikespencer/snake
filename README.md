# Snake

A remake of the classic arcade game: [Snake](https://en.wikipedia.org/wiki/Snake_%28video_game%29)

[Play it here](https://mikespencer.github.io/snake)

## Running locally

Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed.

Install dependencies by running:

```
npm install
```

Then, start the game with:

```
npm start
```

Finally, open up your browser to [http://localhost:8080](http://localhost:8080) to play Snake.

## How to play

* Use the arrow keys on your keyboard to control the direction of the snake.
* Eat food to score. Eating food will also increase the length of the snake.
* If the snake hit's a wall or itself, it's game over.

## Development

* `npm run build` will build both JS and CSS
* `npm run build:css` will build CSS from Less.
* `npm run build:js` will build JS.
* `npm run lint` will run `eslint` to lint the JS.
* `npm start` will build the app and start a server at [http://localhost:8080](http://localhost:8080)
* `npm run start:dev` runs webpack in watch mode. This is a convenience command for development as it will watch the JS for changes and rebuild automatically. Use concurrently with `npm start`
