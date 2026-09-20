// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{In}from"./chunk-679ytzs5.js";import{x}from"./chunk-cnzbk8gg.js";import{ln}from"./chunk-p9tbyvzw.js";import{F}from"./chunk-qztrb7e5.js";import{fd,Ke}from"./chunk-847hpqqs.js";import{yr}from"./chunk-adxfsceb.js";import{mkdir as o}from"fs/promises";import{join as a}from"path";async function iEt(e,r){if(F()&&r!==void 0&&In(e)){await i(r,{namespace:"job",jobId:e});return}await o(yr(e),{recursive:!0})}async function rye(e,r){if(F()&&r!==void 0&&In(e)){await i(r,d(e));return}await o(a(yr(e),"tmp"),{recursive:!0})}function d(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function i(e,r){let t=await e.ensureScope(r);if(!t.ok){let n=fd(t.error);throw Object.assign(new x(`job folder not made (${Ke(t.error)})`,"job folder not made"),n!==void 0?{code:n}:{})}}var c=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function IM(e){if(e===void 0)return;return ln(c.has(e)?e:"other")}var s=new Set(["cold","spare","adopted"]);function l7e(e){return typeof e==="string"&&s.has(e)?e:void 0}
export{iEt,rye,IM,l7e};
