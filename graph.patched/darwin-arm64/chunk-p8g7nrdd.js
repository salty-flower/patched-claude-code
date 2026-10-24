// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{as}from"./chunk-9s1z8ttt.js";var g=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),Xms=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function xT(t,e){return`${t}=${e}`}function Whr(t,e){let n=String(e);if(n.length>1&&n.startsWith("-"))return[xT(t,n)];return[t,n]}function DYt(t,e,n){t.push(...Whr(`--${e}`,n))}function XOn(t,e,n,o){let i=0;for(let[r,s]of Object.entries(e)){if(!g.test(r)){o("malformed",JSON.stringify(r));continue}if(n.has(r)){o("blocked",r);continue}if(a.has(r)){if(!as(String(s)))t.push(`--${r}`),i++;continue}if(s!=="")DYt(t,r,s),i++}return i}
export{Xms,xT,Whr,DYt,XOn};
