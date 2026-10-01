// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{L,HGo}from"./chunk-nynxm73s.js";import{t}from"./chunk-3wz0srxw.js";import{we,Gue}from"./chunk-h1eby6n2.js";import{a}from"./chunk-1fpwxv0g.js";function C$r(e=C3n){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(v3n(o)!=="pinned")return;return{backend:L()?e():void 0,configHome:we()}}function A$r(e){let o=L()?e.backend:void 0;if(o===void 0)return;if(!Gue(e.configHome)){t(`CLAUDE_CONFIG_DIR now names ${we()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,{level:"warn"});return}return o}function v3n(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=HGo(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function C3n(){if(!L())return;return}export{C$r,A$r,v3n,C3n};
