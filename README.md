# Rauversion Documentation

![Deploy Status](https://github.com/rauversion/docs/actions/workflows/deploy-docusaurus.yml/badge.svg)

This is the [Rauversion Documentation](https://github.com/rauversion/docs). Is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You can read the docs at https://docs.rauversion.com

## Usage

### Installation

```sh
$ make install
```

### Local Development

```sh
$ make start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ make build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ make deploy
```

This command is a convenient way to build the website and push to the `gh-pages` branch.

Using Github Workflow:

Any push to the `main` branch will be compiled and sent to the `gh-pages` branch.

### Contributors

Please make a Pull Request and *Squash* the commits before merging
to main.

## License

[CC-BY-SA 4.0](LICENSE)
