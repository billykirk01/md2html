import {markdownToHTML} from "https://raw.githubusercontent.com/wkirk01/md2html/master/mod.ts";
import {Input} from "https://deno.land/x/cliffy/prompt/input.ts";

const input = Deno.args[0] || await Input.prompt("Markdown Location (local file or remote url)");
const output = Deno.args[1] || await Input.prompt("HTML Save Location");

await markdownToHTML(input, output);