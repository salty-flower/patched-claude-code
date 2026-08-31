// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{CN}from"./chunk-rvayngvj.js";import{xrt,Lrt}from"./chunk-6s7e4rpk.js";import{AF}from"./chunk-g9y9ch08.js";var a={sessionMemories:void 0},i=Object.keys(a);function r(e){return i.every((t)=>e[t]===a[t])?e:{...e,...a}}function s(e){return r(xrt(e))}function R6t(e){return{...r(e),panelFileView:null,frameNavPath:null,frameExpanded:!1,idleTeammatesExpanded:!1,footerLinks:e.footerLinks.some((t)=>t.key===void 0)?e.footerLinks.filter((t)=>t.key!==void 0):e.footerLinks}}function Xet(e,t,n){Lrt(e),n.dismissKind(CN.kind);let o=e().activeGoal;if(o!==void 0)AF(o,"resume_swap");t(s)}
export{R6t,Xet};
