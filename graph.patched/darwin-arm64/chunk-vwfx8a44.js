// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{K$}from"./chunk-rf5vpwdp.js";import{P}from"./chunk-shf1fjz2.js";import{f}from"./chunk-1y7zyxh8.js";import{Q}from"./chunk-wvb0gwjm.js";import{o,T,d}from"./chunk-rvnav1yx.js";var i=f(()=>d({deviceId:o(),name:o().default("Browser"),osPlatform:o().optional()}));async function kmn(n){let e=await kUt(n,"list_connected_browsers",{});if(!e)return[];let t=T(i()).safeParse(Q(e));return t.success?t.data:[]}async function kUt(n,e,t){let s=await K$(n,{name:e,arguments:t}),r=Array.isArray(s.content)?s.content[0]:void 0,c=r&&typeof r==="object"&&"text"in r&&typeof r.text==="string"?r.text:void 0;if(s.isError)throw new P(c||`${e} failed`,"claude-in-chrome tool call failed");return c}
export{kmn,kUt};
