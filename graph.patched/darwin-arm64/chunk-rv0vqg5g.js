// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{G,PKs}from"./chunk-278j353c.js";import{t}from"./chunk-bnfhb7sj.js";import{bg,$ne}from"./chunk-6dw7xt0q.js";import{a}from"./chunk-k4g6y57j.js";function Uxo(e=wOr){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(bOr(o)!=="pinned")return;return{backend:G()?e():void 0,configHome:bg()}}function Bxo(e){let o=G()?e.backend:void 0;if(o===void 0)return;if(!$ne(e.configHome)){let r=bg();t(r!==null&&e.configHome!==null?`CLAUDE_CONFIG_DIR now names ${r}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`:`The v5 storage backend is not used: the config home was ${e.configHome??"absent"} when it was built at start-up and is ${r??"absent"} now`,{level:"warn"});return}return o}function bOr(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=PKs(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function wOr(){if(!G())return;return}export{Uxo,Bxo,bOr,wOr};
