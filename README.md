# md2html

A lightweight tool for creating github flavored HTML documents from markdown.
Built using Deno.

## ✨ Features

- Simple to use API and CLI
- Github flavored styling
  [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## 📦 Importing

```typescript
import { Database } from "https://deno.land/x/aloedb@0.9.0/mod.ts";
```

## 📖 Example Usage

Markdown saved locally

```typescript
createHTML("./README.md", "./local.html");
```

or from a remote URL

```typescript
createHTML(
  "https://raw.githubusercontent.com/wkirk01/md2html/master/README.md",
  "./remote.html",
);
```

## 🚀 Using the CLI

```shell
deno install -n md2html -A --unstable https://raw.githubusercontent.com/wkirk01/md2html/master/cli.ts

md2html ./README.md ./local.html

md2html https://raw.githubusercontent.com/wkirk01/md2html/master/README.md ./remote.html
```
