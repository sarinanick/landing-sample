# Exports Checklist

## Root export

```ts
export * from "./components";
export * from "./hooks";
export * from "./utils";
export * from "./tokens";
```

## Package exports

```json
{
  ".": {
    "types": "./dist/types/index.d.ts",
    "import": "./dist/index.js"
  },
  "./styles.css": "./dist/style.css",
  "./components": {
    "types": "./dist/types/components/index.d.ts",
    "import": "./dist/components/index.js"
  }
}
```

## آینده

- `./hooks`
- `./tokens`
- `./utils`
- `./icons`
