// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Ca}from"./chunk-sm4gyzj8.js";import{y,F}from"./chunk-57p87fb1.js";F();var gH=150,Do=250,qtt=600;function vl(e,n,t=gH){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function Q5o(e){let n=Ca(),[t,o]=y(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return vl(n,t.at)}}
export{gH,Do,qtt,vl,Q5o};
