// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{readdir as s,stat as i}from"fs/promises";import{join as e}from"path";var g6n=".claude-plugin",Zm=e(g6n,"plugin.json"),x$e="plugin.json",sdn=e(g6n,"marketplace.json"),idn=["commands","skills","agents","hooks","themes","output-styles","monitors","workflows"],a=["SKILL.md",".mcp.json",".lsp.json"],Kbt=[g6n,...idn,...a];async function _2t(n){return(await s(n)).filter((t)=>!r(t)).some(wxo)}async function _6n(n){let o=(await s(n,{withFileTypes:!0})).filter((t)=>!r(t.name));if(o.some((t)=>t.name===".claude-plugin"))return n;if(o.length===1&&o[0].isDirectory()){let t=e(n,o[0].name);if(await u(e(t,".claude-plugin")))return t;if(!wxo(o[0].name)&&await _2t(t))return t}return n}function wxo(n){return Kbt.includes(n)}function xsa(n){return idn.includes(n)}async function u(n){try{return await i(n),!0}catch{return!1}}function r(n){return n==="__MACOSX"||n===".DS_Store"}
export{g6n,Zm,x$e,sdn,idn,Kbt,_2t,_6n,wxo,xsa};
