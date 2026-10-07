// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Ma}from"./chunk-c66e3zm1.js";import{g,L}from"./chunk-1mwacejt.js";L();var YK=150,vo=250;function tc(e,n,t=YK){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function qSo(e){let n=Ma(),[t,o]=g(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return tc(n,t.at)}}
export{YK,vo,tc,qSo};
