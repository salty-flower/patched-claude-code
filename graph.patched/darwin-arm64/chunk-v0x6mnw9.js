// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-ynakaye4.js";import{o,u,Ue,T}from"./chunk-xv841za9.js";var r=f(()=>Ue([u({v:T(1),state:o()}),u({v:T(2),engine:T("bridge")})]));function uYo(e,n){if(e===void 0||e===null)return typeof n==="object"&&n!==null?"none":"unstated";let t=r().safeParse(e);if(!t.success)return"unreadable";if(t.data.v===2)return"bridge";switch(t.data.state){case"connected":case"requested":case"detached":return t.data.state;default:return"other_state"}}function u_e(e){return e==="none"||e==="bridge"||e==="this_helper"}
export{uYo,u_e};
