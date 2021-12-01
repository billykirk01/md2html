# md2html

A lightweight tool for creating github flavored HTML documents from markdown.
Built using Deno.

## ✨ Features

- Simple to use API and CLI
- Github flavored styling
  [github-markdown-css](https://github.com/sindresorhus/github-markdown-css)

## 📦 Importing

```typescript
import { markdownToHTML } from "https://raw.githubusercontent.com/wkirk01/md2html/master/mod.ts";
```

## 📖 Example Usage

Markdown saved locally

```typescript
markdownToHTML("./README.md", "./local.html");
```

Markdown from a remote URL

```typescript
markdownToHTML(
  "https://raw.githubusercontent.com/wkirk01/md2html/master/README.md",
  "./remote.html",
);
```

## 🚀 Using the CLI

Install

```shell
deno install -n md2html -A --unstable https://raw.githubusercontent.com/wkirk01/md2html/master/cli.ts
```

Usage

```shell
md2html <markdown location> <html location>
```

Markdown saved locally

```shell
md2html ./README.md ./local.html
```

Markdown from a remote URL

```shell
md2html https://raw.githubusercontent.com/wkirk01/md2html/master/README.md ./remote.html
```
