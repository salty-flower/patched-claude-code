// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{readdir as s,stat as i}from"fs/promises";import{join as e}from"path";var K2n=".claude-plugin",Zm=e(K2n,"plugin.json"),TUe="plugin.json",$ln=e(K2n,"marketplace.json"),Uln=["commands","skills","agents","hooks","themes","output-styles","monitors","workflows"],a=["SKILL.md",".mcp.json",".lsp.json"],USt=[K2n,...Uln,...a];async function djt(n){return(await s(n)).filter((t)=>!r(t)).some(YRo)}async function Y2n(n){let o=(await s(n,{withFileTypes:!0})).filter((t)=>!r(t.name));if(o.some((t)=>t.name===".claude-plugin"))return n;if(o.length===1&&o[0].isDirectory()){let t=e(n,o[0].name);if(await u(e(t,".claude-plugin")))return t;if(!YRo(o[0].name)&&await djt(t))return t}return n}function YRo(n){return USt.includes(n)}function Ooa(n){return Uln.includes(n)}async function u(n){try{return await i(n),!0}catch{return!1}}function r(n){return n==="__MACOSX"||n===".DS_Store"}
export{K2n,Zm,TUe,$ln,Uln,USt,djt,Y2n,YRo,Ooa};
