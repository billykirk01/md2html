import {
  isAbsolute,
  join,
  toFileUrl,
} from "https://deno.land/std@0.117.0/path/mod.ts";

export async function markdownToHTML(input: string | URL) {
  const markdown = await getMarkdown(input);
  return transformMarkdown(markdown);
}

async function getMarkdown(input: string | URL) {
  const response = await fetch(serializeURL(input));
  return response.text();
}

async function transformMarkdown(markdown: string) {
  const response = await fetch("https://api.github.com/markdown", {
    method: "POST",
    headers: {
      "Accept": "application/vnd.github.v3+json",
    },
    body: JSON.stringify({"text": markdown}),
  });
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Markdown</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.0.0/github-markdown.min.css">
    </head>
    
    <article class="markdown-body">
      ${ await response.text() }
    </article>
    
    </html>`;
}

function serializeURL(url: string | URL) {
  if (typeof url === "string" && !url.includes("http")) {
    if (isAbsolute(url)) {
      return toFileUrl(url);
    } else {
      return toFileUrl(join(Deno.cwd(), url));
    }
  }
  return url;
}
