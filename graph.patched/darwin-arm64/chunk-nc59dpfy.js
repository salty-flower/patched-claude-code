// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{va}from"./chunk-behv2vm9.js";import{g,M}from"./chunk-757fgf90.js";M();var MG=150,yo=250;function uc(e,n,t=MG){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function lZr(e){let n=va(),[t,o]=g(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return uc(n,t.at)}}
export{MG,yo,uc,lZr};
