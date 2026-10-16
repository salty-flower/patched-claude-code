// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{fd,$me,za,k}from"./chunk-1901fdh6.js";import{J1,Un}from"./chunk-xzypj06m.js";import{gr}from"./chunk-6dw7xt0q.js";import{a}from"./chunk-k4g6y57j.js";import{Tt}from"./chunk-e666gr8q.js";import{MK,wfn,rO}from"./chunk-jn6attna.js";import{Pe}from"./chunk-nvk7bh0e.js";import{on}from"./chunk-a808z68x.js";import{C9e}from"./chunk-5x6a0yn5.js";var l="tengu_copper_gazette";var x=!1;var Xor=()=>k(l,x)===!0;var q5r=(o)=>o.find((u)=>u!==!1)||void 0;function E(){let{source:o}=za();return o==="CLAUDE_CODE_OAUTH_TOKEN"||o==="CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"}var _=()=>za().source==="CCR_OAUTH_TOKEN_FILE"&&J1()&&fd();var g=()=>wfn()&&!rO()&&fd()&&(E()||_());var Kvn=()=>$me()&&!Un()&&(MK()&&za().source==="CLAUDE_CODE_OAUTH_TOKEN"||g());var O=()=>C9e()||Kvn();var _Vt="allow_plugin_publish";var BJo=()=>a.CLAUDE_CODE_REMOTE?"cloud-session":"signed-out";var Jor=()=>q5r([Pe()!=="firstParty"&&"third-party",gr()&&"bare",Tt()&&"traffic-off",!on(_Vt)&&"policy",!O()&&BJo()]);export{Xor,q5r,Kvn,_Vt,BJo,Jor};
