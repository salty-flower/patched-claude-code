// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Es}from"./chunk-fdxhcr6b.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),dUo=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function ak(t,e){return`${t}=${e}`}function r5n(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[ak(t,n)];return[t,n]}function j$t(t,e,n){t.push(...r5n(`--${e}`,n))}function Qun(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!Es(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")j$t(t,r,s),i++}return i}
export{dUo,ak,r5n,j$t,Qun};
