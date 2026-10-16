// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{S}from"./chunk-dnq93t1z.js";import{d}from"./chunk-wkh5syvr.js";import{t}from"./chunk-bnfhb7sj.js";import{yn,_i,yM,dc,zmt,cXe}from"./chunk-jmghkf3s.js";import{Fk}from"./chunk-ynz70n3e.js";import{RE}from"./chunk-zyem42rr.js";import{Rv,OV,xmo}from"./chunk-t1evy9pr.js";import{td,EC}from"./chunk-996thspe.js";async function lye(n,i,r){let o=yM(n),{name:a,marketplace:e}=dc(o);if(e===yn&&Rv().nameRegistration===void 0)await td(r);let l=OV(a,e,i),m=zmt(e);if(!m&&e!==_i&&!cXe(a,e))return l;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`)}return{...l,...m&&e!==void 0&&{marketplace_name_redacted:xmo(e)},...!s&&{plugin_name_redacted:S(RE)}}}async function c(n,i,r,o){if(cXe(i,r))return!0;if(r===_i)return Fk(i)!==void 0;return await EC(n,o)!==null}
export{lye};
