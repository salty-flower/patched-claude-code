// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Oc}from"./chunk-cmkfpkth.js";import{H}from"./chunk-9p9ys44p.js";import{isAbsolute as o,sep as t}from"path";function n(r){let e=process.cwd();return e.endsWith(t)?e+r:e+t+r}function z_e(r){return(e)=>r.hostFiles.realPath(Oc.workspace(e===""||o(e)?e:n(e)),{native:!0})}function ku(r){return r===void 0?void 0:{hoverRestOn:H(),realPath:z_e(r)}}
export{z_e,ku};
