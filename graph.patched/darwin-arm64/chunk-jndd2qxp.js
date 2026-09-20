// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Hn}from"./chunk-aj022wxj.js";import{x}from"./chunk-qq9jq5dz.js";import{ln}from"./chunk-k6smmjsm.js";import{F}from"./chunk-n93bke93.js";import{fd,Ye}from"./chunk-qmm87fyw.js";import{yr}from"./chunk-fpdh0w7q.js";import{mkdir as o}from"fs/promises";import{join as a}from"path";async function jvt(e,r){if(F()&&r!==void 0&&Hn(e)){await i(r,{namespace:"job",jobId:e});return}await o(yr(e),{recursive:!0})}async function gye(e,r){if(F()&&r!==void 0&&Hn(e)){await i(r,d(e));return}await o(a(yr(e),"tmp"),{recursive:!0})}function d(e){return{namespace:"job",jobId:e,relPath:["tmp"]}}async function i(e,r){let t=await e.ensureScope(r);if(!t.ok){let n=fd(t.error);throw Object.assign(new x(`job folder not made (${Ye(t.error)})`,"job folder not made"),n!==void 0?{code:n}:{})}}var c=new Set(["starting","running","resuming","adopted","crashed","working","blocked","done","stopped","failed","busy","shell","idle","waiting"]);function WD(e){if(e===void 0)return;return ln(c.has(e)?e:"other")}var s=new Set(["cold","spare","adopted"]);function PJe(e){return typeof e==="string"&&s.has(e)?e:void 0}
export{jvt,gye,WD,PJe};
