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
md2html MARKDOWN_LOCATION HTML_SAVE_LOCATION
```

Command line mode

```shell
md2html ./README.md ./index.html
```

Interactive mode

```shell
$ md2html       
 ? Markdown Location (local file or remote url) › https://raw.githubusercontent.com/wkirk01/md2html/master/README.md
 ? HTML Save Location › ./index.html
```
