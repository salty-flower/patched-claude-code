// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{dn}from"./chunk-gymgq1qj.js";import{Et}from"./chunk-pjehsasc.js";import{ht}from"./chunk-8c4ttmk8.js";import{Ee}from"./chunk-n61dvy9z.js";import{Vi,gu,Kjo,hn,BI,S}from"./chunk-a5a37ds7.js";import{FH}from"./chunk-y936n3c6.js";var o="tengu_generic_flask";function FGe(){if(Ee()!=="firstParty"||ht()||FH()||!BI()||Vi().source!=="claude.ai"||!gu()||!Kjo())return null;let e=hn(),n=Et(e?.accountUuid),t=Et(e?.organizationUuid);return n===null||t===null?null:{key:`${n}/${t}`,accountUuid:n,organizationUuid:t}}function dAn(){return Vi().source==="claude.ai"&&!ht()&&!FH()&&!Kjo()&&dn().PRIVACY_CONSENTS_SCOPE_REGISTERED}function Fbe(){if(!S(o,!1))return"accountSettings";return FGe()===null?"claudeAi":"consentService"}
export{FGe,dAn,Fbe};
