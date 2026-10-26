// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Zi}from"./chunk-7car90a2.js";import{y,j}from"./chunk-s8vmszp2.js";j();var cD=150,Zr=250,Lfe=600;function ha(e,n,t=cD){let o=e()-n;if(o>=0)return o<t;return n<=Date.now()}function MIn(e){let n=Zi(),[t,o]=y(()=>({key:e,at:Date.now()}));if(t.key!==e)o({key:e,at:Date.now()});return function(){return ha(n,t.at)}}
export{cD,Zr,Lfe,ha,MIn};
