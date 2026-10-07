// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
function Vd(t,i){let e=0,n=[];function s(){if(e<t)return e++,Promise.resolve();return new Promise((r)=>n.push(r))}function o(){let r=n.shift();if(r)r();else e--}return async(...r)=>{await s();try{return await i(...r)}finally{o()}}}function lYo(t){let i=Vd(t,(e)=>new Promise((n)=>e(n)));return{acquire:()=>new Promise((e)=>void i(e))}}
export{Vd,lYo};
