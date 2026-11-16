// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{E,He,B}from"./chunk-xrhk683g.js";var tVn="x-ccr-session-writers",Jla=p(()=>He({writers:B(["owner_account_only","not_owner_only"]),statedAtMs:E()}));function Qla(e){if(e===null||e.includes(","))return;let n=new Map;for(let o of e.split(";")){let r=o.trim(),t=r.indexOf("="),s=t===-1?"":r.slice(0,t);if(s==="")continue;if(n.has(s))return;n.set(s,r.slice(t+1))}if(n.get("v")!=="1")return;switch(n.get("owner_account_only")){case"true":return"owner_account_only";case"false":return"not_owner_only";default:return}}function vK(e){return e==="owner_account_only"}function IIo({frameCreatedAt:e,sessionWriters:n,maxFrameAgeMs:o,maxStatementAgeMs:r,now:t}){if(e===void 0)return"no_frame_stamp";if(t-e>o)return"stale_frame";if(n===void 0)return"session_writers_unknown";if(!vK(n.writers))return"session_not_owner_only";if(r===void 0)return;let s=t-n.statedAtMs;return s>=0&&s<=r?void 0:"session_writers_stale"}
export{tVn,Jla,Qla,vK,IIo};
