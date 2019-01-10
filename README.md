# Monorepo-example

Yet another monorepo example.

- [x] yarn workspaces
- [x] lerna
- [x] typescript
- [x] react
- [x] jest

## How to use?

### Bootstrap all dependencies:

```
$ yarn install
$ yarn bootstrap
```

### Build all the packages

```
$ yarn build
```

### Test all the packages

```
$ yarn test
```

### Check the @monorepo/components components:

Start storybook on port 9001.

```
$ yarn components:storybook
```

### Run the webapp

Start dev server on port 9000.

```
$ yarn webapp:start
```

## License

[MIT](LICENSE)
