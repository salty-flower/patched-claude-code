// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{nTo}from"./chunk-7k2jz7wf.js";import{U}from"./chunk-ekgz6skk.js";import{ir}from"./chunk-7p6jp6kj.js";import{l}from"./chunk-jkcb7qdd.js";import{bZn,EK}from"./chunk-zjcj7ams.js";import{Mpt}from"./chunk-sppsqg5p.js";function eRn(e){let o=e.trim();return o!==""&&!o.startsWith("/")}var M7r=()=>!1;var H7r=()=>EK()&&!bZn()&&ir("tengu_quiet_ember",M7r());var tRn={name:"cc-plugin-responsive-mode",description:"Responsive mode: Claude replies to you in a sentence before thinking or using tools, on every prompt",isAvailable:H7r,defaultEnabled:!1};function gcr({text:e,pastedContents:o,isSentByPerson:t,wait:r}){if(!t||r||!eRn(e))return!1;try{return nTo(e,o).length===0&&Mpt(tRn.name)}catch(i){return l(U(i)),!1}}
export{eRn,M7r,H7r,tRn,gcr};
