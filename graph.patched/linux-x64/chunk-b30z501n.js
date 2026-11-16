// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{K}from"./chunk-r3adsed5.js";import{Aoe}from"./chunk-yfhfp9nd.js";import{au}from"./chunk-bj5dxabz.js";import{qe}from"./chunk-2xv5yvxr.js";var o="/v1/claudeai-agents/mcp",t="f688f3fc-1d05-5bd1-9c48-9854ec083044",IBi=new qe(()=>({})),OBi=new qe(()=>({}));function FLn(e,r){let s=e.servers.get(r.name);return s!==void 0&&r.config.type==="http"&&r.config.url===s&&e.heldSinceBoot(r.name)}var jRe=/^file_[A-Za-z0-9_-]{1,128}$/,$Ln="get_task";function Uwr(e){return e==="start_task"||e==="update_task"}function iqe(e){return Aoe(e,{path:o,serverId:t})}function MBi(e){if(e.config.type!=="http"||!au(e.config.url))return!1;return K()?lpo(e):iqe(e)}function lpo(e){if(e.config.type!=="http"||!au(e.config.url))return!1;try{return new URL(e.config.url).searchParams.getAll("toolbox_mcp_server_id").some((r)=>r.toLowerCase()===t)}catch{return!1}}function L_s(e){return iqe(e)||K()&&lpo(e)}
export{IBi,OBi,FLn,jRe,$Ln,Uwr,iqe,MBi,lpo,L_s};
