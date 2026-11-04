// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Io}from"./chunk-ecyypctx.js";import{g,m}from"./chunk-ad5ya8vz.js";import{o2n}from"./chunk-53x2yxpb.js";import{kV}from"./chunk-wvg7srvx.js";import{dF}from"./chunk-xh59z7rf.js";function Xra(e,r){let{shell:t}=dF.of(r),{cwd:i,originalCwd:o}=Io(r);if(!t.isWatched)t.isWatched=!0,t.hasMoved=i!==o,r.subscribe(()=>{if(t.hasMoved||=r.project?.cwd!==o,r.project?.cwd!==t.taken)t.taken=void 0});if(e===void 0||e===i||t.hasMoved)return;if(typeof e!=="string"||!o2n(e)){m("mcp_serve_shell_directory_held","not_a_plain_directory");return}if(!e.startsWith(`${o}/`)){m("mcp_serve_shell_directory_held","outside_launch_directory");return}t.taken=e,r.setCwd(e),kV(),g("mcp_serve_shell_directory_held")}function eHr(e,r){return dF.peek(e)?.shell.taken===r}
export{Xra,eHr};
