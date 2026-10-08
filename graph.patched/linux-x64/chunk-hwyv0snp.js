// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{b}from"./chunk-bkr1h20c.js";import{l}from"./chunk-5g6j8x8p.js";import{t}from"./chunk-p46wpkfz.js";import{gn,Ii,NO,xc,Fot,$Ve}from"./chunk-wn3mk0qg.js";import{nE}from"./chunk-p7b21nkd.js";import{WS}from"./chunk-vm3b4zey.js";import{Nw,cG,vJr}from"./chunk-024q56rr.js";import{vl,NE}from"./chunk-g263vvvn.js";async function Yde(n,i,r){let o=NO(n),{name:a,marketplace:e}=xc(o);if(e===gn&&Nw().nameRegistration===void 0)await vl(r);let m=cG(a,e,i),d=Fot(e);if(!d&&e!==Ii&&!$Ve(a,e))return m;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${l(u)}); logging its name as third-party`)}return{...m,...d&&e!==void 0&&{marketplace_name_redacted:vJr(e)},...!s&&{plugin_name_redacted:b(WS)}}}async function c(n,i,r,o){if($Ve(i,r))return!0;if(r===Ii)return nE(i)!==void 0;return await NE(n,o)!==null}
export{Yde};
