// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{S}from"./chunk-ny2cqbmq.js";import{d}from"./chunk-nre716m4.js";import{t}from"./chunk-tdxkq523.js";import{_n,si,CD,yc,Ebt,OZe}from"./chunk-gzssw8ss.js";import{cC}from"./chunk-44ndjnhv.js";import{GE}from"./chunk-h2kerrdd.js";import{qv,RK,qCo}from"./chunk-z3na6jb1.js";import{id,WC}from"./chunk-na9nw575.js";async function w_e(n,i,r){let o=CD(n),{name:a,marketplace:e}=yc(o);if(e===_n&&qv().nameRegistration===void 0)await id(r);let l=RK(a,e,i),m=Ebt(e);if(!m&&e!==si&&!OZe(a,e))return l;let s=!1;try{s=await c(o,a,e,r)}catch(u){t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`)}return{...l,...m&&e!==void 0&&{marketplace_name_redacted:qCo(e)},...!s&&{plugin_name_redacted:S(GE)}}}async function c(n,i,r,o){if(OZe(i,r))return!0;if(r===si)return cC(i)!==void 0;return await WC(n,o)!==null}
export{w_e};
