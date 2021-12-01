export async function createHTML(input: string | URL, output: string | URL) {
    const markdown = await getMarkdown(input);
    const html = await transformMarkdown(markdown);
    await writeHTMLToFile(html, output);
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
    return response.text();
}

async function writeHTMLToFile(htmlBody: string, output: string | URL) {
    const template = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Markdown</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.0.0/github-markdown.min.css">
    </head>
    
    <article class="markdown-body">
    ${ htmlBody }
    </article>
    
    </html>`;
    await Deno.writeTextFile(serializeURL(output), template);
}

function serializeURL(input: string | URL) {
    if (typeof input === "string") {
        return new URL(input, import.meta.url);
    }
    return input;
}




