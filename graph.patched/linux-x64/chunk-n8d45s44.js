// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{b}from"./chunk-fr28a3he.js";import{d}from"./chunk-w7m8nded.js";import{t}from"./chunk-cwsn6mdf.js";import{yn,_i,mD,dc,Nmt,rXe}from"./chunk-hc3mrz77.js";import{Lk}from"./chunk-3x4atckz.js";import{Cv}from"./chunk-9asma219.js";import{CE,EK,emo}from"./chunk-nazzqhcs.js";import{ed,bT}from"./chunk-38nf1dnm.js";async function nye(n,i,r){let o=mD(n),{name:a,marketplace:e}=dc(o);if(e===yn&&CE().nameRegistration===void 0)await ed(r);let l=EK(a,e,i),m=Nmt(e);if(!m&&e!==_i&&!rXe(a,e))return l;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`)}return{...l,...m&&e!==void 0&&{marketplace_name_redacted:emo(e)},...!s&&{plugin_name_redacted:b(Cv)}}}async function c(n,i,r,o){if(rXe(i,r))return!0;if(r===_i)return Lk(i)!==void 0;return await bT(n,o)!==null}
export{nye};
