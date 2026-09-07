// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{L,alr}from"./chunk-7wmynp0n.js";import{t}from"./chunk-5q90j22t.js";import{Se,Ehe}from"./chunk-4rr1ghkj.js";import{a}from"./chunk-dq2s4wjn.js";function kxn(e=VKt){let o=a.CLAUDE_CODE_HOVER_REST;if(o===void 0)return;if(zKt(o)!=="pinned")return;return{backend:L()?e():void 0,configHome:Se()}}function xxn(e){let o=L()?e.backend:void 0;if(o===void 0)return;if(!Ehe(e.configHome)){t(`CLAUDE_CONFIG_DIR now names ${Se()}, not ${e.configHome} where the v5 storage backend was built at start-up; not handing it on, so this process keeps today's direct file access`,{level:"warn"});return}return o}function zKt(e){if(typeof e!=="boolean")t(`tengu_hover_rest served a ${typeof e}, not a boolean; treating it as off`,{level:"warn"});let o=alr(e);if(o==="conflict")t(`tengu_hover_rest read ${String(e)} at a second pin in this process; keeping the first decision`,{level:"warn"});return o}function VKt(){if(!L())return;return}export{kxn,xxn,zKt,VKt};
