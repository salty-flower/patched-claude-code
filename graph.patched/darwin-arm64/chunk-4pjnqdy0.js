// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{TL}from"./chunk-q4sv2erz.js";import{P}from"./chunk-hs50vfa7.js";import{p}from"./chunk-dsp1md5e.js";import{J}from"./chunk-3wz0srxw.js";import{o,k,d}from"./chunk-g4gq2k0z.js";var i=p(()=>d({deviceId:o(),name:o().default("Browser"),osPlatform:o().optional()}));async function TCn(n){let e=await MVt(n,"list_connected_browsers",{});if(!e)return[];let t=k(i()).safeParse(J(e));return t.success?t.data:[]}async function MVt(n,e,t){let s=await TL(n,{name:e,arguments:t}),r=Array.isArray(s.content)?s.content[0]:void 0,c=r&&typeof r==="object"&&"text"in r&&typeof r.text==="string"?r.text:void 0;if(s.isError)throw new P(c||`${e} failed`,"claude-in-chrome tool call failed");return c}
export{TCn,MVt};
