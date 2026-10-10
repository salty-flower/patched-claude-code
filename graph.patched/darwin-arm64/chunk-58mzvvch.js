// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{S}from"./chunk-76anb6yt.js";import{l}from"./chunk-886tf6ja.js";import{t}from"./chunk-gyf58rwf.js";import{mn,Pi,tH,Gc,Tlt,t4e}from"./chunk-nrk8z90j.js";import{Fv}from"./chunk-m4qpskd4.js";import{yw}from"./chunk-03m733d4.js";import{hE,qz,Fro}from"./chunk-1n9rk9tp.js";import{Ll,Sk}from"./chunk-sfn1dbxq.js";async function Efe(n,i,r){let o=tH(n),{name:a,marketplace:e}=Gc(o);if(e===mn&&hE().nameRegistration===void 0)await Ll(r);let m=qz(a,e,i),d=Tlt(e);if(!d&&e!==Pi&&!t4e(a,e))return m;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${l(u)}); logging its name as third-party`)}return{...m,...d&&e!==void 0&&{marketplace_name_redacted:Fro(e)},...!s&&{plugin_name_redacted:S(yw)}}}async function c(n,i,r,o){if(t4e(i,r))return!0;if(r===Pi)return Fv(i)!==void 0;return await Sk(n,o)!==null}
export{Efe};
