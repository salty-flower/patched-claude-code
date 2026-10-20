// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{fi}from"./chunk-wfsayads.js";import{y,B}from"./chunk-a2fszd78.js";B();var jH=150,Lr=250,Urt=600;function Ui(e,n,t=jH){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function C7o(e){let n=fi(),[t,o]=y(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return Ui(n,t.at)}}
export{jH,Lr,Urt,Ui,C7o};
