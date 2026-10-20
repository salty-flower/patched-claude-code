// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{b}from"./chunk-m3epja3j.js";import{d}from"./chunk-ekgz6skk.js";import{t}from"./chunk-n5v91jc3.js";import{_n,oi,wL,yc,mSt,TZe}from"./chunk-ww4tybgt.js";import{lT}from"./chunk-s91j0m1c.js";import{Wv}from"./chunk-qbc77d40.js";import{VE,bq,STo}from"./chunk-166ekv9c.js";import{id,UT}from"./chunk-rncrmfyt.js";async function g_e(n,i,r){let o=wL(n),{name:a,marketplace:e}=yc(o);if(e===_n&&VE().nameRegistration===void 0)await id(r);let l=bq(a,e,i),m=mSt(e);if(!m&&e!==oi&&!TZe(a,e))return l;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`)}return{...l,...m&&e!==void 0&&{marketplace_name_redacted:STo(e)},...!s&&{plugin_name_redacted:b(Wv)}}}async function c(n,i,r,o){if(TZe(i,r))return!0;if(r===oi)return lT(i)!==void 0;return await UT(n,o)!==null}
export{g_e};
