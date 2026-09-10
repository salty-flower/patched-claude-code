// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{M,Rhr}from"./chunk-wmtek349.js";import{t}from"./chunk-w930ag8r.js";import{be,dSe}from"./chunk-3kadfzjs.js";import{a}from"./chunk-qymratxs.js";function YMn(e=HQt){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(xQt(o)!=="pinned")return;return{backend:M()?e():void 0,configHome:be()}}function XMn(e){let o=M()?e.backend:void 0;if(o===void 0)return;if(!dSe(e.configHome)){t(`CLAUDE_CONFIG_DIR now names ${be()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,{level:"warn"});return}return o}function xQt(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=Rhr(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function HQt(){if(!M())return;return}export{YMn,XMn,xQt,HQt};
