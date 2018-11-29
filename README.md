# express.ts-boilerplate
An boilerplate for Express APIs written in TypeScript. Made to be ready to pick-up and use.

## Description
It's an (extremely) simple boilerplate for beginners on Express.js on TypeScript, but still being usable on medium projects. Here, Mongoose connection, schema/model definition, routing and Express.js middlewares, ES6+ modules and ES6+ features are covered with examples.

The current endpoints (examples) are

```
/
└── api/
    └── tasks/
        ├── GET /
        ├── POST / ( {name: String, priority: Number (0-2)} )
        └── GET :id/
```

You can freely delete these and make your own routes and models. Again, they're just examples.

## Requirements to run
1. [npm](https://www.npmjs.com/get-npm).
2. [node](https://nodejs.org/en/download/).
3. [typescript](https://www.npmjs.com/package/typescript) installed globally.
4. [ts-node](https://www.npmjs.com/package/ts-node) installed globally.
5. Some kind of TypeScript compiler. Here, [tsc](https://www.npmjs.com/package/tsc) is used. I know, it's deprecated. But it is easy to use and still useable.
6. [MongoDB(CLI)](https://docs.mongodb.com/manual/administration/install-community/). Here you can skip Compass and service (if you want) installation.

## How to get and execute
To run the API, firstly you need to clone this repository. Follow these steps:

1. Get and install git CLI or something to clone repositories;
2. On a terminal inside your development/projects directory, run this command: `git clone https://github.com/PCasado/express.ts-boilerplate.git; cd express.ts-boilerplate`;
3. Now you're ready to run the API.

If you have the MongoDB service, skip this instruction. Run this command to run the MongoDB daemon: `./rundb.sh` for Linux users and `rundb.bat` for Windows users.

Now you can run the API with the following command: `npm run prod`. You can instead use `npm run build; npm start` or, if you already run `npm run build`, you can run `npm start`. If you want to run it while on development, you can run `npm run dev`.
