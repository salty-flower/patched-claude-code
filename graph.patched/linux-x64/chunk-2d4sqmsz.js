// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{su}from"./chunk-d0cr5d2v.js";import{D}from"./chunk-jw0x5qwf.js";import{isAbsolute as o,sep as t}from"path";function n(r){let e=process.cwd();return e.endsWith(t)?e+r:e+t+r}function DHe(r){return(e)=>r.hostFiles.realPath(su.workspace(e===""||o(e)?e:n(e)),{native:!0})}function $u(r){return r===void 0?void 0:{hoverRestOn:D(),realPath:DHe(r)}}
export{DHe,$u};
