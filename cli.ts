import {markdownToHTML} from "https://deno.land/x/md2html/mod.ts";
import {Input} from "https://deno.land/x/cliffy/prompt/input.ts";

const input = Deno.args[0] || await Input.prompt("Markdown Location");
const output = Deno.args[1] || await Input.prompt("HTML Save Location");

const html = await markdownToHTML(input);
await Deno.writeTextFile(output, html);
