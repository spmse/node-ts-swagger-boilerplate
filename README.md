# README

Boilerplate project for a `nodejs-typescript` server with basic `jest` test configuration and `swagger-ui` documentation and code generation.

## Disclaimer

This boilerplate was generated on `macOS` which internally uses the BSD `sed` implementation. To use the GNU `sed` implementation you can install `gsed` via `brew`. This is what was used in the `start:devLocal` script.

When using this boilerplate on Ubuntu you can simply adjust `package.json`s `script` section to the following:

```json
{
    "start:devLocal": "yarn run api:gen && sed -i 's/https:/http:/' ./swagger/swagger.json && yarn run ts-node src/app.ts",
}
```

So no further magic than removing the `g` from `sed` command is required in order to get this working on an other OS than `macOS`.

## Installation

To use the boilerplate follow this steps:

1. Clone the repository
2. Go to repository (`cd <repository_location>`).
3. Run `npm install` or when using `yarn` do `yarn install`.

Now everything is set to start developing.

### Setting up swagger

First you need to create your `controllers` and `models`. For that you can follow the
documentation of [`tsoa`](https://github.com/lukeautry/tsoa#create-controllers).

After you created (at least) you can try out if everything works by doing.
This Boilerplate provides an example Controller and Model so you can simply start after the following steps.

```console
# only generate
npm run api:gen

# start after generation
npm run start:local

# generate and start
npm run start:devLocal
```

Basically the `api:gen` script runs `tsoa swagger-and-routes` with a specified config file (`swagger/tsoa.json`). To change anything in your configuration simply change that file.
