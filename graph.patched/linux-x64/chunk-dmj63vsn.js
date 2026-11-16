// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{qma}from"./chunk-q7drc96d.js";import{at}from"./chunk-a5a37ds7.js";import{eCe}from"./chunk-fn5hkvxe.js";import{PK,TI}from"./chunk-zyd42nx0.js";var u=new Set(["pdf"]);function cMo(e){let t=/^(\d{1,9})(?:\s*(-)\s*(\d{1,9})?)?$/.exec(e.trim());if(!t)return null;let[,s,o,a]=t,r=Number(s),i=a?Number(a):o?1/0:r;if(r<1||i<r)return null;return{firstPage:r,lastPage:i}}var d=["claude-3-opus","claude-3-sonnet","claude-3-haiku"];function uun(e){return!eCe(e??at(),d)}function j6e(e){let t=e.startsWith(".")?e.slice(1):e;return u.has(t.toLowerCase())}var n=`
- Do NOT re-read a file you just edited to verify \u2014 Edit/Write would have errored if the change failed, and the harness tracks file state for you.`,uMo=" (file state is current in your context \u2014 no need to Read it back)",h="File unchanged since last read. The content from the earlier Read tool_result in this conversation is still current \u2014 refer to that instead of re-reading.",c="Wasted call \u2014 file unchanged since your last Read. Refer to that earlier tool_result instead.",p="<system-reminder>This file is already in your context";function y2t(e){return e.startsWith(h)||e.startsWith(c)||e.startsWith(p)}var eot="[Truncated: PARTIAL view \u2014 ",fun=2000,Yua="Read a file from the local filesystem.",cWs="- Results are returned using cat -n format, with line numbers starting at 1",Xua=`${cWs}. Each line is the line number, a single separator (a tab or \`:\`), then the verbatim file content (including any leading whitespace).`,l="- When you already know which part of the file you need, only read that part. This can be important for larger files.";function Jua(e,t,s,o){if(TI({model:e,leanPrompt:s})){let a=PK({model:e,leanRewrite:o})?qma:n;return`Reads a file from the local filesystem.

- \`file_path\` must be an absolute path.
- Reads up to ${fun} lines by default.
${l}
${t}
- Reads images (PNG, JPG, \u2026) and presents them visually.${uun(e)?' Reads PDFs via the `pages` parameter (e.g. "1-5", max 20 pages/request; required for PDFs over 10 pages).':""} Reads Jupyter notebooks (.ipynb) as cells with outputs.
- Reading a directory, a missing file, or an empty file returns an error or system reminder rather than content.${a}`}return`Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${fun} lines starting from the beginning of the file
${l}
${t}
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${uun(e)?`
- This tool can read PDF files (.pdf). For large PDFs (more than 10 pages), you MUST provide the pages parameter to read specific page ranges (e.g., pages: "1-5"). Reading a large PDF without the pages parameter will fail. Maximum 20 pages per request.`:""}
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To list files in a directory, use the registered shell tool.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.${n}`}
export{cMo,uun,j6e,uMo,y2t,eot,fun,Yua,cWs,Xua,Jua};
