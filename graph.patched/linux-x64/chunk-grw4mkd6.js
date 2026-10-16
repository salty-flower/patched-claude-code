// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{pd,Ome,Ga,k}from"./chunk-k16gymf7.js";import{WB,Un}from"./chunk-eqmywwjn.js";import{br}from"./chunk-c61xdsy8.js";import{a}from"./chunk-xwn0mfnc.js";import{Ct}from"./chunk-9pt2nr7j.js";import{A4,afn,eO}from"./chunk-en4g449d.js";import{xe}from"./chunk-kmgwwaz2.js";import{on}from"./chunk-we926ymf.js";import{y3e}from"./chunk-avky75vv.js";var l="tengu_copper_gazette";var x=!1;var Hor=()=>k(l,x)===!0;var P5r=(o)=>o.find((u)=>u!==!1)||void 0;function E(){let{source:o}=Ga();return o==="CLAUDE_CODE_OAUTH_TOKEN"||o==="CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"}var _=()=>Ga().source==="CCR_OAUTH_TOKEN_FILE"&&WB()&&pd();var g=()=>afn()&&!eO()&&pd()&&(E()||_());var OEn=()=>Ome()&&!Un()&&(A4()&&Ga().source==="CLAUDE_CODE_OAUTH_TOKEN"||g());var O=()=>y3e()||OEn();var iKt="allow_plugin_publish";var uQo=()=>a.CLAUDE_CODE_REMOTE?"cloud-session":"signed-out";var Dor=()=>P5r([xe()!=="firstParty"&&"third-party",br()&&"bare",Ct()&&"traffic-off",!on(iKt)&&"policy",!O()&&uQo()]);export{Hor,P5r,OEn,iKt,uQo,Dor};
