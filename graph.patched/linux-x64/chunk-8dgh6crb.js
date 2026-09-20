// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{F,czr}from"./chunk-qztrb7e5.js";import{t}from"./chunk-847hpqqs.js";import{we,nCe}from"./chunk-k4wnp212.js";import{a}from"./chunk-q2vrcqny.js";function sYn(e=ign){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(sgn(o)!=="pinned")return;return{backend:F()?e():void 0,configHome:we()}}function iYn(e){let o=F()?e.backend:void 0;if(o===void 0)return;if(!nCe(e.configHome)){t(`CLAUDE_CONFIG_DIR now names ${we()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,{level:"warn"});return}return o}function sgn(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=czr(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function ign(){if(!F())return;return}export{sYn,iYn,sgn,ign};
