// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{at}from"./chunk-bsdtxcdc.js";import{td}from"./chunk-p33zayst.js";var d=new Set(["pdf"]);function nYn(e){let t=e.trim();if(!t)return null;if(t.endsWith("-")){let a=parseInt(t.slice(0,-1),10);if(isNaN(a)||a<1)return null;return{firstPage:a,lastPage:1/0}}let s=t.indexOf("-");if(s===-1){let a=parseInt(t,10);if(isNaN(a)||a<1)return null;return{firstPage:a,lastPage:a}}let r=parseInt(t.slice(0,s),10),i=parseInt(t.slice(s+1),10);if(isNaN(r)||isNaN(i)||r<1||i<1||i<r)return null;return{firstPage:r,lastPage:i}}function BVe(){return!at().toLowerCase().includes("claude-3-haiku")}function EOe(e){let t=e.startsWith(".")?e.slice(1):e;return d.has(t.toLowerCase())}var n=`
- Do NOT re-read a file you just edited to verify \u2014 Edit/Write would have errored if the change failed, and the harness tracks file state for you.`,q6t=" (file state is current in your context \u2014 no need to Read it back)",u="File unchanged since last read. The content from the earlier Read tool_result in this conversation is still current \u2014 refer to that instead of re-reading.",o="Wasted call \u2014 file unchanged since your last Read. Refer to that earlier tool_result instead.",l="<system-reminder>This file is already in your context";function rYn(){return o}function oYn(e){return`${l} (see "Contents of ${e}" above) and has not changed on disk. Use that content instead of re-reading.</system-reminder>`}function G6t(e){return e.startsWith(u)||e.startsWith(o)||e.startsWith(l)}var Rue="[Truncated: PARTIAL view \u2014 ",jVe=2000,iYn="Read a file from the local filesystem.",Nmn="- Results are returned using cat -n format, with line numbers starting at 1",sYn=`${Nmn}. Each line is the line number, a single separator (a tab or \`:\`), then the verbatim file content (including any leading whitespace).`,aYn="- You can optionally specify a line offset and limit (especially handy for long files), but it's recommended to read the whole file by not providing these parameters",lYn="- When you already know which part of the file you need, only read that part. This can be important for larger files.";function cYn(e,t,s,r){if(td(e))return`Reads a file from the local filesystem.

- \`file_path\` must be an absolute path.
- Reads up to ${jVe} lines by default${s}.
${r}
${t}
- Reads images (PNG, JPG, \u2026) and presents them visually.${BVe()?' Reads PDFs via the `pages` parameter (e.g. "1-5", max 20 pages/request; required for PDFs over 10 pages).':""} Reads Jupyter notebooks (.ipynb) as cells with outputs.
- Reading a directory, a missing file, or an empty file returns an error or system reminder rather than content.${n}`;return`Reads a file from the local filesystem. You can access any file directly by using this tool.
Assume this tool is able to read all files on the machine. If the User provides a path to a file assume that path is valid. It is okay to read a file that does not exist; an error will be returned.

Usage:
- The file_path parameter must be an absolute path, not a relative path
- By default, it reads up to ${jVe} lines starting from the beginning of the file${s}
${r}
${t}
- This tool allows Claude Code to read images (eg PNG, JPG, etc). When reading an image file the contents are presented visually as Claude Code is a multimodal LLM.${BVe()?`
- This tool can read PDF files (.pdf). For large PDFs (more than 10 pages), you MUST provide the pages parameter to read specific page ranges (e.g., pages: "1-5"). Reading a large PDF without the pages parameter will fail. Maximum 20 pages per request.`:""}
- This tool can read Jupyter notebooks (.ipynb files) and returns all cells with their outputs, combining code, text, and visualizations.
- This tool can only read files, not directories. To list files in a directory, use the registered shell tool.
- You will regularly be asked to read screenshots. If the user provides a path to a screenshot, ALWAYS use this tool to view the file at the path. This tool will work with all temporary file paths.
- If you read a file that exists but has empty contents you will receive a system reminder warning in place of file contents.${n}`}
export{nYn,BVe,EOe,q6t,rYn,oYn,G6t,Rue,jVe,iYn,Nmn,sYn,aYn,lYn,cYn};
