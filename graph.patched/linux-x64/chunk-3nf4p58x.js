// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{t}from"./chunk-n5v91jc3.js";import{Dp,Bre}from"./chunk-jbgr14ef.js";import{a}from"./chunk-cd1a8ced.js";import{z,R7s}from"./chunk-rdj492d5.js";function x0o(e=pNr){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(uNr(o)!=="pinned")return;return{backend:z()?e():void 0,configHome:Dp()}}function P0o(e){let o=z()?e.backend:void 0;if(o===void 0)return;if(!Bre(e.configHome)){let r=Dp();t(r!==null&&e.configHome!==null?`CLAUDE_CONFIG_DIR now names ${r}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`:`The v5 storage backend is not used: the config home was ${e.configHome??"absent"} when it was built at start-up and is ${r??"absent"} now`,{level:"warn"});return}return o}function uNr(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=R7s(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function pNr(){if(!z())return;return}export{x0o,P0o,uNr,pNr};
