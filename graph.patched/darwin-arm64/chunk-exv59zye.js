// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{o,u,We,T}from"./chunk-m507bxk0.js";var r=p(()=>We([u({v:T(1),state:o()}),u({v:T(2),engine:T("bridge")})]));function Ryi(e,n){if(e===void 0||e===null)return typeof n==="object"&&n!==null?"none":"unstated";let t=r().safeParse(e);if(!t.success)return"unreadable";if(t.data.v===2)return"bridge";switch(t.data.state){case"connected":case"requested":case"detached":return t.data.state;default:return"other_state"}}function SLe(e){return e==="none"||e==="bridge"||e==="this_helper"}
export{Ryi,SLe};
