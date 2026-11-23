// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{K}from"./chunk-m8nhymg4.js";import{Doe}from"./chunk-bkcxqeq8.js";import{au}from"./chunk-vvssthvc.js";import{qe}from"./chunk-hqh4zzjp.js";var o="/v1/claudeai-agents/mcp",t="f688f3fc-1d05-5bd1-9c48-9854ec083044",yBi=new qe(()=>({})),SBi=new qe(()=>({}));function ELn(e,r){let s=e.servers.get(r.name);return s!==void 0&&r.config.type==="http"&&r.config.url===s&&e.heldSinceBoot(r.name)}var WRe=/^file_[A-Za-z0-9_-]{1,128}$/,vLn="get_task";function lwr(e){return e==="start_task"||e==="update_task"}function tVe(e){return Doe(e,{path:o,serverId:t})}function bBi(e){if(e.config.type!=="http"||!au(e.config.url))return!1;return K()?epo(e):tVe(e)}function epo(e){if(e.config.type!=="http"||!au(e.config.url))return!1;try{return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some((r)=>r.toLowerCase()===t)}catch{return!1}}function o_s(e){return tVe(e)||K()&&epo(e)}
export{yBi,SBi,ELn,WRe,vLn,lwr,tVe,bBi,epo,o_s};
