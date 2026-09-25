// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Al}from"./chunk-hkhfvq8c.js";import{g,L}from"./chunk-1cnhgfv0.js";L();var nB=150,wo=250;function td(e,n,t=nB){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function G6r(e){let n=Al(),[t,o]=g(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return td(n,t.at)}}
export{nB,wo,td,G6r};
