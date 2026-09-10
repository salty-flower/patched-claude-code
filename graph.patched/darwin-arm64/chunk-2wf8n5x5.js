// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{ee}from"./chunk-9vax8jy6.js";import{Wk,Yw,JP,vu,rn,CTn,A0,yp,QP,xC,ZP}from"./chunk-aertbmaz.js";import{Hh,cy,XZe,tE,ue}from"./chunk-79hnjxh7.js";import{Dne,Gqn}from"./chunk-w84h91p7.js";import{tP,m5,QA,Qdn,Zdn}from"./chunk-t5c4hh2r.js";function jdn(){return ee().frozenMultiFile??Wk()}function bj(t){return xC()&&tE(t)}function X7(t,e,o){if(Bde(t,e.slug))return!0;let n=Qdn&&ue(t).mode==="plan";if(vu()&&!n)return o||QP(rn(e.slug))&&Zdn(e)===!1||JP("foreign_read",e.slug);return XZe(t,e.slug,!o&&ZP(e))}function Bde(t,e){let o=rn(e);return ue(t).mode!=="plan"&&QP(o)&&o?.lastProbeIssuedAt!==void 0&&!A0(o.lastProbeIssuedAt)&&Gqn(e)}function DEe(t,e){let o=QA("read",t,e);return Bde(e,t.slug)?{ask:!1,foreignRead:!0,attested:!0}:Yw(o)}function jde(t,e){let o=CTn(e);return o!==void 0&&yp(e)&&!tP(e)&&m5(e)&&ue(t).mode!=="plan"&&Dne(o)==="first_party_type"}function Wdn(t,e){if(cy(t)||bj(t))return()=>"none";if(!Hh(t))return()=>"save";let o=ue(t),n=o.mode==="auto",s=ZP(e),r=o.shouldAvoidPermissionPrompts===!0;return(i)=>n&&!(s&&!i)?"save":r?"none":"ask"}
export{jdn,bj,X7,Bde,DEe,jde,Wdn};
