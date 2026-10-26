// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{fd,Y_e,ua,k}from"./chunk-27xjmczp.js";import{AW,Pn}from"./chunk-ersar6wn.js";import{Sr}from"./chunk-21mz1tvc.js";import{i}from"./chunk-9a41hw1t.js";import{St}from"./chunk-thm21ca7.js";import{yW,Zkn,FM}from"./chunk-we9anmwe.js";import{Te}from"./chunk-psq3t7gj.js";import{on}from"./chunk-nmaeg6kv.js";import{GQe}from"./chunk-61rf7zjj.js";var l="tengu_copper_gazette";var x=!1;var tbr=()=>k(l,x)===!0;var uco=(o)=>o.find((u)=>u!==!1)||void 0;function E(){let{source:o}=ua();return o==="CLAUDE_CODE_OAUTH_TOKEN"||o==="CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"}var _=()=>ua().source==="CCR_OAUTH_TOKEN_FILE"&&AW()&&fd();var g=()=>Zkn()&&!FM()&&fd()&&(E()||_());var GHn=()=>Y_e()&&!Pn()&&(yW()&&ua().source==="CLAUDE_CODE_OAUTH_TOKEN"||g());var O=()=>GQe()||GHn();var I7t="allow_plugin_publish";var xbs=()=>i.CLAUDE_CODE_REMOTE?"cloud-session":"signed-out";var nbr=()=>uco([Te()!=="firstParty"&&"third-party",Sr()&&"bare",St()&&"traffic-off",!on(I7t)&&"policy",!O()&&xbs()]);export{tbr,uco,GHn,I7t,xbs,nbr};
