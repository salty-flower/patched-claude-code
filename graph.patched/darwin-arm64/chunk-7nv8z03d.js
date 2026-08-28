// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{y1e}from"./chunk-n5p9w775.js";import{hgn}from"./chunk-zng31rpq.js";var r=(t)=>JSON.stringify(t);var o=new Set(["api.anthropic.com","api-staging.anthropic.com",...y1e.map((t)=>new URL(t).hostname)]);function BYn(t){let e=Ate();if(!t){if(e.status==="absent")return null;return e.status==="rejected"?{code:e.code,reason:e.reason}:{code:"view_mismatch",reason:"the eager argv scan sees a --sdk-url value commander did not bind"}}if(e.status==="rejected")return{code:e.code,reason:e.reason};if(e.status==="absent"||e.url!==t)return{code:"view_mismatch",reason:"the --sdk-url value commander bound disagrees with the eager argv scan"};return null}function mgn(t){let e;try{e=new URL(t)}catch{return{code:"unparseable",reason:`could not parse ${r(t)} as a URL`}}if(o.has(e.hostname)){if(e.protocol!=="wss:"&&e.protocol!=="https:")return{code:"bad_scheme",reason:`scheme ${r(e.protocol)} is not permitted for host ${r(e.hostname)}; only wss:// and https:// are accepted`};return null}return{code:"not_allowlisted",reason:`host ${r(e.hostname)} is not an approved Anthropic endpoint`}}function Ate(){let t=hgn("--sdk-url"),e=t.filter(Boolean).at(-1);if(!e)return{status:"absent"};if(new Set(t).size>1)return{status:"rejected",code:"conflicting",reason:"conflicting --sdk-url occurrences"};let n=mgn(e);if(n)return{status:"rejected",...n};return{status:"ok",url:e}}function kte(t){if(t.protocol==="wss:")t.protocol="https:";else if(t.protocol==="ws:")t.protocol="http:";return t}
export{BYn,mgn,Ate,kte};
