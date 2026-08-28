// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{tw,zf,yu,jl}from"./chunk-6ypvgjr3.js";import{ve}from"./chunk-fz00m7zs.js";import{On,gvt}from"./chunk-gxpna0zj.js";import{Tu}from"./chunk-cy5p0mbb.js";import{join as i}from"path";function YW(n){return/^[A-Za-z0-9_-]{1,128}$/.test(n)?n:tw(n)}async function Tot(n,t,e){return i(yu(await jl(n,Tu(e))),nRt(t))}async function wie(n,t,e){let r=await jl(n,Tu(e)),a=i(yu(r),nRt(t)),o=e===void 0?void 0:xQt(zf(r),t);return{path:a,v5:e===void 0||o===void 0?void 0:{backend:e,key:o}}}function xQt(n,t){let e=ve.dirSyncRecord(n,YW(t));return On(e)===void 0?e:void 0}function nRt(n){return`${YW(n)}${gvt}`}
export{YW,Tot,wie,xQt,nRt};
