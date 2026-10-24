// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{S}from"./chunk-ydpbzmt4.js";import{d}from"./chunk-36ysyspx.js";import{t}from"./chunk-d7b0m8qy.js";import{bn,Ns,Zx,mc,PCt,wot}from"./chunk-qnvapa9t.js";import{Vk}from"./chunk-vy1w5pmp.js";import{VE}from"./chunk-fc0kk2ed.js";import{Mv,R3,vDo}from"./chunk-9xx8r7sg.js";import{Rd,GT}from"./chunk-31gxg38t.js";async function _we(n,i,r){let o=Zx(n),{name:a,marketplace:e}=mc(o);if(e===bn&&Mv().nameRegistration===void 0)await Rd(r);let l=R3(a,e,i),m=PCt(e);if(!m&&e!==Ns&&!wot(a,e))return l;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`)}return{...l,...m&&e!==void 0&&{marketplace_name_redacted:vDo(e)},...!s&&{plugin_name_redacted:S(VE)}}}async function c(n,i,r,o){if(wot(i,r))return!0;if(r===Ns)return Vk(i)!==void 0;return await GT(n,o)!==null}
export{_we};
