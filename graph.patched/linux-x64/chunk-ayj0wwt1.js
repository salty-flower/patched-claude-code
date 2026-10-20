// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{_d,Kge,na,k}from"./chunk-7p6jp6kj.js";import{x1,On}from"./chunk-dxktn51d.js";import{Sr}from"./chunk-jbgr14ef.js";import{a}from"./chunk-cd1a8ced.js";import{Tt}from"./chunk-jkcb7qdd.js";import{w1,Ryn,vO}from"./chunk-zjcj7ams.js";import{Pe}from"./chunk-pr2cfg7g.js";import{rn}from"./chunk-6qx5mjec.js";import{v9e}from"./chunk-h4za065g.js";var l="tengu_copper_gazette";var x=!1;var rcr=()=>k(l,x)===!0;var E7r=(o)=>o.find((u)=>u!==!1)||void 0;function E(){let{source:o}=na();return o==="CLAUDE_CODE_OAUTH_TOKEN"||o==="CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"}var _=()=>na().source==="CCR_OAUTH_TOKEN_FILE"&&x1()&&_d();var g=()=>Ryn()&&!vO()&&_d()&&(E()||_());var UCn=()=>Kge()&&!On()&&(w1()&&na().source==="CLAUDE_CODE_OAUTH_TOKEN"||g());var O=()=>v9e()||UCn();var HYt="allow_plugin_publish";var Rss=()=>a.CLAUDE_CODE_REMOTE?"cloud-session":"signed-out";var ocr=()=>E7r([Pe()!=="firstParty"&&"third-party",Sr()&&"bare",Tt()&&"traffic-off",!rn(HYt)&&"policy",!O()&&Rss()]);export{rcr,E7r,UCn,HYt,Rss,ocr};
