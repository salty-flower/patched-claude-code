// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{rs}from"./chunk-29aedz4e.js";var d=/^[A-Za-z0-9][A-Za-z0-9-]*$/,a=new Set(["restricted"]),yEo=["system-prompt-file","append-system-prompt-file","append-subagent-system-prompt-file"];function uOt(n,s,i){let e=String(i);if(e.length>1&&e.startsWith("-"))n.push(`--${s}=${e}`);else n.push(`--${s}`,e)}function Ftn(n,s,i,e){let r=0;for(let[t,o]of Object.entries(s)){if(!d.test(t)){e("malformed",JSON.stringify(t));continue}if(i.has(t)){e("blocked",t);continue}if(a.has(t)){if(!rs(String(o)))n.push(`--${t}`),r++;continue}if(o!=="")uOt(n,t,o),r++}return r}
export{yEo,uOt,Ftn};
