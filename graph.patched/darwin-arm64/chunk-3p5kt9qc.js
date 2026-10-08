// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{S}from"./chunk-eak61y8v.js";import{l}from"./chunk-tnh13g2g.js";import{t}from"./chunk-b5feae42.js";import{gn,Oi,UO,xc,qot,zVe}from"./chunk-zza0b6kj.js";import{ov}from"./chunk-0c34z2xq.js";import{Gb}from"./chunk-4e5qyyvq.js";import{Fw,EG,sJr}from"./chunk-jr3n4w5s.js";import{vl,Uv}from"./chunk-nwqfvmza.js";async function tue(n,i,r){let o=UO(n),{name:a,marketplace:e}=xc(o);if(e===gn&&Fw().nameRegistration===void 0)await vl(r);let m=EG(a,e,i),d=qot(e);if(!d&&e!==Oi&&!zVe(a,e))return m;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${l(u)}); logging its name as third-party`)}return{...m,...d&&e!==void 0&&{marketplace_name_redacted:sJr(e)},...!s&&{plugin_name_redacted:S(Gb)}}}async function c(n,i,r,o){if(zVe(i,r))return!0;if(r===Oi)return ov(i)!==void 0;return await Uv(n,o)!==null}
export{tue};
