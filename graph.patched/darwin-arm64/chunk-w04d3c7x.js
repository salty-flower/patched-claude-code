// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{F,q6r}from"./chunk-n93bke93.js";import{t}from"./chunk-qmm87fyw.js";import{we,lke}from"./chunk-jxdnn2j1.js";import{a}from"./chunk-wkhfcbsj.js";function OYn(e=kgn){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(Tgn(o)!=="pinned")return;return{backend:F()?e():void 0,configHome:we()}}function DYn(e){let o=F()?e.backend:void 0;if(o===void 0)return;if(!lke(e.configHome)){t(`CLAUDE_CONFIG_DIR now names ${we()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,{level:"warn"});return}return o}function Tgn(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=q6r(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function kgn(){if(!F())return;return}export{OYn,DYn,Tgn,kgn};
