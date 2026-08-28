// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{g6}from"./chunk-gx3vh0fe.js";import{vtt,wtt}from"./chunk-5t5b5579.js";import{oN}from"./chunk-2sx8ae03.js";var a={sessionMemories:void 0},i=Object.keys(a);function r(e){return i.every((t)=>e[t]===a[t])?e:{...e,...a}}function s(e){return r(vtt(e))}function Ekn(e){return{...r(e),panelFileView:null,frameNavPath:null,frameExpanded:!1,idleTeammatesExpanded:!1,footerLinks:e.footerLinks.some((t)=>t.key===void 0)?e.footerLinks.filter((t)=>t.key!==void 0):e.footerLinks}}function kJe(e,t,n){wtt(e),n.dismissKind(g6.kind);let o=e().activeGoal;if(o!==void 0)oN(o,"resume_swap");t(s)}
export{Ekn,kJe};
