// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{qss}from"./chunk-qtgd5y0g.js";import{N}from"./chunk-sktwb66b.js";import{an}from"./chunk-axsjfnwn.js";import{a}from"./chunk-87y2sp93.js";import{q6e,WB}from"./chunk-3e6pdcy8.js";import{eOt}from"./chunk-57z37j8x.js";function K8n(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var c1o=()=>!1;var u1o=()=>WB()&&!q6e()&&an("tengu_quiet_ember",c1o());var q8n={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:u1o,defaultEnabled:!1};function lGr({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!K8n(e))return!1;try{return qss(e,o).length===0&&eOt(q8n.name)}catch(i){return a(N(i)),!1}}
export{K8n,c1o,u1o,q8n,lGr};
